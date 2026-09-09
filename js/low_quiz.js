// Variable Data Quiz
let quizDataEasy = [];
let quizDataMedium = [];
let quizDataHard = [];

// Static Data Structured Tasks
// Static Data Structured Tasks (6 Tasks Lengkap)
const structuredTasksData = [
  {
    id: "task-A1",
    level: "Easy · Set A Level",
    title: "Task A1 · Be the Pattern Robot",
    marks: 20,
    pillar: "Pillar 1 (Representation) & Pillar 2 (Learning)",
    tags: [["First Principles", "t-fp"]],
    scenario: "A stamping robot decorates the classroom border by following ONE repeating rule:<br><br><b>①⭐ ②⭐ ③🌙 ④🌙 ⑤⭐ ⑥⭐ ⑦🌙 ⑧🌙 ⑨❓</b>",
    parts: [
      ["a", "What shape comes at position 9? Continue the border for positions 9, 10, and 11."],
      ["b", "Write the robot's repeating rule in plain words so another child in Grade 1 can follow it."],
      ["c", "WITHOUT drawing every single stamp, what shape will be at position 16? Explain how the rule tells you."]
    ],
    rubric: [
      { pts: "a) 7 marks", desc: "Position 9 = ⭐, Position 10 = ⭐, Position 11 = 🌙.", rationale: "Assesses ability to continue an unplugged repeating sequence." },
      { pts: "b) 7 marks", desc: "Clear description: 'Two stars, then two moons, repeat.'", rationale: "Tests ability to extract an algorithmic rule." },
      { pts: "c) 6 marks", desc: "Position 16 is a 🌙.", rationale: "Evaluates mathematical extrapolation." }
    ]
  },
  {
    id: "task-A2",
    level: "Easy · Set A Level",
    title: "Task A2 · Design a Classroom Tidying Robot",
    marks: 20,
    pillar: "Pillar 4 (Agency) & Pillar 5 (Responsibility)",
    tags: [["AI Agent", "t-agent"], ["AI Ethics", "t-ethics"]],
    scenario: "Imagine a friendly classroom robot whose goal is to keep the reading corner neat and tidy.<br><br>An AI helper follows the 3-step loop: <b>SENSE → THINK → ACT</b>.",
    parts: [
      ["a", "What sensor parts does your robot need so it can see or hear the classroom? Name at least one sensor."],
      ["b", "Write out its 3 steps when it spots a book on the carpet: SENSE → THINK → ACT."],
      ["c", "<b>Dilemma:</b> The robot finds an open drawing lying on the floor. What should the kind robot do, and why?"]
    ],
    rubric: [
      { pts: "a) 5 marks", desc: "Names a realistic sensor: camera/eyes or microphone.", rationale: "Checks understanding that an AI agent requires sensory inputs." },
      { pts: "b) 9 marks", desc: "SENSE: Camera sees book → THINK: Decides shelf location → ACT: Arm puts book back.", rationale: "Rewards understanding the complete Sense-Think-Act loop." },
      { pts: "c) 6 marks", desc: "The robot should NOT throw it away; pause and ask a teacher or save in a box.", rationale: "Tests understanding that AI agents should pause when uncertain." }
    ]
  },
  {
    id: "task-B1",
    level: "Medium · Set B Level",
    title: "Task B1 · The Fruit Sorting Machine Rules & Exceptions",
    marks: 20,
    pillar: "Pillar 2 (Learning) & Pillar 1 (Representation)",
    tags: [["First Principles", "t-fp"], ["AI Ethics", "t-ethics"]],
    scenario: "A smart cafeteria robot sorts fruit into lunch baskets using two rules:<br>• <b>Rule 1:</b> IF yellow → Basket A<br>• <b>Rule 2:</b> IF red → Basket B<br><br>Fruits: 🍌 Banana, 🍎 Apple, 🍋 Lemon, 🍓 Strawberry, and 🍏 Green Apple.",
    parts: [
      ["a", "For each of the five fruits, write which basket the robot should put it in based strictly on the rules."],
      ["b", "What happens when the robot encounters the <b>Green Apple</b>? Why does a simple rule machine get stuck?"],
      ["c", "How should we update the robot's program so it handles green apples and purple grapes safely without crashing?"]
    ],
    rubric: [
      { pts: "a) 8 marks", desc: "Banana/Lemon → A, Apple/Strawberry → B, Green Apple → No match.", rationale: "Tests strict algorithmic rule execution." },
      { pts: "b) 6 marks", desc: "Matches neither rule. Rigid machines get stuck when encountering unknown inputs.", rationale: "Demonstrates limits of rule-based systems." },
      { pts: "c) 6 marks", desc: "Add an 'OTHERWISE / ELSE' exception rule (e.g., put in Basket C or ask human).", rationale: "Shows default exception handling logic." }
    ]
  },
  {
    id: "task-B2",
    level: "Medium · Set B Level",
    title: "Task B2 · The Next-Word Lullaby Predictor",
    marks: 20,
    pillar: "Pillar 3 (Generation) & Pillar 1 (Representation)",
    tags: [["Generative AI", "t-genai"], ["First Principles", "t-fp"]],
    scenario: "A bedtime story AI follows the sentence <i>“Twinkle, twinkle, little…”</i>. Counts for next word:<br><br><b>“star” → 7 times &nbsp;|&nbsp; “car” → 2 times &nbsp;|&nbsp; “bear” → 1 time</b> (Total = 10 times)",
    parts: [
      ["a", "Which word is the AI model MOST likely to choose next, and why?"],
      ["b", "Write the chance (as a fraction or percentage out of 10) for the model picking <b>“star”</b> versus <b>“bear”</b>."],
      ["c", "A student presses generate twice and gets “star” first, then “car”. Explain why this is NOT a bug."]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "Most likely 'star' due to highest frequency count (7/10).", rationale: "Tests frequency-based probability." },
      { pts: "b) 6 marks", desc: "'star' = 7/10 (70%), 'bear' = 1/10 (10%).", rationale: "Assesses mathematical representation of probability." },
      { pts: "c) 8 marks", desc: "Generative AI uses probability sampling (temperature) to create varied and creative outputs.", rationale: "Connects probability distribution to AI creativity." }
    ]
  },
  {
    id: "task-C1",
    level: "Hard · Set C Level",
    title: "Task C1 · Fixing Dataset Bias in an Animal Camera",
    marks: 20,
    pillar: "Pillar 2 (Learning) & Pillar 5 (Responsibility)",
    tags: [["First Principles", "t-fp"], ["AI Ethics", "t-ethics"]],
    scenario: "A wildlife camera AI is trained with <b>50 photos of brown dogs</b>, but <b>0 photos of white dogs or black cats</b>.<br><br>In testing, the camera misses a white puppy and calls a brown cardboard box a 'dog'!",
    parts: [
      ["a", "Why did the camera get confused by the cardboard box and miss the white puppy?"],
      ["b", "Explain what <b>training dataset bias</b> means using this puppy example."],
      ["c", "Design a fair, balanced mini-dataset of 6 photos so the camera reliably identifies dogs."]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "Camera learned 'brown color = dog', ignoring shape and anatomy.", rationale: "Diagnoses spurious feature correlation." },
      { pts: "b) 6 marks", desc: "Dataset bias happens when training examples leave out important groups.", rationale: "Tests mastery of algorithmic bias." },
      { pts: "c) 8 marks", desc: "Balanced dataset: brown/white/black dogs + brown box/cat/bench.", rationale: "Assesses dataset debiasing capability." }
    ]
  },
  {
    id: "task-C2",
    level: "Hard · Set C Level",
    title: "Task C2 · Prompt Detective, Hallucinations & Honesty",
    marks: 20,
    pillar: "Pillar 3 (Generation) & Pillar 5 (Responsibility)",
    tags: [["Generative AI", "t-genai"], ["AI Ethics", "t-ethics"]],
    scenario: "Sam prompts a chatbot: <i>“Tell me about the real moon astronaut who walked a pet dinosaur in 1969.”</i><br><br>Chatbot: <i>“Astronaut Neil Armstrong walked his pet baby Stegosaurus Barney on the moon in 1969.”</i>",
    parts: [
      ["a", "Explain how Sam's prompt caused an <b>AI hallucination</b>."],
      ["b", "Rewrite Sam's prompt so the chatbot gives real, accurate historical facts."],
      ["c", "Write one honest sentence Sam should include at the bottom of his poster about using AI."]
    ],
    rubric: [
      { pts: "a) 6 marks", desc: "Prompt contained an impossible premise. Chatbots predict words to fit user prompts, creating hallucinations.", rationale: "Diagnoses premise-adoption hallucinations." },
      { pts: "b) 6 marks", desc: "Improved prompt specifying persona, real facts, and rejecting fiction.", rationale: "Demonstrates prompt refinement." },
      { pts: "c) 8 marks", desc: "Honest statement declaring AI usage and fact-checking steps.", rationale: "Instills academic honesty and verification." }
    ]
  }
];

