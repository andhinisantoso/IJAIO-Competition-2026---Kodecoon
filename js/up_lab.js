// Global Progress Tracking
const completed = {};
const totalLevels = 15;

function updateProgress() {
  const count = Object.keys(completed).length;
  document.getElementById('overallScore').innerText = `${count} / ${totalLevels} Solved`;
  const pct = Math.round((count / totalLevels) * 100);
  document.getElementById('overallFill').style.width = `${pct}%`;
}

function markDone(pillar, idx) {
  const key = `${pillar}-${idx}`;
  if (!completed[key]) {
    completed[key] = true;
    const tab = document.querySelector(`.level-tabs[data-pillar="${pillar}"] .level-tab[data-level="${idx}"]`);
    if (tab) tab.classList.add('done');
    updateProgress();
  }
}

function resetAll() {
  for (let k in completed) delete completed[k];
  document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('done'));
  document.querySelectorAll('.opt').forEach(o => { o.disabled = false; o.classList.remove('correct','incorrect'); });
  document.querySelectorAll('.feedback').forEach(f => { f.className = 'feedback'; f.innerHTML = ''; });
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Tab Wiring
function initTabs(pillar) {
  const nav = document.querySelector(`.level-tabs[data-pillar="${pillar}"]`);
  for (let i = 0; i < 3; i++) {
    const b = document.createElement('button');
    b.className = 'level-tab' + (i === 0 ? ' active' : '');
    b.dataset.level = i;
    b.innerHTML = `<span class="dot"></span>Level ${i + 1}`;
    b.addEventListener('click', () => showLevel(pillar, i));
    nav.appendChild(b);
  }
}

function showLevel(pillar, idx) {
  document.querySelectorAll(`.level-tabs[data-pillar="${pillar}"] .level-tab`).forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
  document.querySelectorAll(`.level-panel[data-pillar="${pillar}"]`).forEach(p => {
    p.classList.toggle('active', Number(p.dataset.level) === idx);
  });
}

['p1','p2','p3','p4','p5'].forEach(initTabs);

function showFeedback(el, correct, html) {
  el.classList.remove('good', 'bad');
  el.classList.add('show', correct ? 'good' : 'bad');
  el.innerHTML = `<span class="verdict">${correct ? '✓ Correct!' : '✕ Try Again'}</span>${html}`;
}

// ==================== P1 LOGIC ====================
// P1 Level 1: Sub-word tokens
(function(){
  const opts = document.querySelectorAll('#p1l1-opts .opt');
  const fb = document.getElementById('p1l1-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) {
        opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      }
      showFeedback(fb, isCorrect, "Sub-word tokenizers split compound or longer words into statistical chunks like [\"un\", \"break\", \"able\"], preserving meaning without requiring a token for every rare combination.");
      if (isCorrect) markDone('p1', 0);
    });
  });
})();

// P1 Level 2: Feature Coordinates
(function(){
  const opts = document.querySelectorAll('#p1l2-opts .opt');
  const fb = document.getElementById('p1l2-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) {
        opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      }
      showFeedback(fb, isCorrect, "Grape [5, 8] and Blueberry [2, 8] differ by only 3 grams in weight and have the exact same sweetness score. In mathematical coordinate space, they are nearest neighbors!");
      if (isCorrect) markDone('p1', 1);
    });
  });
})();

// P1 Level 3: Bucket Classification (Dataset Labelling)
(function(){
  const items = [
    { t: "Sparrow", bucket: "bird" },
    { t: "Eagle", bucket: "bird" },
    { t: "Penguin", bucket: "bird" },
    { t: "Goldfish", bucket: "not-bird" },
    { t: "Bat (Mammal)", bucket: "not-bird" },
    { t: "Dolphin", bucket: "not-bird" }
  ];
  const source = document.getElementById('p1l3-source');
  items.sort(() => Math.random() - 0.5).forEach((it, idx) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.draggable = true;
    chip.dataset.idx = idx;
    chip.textContent = it.t;
    source.appendChild(chip);
  });

  let dragChip = null;
  document.querySelectorAll('#p1 .chip').forEach(c => {
    c.addEventListener('dragstart', () => { dragChip = c; c.classList.add('dragging'); });
    c.addEventListener('dragend', () => { if (dragChip) dragChip.classList.remove('dragging'); dragChip = null; });
  });

  document.querySelectorAll('#p1 .bucket, #p1l3-source').forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('over'));
    zone.addEventListener('drop', e => {
      e.preventDefault(); zone.classList.remove('over');
      if (!dragChip) return;
      const dropTarget = zone.classList.contains('bucket') ? zone.querySelector('.bucket-drop') : zone;
      dropTarget.appendChild(dragChip);
    });
  });

  document.getElementById('p1l3-check').addEventListener('click', () => {
    let allGood = true;
    document.querySelectorAll('#p1 .bucket').forEach(b => {
      const want = b.dataset.bucket;
      b.querySelectorAll('.chip').forEach(c => {
        const item = items[c.dataset.idx];
        const match = item.bucket === want;
        c.classList.toggle('correct', match);
        c.classList.toggle('incorrect', !match);
        if (!match) allGood = false;
      });
    });
    if (source.querySelectorAll('.chip').length > 0) allGood = false;

    const fb = document.getElementById('p1l3-fb');
    showFeedback(fb, allGood, allGood ? 
      "Outstanding! Notice that a Bat flies and a Dolphin breathes air, but neither is a bird. Clear labels help the model avoid confounding correlation traps!" :
      "Some animals are misplaced or still unlabelled. Remember: Penguins are flightless birds, while Bats and Dolphins are mammals!");
    if (allGood) markDone('p1', 2);
  });
})();

