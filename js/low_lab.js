const PILLARS = [
  {
    id: 'p1',
    color: 'var(--p1)',
    soft: 'var(--p1-soft)',
    emoji: '🔎',
    name: 'Representation',
    tag: 'Numbers behind words and pictures · Grouping by features',
    levels: [
      {
        label: 'Easy', sub: 'Warm-up', type: 'sort',
        title: 'Sort the Toys by Features',
        kicker: 'Pillar 1.2 · Feature Sorting',
        prompt: 'Robo is learning to organize a toy room! Drag each toy into the correct bin based on whether it has <b>wheels</b> or <b>no wheels</b>.',
        bins: [
          { id: 'wheels', label: 'Has Wheels 🚗' },
          { id: 'nowheels', label: 'No Wheels 🧸' }
        ],
        items: [
          { id: 'i1', text: '🚗 Toy Racecar', bin: 'wheels', hint: 'Look at the racecar — it rolls on wheels!' },
          { id: 'i2', text: '🛹 Skateboard', bin: 'wheels', hint: 'A skateboard has 4 little wheels.' },
          { id: 'i3', text: '🧸 Teddy Bear', bin: 'nowheels', hint: 'A cuddly teddy bear has soft paws, not wheels.' },
          { id: 'i4', text: '🚲 Bicycle', bin: 'wheels', hint: 'A bicycle rides on two big wheels!' },
          { id: 'i5', text: '🧱 Building Block', bin: 'nowheels', hint: 'Blocks have flat sides and no wheels.' },
          { id: 'i6', text: '⚽ Soccer Ball', bin: 'nowheels', hint: 'A ball is round, but rolls on its own body without wheels.' }
        ],
        why: '<b>Why:</b> You just taught Robo to look at a <b>feature</b> (wheels vs. no wheels)! Computers don\'t know what a toy is until we measure specific features.',
        reflection: {
          prompt: 'What is another feature you could use to sort these same toys into two groups?',
          model: 'You could sort them by "Soft plush vs. Hard plastic", or "Things you ride on vs. Things you hold"!'
        }
      },
      {
        label: 'Medium', sub: 'Level up', type: 'grid',
        title: 'Pixel Art: Pictures are Secret Numbers',
        kicker: 'Pillar 1.2 & 1.3 · Digital Pixels',
        prompt: 'Inside a computer, a picture is just a grid of numbers: <b>1</b> means shade a square with color, and <b>0</b> means leave it blank.<br><br>Tap the squares to match the target code and reveal Robo\'s secret icon!',
        rows: 5, cols: 5,
        code: [
          0,1,0,1,0,
          1,1,1,1,1,
          1,1,1,1,1,
          0,1,1,1,0,
          0,0,1,0,0
        ],
        countField: { label: 'How many total squares did you color with ink (count the 1s)?', answer: 16 },
        why: '<b>Why:</b> You revealed a heart icon using only <b>16 colored numbers</b>! Photos are stored as millions of numbered pixels just like this.'
      },
      {
        label: 'Hard', sub: 'Challenge', type: 'type',
        title: 'The Secret Number Cipher',
        kicker: 'Pillar 1.3 · Letters to Numbers',
        prompt: 'A chatbot turns letters into numbers using a code sheet:<br><span class="mono" style="font-size:16px;">A=1, B=2, C=3, D=4, E=5, F=6 …</span><br><br>Robo received the secret code: <b>[2 – 5 – 5]</b>.<br>Which secret word did Robo receive?',
        fields: [{ id: 'f1', type: 'text', placeholder: 'Type the 3-letter word...', answers: ['bee'] }],
        hintWrong: 'Use the code sheet: 2 = B, 5 = E, 5 = E. Put them together!',
        why: '<b>Why:</b> 2 = B, 5 = E, 5 = E spells <b>BEE 🐝</b>! Computers turn every single letter into numbers.',
        reflection: {
          prompt: 'Why do computers turn letters and pictures into numbers?',
          model: 'Because microchips are made of electrical switches that calculate with numbers!'
        }
      }
    ]
  },
  {
    id: 'p2',
    color: 'var(--p2)',
    soft: 'var(--p2-soft)',
    emoji: '🧠',
    name: 'Learning',
    tag: 'Rules vs. learning from data · Mazes and pattern discovery',
    levels: [
      {
        label: 'Easy', sub: 'Warm-up', type: 'sort',
        title: 'Fixed Rule or Learned from Examples?',
        kicker: 'Pillar 2.1 · Rules vs. Machine Learning',
        prompt: 'Some computer tools follow strict human rules, while machine learning discovers patterns from lots of examples. Sort each system!',
        bins: [
          { id: 'rule', label: 'Fixed Human Rule 📜' },
          { id: 'learned', label: 'Learned from Examples 🤖' }
        ],
        items: [
          { id: 'i1', text: 'Pocket calculator adding 5 + 4 = 9', bin: 'rule', hint: 'Calculators follow fixed math steps.' },
          { id: 'i2', text: 'A cooking recipe timer counting down 10 minutes', bin: 'rule', hint: 'A digital timer runs a simple clock rule.' },
          { id: 'i3', text: 'Robo learning to spot cats after looking at 200 cat photos', bin: 'learned', hint: 'Robo learns the pattern from photo examples!' },
          { id: 'i4', text: 'A smart tablet learning to recognize your face from camera pictures', bin: 'learned', hint: 'Face unlock trains on photos of your face.' }
        ],
        why: '<b>Why:</b> Machine learning trains by looking at hundreds of example pictures to find patterns!'
      },
      {
        label: 'Medium', sub: 'Level up', type: 'maze',
        title: 'Guide Robo: Trial and Error Search',
        kicker: 'Pillar 2.4 · Reinforcement Search',
        prompt: 'Robo is learning to find the prize flag 🏁! If you hit a dead end, <b>back up and try a new turn</b> — that is how computers search by trial and error!',
        grid: [
          [0,0,0,3,0],
          [0,1,0,1,0],
          [0,1,1,1,0],
          [2,1,0,0,0]
        ],
        why: '<b>Why:</b> Backing up from a dead end and choosing a different path is how smart AI navigates using <b>search algorithms</b>.'
      },
      {
        label: 'Hard', sub: 'Challenge', type: 'mcq',
        title: 'The Growing Magic Pattern Box',
        kicker: 'Pillar 2.1 & 2.2 · Inferring Rules',
        prompt: 'A secret machine follows <b>one hidden rule</b>:<br>• 🐛 Caterpillar $\\rightarrow$ 🦋 Butterfly<br>• 🌰 Acorn $\\rightarrow$ 🌳 Tall Oak Tree<br><br>Predict what the machine turns an <b>🥚 Egg</b> into!',
        options: [
          { text: '🐣 A fluffy baby chick', correct: true, feedback: 'Spot on! The hidden rule is "what it grows into in nature".' },
          { text: '🥚 Another identical egg', correct: false, feedback: 'Living things transform as they grow!' },
          { text: '🍳 A fried cooking pan', correct: false, feedback: 'The pattern is about living growth in nature!' },
          { text: '🐛 A caterpillar', correct: false, feedback: 'Caterpillars come from eggs, but the first example already grew into a butterfly!' }
        ],
        why: '<b>Why:</b> Figuring out rules from examples and using them on new things is the core idea of <b>machine learning</b>.',
        reflection: {
          prompt: 'What mistake would an AI make if you trained it ONLY on photos of red apples, and then showed it a green apple?',
          model: 'It might say "That is not an apple!" because it falsely learned that all apples must be red.'
        }
      }
    ]
  },
  {
    id: 'p3',
    color: 'var(--p3)',
    soft: 'var(--p3-soft)',
    emoji: '✨',
    name: 'Generation',
    tag: 'Creating new text and pictures · Next-word predictions',
    levels: [
      {
        label: 'Easy', sub: 'Warm-up', type: 'sort',
        title: 'Brand-New AI Creation or Found Online?',
        kicker: 'Pillar 3.1 · Generation vs. Search',
        prompt: 'Generative AI invents brand-new things. Search engines only find things that already existed. Sort each item!',
        bins: [
          { id: 'created', label: 'Created Brand-New ✨' },
          { id: 'found', label: 'Found (Already Existed) 🔍' }
        ],
        items: [
          { id: 'i1', text: 'A brand-new funny bedtime story about a space hamster', bin: 'created', hint: 'Nobody has ever read this story before!' },
          { id: 'i2', text: 'A digital picture of a purple dragon riding a bicycle', bin: 'created', hint: 'This picture was drawn from scratch by an AI.' },
          { id: 'i3', text: 'Looking up the school phone number on the official website', bin: 'found', hint: 'The phone number already existed on the webpage!' },
          { id: 'i4', text: 'A real photograph of a kangaroo taken at the zoo', bin: 'found', hint: 'The kangaroo photo was taken in real life.' }
        ],
        why: '<b>Why:</b> Generative AI synthesizes <b>brand-new content</b>. Search engines look up existing pages.'
      },
      {
        label: 'Medium', sub: 'Level up', type: 'type',
        title: 'The Next-Word Prediction Game',
        kicker: 'Pillar 3.2 · Next-Word Guessing',
        prompt: 'Chatbots build sentences by predicting which word makes the most sense next! Complete this sentence:<br><br><b>“The hungry kitten drank a warm saucer of ___.”</b>',
        fields: [{ id: 'f1', type: 'text', placeholder: 'Type the most likely word...', answers: ['milk', 'water'] }],
        hintWrong: 'Think about what kittens love to drink!',
        why: '<b>Why:</b> "Milk" has the highest statistical probability based on storybooks.'
      },
      {
        label: 'Hard', sub: 'Challenge', type: 'mcq',
        title: 'Why Did the AI Draw 6 Fingers?',
        kicker: 'Pillar 3.1 · Generative Artifacts',
        prompt: 'An AI image generator draws a hand with <b>6 fingers</b>! Why did it make this mistake?',
        options: [
          { text: 'It blends visual pixel patterns and does not know human anatomy', correct: true, feedback: 'Bingo! AI generates pixel textures without understanding human skeletons!' },
          { text: 'The astronaut in real life actually has 6 fingers', correct: false, feedback: 'Real astronauts have normal 5-fingered hands!' },
          { text: 'The computer keyboard pressed the number 6', correct: false, feedback: 'Keyboard keys do not draw extra fingers.' },
          { text: 'The monitor ran out of green pixels', correct: false, feedback: 'Screen pixels do not control hand shape calculations.' }
        ],
        why: '<b>Why:</b> Image generators blend statistical pixel patterns rather than understanding 3D anatomy.',
        reflection: {
          prompt: 'Can generative AI create a real, warm slice of cheese pizza for you to eat?',
          model: 'No! Generative AI can only create digital pictures, words, or sounds on a screen.'
        }
      }
    ]
  },
  {
    id: 'p4',
    color: 'var(--p4)',
    soft: 'var(--p4-soft)',
    emoji: '🤖',
    name: 'Interaction & Agency',
    tag: 'The Sense-Think-Act loop · Clear prompts and kind robot helpers',
    levels: [
      {
        label: 'Easy', sub: 'Warm-up', type: 'reorder',
        title: 'Order the Robot Vacuum Loop',
        kicker: 'Pillar 4.2 · Sense $\\rightarrow$ Think $\\rightarrow$ Act',
        prompt: 'Drag these three steps into the correct order in the loop!',
        items: [
          { id: 'act', text: '3. ACT: Wheel motors turn the robot away' },
          { id: 'sense', text: '1. SENSE: Camera spots a sneaker' },
          { id: 'think', text: '2. THINK: Computer chip calculates a path' }
        ],
        correctOrder: ['sense', 'think', 'act'],
        why: '<b>Why:</b> Every AI agent follows the loop: <b>SENSE</b> $\\rightarrow$ <b>THINK</b> $\\rightarrow$ <b>ACT</b>!'
      },
      {
        label: 'Medium', sub: 'Level up', type: 'mcq',
        title: 'Fix the Super-Vague Question',
        kicker: 'Pillar 4.1 · Clear Prompting',
        prompt: 'Which is the BEST, clearest prompt for Mia to use?',
        options: [
          { text: '“Do the animal thing right now please!”', correct: false, feedback: 'Still vague!' },
          { text: '“ANIMAL! ANIMAL! ANIMAL!”', correct: false, feedback: 'Shouting gives no instructions.' },
          { text: '“Write a 3-line happy poem about a playful baby dolphin.”', correct: true, feedback: 'Awesome! Clear topic, format, and mood.' },
          { text: '“Cat.”', correct: false, feedback: 'Just one word isn\'t clear.' }
        ],
        why: '<b>Why:</b> High-quality prompts state the topic, task, and limits.'
      },
      {
        label: 'Hard', sub: 'Challenge', type: 'mcq',
        title: 'The Reading Corner Dilemma',
        kicker: 'Pillar 4.3 & 5.3 · Kind Fallbacks',
        prompt: 'A tidy robot finds an open storybook lying face down. What is the kindest thing to do?',
        options: [
          { text: 'Slam the book shut and bury it in the toy box', correct: false, feedback: 'The student would lose their page!' },
          { text: 'Pause, save the page with a bookmark, or ask a human', correct: true, feedback: 'Wonderful! Pausing and asking prevents mistakes.' },
          { text: 'Throw the book into the paper recycling bin', correct: false, feedback: 'Books are not trash!' },
          { text: 'Turn off its power and never move again', correct: false, feedback: 'Shutting off stops the robot from helping.' }
        ],
        why: '<b>Why:</b> Good AI design requires robots to <b>pause and ask</b> when unsure.',
        reflection: {
          prompt: 'Why should classroom robots always have a human teacher or student to check their work?',
          model: 'Because machines follow rules without human feelings or understanding.'
        }
      }
    ]
  },
  {
    id: 'p5',
    color: 'var(--p5)',
    soft: 'var(--p5-soft)',
    emoji: '🛡️',
    name: 'Responsibility',
    tag: 'Keeping private data safe · Real dogs vs. robots · Honesty',
    levels: [
      {
        label: 'Easy', sub: 'Warm-up', type: 'sort',
        title: 'Keep It Private or OK to Share?',
        kicker: 'Pillar 5.1 · Personal Privacy',
        prompt: 'Sort each card into Private or OK to Share!',
        bins: [
          { id: 'private', label: 'Keep Private 🔒' },
          { id: 'share', label: 'OK to Share 📢' }
        ],
        items: [
          { id: 'i1', text: '🏠 Your home street and house number', bin: 'private', hint: 'A stranger could find you in real life.' },
          { id: 'i2', text: '🔑 Your secret tablet password', bin: 'private', hint: 'Passwords protect your accounts.' },
          { id: 'i3', text: '📱 Your parent\'s telephone number', bin: 'private', hint: 'Phone numbers can be used to call your family.' },
          { id: 'i4', text: '🎨 Your favorite color', bin: 'share', hint: 'Everyone can talk about favorite colors.' },
          { id: 'i5', text: '🐶 Your favorite animal', bin: 'share', hint: 'Sharing animal preferences is safe.' },
          { id: 'i6', text: '🎮 Your favorite recess playground game', bin: 'share', hint: 'Playground games are safe to discuss.' }
        ],
        why: '<b>Why:</b> Contact details must stay <b>private</b>, while general preferences are safe to share.'
      },
      {
        label: 'Medium', sub: 'Level up', type: 'mcq',
        title: 'Alive or Not Alive? The Robot Puppy',
        kicker: 'Pillar 1.1 · Living vs. Machines',
        prompt: 'Is a toy robot puppy that wags its tail and barks truly alive with real feelings?',
        options: [
          { text: 'Yes, because it moves its tail and barks', correct: false, feedback: 'Moving parts don\'t make something alive.' },
          { text: 'No, it is a machine made of plastic, wires, and code', correct: true, feedback: 'Exactly! Only real living animals have feelings.' },
          { text: 'Yes, but only when plugged into the wall', correct: false, feedback: 'Electricity gives power, not feelings.' },
          { text: 'Only if you give it a real dog biscuit', correct: false, feedback: 'Toy robots cannot digest food!' }
        ],
        why: '<b>Why:</b> Robots are made of metal, plastic, and code. Only real living creatures have feelings.'
      },
      {
        label: 'Hard', sub: 'Challenge', type: 'mcq',
        title: 'The Birthday Card: Being Honest',
        kicker: 'Pillar 5.3 · Academic Honesty & Credit',
        prompt: 'Leo used an AI drawing tool to make a card. What is the most honest answer when asked how he made it?',
        options: [
          { text: '“I painted every dot by hand with zero help!”', correct: false, feedback: 'That is dishonest.' },
          { text: '“I came up with the idea and used an AI tool to help!”', correct: true, feedback: 'Terrific! Honest about using AI.' },
          { text: '“A magical fairy flew through my window and drew it.”', correct: false, feedback: 'Avoid making up stories.' },
          { text: '“I don\'t know where it came from.”', correct: false, feedback: 'Pretending not to know isn\'t responsible.' }
        ],
        why: '<b>Why:</b> You can be proud of your creative ideas while honestly acknowledging AI help.',
        reflection: {
          prompt: 'If a chatbot tells you that dogs can fly and have 8 legs, what should you do?',
          model: 'Check with a parent, teacher, or library book because chatbots can make mistakes!'
        }
      }
    ]
  }
];