let currentTab = 'setA';
let currentDomainFilter = 'all';
let isTeacherMode = false;
let userAnswers = {};

// MEMANGGIL FILE JSON EKSTERNAL
async function loadQuizData() {
  try {
    const response = await fetch('../data/low_quiz.json');
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
        <b>Error:</b> Gagal memuat data kuis dari <code>low_quiz.json</code>.<br>
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
    headerTitle.innerText = 'Lower Primary · Quiz A';
    headerDesc.innerText = 'Foundational understanding: recognizing codes, simple repeating patterns, and personal safety rules.';
    metaMarks.innerText = '20 MCQ · 60 marks';
    controlsRow.style.display = 'flex';
    scoreBanner.style.display = 'flex';
    mcqContainer.style.display = 'flex';
    tasksContainer.style.display = 'none';
    renderMCQs(quizDataEasy, 'setA');
  } else if (tabKey === 'setB') {
    headerBadge.innerText = '★ IJAIO Problem Set B · Medium Level';
    headerTitle.innerText = 'Lower Primary · Quiz B';
    headerDesc.innerText = 'Application & procedural logic: following IF-THEN rules, decoding letter-number tokens.';
    metaMarks.innerText = '20 MCQ · 60 marks';
    controlsRow.style.display = 'flex';
    scoreBanner.style.display = 'flex';
    mcqContainer.style.display = 'flex';
    tasksContainer.style.display = 'none';
    renderMCQs(quizDataMedium, 'setB');
  } else if (tabKey === 'setC') {
    headerBadge.innerText = '★ IJAIO Problem Set C · Hard Level';
    headerTitle.innerText = 'Lower Primary · Quiz C';
    headerDesc.innerText = 'Deeper reasoning & edge cases: diagnosing dataset bias, handling exceptions outside rules.';
    metaMarks.innerText = '20 MCQ · 60 marks';
    controlsRow.style.display = 'flex';
    scoreBanner.style.display = 'flex';
    mcqContainer.style.display = 'flex';
    tasksContainer.style.display = 'none';
    renderMCQs(quizDataHard, 'setC');
  } else if (tabKey === 'tasks') {
    headerBadge.innerText = '★ Section B · Structured Tasks';
    headerTitle.innerText = 'Structured Tasks · Sets A, B & C';
    headerDesc.innerText = 'Hands-on drawing and writing tasks with marking rubrics.';
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
        <span style="font-family: 'Space Mono', monospace; font-size: 11.5px; color: var(--text-muted);">3 marks</span>
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
        <b>Why:</b> ${qItem.e}
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

  const totalPossible = activeData.length * 3;
  let earned = 0;

  activeData.forEach((q, idx) => {
    const itemKey = `${setPrefix}_${idx}`;
    if (userAnswers[itemKey] === q.a) earned += 3;
  });

  const pct = Math.round((earned / totalPossible) * 100) || 0;
  document.getElementById('scoreDisplay').innerText = `${earned} / ${totalPossible} marks (${pct}%)`;
  document.getElementById('progressFill').style.width = `${pct}%`;
}

function resetCurrentQuiz() {
  const setPrefix = currentTab;
  for (let i = 0; i < 20; i++) delete userAnswers[`${setPrefix}_${i}`];
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
          <span style="font-family: 'Space Mono', monospace; font-size: 11px; font-weight: 700; color: var(--coral); text-transform: uppercase;">
            ${task.level} · ${task.pillar}
          </span>
          <h3 class="task-title">${task.title}</h3>
        </div>
        <span class="task-marks-badge">${task.marks} marks</span>
      </div>

      <div style="margin-bottom: 14px;">${tagsHtml}</div>
      <div class="scenario-box">${task.scenario}</div>
      <div class="task-parts-list">${partsHtml}</div>

      <!-- Area Teks untuk Jawaban Siswa -->
      <textarea class="user-textarea" placeholder="Write or describe your answer here for practice..."></textarea>

      <!-- Tombol Toggle Kunci Jawaban -->
      <div>
        <button class="btn-toggle-model" onclick="toggleModelDrawer(this)">
          Show Model Answer & Marking Rubric
        </button>
      </div>

      <!-- Drawer Rubrik / Model Answer -->
      <div class="model-answer-drawer">
        <div class="model-header">Suggested Marking Guide & Rationale · 20 Marks</div>
        <div class="model-content">${rubricHtml}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Fungsi untuk membuka / menutup rubrik penilai
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