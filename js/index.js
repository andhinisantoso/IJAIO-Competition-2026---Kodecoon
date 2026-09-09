// COMPLETE PRECISE CURRICULUM DATABASE FOR ALL 4 BANDS
const pillarsDataByBand = {
  'lower-pri': {
    title: 'Lower<br>Primary',
    grades: 'Grades 1–3',
    stats: '45 minutes · 20 MCQ + 2 tasks',
    desc: 'A gentle, playful, mostly-unplugged start: recognise AI, follow rules and patterns by hand, and meet generative AI safely.',
    focus: 'Recognise AI, follow simple rules and patterns by hand, and meet generative AI safely.',
    success: 'Learners recognise familiar AI examples, follow simple rule-based processes, talk about safety and privacy, and complete visual or unplugged tasks with clear explanations.',
    themeColor: '#FF6A5A',
    pillars: [
      {
        num: 1,
        title: 'Representation',
        disposition: 'Looks for the rule or pattern behind a behaviour rather than calling it magic.',
        outcomes: [
          { id: '1.1', text: 'Explain that AI is a computer program made by people, not alive, with no real feelings.' },
          { id: '1.2', text: 'Describe how computers store words and pictures as numbers, not letters.' },
          { id: '1.3', text: 'Encode and decode a short word using a letter-to-number code sheet.' },
          { id: '1.4', text: 'Sort objects or pictures into groups by a shared feature (early classification).' }
        ],
        evidence: 'Sort picture cards into groups, then encode a short word with a simple letter-to-number key.',
        terms: []
      },
      {
        num: 2,
        title: 'Learning',
        disposition: 'Believes behaviour is learned from examples, not magic; keeps trying and checking.',
        outcomes: [
          { id: '2.1', text: 'Explain that AI learns from many examples: many cat pictures help it learn "cat".' },
          { id: '2.2', text: 'Continue a pattern and predict what comes next (the seed of prediction).' },
          { id: '2.3', text: 'Carry out a simple rule by hand, like a robot following instructions.' },
          { id: '2.4', text: 'Find a way through a simple maze by trying and checking (the seed of search).' }
        ],
        evidence: 'Continue a visual pattern and solve a small maze, explaining each choice made.',
        terms: []
      },
      {
        num: 3,
        title: 'Generation',
        disposition: 'Curious about how new things are made; tells "making" apart from "finding".',
        outcomes: [
          { id: '3.1', text: 'Tell apart making something new (generative AI) from finding what already exists (search).' },
          { id: '3.2', text: 'Play "what comes next?" guessing games to experience prediction at work.' }
        ],
        evidence: 'Sort "made by AI" vs "found" examples and play a next-word guessing game.',
        terms: []
      },
      {
        num: 4,
        title: 'Interaction & Agency',
        disposition: 'Asks clearly and kindly; designs helpers with care and safety.',
        outcomes: [
          { id: '4.1', text: 'Ask an AI helper a clear, kind question (the seed of prompting).' },
          { id: '4.2', text: 'Describe how a helper machine works as a loop: Sense → Think → Act.' },
          { id: '4.3', text: 'Draw and label a simple helper robot: what it senses (its sensors) and the steps it follows.' }
        ],
        evidence: 'Draw a helper robot for the classroom and label what it senses, how it decides, and what it does next.',
        terms: []
      },
      {
        num: 5,
        title: 'Responsibility',
        disposition: 'Cares for safety and others; checks before trusting and is honest about AI help.',
        outcomes: [
          { id: '5.1', text: 'Identify private information - home address, phone number, passwords - and keep it private.' },
          { id: '5.2', text: 'Check important AI answers with a trusted adult, because AI can be wrong.' },
          { id: '5.3', text: 'Choose the safer or kinder action in a simple scenario and explain why.' },
          { id: '5.4', text: 'Say honestly when an AI helper was used, for homework, drawings or answers.' }
        ],
        evidence: 'Read three chatbot scenarios, point to what should stay private, and explain the safer choice.',
        terms: []
      }
    ]
  },
  'upper-pri': {
    title: 'Upper<br>Primary',
    grades: 'Grades 4–6',
    stats: '60 minutes · 100 marks',
    desc: 'Rules versus learning from data, the first generative-AI mechanics - next-word prediction and prompting - and checking AI for fairness.',
    focus: 'Rules vs learning from data, the first generative-AI mechanics, and evaluating AI fairly.',
    success: 'Learners compare rules with learning from data, improve prompts, spot simple bias or hallucination risks, and present short design ideas with justification.',
    themeColor: '#E8920C',
    pillars: [
      {
        num: 1,
        title: 'Representation',
        disposition: 'Trusts that meaning can be measured; looks for the numbers behind words and pictures.',
        outcomes: [
          { id: '1.1', text: 'Turn words into numbers and show that similar things get similar numbers (proto-embeddings).' },
          { id: '1.2', text: 'Group items by their features and explain what makes a group alike.' },
          { id: '1.3', text: 'Collect and label a small set of examples (a mini dataset).' },
          { id: '1.4', text: 'Check whether the sample is fair or leaves some things out.' },
          { id: '1.5', text: 'Hand-tokenise a short sentence and notice that one word is not always one token.' }
        ],
        evidence: 'Build and label a small picture set, group it by feature, and say whether the set is fair.',
        terms: ['feature', 'label', 'vector (number-list)']
      },
      {
        num: 2,
        title: 'Learning',
        disposition: 'Believes behaviour is learned from examples, not magic; keeps trying and checking.',
        outcomes: [
          { id: '2.1', text: 'Explain that AI learns from many examples: many cat pictures help it learn "cat".' },
          { id: '2.2', text: 'Continue a pattern and predict what comes next (the seed of prediction).' },
          { id: '2.3', text: 'Carry out a simple rule by hand, like a robot following instructions.' },
          { id: '2.4', text: 'Find a way through a simple maze by trying and checking (the seed of search).' }
        ],
        evidence: 'Continue a visual pattern and solve a small maze, explaining each choice made.',
        terms: ['training data', 'classify', 'generalisation: working on NEW examples']
      },
      {
        num: 3,
        title: 'Generation',
        disposition: 'Curious about how new things are made; tells "making" apart from "finding".',
        outcomes: [
          { id: '3.1', text: 'Tell apart making something new (generative AI) from finding what already exists (search).' },
          { id: '3.2', text: 'Play "what comes next?" guessing games to experience prediction at work.' }
        ],
        evidence: 'Sort "made by AI" vs "found" examples and play a next-word guessing game.',
        terms: ['next-word prediction', 'prompt', 'temperature (the randomness dial)', 'diffusion (painting from noise)']
      },
      {
        num: 4,
        title: 'Interaction & Agency',
        disposition: 'Asks clearly and kindly; designs helpers with care and safety.',
        outcomes: [
          { id: '4.1', text: 'Ask an AI helper a clear, kind question (the seed of prompting).' },
          { id: '4.2', text: 'Describe how a helper machine works as a loop: Sense → Think → Act.' },
          { id: '4.3', text: 'Draw and label a simple helper robot: what it senses (its sensors) and the steps it follows.' }
        ],
        evidence: 'Draw a helper robot for the classroom and label what it senses, how it decides, and what it does next.',
        terms: ['AI agent', 'sense → think → act', 'tool']
      },
      {
        num: 5,
        title: 'Responsibility',
        disposition: 'Cares for safety and others; checks before trusting and is honest about AI help.',
        outcomes: [
          { id: '5.1', text: 'Identify private information - home address, phone number, passwords - and keep it private.' },
          { id: '5.2', text: 'Check important AI answers with a trusted adult, because AI can be wrong.' },
          { id: '5.3', text: 'Choose the safer or kinder action in a simple scenario and explain why.' },
          { id: '5.4', text: 'Say honestly when an AI helper was used, for homework, drawings or answers.' }
        ],
        evidence: 'Read three chatbot scenarios, point to what should stay private, and explain the safer choice.',
        terms: ['hallucination', 'deepfake', 'bias', 'verify']
      }
    ]
  },
  'lower-sec': {
    title: 'Lower<br>Secondary',
    grades: 'Grades 7–8',
    stats: '90 minutes · 20 MCQ + 3 tasks',
    desc: 'Hands-on mechanics by hand and in simple Python: n-gram language models, tokenisation, a single neuron, the ML pipeline, and AI agents.',
    focus: 'Mechanics by hand and in simple Python - and the first explicit analysis of why outputs happen.',
    success: 'Learners explain how simple language models and ML pipelines work, analyse bias and failure points, and reason with short Python-based tasks.',
    themeColor: '#0FA8A4',
    pillars: [
      {
        num: 1,
        title: 'Representation',
        disposition: 'Reasons from how a representation is built rather than treating it as given.',
        outcomes: [
          { id: '1.1', text: 'Describe tokenisation: how text is split into tokens, then turned into numbers.' },
          { id: '1.2', text: 'Hand-tokenise a sentence into tokens and IDs.' },
          { id: '1.3', text: 'Explain why a model can miscount the letters in a word.' },
          { id: '1.4', text: 'Inspect an embedding space: similar words sit close together, and analogies are directions.' },
          { id: '1.5', text: 'Represent an image as a grid of number-pixels, the start of how a computer "sees".' }
        ],
        evidence: 'Hand-tokenise a sentence and explain a miscount; describe an image as a grid of numbers.',
        terms: ['token', 'vector', 'embedding']
      },
      {
        num: 2,
        title: 'Learning',
        disposition: 'Treats learning as a workflow to reason about, not a black box.',
        outcomes: [
          { id: '2.1', text: 'Explain how a neuron computes a weighted sum and "fires" via an activation, and how a network stacks many.' },
          { id: '2.2', text: 'Tell apart the three ways machines learn: supervised, unsupervised (clustering, e.g. k-means) and reinforcement.' },
          { id: '2.3', text: 'Follow the machine-learning workflow (data → train → test → evaluate) and read a confusion matrix.' },
          { id: '2.4', text: 'Code a single neuron and a simple classifier (k-nearest neighbours or a rule) in Python, with a train/test split.' },
          { id: '2.5', text: 'Explain why dataset quality and balance change what a model learns.' }
        ],
        evidence: 'Code a single neuron in Python, run a train/test split, and read off a confusion-matrix count.',
        terms: ['training data', 'train/test split', 'generalisation', 'overfitting vs underfitting', 'feature', 'weights', 'bias', 'activation & threshold', 'accuracy', 'precision & recall', 'reward (RL)', 'RLHF', 'recommender system']
      },
      {
        num: 3,
        title: 'Generation',
        disposition: 'Wants to know why generative output looks the way it does.',
        outcomes: [
          { id: '3.1', text: 'Explain how a language model (LLM) predicts the next token from probabilities learned over data (n-gram → neural).' },
          { id: '3.2', text: 'Build a bigram/trigram next-token predictor by hand and use it to generate text (be-the-LLM).' },
          { id: '3.3', text: 'Trace how attention re-weights earlier words and changes which token comes next.' },
          { id: '3.4', text: 'Explain how diffusion makes images by reversing noise, steered by a prompt.' }
        ],
        evidence: 'Build a bigram predictor by hand to generate text; trace how attention changes the next token.',
        terms: ['n-gram / bigram', 'transformer', 'attention', 'temperature', 'fine-tuning vs prompting', 'hallucination']
      },
      {
        num: 4,
        title: 'Interaction & Agency',
        disposition: 'Designs and traces systems; reasons about where they fail.',
        outcomes: [
          { id: '4.1', text: 'Use a prompt framework (e.g. CLEAR) with few-shot examples.' },
          { id: '4.2', text: 'Compare the outputs of two prompts and say which works better and why.' },
          { id: '4.3', text: 'Trace how an AI agent runs a Sense → Think → Act loop and calls tools to reach a goal.' },
          { id: '4.4', text: 'Identify where a tool call is needed in an agent’s loop, noting that sensors feed the perceive step.' }
        ],
        evidence: 'Trace an agent’s loop, mark where a tool call is needed, and improve one prompt with few-shot examples.',
        terms: ['agent loop', 'tool call', 'retrieval', 'few-shot prompting', 'guardrail']
      },
      {
        num: 5,
        title: 'Responsibility',
        disposition: 'Verifies before trusting; designs safeguards with people in mind.',
        outcomes: [
          { id: '5.1', text: 'Explain why a model can sound confident yet be wrong: its objective is plausibility, not truth.' },
          { id: '5.2', text: 'Explain how deepfakes and synthetic media enable misinformation.' },
          { id: '5.3', text: 'Apply a verification routine to a generative output and flag its risks.' },
          { id: '5.4', text: 'Propose safeguards such as human oversight, explainability and inclusive design.' },
          { id: '5.5', text: 'Trace how bias in a dataset becomes bias in a model’s behaviour.' }
        ],
        evidence: 'Apply a verification routine to an AI output, flag two risks, and propose a safeguard.',
        terms: ['deepfake', 'provenance & watermarking', 'misinformation', 'human oversight']
      }
    ]
  },
  'upper-sec': {
    title: 'Upper<br>Secondary',
    grades: 'Grades 9–12',
    stats: '90 minutes · 20 MCQ + 3 tasks',
    desc: 'Implementation and evaluation: the transformer pipeline, sampling and temperature, embeddings and bias, diffusion, and grounded agentic / RAG design.',
    focus: 'Implementation and evaluation - judging quality, fairness and design trade-offs against explicit criteria.',
    success: 'Learners explain end-to-end generative-AI systems, evaluate models with explicit metrics and trade-offs, and present defensible design choices for agentic or retrieval-grounded systems.',
    themeColor: '#8E6BFF',
    pillars: [
      {
        num: 1,
        title: 'Representation',
        disposition: 'Reasons rigorously about representation; surfaces what is hidden inside it.',
        outcomes: [
          { id: '1.1', text: 'Compute embedding similarity with cosine similarity and demonstrate vector arithmetic.' },
          { id: '1.2', text: 'Demonstrate the bias baked into embeddings.' },
          { id: '1.3', text: 'Judge the impact of embedded bias on a downstream use.' },
          { id: '1.4', text: 'Explain how computer vision and convolutional neural networks (CNNs) read images as pixel grids.' },
          { id: '1.5', text: 'Explain sub-word tokenisation and how token IDs index the embedding layer.' }
        ],
        evidence: 'Compare two analogies by cosine similarity and judge which one exposes embedded bias.',
        terms: ['embedding', 'vector space', 'cosine similarity']
      },
      {
        num: 2,
        title: 'Learning',
        disposition: 'Practises rigorous, reproducible work; is honest about a model’s limits.',
        outcomes: [
          { id: '2.1', text: 'Explain neural-network mechanics: forward pass, activation, loss, and gradient-descent / backpropagation intuition.' },
          { id: '2.2', text: 'Distinguish deep learning’s layers, pretraining vs fine-tuning vs RLHF, and training vs inference.' },
          { id: '2.3', text: 'Implement a forward pass and a small classifier in Python.' },
          { id: '2.4', text: 'Evaluate the model on accuracy, precision/recall and overfitting, then iterate.' },
          { id: '2.5', text: 'Curate a small dataset for a task, justifying what is included, and document it.' }
        ],
        evidence: 'Implement a forward pass, then judge a model on precision/recall and explain an overfitting fix.',
        terms: ['neuron', 'weighted sum & forward pass', 'labelled training data', 'generalisation', 'overfitting & regularisation', 'CNN', 'reinforcement learning & RLHF', 'specification gaming', 'data leakage']
      },
      {
        num: 3,
        title: 'Generation',
        disposition: 'Reasons from the pipeline; weighs usefulness against reliability.',
        outcomes: [
          { id: '3.1', text: 'Trace the transformer pipeline end to end: tokens → embeddings → attention → next-token probabilities → sampling / temperature.' },
          { id: '3.2', text: 'Explain how diffusion generates images by reversing noise, conditioned on a prompt.' },
          { id: '3.3', text: 'Compare outputs at different temperatures and interpret the usefulness-versus-reliability trade-off.' },
          { id: '3.4', text: 'Compare diffusion with GANs as two ways to generate images: iterative denoising versus generator-vs-discriminator.' }
        ],
        evidence: 'Compare outputs across temperatures and judge whether the model became more useful or less reliable.',
        terms: ['transformer', 'LLM', 'softmax', 'sampling & temperature', 'context window', 'diffusion & denoising']
      },
      {
        num: 4,
        title: 'Interaction & Agency',
        disposition: 'Innovates responsibly; keeps a human in the loop by design.',
        outcomes: [
          { id: '4.1', text: 'Construct chain-of-thought reasoning, system prompts and few-shot prompts.' },
          { id: '4.2', text: 'Explain how an agentic system plans, calls tools, observes results and re-plans.' },
          { id: '4.3', text: 'Explain how retrieval-augmented generation (RAG) grounds answers in sources.' },
          { id: '4.4', text: 'Design a multi-step agent or RAG system against a defined metric.' },
          { id: '4.5', text: 'Evaluate the system and surface its limitations.' }
        ],
        evidence: 'Design a RAG or agentic system, define its metric, and state where human oversight remains necessary.',
        terms: ['RAG', 'agent (ReAct)', 'prompt injection', 'guardrail']
      },
      {
        num: 5,
        title: 'Responsibility',
        disposition: 'Exercises civic responsibility; defaults to transparency and accountability.',
        outcomes: [
          { id: '5.1', text: 'Interpret fairness metrics and error types (false positives / false negatives).' },
          { id: '5.2', text: 'Explain AI governance, accountability and explainable AI.' },
          { id: '5.3', text: 'Explain why hallucination follows from the next-token objective, and the limits of RLHF and retrieval (RAG).' },
          { id: '5.4', text: 'Audit a model or dataset for bias and document it in a model card.' },
          { id: '5.5', text: 'Weigh the societal and environmental costs of a deployment.' }
        ],
        evidence: 'Compute precision and recall from a confusion matrix, justify the governing metric, and document it in a model card.',
        terms: ['fairness metrics', 'memorisation', 'provenance', 'accountability', 'model card']
      }
    ]
  }
};