let completedLevels = new Set();
let activePillarIdx = 0;
let activeLevelIdx = 0;

function renderHome() {
  const grid = document.getElementById('pillarGrid');
  grid.innerHTML = '';

  PILLARS.forEach((p, pIdx) => {
    const card = document.createElement('div');
    card.className = 'pillar-card';
    card.style.setProperty('--dot-color', p.color);
    card.onclick = () => openPillar(pIdx);

    let dotsHtml = '';
    p.levels.forEach((_, lIdx) => {
      const isDone = completedLevels.has(`${pIdx}-${lIdx}`);
      dotsHtml += `<span class="${isDone ? 'done' : ''}"></span>`;
    });

    card.innerHTML = `
      <div class="card-head">
        <div class="num" style="background:${p.color}">${pIdx + 1}</div>
        <div class="emoji-badge">${p.emoji}</div>
      </div>
      <h3>${p.name}</h3>
      <p class="tag">${p.tag}</p>
      <div class="dots">${dotsHtml}</div>
    `;

    grid.appendChild(card);
  });

  updateScorePill();
}

function updateScorePill() {
  document.getElementById('scoreCount').textContent = completedLevels.size;
}

function goHome() {
  document.getElementById('pillarView').style.display = 'none';
  document.getElementById('homeView').style.display = 'block';
  renderHome();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openPillar(pIdx) {
  activePillarIdx = pIdx;
  activeLevelIdx = 0;

  document.getElementById('homeView').style.display = 'none';
  document.getElementById('pillarView').style.display = 'block';

  const p = PILLARS[pIdx];
  document.documentElement.style.setProperty('--accent', p.color);
  document.documentElement.style.setProperty('--accent-soft', p.soft);

  document.getElementById('pvNum').textContent = pIdx + 1;
  document.getElementById('pvNum').style.background = p.color;
  document.getElementById('pvTitle').textContent = `${p.emoji} Pillar ${pIdx + 1}: ${p.name}`;
  document.getElementById('pvTag').textContent = p.tag;

  renderLevelTabs();
  renderActiveExercise();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLevelTabs() {
  const p = PILLARS[activePillarIdx];
  const tabsWrap = document.getElementById('levelTabs');
  tabsWrap.innerHTML = '';

  p.levels.forEach((lv, lIdx) => {
    const tab = document.createElement('div');
    const isDone = completedLevels.has(`${activePillarIdx}-${lIdx}`);
    tab.className = 'level-tab' + (lIdx === activeLevelIdx ? ' active' : '');
    tab.onclick = () => {
      activeLevelIdx = lIdx;
      renderLevelTabs();
      renderActiveExercise();
    };

    tab.innerHTML = `
      <div class="lv-sub">${lv.sub}</div>
      <div class="lv-name">
        <span>${lv.label}</span>
        ${isDone ? '<span class="check">✓</span>' : ''}
      </div>
    `;
    tabsWrap.appendChild(tab);
  });
}

function markActiveLevelComplete() {
  completedLevels.add(`${activePillarIdx}-${activeLevelIdx}`);
  updateScorePill();
  renderLevelTabs();
}

function showFeedback(type, text) {
  const fb = document.getElementById('feedback');
  fb.className = `feedback show ${type}`;
  fb.innerHTML = text;
}

function pokeBot() {
  const phrases = [
    "🤖 'Beep boop! Everything inside a computer turns into numbers!'",
    "🐾 'Look for features like wheels or fur to group things!'",
    "🧠 'When I make a mistake, I back up and try again!'",
    "🔒 'Never share your home address with chatbots!'",
    "✨ 'Generative AI makes brand-new pictures from your words!'"
  ];
  const msg = phrases[Math.floor(Math.random() * phrases.length)];
  const botEl = document.querySelector('.bot');
  botEl.style.transform = 'scale(1.3) rotate(-10deg)';
  setTimeout(() => botEl.style.transform = 'none', 300);

  const fb = document.getElementById('feedback');
  if (fb && document.getElementById('pillarView').style.display === 'block') {
    showFeedback('good', `<b>Robo says:</b> ${msg}`);
  }
}

function renderActiveExercise() {
  const p = PILLARS[activePillarIdx];
  const lv = p.levels[activeLevelIdx];
  const card = document.getElementById('exerciseCard');

  card.innerHTML = `
    <span class="kicker">${lv.kicker}</span>
    <h3>${lv.title}</h3>
    <p class="prompt-note">${lv.prompt}</p>
    <div id="exerciseBody"></div>
    <div class="btn-row" id="exerciseButtons"></div>
    <div class="feedback" id="feedback"></div>
    <div class="reflect-box" id="reflectBox" style="display:none"></div>
  `;

  const body = document.getElementById('exerciseBody');
  const btns = document.getElementById('exerciseButtons');

  if (lv.type === 'sort') renderSortExercise(lv, body, btns);
  else if (lv.type === 'grid') renderGridExercise(lv, body, btns);
  else if (lv.type === 'type') renderTypeExercise(lv, body, btns);
  else if (lv.type === 'maze') renderMazeExercise(lv, body, btns);
  else if (lv.type === 'reorder') renderReorderExercise(lv, body, btns);
  else if (lv.type === 'mcq') renderMcqExercise(lv, body, btns);

  if (lv.reflection) {
    const rb = document.getElementById('reflectBox');
    rb.style.display = 'block';
    rb.innerHTML = `
      <p class="q">💭 <b>Deeper Thinking:</b> ${lv.reflection.prompt}</p>
      <div class="field-row">
        <textarea placeholder="Type what you think here in your own words..."></textarea>
      </div>
      <button class="btn secondary" onclick="toggleModelAnswer(this)">Show Model Answer</button>
      <div class="model-answer">${lv.reflection.model}</div>
    `;
  }
}

function toggleModelAnswer(btn) {
  const drawer = btn.nextElementSibling;
  drawer.classList.toggle('show');
  btn.textContent = drawer.classList.contains('show') ? 'Hide Model Answer' : 'Show Model Answer';
}

function renderSortExercise(lv, body, btns) {
  let selectedChipId = null;
  const assignments = {};

  body.innerHTML = `
    <div style="font-size:13.5px; font-weight:700; color:var(--ink-soft); margin-bottom:6px;">
      TAP or DRAG each item into its correct box:
    </div>
    <div class="tray" id="sortTray"></div>
    <div class="bins" id="binsContainer"></div>
  `;

  const tray = document.getElementById('sortTray');
  const binsContainer = document.getElementById('binsContainer');

  lv.items.forEach(it => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = it.text;
    chip.draggable = true;
    chip.dataset.id = it.id;

    chip.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', it.id);
    });

    chip.addEventListener('click', () => {
      if (chip.classList.contains('correct') || chip.classList.contains('incorrect')) return;
      document.querySelectorAll('.chip.selected').forEach(c => c.classList.remove('selected'));
      if (selectedChipId === it.id) {
        selectedChipId = null;
        return;
      }
      selectedChipId = it.id;
      chip.classList.add('selected');
    });

    tray.appendChild(chip);
  });

  lv.bins.forEach(b => {
    const binEl = document.createElement('div');
    binEl.className = 'bin';
    binEl.dataset.bin = b.id;
    binEl.innerHTML = `<h4>${b.label}</h4><div class="bin-slot"></div>`;

    binEl.addEventListener('dragover', (e) => {
      e.preventDefault();
      binEl.classList.add('dragover');
    });

    binEl.addEventListener('dragleave', () => binEl.classList.remove('dragover'));

    binEl.addEventListener('drop', (e) => {
      e.preventDefault();
      binEl.classList.remove('dragover');
      const itemId = e.dataTransfer.getData('text/plain');
      placeChip(itemId, b.id);
    });

    binEl.addEventListener('click', () => {
      if (selectedChipId) {
        placeChip(selectedChipId, b.id);
        selectedChipId = null;
        document.querySelectorAll('.chip.selected').forEach(c => c.classList.remove('selected'));
      }
    });

    binsContainer.appendChild(binEl);
  });

  function placeChip(itemId, binId) {
    const chip = body.querySelector(`.chip[data-id="${itemId}"]`);
    if (!chip || chip.classList.contains('correct')) return;
    assignments[itemId] = binId;
    const slot = binsContainer.querySelector(`.bin[data-bin="${binId}"] .bin-slot`);
    slot.appendChild(chip);
  }

  btns.innerHTML = `
    <button class="btn" id="checkSortBtn">Check My Sorting</button>
    <button class="btn secondary" onclick="renderActiveExercise()">Reset</button>
  `;

  document.getElementById('checkSortBtn').onclick = () => {
    let allGood = true;
    const hints = [];

    lv.items.forEach(it => {
      const chip = body.querySelector(`.chip[data-id="${it.id}"]`);
      const assigned = assignments[it.id];
      if (assigned === it.bin) {
        chip.classList.remove('incorrect');
        chip.classList.add('correct');
      } else {
        chip.classList.remove('correct');
        chip.classList.add('incorrect');
        allGood = false;
        hints.push(it.hint);
      }
    });

    if (allGood) {
      showFeedback('good', `<b>Terrific job! All correctly sorted! 🎉</b><br>${lv.why}`);
      markActiveLevelComplete();
    } else {
      showFeedback('bad', `<b>Take another look at the pink cards:</b><br>• ${hints.join('<br>• ')}`);
    }
  };
}