// ==================== P2 LOGIC ====================
// P2 Level 1: Rules vs Data
(function(){
  const items = [
    { t: "Adding two numbers in a pocket calculator", bucket: "rule" },
    { t: "Converting Celsius to Fahrenheit (C × 9/5 + 32)", bucket: "rule" },
    { t: "Predicting if an email is spam from 10,000 samples", bucket: "ml" },
    { t: "Recognising dogs and cats from photos", bucket: "ml" }
  ];
  const source = document.getElementById('p2l1-source');
  items.sort(() => Math.random() - 0.5).forEach((it, idx) => {
    const chip = document.createElement('div');
    chip.className = 'chip'; chip.draggable = true; chip.dataset.idx = idx; chip.textContent = it.t;
    source.appendChild(chip);
  });

  let dragChip = null;
  document.querySelectorAll('#p2 .chip').forEach(c => {
    c.addEventListener('dragstart', () => { dragChip = c; c.classList.add('dragging'); });
    c.addEventListener('dragend', () => { if (dragChip) dragChip.classList.remove('dragging'); dragChip = null; });
  });

  document.querySelectorAll('#p2 .bucket, #p2l1-source').forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('over'));
    zone.addEventListener('drop', e => {
      e.preventDefault(); zone.classList.remove('over');
      if (!dragChip) return;
      const dropTarget = zone.classList.contains('bucket') ? zone.querySelector('.bucket-drop') : zone;
      dropTarget.appendChild(dragChip);
    });
  });

  document.getElementById('p2l1-check').addEventListener('click', () => {
    let ok = true;
    document.querySelectorAll('#p2 .bucket').forEach(b => {
      const target = b.dataset.bucket;
      b.querySelectorAll('.chip').forEach(c => {
        const it = items[c.dataset.idx];
        const match = it.bucket === target;
        c.classList.toggle('correct', match);
        c.classList.toggle('incorrect', !match);
        if (!match) ok = false;
      });
    });
    if (source.querySelectorAll('.chip').length > 0) ok = false;
    const fb = document.getElementById('p2l1-fb');
    showFeedback(fb, ok, ok ? 
      "Spot on! Calculators follow fixed human rules, while image classifiers and spam filters learn by generalizing patterns from examples." :
      "Check your placements. A fixed formula is a human rule; finding patterns in messy photos or emails is machine learning.");
    if (ok) markDone('p2', 0);
  });
})();

// P2 Level 2: Neuron Math
(function(){
  let chosenFires = null;
  const opts = document.querySelectorAll('#p2l2-opts .opt');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.classList.remove('correct','incorrect','selected'));
      o.classList.add('selected');
      chosenFires = o.dataset.val;
    });
  });

  document.getElementById('p2l2-check').addEventListener('click', () => {
    const sumIn = document.getElementById('p2l2-sum');
    const userSum = parseFloat(sumIn.value);
    const fb = document.getElementById('p2l2-fb');
    // Sum = (3 * 2) + (2 * 1) = 6 + 2 = 8.
    // Threshold is 7. Since 8 >= 7, it fires (yes).
    const sumCorrect = userSum === 8;
    const firesCorrect = chosenFires === 'yes';
    sumIn.classList.toggle('correct', sumCorrect);
    sumIn.classList.toggle('incorrect', !sumCorrect);

    if (sumCorrect && firesCorrect) {
      showFeedback(fb, true, "Calculated correctly! Weighted sum = (3 × 2) + (2 × 1) = 8. Since 8 is greater than the threshold of 7, the neuron fires its activation output!");
      markDone('p2', 1);
    } else {
      showFeedback(fb, false, "Not quite. (Rain: 3 × 2 = 6) + (Wind: 2 × 1 = 2) = <b>8</b>. Since 8 ≥ 7, the threshold is exceeded so the neuron <b>does fire</b>.");
    }
  });
})();

