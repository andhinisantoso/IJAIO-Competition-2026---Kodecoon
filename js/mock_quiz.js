// State Management Variables
let currentLevel = null;
let rawExamData = null;
let userAnswersMCQ = {};
let userAnswersTasks = {};
let examTimer = null;
let timeRemainingSeconds = 0;

// Configuration map for levels
// PASIKAN NAMA FILE JSON SESUAI DENGAN YANG ADA DI FOLDER PROJECT KAMU
const examConfigs = {
  prilower: {
    jsonFile: '../data/problem-set-a/lower-primary.json', // Jika nama file kamu low_quiz.json, ganti di sini
    title: 'Lower Primary (Grades 1–3)',
    minutes: 45,
    mcqMarksPerItem: 3,
    taskMarksPerItem: 20
  },
  priupper: {
    jsonFile: '../data/problem-set-a/upper-primary.json', // Jika nama file kamu up_quiz.json, ganti di sini
    title: 'Upper Primary (Grades 4–6)',
    minutes: 60,
    mcqMarksPerItem: 2,
    taskMarksPerItem: 20
  },
  seclower: {
    jsonFile: '../data/problem-set-a/lower-secondary.json',
    title: 'Lower Secondary (Grades 7–8)',
    minutes: 90,
    mcqMarksPerItem: 2,
    taskMarksPerItem: 20
  },
  secupper: {
    jsonFile: '../data/problem-set-a/upper-secondary.json',
    title: 'Upper Secondary (Grades 9–12)',
    minutes: 90,
    mcqMarksPerItem: 2,
    taskMarksPerItem: 20
  }
};