function renderGridExercise(lv, body, btns) {
  const userGrid = new Array(lv.code.length).fill(0);

  body.innerHTML = `
    <div class="code-row">Target Code: <b>${lv.code.join(' ')}</b></div>
    <div class="painter-wrap">
      <div class="painter" id="painterGrid" style="grid-template-columns: repeat(${lv.cols}, 38px);"></div>
    </div>
    ${lv.countField ? `
      <div class="field-row" style="max-width:380px; margin: 0 auto 12px;">
        <label>${lv.countField.label}</label>
        <input type="number" id="countInput" placeholder="Type a number...">
      </div>
    ` : ''}
  `;

  const painter = document.getElementById('painterGrid');
  userGrid.forEach((_, idx) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.onclick = () => {
      userGrid[idx] = userGrid[idx] ? 0 : 1;
      cell.classList.toggle('on');
    };
    painter.appendChild(cell);
  });

  btns.innerHTML = `
    <button class="btn" id="checkGridBtn">Check My Pixel Picture</button>
    <button class="btn secondary" onclick="renderActiveExercise()">Reset</button>
  `;

  document.getElementById('checkGridBtn').onclick = () => {
    const gridMatches = userGrid.every((val, idx) => val === lv.code[idx]);
    let countMatches = true;

    if (lv.countField) {
      const userCount = parseInt(document.getElementById('countInput').value, 10);
      countMatches = (userCount === lv.countField.answer);
    }

    if (gridMatches && countMatches) {
      showFeedback('good', `<b>Hooray! You revealed the secret icon! 🎉</b><br>${lv.why}`);
      markActiveLevelComplete();
    } else if (!gridMatches) {
      showFeedback('bad', `<b>The picture is not matching the code yet.</b> Look at the code above: <b>1</b> means colored, <b>0</b> means blank!`);
    } else {
      showFeedback('bad', `<b>The picture is correct, but check your total count!</b> Count all the colored 1s in the heart.`);
    }
  };
}