let currentBandKey = 'lower-pri';

// Map tautan halaman terpisah untuk setiap level
const levelPages = {
  'lower-pri': {
    interactiveLab: 'low_lab.html',
    quiz: 'low_quiz.html'
  },
  'upper-pri': {
    interactiveLab: 'up_lab.html',
    quiz: 'up_quiz.html'
  },
  'lower-sec': {
    interactiveLab: 'low_sec_lab.html',
    quiz: 'lower_sec_quiz.html'
  },
  'upper-sec': {
    interactiveLab: 'up_sec_lab.html',
    quiz: 'upper_sec_quiz.html'
  }
};

// RENDER PILLARS DINAMIS
function renderPillars(bandKey) {
  const data = pillarsDataByBand[bandKey];
  const container = document.getElementById('pillarsContainer');
  container.innerHTML = '';

  data.pillars.forEach(p => {
    let outcomesHtml = p.outcomes.map(o => `
      <div class="outcome-row">
        <span class="outcome-id">${o.id}</span>
        <span>${o.text}</span>
      </div>
    `).join('');

    let termsHtml = '';
    if (p.terms && p.terms.length > 0) {
      let pills = p.terms.map(t => `<span class="term-pill">${t}</span>`).join(' ');
      termsHtml = `
        <div class="terms-row">
          <span class="terms-label">Key terms:</span>
          ${pills}
        </div>
      `;
    }

    const card = document.createElement('article');
    card.className = 'pillar-card';
    card.setAttribute('data-pillar', p.num);
    card.innerHTML = `
      <div class="pillar-header" style="background: ${data.themeColor}">
        <div class="pillar-header-left">
          <span class="pillar-num-badge">Pillar ${p.num}</span>
          <h3 class="pillar-title">${p.title}</h3>
        </div>
        <button class="pillar-toggle-btn" onclick="togglePillarCard(this)">▼</button>
      </div>
      <div class="pillar-body">
        <div class="disposition-box">
          <b>Disposition.</b> ${p.disposition}
        </div>

        <div class="outcomes-label">Learning outcomes</div>
        <div class="outcomes-list">
          ${outcomesHtml}
        </div>

        <div class="evidence-box">
          <b>Evidence.</b> ${p.evidence}
        </div>

        ${termsHtml}
      </div>
    `;
    container.appendChild(card);
  });
}

