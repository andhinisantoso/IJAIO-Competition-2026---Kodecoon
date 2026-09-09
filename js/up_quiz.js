let quizDataEasy = [];
let quizDataMedium = [];
let quizDataHard = [];

// Static Data Structured Tasks (6 Tasks)
const structuredTasksData = [
  {
    id: "task-A1",
    level: "Easy · Set A",
    title: "Task A1 · Classifying Unlabelled Animals by Shared Features",
    marks: 20,
    pillar: "Pillar 1 (Representation) & Pillar 2 (Learning)",
    tags: [["First Principles", "t-fp"], ["AI Ethics", "t-ethics"]],
    scenario: "You have collected a mini dataset of four animals for an educational AI app: [<b>Bat, Dolphin, Sparrow, Goldfish</b>]. The computer does not know their names, but can measure two features: <b>Can Fly (Yes/No)</b> and <b>Breathes Air (Yes/No)</b>.",
    parts: [
      ["a", "Group the 4 animals into pairs using only the feature 'Can Fly'. List which animals are in each group."],
      ["b", "A student claims: 'All animals that breathe air must be birds.' Show how the <b>Bat</b> or <b>Dolphin</b> proves this rule wrong."],
      ["c", "Why is it important to include a variety of animal types when training a nature app? What happens if you leave some out?"]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "Group 1 (Can Fly = Yes): Bat, Sparrow. Group 2 (Can Fly = No): Dolphin, Goldfish.", rationale: "Tests ability to partition items into discrete classes." },
      { pts: "b) 6 marks", desc: "The bat breathes air and flies, but is a mammal. Naming either counter-example disproves the rule.", rationale: "Demonstrates deductive reasoning." },
      { pts: "c) 8 marks", desc: "Leaving out groups creates bias and blind spots.", rationale: "Instills the disposition that data completeness dictates reliability." }
    ]
  },
  {
    id: "task-A2",
    level: "Easy · Set A",
    title: "Task A2 · Designing a School Lost & Found Vision Classifier",
    marks: 20,
    pillar: "Pillar 4 (Agency) & Pillar 5 (Responsibility)",
    tags: [["AI Agent", "t-agent"], ["AI Ethics", "t-ethics"]],
    scenario: "Your primary school wants an automated lost-property tablet. A student places a forgotten lunchbox under the camera. The AI senses the item, decides color/brand, and notifies the student.",
    parts: [
      ["a", "Trace the agent loop for this lunchbox helper: what does it <b>Sense</b>, what does it <b>Decide</b>, and what does it <b>Act</b>?"],
      ["b", "Name one likely FAILURE case (e.g. two identical blue lunchboxes)."],
      ["c", "Suggest a sensible human-centered FIX so students aren't given someone else's lunch."]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "Sense: Camera photo → Decide: Check database → Act: Send notification.", rationale: "Rewards understanding the robotics loop." },
      { pts: "b) 6 marks", desc: "Likely failure: Confusing two identical blue plastic lunchboxes.", rationale: "Tests ability to foresee edge cases." },
      { pts: "c) 8 marks", desc: "Sensible fix: Require human confirmation or student ID pin.", rationale: "Reinforces human-in-the-loop oversight." }
    ]
  },
  {
    id: "task-B1",
    level: "Medium · Set B",
    title: "Task B1 · Next-Word Prediction & Temperature Sampling",
    marks: 20,
    pillar: "Pillar 3 (Generation) & Pillar 1 (Representation)",
    tags: [["Generative AI", "t-genai"], ["First Principles", "t-fp"]],
    scenario: "A mini language model counts frequency for the next token after <i>'The brave astronaut stepped onto the…'</i>:<br><br><b>'moon' → 12 &nbsp;|&nbsp; 'rocket' → 4 &nbsp;|&nbsp; 'alien' → 3 &nbsp;|&nbsp; 'sandwich' → 1</b> (Total = 20 counts)",
    parts: [
      ["a", "Calculate the statistical probability for choosing <b>'moon'</b> versus <b>'sandwich'</b>."],
      ["b", "If temperature is set to T = 0.0 (greedy decoding), which word is chosen? What if you run it 10 times?"],
      ["c", "A user raises temperature to T = 0.9 and gets 'sandwich'. Explain why this is NOT a bug."]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "'moon' = 12/20 (60%), 'sandwich' = 1/20 (5%).", rationale: "Evaluates probability calculation." },
      { pts: "b) 6 marks", desc: "At T = 0.0, always picks 'moon' 10 times deterministically.", rationale: "Tests argmax deterministic generation." },
      { pts: "c) 8 marks", desc: "High temperature flattens probability differences, allowing lower-probability tokens to be sampled.", rationale: "Connects sampling theory to creative generation." }
    ]
  },
  {
    id: "task-B2",
    level: "Medium · Set B",
    title: "Task B2 · Build a Weighted Points Machine for Classroom Tone",
    marks: 20,
    pillar: "Pillar 2 (Learning) & Pillar 5 (Responsibility)",
    tags: [["First Principles", "t-fp"], ["AI Ethics", "t-ethics"]],
    scenario: "A discussion board flags unkind comments:<br>• +3 points for insult<br>• +2 points for ALL CAPS<br>• +2 points for 3+ exclamation marks ('!!!')<br>• −3 points if from recognized peer leader<br><b>Threshold:</b> Total Score ≥ 3 holds message for review.",
    parts: [
      ["a", "Calculate score for Message 1 by peer leader: <i>'LOOK AT THIS COOL ART PROJECT!!!'</i>."],
      ["b", "Calculate score for Message 2 from unverified user: <i>'you are such a clumsy turtle'</i>."],
      ["c", "Message 1 was flagged despite being praise. Explain why the rule machine made this mistake."]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "Message 1: ALL CAPS (+2) + !!! (+2) − peer leader (−3) = +1 point. Not flagged.", rationale: "Tests multi-step weighted arithmetic." },
      { pts: "b) 6 marks", desc: "Message 2: Insult (+3). Total = +3. Flagged.", rationale: "Tests threshold comparison." },
      { pts: "c) 8 marks", desc: "Rule machines count tokens without understanding context or friendly tone.", rationale: "Unpacks ethical trade-offs of rule automation." }
    ]
  },
  {
    id: "task-C1",
    level: "Hard · Set C",
    title: "Task C1 · Confounding Bias & Multi-Tool Agent Orchestration",
    marks: 20,
    pillar: "Pillar 1 (Representation), Pillar 2 (Learning) & Pillar 4 (Agency)",
    tags: [["AI Agent", "t-agent"], ["First Principles", "t-fp"]],
    scenario: "A greenhouse AI vision system was trained on diseased leaves under dim yellow evening light, and healthy leaves in daylight. In operation, healthy leaves on overcast days are misclassified as diseased and sprayed with chemical fungicide.",
    parts: [
      ["a", "Identify the <b>confounding feature</b> the vision model learned instead of real disease symptoms."],
      ["b", "Design a corrected training protocol to eliminate this bias."],
      ["c", "Sketch a safe 3-tool agent workflow before spraying chemical fungicide."]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "Confounding feature: Ambient lighting/color temperature.", rationale: "Diagnoses spurious correlations." },
      { pts: "b) 6 marks", desc: "Corrected protocol: Photograph both healthy/diseased leaves under identical, diverse lighting.", rationale: "Tests dataset debiasing." },
      { pts: "c) 8 marks", desc: "Workflow: Sense leaf → Call soil sensor → Call human confirmation tool → Act.", rationale: "Requires designing safe multi-modal agent workflows." }
    ]
  },
  {
    id: "task-C2",
    level: "Hard · Set C",
    title: "Task C2 · Adversarial Prompts, Verification Loops & Eco-Audits",
    marks: 20,
    pillar: "Pillar 3 (Generation) & Pillar 5 (Responsibility)",
    tags: [["Generative AI", "t-genai"], ["AI Ethics", "t-ethics"]],
    scenario: "Liam prompts: <i>'Who was the French knight who defended Paris using a titanium machine gun in 1346?'</i> Chatbot replies: <i>'Sir Guillaume de Montfort defended Paris in 1346 wielding a titanium machine gun.'</i>",
    parts: [
      ["a", "Explain how Liam's leading question caused a <b>premise-adoption hallucination</b>."],
      ["b", "Rewrite the prompt using strict constraints to force historical accuracy."],
      ["c", "Conduct an ecological critique for generating 150 throwaway AI fantasy images for a 5-minute presentation."]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "LLMs prioritize token alignment and sycophancy, synthesizing fictional facts to fit user prompts.", rationale: "Diagnoses premise-adoption hallucinations." },
      { pts: "b) 6 marks", desc: "Improved prompt specifying expert persona, historical accuracy, and rejecting false premises.", rationale: "Applies prompt constraints and truth verification." },
      { pts: "c) 8 marks", desc: "Image diffusion requires intensive GPU cycles, drawing electricity and freshwater for cooling.", rationale: "Fosters environmental resource awareness." }
    ]
  }
];