// P2 Level 3: Confounding Bias
(function(){
  const opts = document.querySelectorAll('#p2l3-opts .opt');
  const fb = document.getElementById('p2l3-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      showFeedback(fb, isCorrect, "This is a classic confounding correlation error! The AI learned that \"white plate background = strawberry\" instead of identifying seeds and leaf shapes. Data diversity matters!");
      if (isCorrect) markDone('p2', 2);
    });
  });
})();

// ==================== P3 LOGIC ====================
// P3 Level 1: Next-word Probability
(function(){
  const opts = document.querySelectorAll('#p3l1-opts .opt');
  const fb = document.getElementById('p3l1-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      showFeedback(fb, isCorrect, "Correct! Bread appeared 6 out of 10 times in training, giving it a 60% statistical probability of being selected as the next token.");
      if (isCorrect) markDone('p3', 0);
    });
  });
})();

// P3 Level 2: Temperature Slider
(function(){
  const slider = document.getElementById('p3-temp-slider');
  const display = document.getElementById('temp-display');
  const outBox = document.getElementById('p3-temp-output');
  const opts = document.querySelectorAll('#p3l2-opts .opt');
  const fb = document.getElementById('p3l2-fb');

  slider.addEventListener('input', () => {
    const val = parseFloat(slider.value);
    display.textContent = `${val.toFixed(1)} (${val <= 0.3 ? 'Low' : val <= 0.6 ? 'Medium' : 'High'})`;
    if (val <= 0.3) {
      outBox.innerHTML = `Output: "The cat sat on the mat. The cat sat on the mat." <span style="color:#5FBF8F;">(Deterministic &amp; predictable)</span>`;
    } else if (val <= 0.7) {
      outBox.innerHTML = `Output: "The cat curled up beside the warm fireplace and purred." <span style="color:#E8A23D;">(Balanced natural language)</span>`;
    } else {
      outBox.innerHTML = `Output: "The cat sprouted iridescent moth wings and leaped into a moonlit cloud of stardust!" <span style="color:#9C8FE0;">(Wild &amp; creative)</span>`;
    }
  });

  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      showFeedback(fb, isCorrect, "Higher temperature flattens probability differences, allowing lower-probability words (like 'iridescent' or 'stardust') to be selected, boosting creative storytelling!");
      if (isCorrect) markDone('p3', 1);
    });
  });
})();

// P3 Level 3: Prompt Anatomy
(function(){
  const items = [
    { t: "“You are an astronomer guiding Grade 5 students”", bucket: "role" },
    { t: "“Explain how solar eclipses work”", bucket: "task" },
    { t: "“Use under 40 words and one sports ball analogy”", bucket: "constraint" }
  ];
  const source = document.getElementById('p3l3-source');
  items.sort(() => Math.random() - 0.5).forEach((it, idx) => {
    const chip = document.createElement('div');
    chip.className = 'chip'; chip.draggable = true; chip.dataset.idx = idx; chip.textContent = it.t;
    source.appendChild(chip);
  });

  let dragChip = null;
  document.querySelectorAll('#p3 .chip').forEach(c => {
    c.addEventListener('dragstart', () => { dragChip = c; c.classList.add('dragging'); });
    c.addEventListener('dragend', () => { if (dragChip) dragChip.classList.remove('dragging'); dragChip = null; });
  });

  document.querySelectorAll('#p3 .bucket, #p3l3-source').forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('over'));
    zone.addEventListener('drop', e => {
      e.preventDefault(); zone.classList.remove('over');
      if (!dragChip) return;
      const dropTarget = zone.classList.contains('bucket') ? zone.querySelector('.bucket-drop') : zone;
      dropTarget.appendChild(dragChip);
    });
  });

  document.getElementById('p3l3-check').addEventListener('click', () => {
    let ok = true;
    document.querySelectorAll('#p3 .bucket').forEach(b => {
      const target = b.dataset.bucket;
      b.querySelectorAll('.chip').forEach(c => {
        const it = items[c.dataset.idx];
        const match = it.bucket === target;
        c.classList.toggle('correct', match);
        c.classList.toggle('incorrect', !match);
        if (!match) ok = false;
      });
    });
    if (source.querySelectorAll('.chip').length > 0) ok = false;
    const fb = document.getElementById('p3l3-fb');
    showFeedback(fb, ok, ok ? 
      "Masterful prompt architecture! Setting Role + Task + Constraint creates clear, structured instructions that guide generative models effectively." :
      "Check each part: Role specifies the persona, Task specifies the goal, and Constraint specifies limits like length or style.");
    if (ok) markDone('p3', 2);
  });
})();