// Start Exam
async function startExam(levelKey) {
  currentLevel = levelKey;
  const config = examConfigs[levelKey];

  if (!config) {
    alert("Level configuration not found!");
    return;
  }

  try {
    console.log(`Loading ${config.jsonFile}...`);
    const response = await fetch(config.jsonFile);
    
    if (!response.ok) {
      throw new Error(`Gagal membaca ${config.jsonFile}. Status: ${response.status}`);
    }
    
    rawExamData = await response.json();

    // Reset state
    userAnswersMCQ = {};
    userAnswersTasks = {};
    timeRemainingSeconds = config.minutes * 60;

    // UI Updates - Sembunyikan setup, tampilkan layar ujian
    document.getElementById('setupScreen').style.display = 'none';
    document.getElementById('examActiveScreen').style.display = 'block';
    document.getElementById('activeLevelTag').innerText = config.title;

    // Render Questions (Active State - No feedback)
    renderActiveMCQs();
    renderActiveTasks();

    // Start Timer
    startTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (err) {
    console.error("Failed to load exam data:", err);
    alert(`Error: ${err.message}\n\nPastikan:\n1. File JSON '${config.jsonFile}' ada di folder utama.\n2. Kamu menjalankan web menggunakan Live Server di VS Code.`);
  }
}

// Timer Logic
function startTimer() {
  updateTimerDisplay();
  if (examTimer) clearInterval(examTimer);
  
  examTimer = setInterval(() => {
    timeRemainingSeconds--;
    updateTimerDisplay();

    if (timeRemainingSeconds <= 0) {
      clearInterval(examTimer);
      alert("⏰ Time is up! Your examination is being submitted automatically.");
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(timeRemainingSeconds / 60);
  const secs = timeRemainingSeconds % 60;
  const clockText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('timerClock').innerText = clockText;
}

// Render Active MCQs
function renderActiveMCQs() {
  const container = document.getElementById('mcqExamContainer');
  container.innerHTML = '';
  const config = examConfigs[currentLevel];

  if (!rawExamData.mcqs || rawExamData.mcqs.length === 0) {
    container.innerHTML = '<p>No MCQ questions found in this dataset.</p>';
    return;
  }

  rawExamData.mcqs.forEach((qItem, idx) => {
    const card = document.createElement('div');
    card.className = 'q-card';

    const labels = ['A', 'B', 'C', 'D'];
    let optionsHtml = '<div class="options-grid">';
    
    // Support baik format array 'o' atau 'options'
    const optionsList = qItem.o || qItem.options || [];
    
    optionsList.forEach((optText, optIdx) => {
      const isSelected = userAnswersMCQ[idx] === optIdx;
      optionsHtml += `
        <button 
          type="button"
          class="option-btn ${isSelected ? 'selected' : ''}" 
          onclick="selectMCQOption(${idx}, ${optIdx})"
        >
          <span class="opt-letter">${labels[optIdx]}</span>
          <span>${escapeHtml(optText)}</span>
        </button>
      `;
    });
    optionsHtml += '</div>';

    let byhandHtml = qItem.byhand ? `<div class="code-scenario-box">${escapeHtml(qItem.byhand)}</div>` : '';

    card.innerHTML = `
      <div class="q-header">
        <span class="q-num">Question ${idx + 1}</span>
        <span class="q-marks">${config.mcqMarksPerItem} marks</span>
      </div>
      <div class="q-text">${escapeHtml(qItem.q || qItem.question)}</div>
      ${byhandHtml}
      ${optionsHtml}
    `;
    container.appendChild(card);
  });
}

function selectMCQOption(qIdx, optIdx) {
  userAnswersMCQ[qIdx] = optIdx;
  renderActiveMCQs();
}

// Render Active Structured Tasks
function renderActiveTasks() {
  const container = document.getElementById('tasksExamContainer');
  container.innerHTML = '';
  const config = examConfigs[currentLevel];

  const tasksList = rawExamData.structured || rawExamData.tasks || [];

  if (tasksList.length === 0) {
    container.innerHTML = '<p>No structured tasks found in this dataset.</p>';
    return;
  }

  tasksList.forEach((task, idx) => {
    const card = document.createElement('div');
    card.className = 'q-card';

    const partsList = task.parts || [];
    let partsHtml = partsList.map(p => {
      if (Array.isArray(p)) return `<div style="margin-bottom:6px;"><b>${p[0]})</b> ${p[1]}</div>`;
      return `<div style="margin-bottom:6px;">${p}</div>`;
    }).join('');

    card.innerHTML = `
      <div class="q-header">
        <span class="q-num">${task.title}</span>
        <span class="q-marks">${config.taskMarksPerItem} marks</span>
      </div>
      <div class="code-scenario-box" style="text-align:left;">${task.scenario}</div>
      <div style="font-size:14px; margin-bottom:12px;">${partsHtml}</div>
      <textarea 
        class="user-textarea" 
        placeholder="Type your response here..." 
        oninput="saveTaskAnswer(${idx}, this.value)"
      >${userAnswersTasks[idx] || ''}</textarea>
    `;
    container.appendChild(card);
  });
}

function saveTaskAnswer(taskIdx, val) {
  userAnswersTasks[taskIdx] = val;
}

// Submit Examination & Show Results Page
function submitExam(isAuto) {
  if (!isAuto) {
    const confirmSub = confirm("Are you sure you want to submit your examination?");
    if (!confirmSub) return;
  }

  if (examTimer) clearInterval(examTimer);
  document.getElementById('examActiveScreen').style.display = 'none';
  document.getElementById('resultsScreen').style.display = 'block';

  calculateAndRenderResults();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Results Calculation & Render
function calculateAndRenderResults() {
  const config = examConfigs[currentLevel];
  let earnedMCQMarks = 0;
  const mcqList = rawExamData.mcqs || [];
  const totalMCQMarks = mcqList.length * config.mcqMarksPerItem;

  // 1. Calculate Score for MCQs
  mcqList.forEach((qItem, idx) => {
    const correctAnsIndex = qItem.a !== undefined ? qItem.a : qItem.answer;
    if (userAnswersMCQ[idx] === correctAnsIndex) {
      earnedMCQMarks += config.mcqMarksPerItem;
    }
  });

  const pct = totalMCQMarks > 0 ? Math.round((earnedMCQMarks / totalMCQMarks) * 100) : 0;
  document.getElementById('finalScoreVal').innerText = `${earnedMCQMarks} / ${totalMCQMarks} (MCQ)`;
  document.getElementById('finalScorePct').innerText = `${pct}% MCQ Score`;

  // 2. Render MCQ Results
  const mcqContainer = document.getElementById('mcqResultsContainer');
  mcqContainer.innerHTML = '';

  mcqList.forEach((qItem, idx) => {
    const card = document.createElement('div');
    card.className = 'q-card';

    const correctAnsIndex = qItem.a !== undefined ? qItem.a : qItem.answer;
    const userChoice = userAnswersMCQ[idx];
    const isCorrect = userChoice === correctAnsIndex;
    const labels = ['A', 'B', 'C', 'D'];
    const optionsList = qItem.o || qItem.options || [];

    let optionsHtml = '<div class="options-grid">';
    optionsList.forEach((optText, optIdx) => {
      let statusClass = '';
      if (optIdx === correctAnsIndex) statusClass = 'correct-ans';
      else if (optIdx === userChoice && !isCorrect) statusClass = 'wrong-ans';

      optionsHtml += `
        <div class="option-btn ${statusClass}">
          <span class="opt-letter">${labels[optIdx]}</span>
          <span style="flex:1;">${escapeHtml(optText)}</span>
          ${optIdx === correctAnsIndex ? '<b>✓ Correct Answer</b>' : ''}
          ${optIdx === userChoice && !isCorrect ? '<b>✕ Your Choice</b>' : ''}
        </div>
      `;
    });
    optionsHtml += '</div>';

    let byhandHtml = qItem.byhand ? `<div class="code-scenario-box">${escapeHtml(qItem.byhand)}</div>` : '';

    card.innerHTML = `
      <div class="q-header">
        <span class="q-num">Question ${idx + 1} ${isCorrect ? '✅' : '❌'}</span>
        <span class="q-marks">${isCorrect ? config.mcqMarksPerItem : 0} / ${config.mcqMarksPerItem} marks</span>
      </div>
      <div class="q-text">${escapeHtml(qItem.q || qItem.question)}</div>
      ${byhandHtml}
      ${optionsHtml}
      <div class="explanation-box">
        <b>Explanation:</b> ${qItem.e || qItem.explanation || 'No explanation provided.'}
      </div>
    `;
    mcqContainer.appendChild(card);
  });

  // 3. Render Tasks Results & Rubrics
  const tasksContainer = document.getElementById('tasksResultsContainer');
  tasksContainer.innerHTML = '';
  const tasksList = rawExamData.structured || rawExamData.tasks || [];

  tasksList.forEach((task, idx) => {
    const card = document.createElement('div');
    card.className = 'q-card';

    const partsList = task.parts || [];
    let partsHtml = partsList.map(p => {
      if (Array.isArray(p)) return `<div style="margin-bottom:6px;"><b>${p[0]})</b> ${p[1]}</div>`;
      return `<div style="margin-bottom:6px;">${p}</div>`;
    }).join('');

    const modelList = task.model || task.rubric || [];
    let rubricHtml = modelList.map(m => `
      <div class="rubric-part">
        <div class="rubric-pts">${m.pts}</div>
        <div class="rubric-desc">${m.text || m.desc}</div>
        <div class="rubric-rationale">Marker's Rationale: ${m.rationale || 'N/A'}</div>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="q-header">
        <span class="q-num">${task.title}</span>
        <span class="q-marks">${config.taskMarksPerItem} marks</span>
      </div>
      <div class="code-scenario-box" style="text-align:left;">${task.scenario}</div>
      <div style="font-size:14px; margin-bottom:12px;">${partsHtml}</div>

      <div style="margin-bottom:12px;">
        <label style="font-family:'Space Mono', monospace; font-size:12px; font-weight:700;">Your Response:</label>
        <div style="background:#FAF6EF; border:1px solid #E3D7C4; padding:12px; border-radius:10px; font-size:14px;">
          ${escapeHtml(userAnswersTasks[idx] || 'No response provided.')}
        </div>
      </div>

      <div class="rubric-box">
        <div style="font-family:'Space Mono', monospace; font-size:12px; font-weight:700; margin-bottom:8px;">Model Answer & Rubric:</div>
        ${rubricHtml}
      </div>
    `;
    tasksContainer.appendChild(card);
  });
}

function confirmExit() {
  if (examTimer && timeRemainingSeconds > 0) {
    const res = confirm("Your exam is still in progress. Exiting will discard your current progress. Continue?");
    if (res) window.location.href = "mock_quiz.html";
  } else {
    window.location.href = "mock_quiz.html";
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