// SWITCH BAND FUNCTION
function selectBand(bandKey) {
  currentBandKey = bandKey;
  const b = pillarsDataByBand[bandKey];
  if (!b) return;

  document.getElementById('heroTitle').innerHTML = b.title;
  document.getElementById('heroGrades').innerText = b.grades;
  document.getElementById('heroGrades').style.color = b.themeColor;
  document.getElementById('heroStats').innerText = b.stats;
  document.getElementById('heroDesc').innerText = b.desc;
  document.getElementById('bandFocusOverview').innerText = b.focus;
  document.getElementById('successText').innerText = b.success;
  document.getElementById('bandFocusBannerText').innerText = b.focus;
  document.getElementById('robotBody').style.backgroundColor = b.themeColor;

  // Update Nav
  document.querySelectorAll('.nav-band-group .band-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.style.backgroundColor = 'transparent';
    if (btn.innerText.includes(b.grades.split(' ')[1])) {
      btn.classList.add('active');
      btn.style.backgroundColor = b.themeColor;
    }
  });

  // Update Rows
  document.querySelectorAll('.band-row').forEach(row => row.classList.remove('active'));
  const activeRow = document.getElementById(`band-row-${bandKey}`);
  if (activeRow) activeRow.classList.add('active');

  renderPillars(bandKey);
  showToast(`Switched to ${b.grades}`);
}