// ==================== P4 LOGIC ====================
// P4 Level 1: Sense -> Think -> Act
(function(){
  const ul = document.getElementById('p4l1-list');
  const steps = [
    { t: "1. SENSE: Bump sensor and ultrasonic camera detect a chair leg", idx: 0 },
    { t: "2. THINK: Computer chip decides to steer 45 degrees to the left", idx: 1 },
    { t: "3. ACT: Electric motor powers the wheels to turn away", idx: 2 }
  ];
  steps.sort(() => Math.random() - 0.5).forEach(s => {
    const li = document.createElement('li');
    li.draggable = true;
    li.dataset.idx = s.idx;
    li.innerHTML = `<span class="handle">⠿</span><span>${s.t}</span>`;
    ul.appendChild(li);
  });

  let dragEl = null;
  ul.addEventListener('dragstart', e => { dragEl = e.target.closest('li'); dragEl.classList.add('dragging'); });
  ul.addEventListener('dragend', () => { if (dragEl) dragEl.classList.remove('dragging'); dragEl = null; });
  ul.addEventListener('dragover', e => {
    e.preventDefault();
    const after = [...ul.querySelectorAll('li:not(.dragging)')].reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = e.clientY - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) return { offset, element: child };
      return closest;
    }, { offset: -Infinity, element: null }).element;
    if (after == null) ul.appendChild(dragEl); else ul.insertBefore(dragEl, after);
  });

  document.getElementById('p4l1-check').addEventListener('click', () => {
    const lis = [...ul.querySelectorAll('li')];
    let ok = true;
    lis.forEach((li, pos) => {
      const match = Number(li.dataset.idx) === pos;
      li.classList.toggle('correct', match);
      li.classList.toggle('incorrect', !match);
      if (!match) ok = false;
    });
    const fb = document.getElementById('p4l1-fb');
    showFeedback(fb, ok, ok ? 
      "Perfect robotics flow! Agents continuously cycle through: Sense (inputs) → Think (decision) → Act (physical motors or tools)." :
      "Not in order yet! Remember the fundamental agent loop: Sense the world first, Decide what to do next, then Act.");
    if (ok) markDone('p4', 0);
  });
})();

// P4 Level 2: Tool-calling
(function(){
  const opts = document.querySelectorAll('#p4l2-opts .opt');
  const fb = document.getElementById('p4l2-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      showFeedback(fb, isCorrect, "Correct! Language models are probability engines for words, not calculators. Delegating math to a calculator tool prevents arithmetic hallucinations.");
      if (isCorrect) markDone('p4', 1);
    });
  });
})();

// P4 Level 3: Edge-case Human Oversight
(function(){
  const opts = document.querySelectorAll('#p4l3-opts .opt');
  const fb = document.getElementById('p4l3-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      showFeedback(fb, isCorrect, "Excellent safety design! Whenever automated vision has low confidence or risks confusing identical items, keeping a human-in-the-loop prevents unfair mistakes.");
      if (isCorrect) markDone('p4', 2);
    });
  });
})();

// ==================== P5 LOGIC ====================
// P5 Level 1: Hallucination
(function(){
  const opts = document.querySelectorAll('#p5l1-opts .opt');
  const fb = document.getElementById('p5l1-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      showFeedback(fb, isCorrect, "This is premise-adoption hallucination! Because user prompts anchor probabilities, chatbots often try to please the user by inventing plausible-sounding fictional details.");
      if (isCorrect) markDone('p5', 0);
    });
  });
})();

// P5 Level 2: Citation
(function(){
  const opts = document.querySelectorAll('#p5l2-opts .opt');
  const fb = document.getElementById('p5l2-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      showFeedback(fb, isCorrect, "Honesty and verification are the hallmarks of ethical scholarship. Acknowledge AI assistance transparently and verify all facts independently.");
      if (isCorrect) markDone('p5', 1);
    });
  });
})();

// P5 Level 3: Ecological footprint
(function(){
  const opts = document.querySelectorAll('#p5l3-opts .opt');
  const fb = document.getElementById('p5l3-fb');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.disabled = true);
      const isCorrect = o.dataset.correct === 'true';
      o.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) opts.forEach(x => { if (x.dataset.correct === 'true') x.classList.add('correct'); });
      showFeedback(fb, isCorrect, "High-density GPU clusters draw large amounts of electricity from the power grid and evaporate millions of gallons of freshwater in evaporative cooling towers. Using compute responsibly is an ecological duty!");
      if (isCorrect) markDone('p5', 2);
    });
  });
})();