function renderTypeExercise(lv, body, btns) {
  body.innerHTML = lv.fields.map(f => `
    <div class="field-row" style="max-width: 320px;">
      <input type="${f.type}" id="${f.id}" placeholder="${f.placeholder}" autocomplete="off">
    </div>
  `).join('');

  btns.innerHTML = `<button class="btn" id="checkTypeBtn">Check My Answer</button>`;

  document.getElementById('checkTypeBtn').onclick = () => {
    let allGood = true;
    lv.fields.forEach(f => {
      const inputEl = document.getElementById(f.id);
      const val = inputEl.value.trim().toLowerCase();
      if (!f.answers.includes(val)) {
        allGood = false;
        inputEl.style.borderColor = 'var(--bad)';
      } else {
        inputEl.style.borderColor = 'var(--good)';
      }
    });

    if (allGood) {
      showFeedback('good', `<b>Spot on! You cracked the code! 🎉</b><br>${lv.why}`);
      markActiveLevelComplete();
    } else {
      showFeedback('bad', `<b>Not quite yet.</b> ${lv.hintWrong}`);
    }
  };
}

function renderMazeExercise(lv, body, btns) {
  const maze = lv.grid.map(r => r.slice());
  const rows = maze.length;
  const cols = maze[0].length;
  let startPos = null;

  maze.forEach((r, rIdx) => {
    r.forEach((cell, cIdx) => {
      if (cell === 2) startPos = { r: rIdx, c: cIdx };
    });
  });

  let currentPos = { ...startPos };
  let reachedGoal = false;

  body.innerHTML = `
    <div class="maze-wrap">
      <div class="maze-grid" id="mazeGrid" style="grid-template-columns: repeat(${cols}, 48px);"></div>
      <div class="maze-msg" id="mazeStatus">Use the arrow buttons to guide Robo 🤖 to the flag 🏁!</div>
      <div class="maze-controls">
        <div></div>
        <button class="maze-btn" id="btnUp">⬆️</button>
        <div></div>
        <button class="maze-btn" id="btnLeft">⬅️</button>
        <button class="maze-btn" id="btnResetMaze" title="Restart">🔄</button>
        <button class="maze-btn" id="btnRight">➡️</button>
        <div></div>
        <button class="maze-btn" id="btnDown">⬇️</button>
        <div></div>
      </div>
    </div>
  `;

  const gridEl = document.getElementById('mazeGrid');
  const statusEl = document.getElementById('mazeStatus');

  function drawMaze() {
    gridEl.innerHTML = '';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement('div');
        const val = maze[r][c];
        cell.className = 'maze-cell ' + (val === 0 ? 'wall' : (val === 3 ? 'goal' : 'open'));
        if (currentPos.r === r && currentPos.c === c) cell.textContent = '🤖';
        else if (val === 3) cell.textContent = '🏁';
        gridEl.appendChild(cell);
      }
    }
  }

  function moveRobo(dr, dc) {
    if (reachedGoal) return;
    const nr = currentPos.r + dr;
    const nc = currentPos.c + dc;

    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || maze[nr][nc] === 0) {
      statusEl.textContent = "Bump! That's a wall — try another direction!";
      return;
    }

    currentPos = { r: nr, c: nc };
    drawMaze();

    if (maze[nr][nc] === 3) {
      reachedGoal = true;
      statusEl.textContent = "Goal reached! 🎉 Robo found the prize!";
      showFeedback('good', `<b>Awesome navigating! 🎉</b><br>${lv.why}`);
      markActiveLevelComplete();
      return;
    }

    let openCount = 0;
    [[nr-1, nc], [nr+1, nc], [nr, nc-1], [nr, nc+1]].forEach(([rr, cc]) => {
      if (rr >= 0 && rr < rows && cc >= 0 && cc < cols && maze[rr][cc] !== 0) openCount++;
    });

    if (openCount === 1) {
      statusEl.textContent = "Dead end! Back up and try another path — that's trial and error!";
    } else {
      statusEl.textContent = "Keep going! Find the way to the flag.";
    }
  }

  document.getElementById('btnUp').onclick = () => moveRobo(-1, 0);
  document.getElementById('btnDown').onclick = () => moveRobo(1, 0);
  document.getElementById('btnLeft').onclick = () => moveRobo(0, -1);
  document.getElementById('btnRight').onclick = () => moveRobo(0, 1);
  document.getElementById('btnResetMaze').onclick = () => {
    currentPos = { ...startPos };
    reachedGoal = false;
    statusEl.textContent = "Reset to start! Guide Robo to the flag.";
    drawMaze();
  };

  drawMaze();
  btns.innerHTML = '';
}