// MODAL HANDLERS
function openModal(title, contentHtml) {
  document.getElementById('mainModalTitle').innerText = title;
  document.getElementById('mainModalBody').innerHTML = contentHtml;
  document.getElementById('mainModal').classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Fungsi untuk membuka Quiz berpindah halaman sesuai level aktif
function openQuizForCurrentLevel() {
  const currentPages = levelPages[currentBandKey];
  if (currentPages && currentPages.quiz) {
    window.location.href = currentPages.quiz;
  } else {
    const b = pillarsDataByBand[currentBandKey];
    openModal(`Quiz · ${b.grades}`, `
      <p style="font-size: 15px;">Halaman Quiz untuk level ${b.grades} belum tersedia.</p>
    `);
  }
}

// Fungsi untuk membuka Interactive Lab sesuai level yang sedang aktif
function openPracticeLabModal() {
  const currentPages = levelPages[currentBandKey];
  if (currentPages && currentPages.interactiveLab) {
    window.location.href = currentPages.interactiveLab;
  } else {
    const b = pillarsDataByBand[currentBandKey];
    openModal(`Interactive Lab · ${b.grades}`, `
      <p style="font-size: 15px;">Halaman Interactive Lab untuk level ${b.grades} belum tersedia.</p>
    `);
  }
}

function openStructuredTaskModal() {
  const b = pillarsDataByBand[currentBandKey];
  openModal(`Structured Task · ${b.grades}`, `
    <div style="font-family: 'Space Mono', monospace; font-size: 11px; color: var(--amber); margin-bottom: 8px;">HANDS-ON DESIGN TASK</div>
    <p style="font-size: 15px; margin-bottom: 14px;"><b>Task Requirement for ${b.grades}:</b></p>
    <div style="background: #FDE7F0; border-left: 4px solid var(--crimson-pill); padding: 14px; border-radius: 0 14px 14px 0; font-size: 14px;">
      ${b.pillars[3].evidence}
    </div>
  `);
}

function filterOutcomes() {
  const q = document.getElementById('outcomeSearch').value.toLowerCase().trim();
  document.querySelectorAll('.pillar-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = (!q || text.includes(q)) ? 'block' : 'none';
  });
}

function filterByPillar(num) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.pillar-card').forEach(card => {
    card.style.display = (num === 'all' || card.getAttribute('data-pillar') === num) ? 'block' : 'none';
  });
}

function togglePillarCard(btn) {
  const body = btn.closest('.pillar-card').querySelector('.pillar-body');
  const isHidden = body.style.display === 'none';
  body.style.display = isHidden ? 'block' : 'none';
  btn.innerText = isHidden ? '▼' : '▶';
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function showToast(msg) {
  const t = document.getElementById('toastBox');
  t.innerText = msg;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 2400);
}

function pokeRobot() {
  showToast('🤖 Robot: Let\'s learn AI together!');
}

window.addEventListener('DOMContentLoaded', () => {
  selectBand('lower-pri');
});