let currentTab = 'setA';
let currentDomainFilter = 'all';
let isTeacherMode = false;
let userAnswers = {};

// MEMANGGIL DATA DARI FILE JSON
async function loadQuizData() {
  try {
    const response = await fetch('../data/up_quiz.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    
    quizDataEasy = data.setA;
    quizDataMedium = data.setB;
    quizDataHard = data.setC;

    renderCurrentView();
  } catch (error) {
    console.error('Gagal memuat file JSON:', error);
    document.getElementById('mcqContainer').innerHTML = `
      <div style="padding: 20px; background: #FDEAEF; border: 2px solid #D6336C; border-radius: 12px; color: #A01A5B;">
        <b>Error:</b> Gagal memuat data kuis dari <code>up_quiz.json</code>.<br>
        Pastikan Anda menjalankan website di local server (e.g. Live Server VS Code) agar fungsi <code>fetch()</code> dapat membaca file JSON.
      </div>
    `;
  }
}

function switchProblemSet(tabKey) {
  currentTab = tabKey;
  document.querySelectorAll('.set-tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`tabBtn-${tabKey}`);
  if (activeBtn) activeBtn.classList.add('active');

  const headerBadge = document.getElementById('setHeaderBadge');
  const headerTitle = document.getElementById('setHeaderTitle');
  const headerDesc = document.getElementById('setHeaderDesc');
  const metaMarks = document.getElementById('setMetaMarks');
  const controlsRow = document.getElementById('controlsRow');
  const scoreBanner = document.getElementById('scoreBanner');
  const mcqContainer = document.getElementById('mcqContainer');
  const tasksContainer = document.getElementById('structuredTasksContainer');

  if (tabKey === 'setA') {
    headerBadge.innerText = '★ IJAIO Problem Set A · Easy Level';
    headerTitle.innerText = 'Upper Primary · Quiz A';
    headerDesc.innerText = 'Foundational understanding: identifying rule vs learning patterns, basic token mechanics, standard prompt anatomy, and foundational safety habits.';
    metaMarks.innerText = '30 MCQ · 60 marks';
    controlsRow.style.display = 'flex';
    scoreBanner.style.display = 'flex';
    mcqContainer.style.display = 'flex';
    tasksContainer.style.display = 'none';
    renderMCQs(quizDataEasy, 'setA');
  } else if (tabKey === 'setB') {
    headerBadge.innerText = '★ IJAIO Problem Set B · Medium Level';
    headerTitle.innerText = 'Upper Primary · Quiz B';
    headerDesc.innerText = 'Application & procedural logic: hand-calculating weighted scoring machines, next-word probabilities, prompt refinements, and agentic tool workflows.';
    metaMarks.innerText = '30 MCQ · 60 marks';
    controlsRow.style.display = 'flex';
    scoreBanner.style.display = 'flex';
    mcqContainer.style.display = 'flex';
    tasksContainer.style.display = 'none';
    renderMCQs(quizDataMedium, 'setB');
  } else if (tabKey === 'setC') {
    headerBadge.innerText = '★ IJAIO Problem Set C · Hard Level';
    headerTitle.innerText = 'Upper Primary · Quiz C';
    headerDesc.innerText = 'Higher-order reasoning & adversarial thinking: confounding dataset bias, BPE sub-word anomalies, hallucination forensics, and agent failure modes.';
    metaMarks.innerText = '30 MCQ · 60 marks';
    controlsRow.style.display = 'flex';
    scoreBanner.style.display = 'flex';
    mcqContainer.style.display = 'flex';
    tasksContainer.style.display = 'none';
    renderMCQs(quizDataHard, 'setC');
  } else if (tabKey === 'tasks') {
    headerBadge.innerText = '★ Section B · Structured Tasks (6 Questions)';
    headerTitle.innerText = 'Structured Tasks · Sets A, B & C';
    headerDesc.innerText = 'Extended scenario tasks with step-by-step marking rubrics, teacher rationales, and model answers covering all 5 AI Pillars.';
    metaMarks.innerText = '6 Tasks · 20 marks each';
    controlsRow.style.display = 'none';
    scoreBanner.style.display = 'none';
    mcqContainer.style.display = 'none';
    tasksContainer.style.display = 'block';
    renderStructuredTasks();
  }

  updateScore();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCurrentView() {
  switchProblemSet(currentTab);
}

function renderMCQs(dataset, setKey) {
  const container = document.getElementById('mcqContainer');
  container.innerHTML = '';

  dataset.forEach((qItem, idx) => {
    const itemKey = `${setKey}_${idx}`;
    const answeredIndex = userAnswers[itemKey];
    const isAnswered = answeredIndex !== undefined;

    const card = document.createElement('div');
    card.className = `q-card ${qItem.tag}`;
    card.setAttribute('data-domain', qItem.tag);

    if (currentDomainFilter !== 'all' && qItem.tag !== currentDomainFilter) {
      card.style.display = 'none';
    }

    let headerHtml = `
      <div class="q-header">
        <div class="q-num-wrap">
          <span class="q-num">Q${idx + 1}</span>
          <span class="q-domain-badge ${qItem.tag}">${qItem.tagLabel}</span>
          <span class="lo-tag" style="display: ${isTeacherMode ? 'inline-block' : 'none'};">${qItem.lo}</span>
        </div>
        <span style="font-family: 'Space Mono', monospace; font-size: 11.5px; color: var(--text-muted);">2 marks</span>
      </div>
    `;

    let questionHtml = `<div class="q-text">${escapeHtml(qItem.q)}</div>`;
    let byhandHtml = qItem.byhand ? `<div class="code-scenario-box">${escapeHtml(qItem.byhand)}</div>` : '';

    const labels = ['A', 'B', 'C', 'D'];
    let optionsHtml = '<div class="options-grid">';
    qItem.o.forEach((optText, optIdx) => {
      let btnClass = 'option-btn';
      let markIcon = '';

      if (isAnswered) {
        if (optIdx === qItem.a) {
          btnClass += ' correct';
          markIcon = '<span class="opt-mark">✓</span>';
        } else if (optIdx === answeredIndex) {
          btnClass += ' wrong';
          markIcon = '<span class="opt-mark">✕</span>';
        }
      }

      optionsHtml += `
        <button 
          class="${btnClass}" 
          ${isAnswered ? 'disabled' : ''} 
          onclick="selectOption('${setKey}', ${idx}, ${optIdx})"
        >
          <span class="opt-letter">${labels[optIdx]}</span>
          <span style="flex: 1;">${escapeHtml(optText)}</span>
          ${markIcon}
        </button>
      `;
    });
    optionsHtml += '</div>';

    let explainHtml = `
      <div class="explanation-box" style="display: ${isAnswered ? 'block' : 'none'};">
        <b>Why:</b> ${escapeHtml(qItem.e)}
      </div>
    `;

    card.innerHTML = headerHtml + questionHtml + byhandHtml + optionsHtml + explainHtml;
    container.appendChild(card);
  });
}

function selectOption(setKey, qIdx, optIdx) {
  const itemKey = `${setKey}_${qIdx}`;
  if (userAnswers[itemKey] !== undefined) return;

  userAnswers[itemKey] = optIdx;

  let currentData = quizDataEasy;
  if (setKey === 'setB') currentData = quizDataMedium;
  if (setKey === 'setC') currentData = quizDataHard;

  renderMCQs(currentData, setKey);
  updateScore();
}

function updateScore() {
  let activeData = quizDataEasy;
  let setPrefix = 'setA';
  if (currentTab === 'setB') { activeData = quizDataMedium; setPrefix = 'setB'; }
  if (currentTab === 'setC') { activeData = quizDataHard; setPrefix = 'setC'; }

  if (currentTab === 'tasks') return;

  const totalPossible = activeData.length * 2;
  let earned = 0;

  activeData.forEach((q, idx) => {
    const itemKey = `${setPrefix}_${idx}`;
    if (userAnswers[itemKey] === q.a) earned += 2;
  });

  const pct = Math.round((earned / totalPossible) * 100) || 0;
  document.getElementById('scoreDisplay').innerText = `${earned} / ${totalPossible} marks (${pct}%)`;
  document.getElementById('progressFill').style.width = `${pct}%`;
}

function resetCurrentQuiz() {
  const setPrefix = currentTab;
  for (let i = 0; i < 30; i++) delete userAnswers[`${setPrefix}_${i}`];
  renderCurrentView();
  updateScore();
}

function filterDomain(domain) {
  currentDomainFilter = domain;
  document.querySelectorAll('.chip-tag').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.q-card').forEach(card => {
    card.style.display = (domain === 'all' || card.getAttribute('data-domain') === domain) ? 'block' : 'none';
  });
}

function toggleTeacherMode() {
  isTeacherMode = !isTeacherMode;
  const btn = document.getElementById('btnTeacherToggle');
  btn.classList.toggle('active', isTeacherMode);
  btn.innerText = isTeacherMode ? '👁 Outcome Tags: ON (Teacher View)' : '🏫 Show Outcome Tags (Teacher)';

  document.querySelectorAll('.lo-tag').forEach(tag => {
    tag.style.display = isTeacherMode ? 'inline-block' : 'none';
  });
}

function renderStructuredTasks() {
  const container = document.getElementById('structuredTasksContainer');
  container.innerHTML = '';

  structuredTasksData.forEach((task) => {
    const card = document.createElement('div');
    card.className = 'task-card';

    let tagsHtml = task.tags.map(t => `<span class="q-domain-badge ${t[1]}">${t[0]}</span> `).join('');
    let partsHtml = task.parts.map(p => `
      <div class="part-item">
        <span class="part-letter">${p[0]})</span>
        <div style="flex: 1;">${p[1]}</div>
      </div>
    `).join('');

    let rubricHtml = task.rubric.map(r => `
      <div class="rubric-part">
        <div class="rubric-pts">${r.pts}</div>
        <div class="rubric-desc">${r.desc}</div>
        <div class="rubric-rationale">Marker's Rationale: ${r.rationale}</div>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="task-header">
        <div>
          <span style="font-family: 'Space Mono', monospace; font-size: 11px; font-weight: 700; color: var(--amber); text-transform: uppercase;">
            ${task.level} · ${task.pillar}
          </span>
          <h3 class="task-title">${task.title}</h3>
        </div>
        <span class="task-marks-badge">${task.marks} marks</span>
      </div>

      <div style="margin-bottom: 14px;">${tagsHtml}</div>
      <div class="scenario-box">${task.scenario}</div>
      <div class="task-parts-list">${partsHtml}</div>

      <textarea class="user-textarea" placeholder="Type or outline your solution here for practice..."></textarea>

      <div>
        <button class="btn-toggle-model" onclick="toggleModelDrawer(this)">
          Show Model Answer & Marking Rubric
        </button>
      </div>

      <div class="model-answer-drawer">
        <div class="model-header">Suggested Marking Guide & Rationale · 20 Marks</div>
        <div class="model-content">${rubricHtml}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleModelDrawer(btn) {
  const drawer = btn.parentElement.nextElementSibling;
  if (drawer.style.display === 'block') {
    drawer.style.display = 'none';
    btn.innerText = 'Show Model Answer & Marking Rubric';
  } else {
    drawer.style.display = 'block';
    btn.innerText = 'Hide Model Answer';
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

window.addEventListener('DOMContentLoaded', () => {
  loadQuizData();
});