function renderReorderExercise(lv, body, btns) {
  let order = [...lv.items.map(i => i.id)];
  order = [order[1], order[0], order[2]];

  body.innerHTML = `
    <div style="font-size:13.5px; font-weight:700; color:var(--ink-soft); margin-bottom:8px;">
      DRAG or TAP two steps to swap them into the correct order:
    </div>
    <div class="reorder-list" id="reorderList"></div>
  `;

  const listEl = document.getElementById('reorderList');
  let selectedRow = null;

  function renderList() {
    listEl.innerHTML = '';
    order.forEach(id => {
      const item = lv.items.find(i => i.id === id);
      const row = document.createElement('div');
      row.className = 'reorder-item';
      row.draggable = true;
      row.dataset.id = id;
      row.innerHTML = `<span class="handle">☰</span> <span>${item.text}</span>`;

      row.addEventListener('dragstart', (e) => e.dataTransfer.setData('text/plain', id));
      row.addEventListener('dragover', (e) => e.preventDefault());
      row.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        swapRows(draggedId, id);
      });

      row.addEventListener('click', () => {
        if (!selectedRow) {
          selectedRow = row;
          row.classList.add('selected');
        } else if (selectedRow === row) {
          selectedRow.classList.remove('selected');
          selectedRow = null;
        } else {
          swapRows(selectedRow.dataset.id, id);
          selectedRow.classList.remove('selected');
          selectedRow = null;
        }
      });

      listEl.appendChild(row);
    });
  }

  function swapRows(fromId, toId) {
    const fromIdx = order.indexOf(fromId);
    const toIdx = order.indexOf(toId);
    if (fromIdx < 0 || toIdx < 0) return;
    order.splice(fromIdx, 1);
    order.splice(toIdx, 0, fromId);
    renderList();
  }

  renderList();

  btns.innerHTML = `
    <button class="btn" id="checkOrderBtn">Check Loop Order</button>
    <button class="btn secondary" onclick="renderActiveExercise()">Reset</button>
  `;

  document.getElementById('checkOrderBtn').onclick = () => {
    let allOk = true;
    order.forEach((id, idx) => {
      const row = listEl.querySelector(`.reorder-item[data-id="${id}"]`);
      if (id === lv.correctOrder[idx]) {
        row.classList.remove('incorrect');
        row.classList.add('correct');
      } else {
        row.classList.remove('correct');
        row.classList.add('incorrect');
        allOk = false;
      }
    });

    if (allOk) {
      showFeedback('good', `<b>Perfect robotics sequence! 🎉</b><br>${lv.why}`);
      markActiveLevelComplete();
    } else {
      showFeedback('bad', `<b>Not in order yet!</b> Remember the loop: SENSE $\\rightarrow$ THINK $\\rightarrow$ ACT!`);
    }
  };
}

function renderMcqExercise(lv, body, btns) {
  body.innerHTML = `<div class="options" id="mcqOptions"></div>`;
  const optsWrap = document.getElementById('mcqOptions');
  let answered = false;

  lv.options.forEach(opt => {
    const optEl = document.createElement('div');
    optEl.className = 'option';
    optEl.innerHTML = `<span>${opt.text}</span><span class="mark"></span>`;

    optEl.onclick = () => {
      if (answered) return;
      optsWrap.querySelectorAll('.option').forEach(b => {
        b.classList.remove('correct', 'incorrect');
        b.querySelector('.mark').textContent = '';
      });

      if (opt.correct) {
        optEl.classList.add('correct');
        optEl.querySelector('.mark').textContent = '✓';
        showFeedback('good', `<b>Correct! 🎉</b> ${opt.feedback}<br><br>${lv.why}`);
        answered = true;
        markActiveLevelComplete();
      } else {
        optEl.classList.add('incorrect');
        optEl.querySelector('.mark').textContent = '✕';
        showFeedback('bad', `<b>Not quite.</b> ${opt.feedback}`);
      }
    };

    optsWrap.appendChild(optEl);
  });

  btns.innerHTML = '';
}

window.addEventListener('DOMContentLoaded', () => {
  renderHome();
});