/* ⚙️ TUNABLE PARAMETERS */
const MAX_SCORE_PER_LEVEL = 100;
const TIMER_ENABLED = false;
const DEFAULT_LANGUAGE = 'id';

// Data Game (Bilingual)
const gameData = {
    id: {
        appTitle: "Detektif Digital",
        level: "Misi",
        score: "Skor",
        l1: {
            title: "Level 1: Tajamkan Kata Kunci",
            desc: "Pilih 3 kata kunci yang paling efektif untuk mencari informasi tentang 'AI untuk tugas sekolah'.",
            options: [
                { text: "AI", correct: false },
                { text: "teknologi", correct: false },
                { text: "pengertian AI untuk tugas sekolah", correct: true },
                { text: "masa depan AI", correct: false },
                { text: "contoh penggunaan AI dalam pendidikan", correct: true },
                { text: "dampak AI bagi siswa SMP", correct: true }
            ],
            submit: "Periksa Jawaban",
            hint: "Gunakan kata benda utama, tambahkan konteks (untuk tugas sekolah), dan tujuan (pengertian, contoh)."
        },
        l2: {
            title: "Level 2: Bedah Sumber",
            desc: "Perhatikan dua sumber berikut. Jawab pertanyaan dengan teliti.",
            srcATitle: "Sumber A",
            srcAContent: "<strong>Judul:</strong> AI Bikin Siswa Bodoh!<br><strong>Penulis:</strong> Anonim<br><strong>Tanggal:</strong> Tidak tertera<br><strong>Isi:</strong> Banyak yang bilang AI merusak otak siswa. Jangan pakai AI!",
            srcBTitle: "Sumber B",
            srcBContent: "<strong>Judul:</strong> Studi Dampak AI pada Pendidikan<br><strong>Penulis:</strong> Dr. Budi Santoso (Kemendikbud)<br><strong>Tanggal:</strong> 15 Maret 2025<br><strong>Isi:</strong> Berdasarkan penelitian pada 1000 siswa, AI dapat membantu belajar jika digunakan dengan pengawasan.",
            questions: [
                {
                    q: "Sumber mana yang lebih kredibel (layak dipercaya)?",
                    options: ["Sumber A", "Sumber B", "Keduanya sama", "Tidak ada yang kredibel"],
                    correct: 1
                },
                {
                    q: "Mengapa Sumber A kurang kredibel?",
                    options: ["Karena tulisannya pendek", "Karena tidak ada penulis dan tanggal yang jelas", "Karena membahas AI", "Karena menggunakan huruf kapital"],
                    correct: 1
                },
                {
                    q: "Apa bukti yang digunakan Sumber B?",
                    options: ["Katanya", "Pengalaman pribadi", "Penelitian pada 1000 siswa", "Buku fiksi"],
                    correct: 2
                }
            ],
            submit: "Lanjut",
            hint: "Periksa penulis, tanggal, dan bukti yang digunakan."
        },
        l3: {
            title: "Level 3: Periksa Viral",
            desc: "Klaim Viral: 'Aplikasi X dapat membuat baterai ponsel awet dua kali lebih lama hanya dengan mengaktifkan satu pengaturan.'",
            instruction: "Susun langkah pemeriksaan dengan mengklik urutan yang benar dari atas ke bawah.",
            steps: [
                "Cek penulis atau lembaga yang mengklaim",
                "Cari sumber pembanding yang relevan",
                "Periksa tanggal terbit informasi",
                "Baca konteks lengkap, jangan hanya judul",
                "Simpulkan berdasarkan bukti yang ada"
            ],
            submit: "Periksa Urutan",
            hint: "Mulai dari memeriksa siapa yang membuat klaim, lalu cari pembanding, cek waktu, baca detail, dan simpulkan."
        },
        result: {
            title: "Misi Selesai!",
            scoreText: "Total Skor:",
            restart: "Main Lagi",
            reflectTitle: "Refleksi Diri",
            refQ1: "Apa kata kunci yang paling membantu?",
            refQ2: "Sumber mana yang paling relevan dan mengapa?",
            refQ3: "Apa yang akan saya lakukan berbeda pada pencarian berikutnya?",
            print: "Cetak Hasil"
        },
        feedback: {
            correct: "Tepat sekali!",
            wrong: "Kurang tepat, coba lagi.",
            perfect: "Luar biasa! Kamu Detektif Agung!",
            good: "Kerja bagus! Kamu Detektif Andal.",
            ok: "Bagus! Kamu Detektif Pemula."
        }
    },
    en: {
        appTitle: "Digital Detective",
        level: "Mission",
        score: "Score",
        l1: {
            title: "Level 1: Sharpen Your Keywords",
            desc: "Choose 3 most effective keywords to search for 'AI for school assignments'.",
            options: [
                { text: "AI", correct: false },
                { text: "technology", correct: false },
                { text: "definition of AI for school assignments", correct: true },
                { text: "future of AI", correct: false },
                { text: "examples of AI use in education", correct: true },
                { text: "impact of AI on middle school students", correct: true }
            ],
            submit: "Check Answer",
            hint: "Use main nouns, add context (for school assignments), and purpose (definition, examples)."
        },
        l2: {
            title: "Level 2: Source Dissection",
            desc: "Look at these two sources. Answer the questions carefully.",
            srcATitle: "Source A",
            srcAContent: "<strong>Title:</strong> AI Makes Students Stupid!<br><strong>Author:</strong> Anonymous<br><strong>Date:</strong> Not stated<br><strong>Content:</strong> Many say AI damages students' brains. Don't use AI!",
            srcBTitle: "Source B",
            srcBContent: "<strong>Title:</strong> Study on the Impact of AI in Education<br><strong>Author:</strong> Dr. Budi Santoso (Ministry of Education)<br><strong>Date:</strong> March 15, 2025<br><strong>Content:</strong> Based on a study of 1000 students, AI can help learning if used with supervision.",
            questions: [
                {
                    q: "Which source is more credible (trustworthy)?",
                    options: ["Source A", "Source B", "Both are equal", "Neither is credible"],
                    correct: 1
                },
                {
                    q: "Why is Source A less credible?",
                    options: ["Because the text is short", "Because there is no clear author and date", "Because it discusses AI", "Because it uses capital letters"],
                    correct: 1
                },
                {
                    q: "What evidence does Source B use?",
                    options: ["They say", "Personal experience", "Study on 1000 students", "Fiction book"],
                    correct: 2
                }
            ],
            submit: "Next",
            hint: "Check the author, date, and evidence used."
        },
        l3: {
            title: "Level 3: Check the Viral",
            desc: "Viral Claim: 'App X can make phone battery last twice as long by just activating one setting.'",
            instruction: "Arrange the checking steps by clicking the correct order from top to bottom.",
            steps: [
                "Check the author or institution making the claim",
                "Search for relevant comparison sources",
                "Check the publication date of the information",
                "Read the full context, not just the headline",
                "Conclude based on available evidence"
            ],
            submit: "Check Order",
            hint: "Start by checking who made the claim, then find comparisons, check time, read details, and conclude."
        },
        result: {
            title: "Mission Complete!",
            scoreText: "Total Score:",
            restart: "Play Again",
            reflectTitle: "Self Reflection",
            refQ1: "What keyword was most helpful?",
            refQ2: "Which source was most relevant and why?",
            refQ3: "What will I do differently in my next search?",
            print: "Print Result"
        },
        feedback: {
            correct: "Exactly right!",
            wrong: "Not quite, try again.",
            perfect: "Amazing! You are a Great Detective!",
            good: "Great job! You are a Skilled Detective.",
            ok: "Good! You are a Novice Detective."
        }
    }
};

// State
let currentLang = DEFAULT_LANGUAGE;
let currentLevel = 1;
let score = 0;
let unlockedLevels = 1;
let selectedL1Options = [];
let currentL2Question = 0;
let l3Order = [];
let isL3Sorted = false;

// Audio Context for simple sounds
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'wrong') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

// DOM Elements
const els = {
    appTitle: document.getElementById('app-title'),
    langToggle: document.getElementById('lang-toggle'),
    lblLevel: document.getElementById('lbl-level'),
    lblScore: document.getElementById('lbl-score'),
    scoreDisplay: document.getElementById('score-display'),
    currentLevelDisplay: document.getElementById('current-level-display'),
    progressBar: document.getElementById('progress-bar'),
    level1: document.getElementById('level-1'),
    level2: document.getElementById('level-2'),
    level3: document.getElementById('level-3'),
    resultScreen: document.getElementById('result-screen'),
    l1Title: document.getElementById('l1-title'),
    l1Desc: document.getElementById('l1-desc'),
    l1Options: document.getElementById('l1-options'),
    l1Submit: document.getElementById('l1-submit'),
    l2Title: document.getElementById('l2-title'),
    l2Desc: document.getElementById('l2-desc'),
    srcATitle: document.getElementById('src-a-title'),
    srcAContent: document.getElementById('src-a-content'),
    srcBTitle: document.getElementById('src-b-title'),
    srcBContent: document.getElementById('src-b-content'),
    l2QuestionText: document.getElementById('l2-question-text'),
    l2Options: document.getElementById('l2-options'),
    l2Next: document.getElementById('l2-next'),
    l3Title: document.getElementById('l3-title'),
    l3Desc: document.getElementById('l3-desc'),
    l3Instruction: document.getElementById('l3-instruction'),
    l3Steps: document.getElementById('l3-steps'),
    l3Submit: document.getElementById('l3-submit'),
    resultTitle: document.getElementById('result-title'),
    badgeIcon: document.getElementById('badge-icon'),
    badgeName: document.getElementById('badge-name'),
    resultScoreText: document.getElementById('result-score-text'),
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message'),
    reflectionTitle: document.getElementById('reflection-title'),
    refQ1: document.getElementById('ref-q1'),
    refQ2: document.getElementById('ref-q2'),
    refQ3: document.getElementById('ref-q3'),
    btnPrint: document.getElementById('btn-print'),
    btnRestart: document.getElementById('btn-restart'),
    confettiCanvas: document.getElementById('confetti-canvas'),
    hintModal: document.getElementById('hint-modal'),
    hintText: document.getElementById('hint-text'),
    closeHint: document.getElementById('close-hint')
};

// Initialize Game
function init() {
    loadProgress();
    updateUILanguage();
    renderLevel1();
    setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
    els.langToggle.addEventListener('click', toggleLanguage);
    els.l1Submit.addEventListener('click', submitLevel1);
    els.l2Next.addEventListener('click', nextL2Question);
    els.l3Submit.addEventListener('click', submitLevel3);
    els.btnRestart.addEventListener('click', resetGame);
    els.btnPrint.addEventListener('click', () => window.print());
    
    // Hint Buttons
    document.getElementById('hint-btn-1').addEventListener('click', () => showHint(1));
    document.getElementById('hint-btn-2').addEventListener('click', () => showHint(2));
    document.getElementById('hint-btn-3').addEventListener('click', () => showHint(3));
    
    // Close Hint Modal
    els.closeHint.addEventListener('click', () => {
        els.hintModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === els.hintModal) {
            els.hintModal.style.display = 'none';
        }
    });
}

// Show Hint
function showHint(level) {
    let hintText = "";
    if (level === 1) hintText = gameData[currentLang].l1.hint;
    else if (level === 2) hintText = gameData[currentLang].l2.hint;
    else if (level === 3) hintText = gameData[currentLang].l3.hint;
    
    els.hintText.textContent = hintText;
    els.hintModal.style.display = 'flex';
}

// Language System
function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    els.langToggle.textContent = currentLang === 'id' ? 'ID' : 'EN';
    updateUILanguage();
    renderLevel1();
    if (currentLevel === 2) renderLevel2();
    if (currentLevel === 3) renderLevel3();
    if (currentLevel === 4) renderResult();
}

function updateUILanguage() {
    const lang = gameData[currentLang];
    els.appTitle.textContent = lang.appTitle;
    els.lblLevel.textContent = lang.level;
    els.lblScore.textContent = lang.score;
    
    if (currentLevel === 1) {
        els.l1Title.textContent = lang.l1.title;
        els.l1Desc.textContent = lang.l1.desc;
        els.l1Submit.textContent = lang.l1.submit;
    } else if (currentLevel === 2) {
        els.l2Title.textContent = lang.l2.title;
        els.l2Desc.textContent = lang.l2.desc;
        els.srcATitle.textContent = lang.l2.srcATitle;
        els.srcAContent.innerHTML = lang.l2.srcAContent;
        els.srcBTitle.textContent = lang.l2.srcBTitle;
        els.srcBContent.innerHTML = lang.l2.srcBContent;
        els.l2Next.textContent = lang.l2.submit;
    } else if (currentLevel === 3) {
        els.l3Title.textContent = lang.l3.title;
        els.l3Desc.textContent = lang.l3.desc;
        els.l3Instruction.textContent = lang.l3.instruction;
        els.l3Submit.textContent = lang.l3.submit;
    } else if (currentLevel === 4) {
        els.resultTitle.textContent = lang.result.title;
        els.resultScoreText.textContent = lang.result.scoreText;
        els.btnRestart.textContent = lang.result.restart;
        els.reflectionTitle.textContent = lang.result.reflectTitle;
        els.refQ1.textContent = lang.result.refQ1;
        els.refQ2.textContent = lang.result.refQ2;
        els.refQ3.textContent = lang.result.refQ3;
        els.btnPrint.textContent = lang.result.print;
    }
}

// Level 1 Logic
function renderLevel1() {
    const lang = gameData[currentLang].l1;
    els.l1Options.innerHTML = '';
    selectedL1Options = [];
    els.l1Submit.disabled = true;
    
    lang.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.dataset.index = index;
        btn.addEventListener('click', () => toggleL1Option(btn, index));
        els.l1Options.appendChild(btn);
    });
}

function toggleL1Option(btn, index) {
    if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
    
    const optIndex = selectedL1Options.indexOf(index);
    if (optIndex > -1) {
        selectedL1Options.splice(optIndex, 1);
        btn.classList.remove('selected');
    } else {
        if (selectedL1Options.length < 3) {
            selectedL1Options.push(index);
            btn.classList.add('selected');
        }
    }
    
    els.l1Submit.disabled = selectedL1Options.length !== 3;
}

function submitLevel1() {
    const lang = gameData[currentLang].l1;
    let allCorrect = true;
    
    selectedL1Options.forEach(index => {
        const btn = els.l1Options.children[index];
        if (lang.options[index].correct) {
            btn.classList.add('correct');
            btn.classList.remove('selected');
        } else {
            btn.classList.add('wrong');
            btn.classList.remove('selected');
            allCorrect = false;
        }
    });
    
    if (allCorrect) {
        playSound('correct');
        score += 300; // 3 correct answers * 100
    } else {
        playSound('wrong');
        score = Math.max(0, score - 50);
        els.l1Options.classList.add('shake');
        setTimeout(() => els.l1Options.classList.remove('shake'), 400);
    }
    
    updateScore();
    els.l1Submit.disabled = true;
    
    setTimeout(() => {
        currentLevel = 2;
        unlockedLevels = Math.max(unlockedLevels, 2);
        saveProgress();
        showLevel(2);
    }, 1500);
}

// Level 2 Logic
function renderLevel2() {
    currentL2Question = 0;
    showL2Question();
}

function showL2Question() {
    const lang = gameData[currentLang].l2;
    const qData = lang.questions[currentL2Question];
    
    els.l2QuestionText.textContent = qData.q;
    els.l2Options.innerHTML = '';
    els.l2Next.style.display = 'none';
    
    qData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => checkL2Answer(btn, index, qData.correct));
        els.l2Options.appendChild(btn);
    });
}

function checkL2Answer(btn, selectedIndex, correctIndex) {
    const buttons = els.l2Options.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        playSound('correct');
        score += 100; // 100 points per correct answer
    } else {
        btn.classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
        playSound('wrong');
        score = Math.max(0, score - 20);
    }
    
    updateScore();
    els.l2Next.style.display = 'block';
}

function nextL2Question() {
    currentL2Question++;
    if (currentL2Question < gameData[currentLang].l2.questions.length) {
        showL2Question();
    } else {
        currentLevel = 3;
        unlockedLevels = Math.max(unlockedLevels, 3);
        saveProgress();
        showLevel(3);
    }
}

// Level 3 Logic
function renderLevel3() {
    const lang = gameData[currentLang].l3;
    els.l3Steps.innerHTML = '';
    l3Order = [];
    isL3Sorted = false;
    els.l3Submit.disabled = true;
    
    // Shuffle steps
    const shuffled = [...lang.steps].sort(() => Math.random() - 0.5);
    
    shuffled.forEach((step, index) => {
        const div = document.createElement('div');
        div.className = 'sortable-item';
        div.dataset.text = step;
        div.innerHTML = `<span class="order-num">?</span> <span>${step}</span>`;
        div.addEventListener('click', () => selectL3Step(div));
        els.l3Steps.appendChild(div);
    });
}

function selectL3Step(div) {
    if (isL3Sorted) return;
    
    if (div.classList.contains('selected')) {
        div.classList.remove('selected');
        div.querySelector('.order-num').textContent = '?';
        const index = l3Order.indexOf(div.dataset.text);
        if (index > -1) l3Order.splice(index, 1);
    } else {
        if (l3Order.length < 5) {
            l3Order.push(div.dataset.text);
            div.classList.add('selected');
            div.querySelector('.order-num').textContent = l3Order.length;
        }
    }
    
    const allItems = els.l3Steps.querySelectorAll('.sortable-item');
    allItems.forEach(item => {
        const idx = l3Order.indexOf(item.dataset.text);
        if (idx > -1) {
            item.querySelector('.order-num').textContent = idx + 1;
        } else {
            item.querySelector('.order-num').textContent = '?';
        }
    });
    
    els.l3Submit.disabled = l3Order.length !== 5;
}

function submitLevel3() {
    const lang = gameData[currentLang].l3;
    const correctOrder = lang.steps;
    let allCorrect = true;
    
    const allItems = els.l3Steps.querySelectorAll('.sortable-item');
    
    l3Order.forEach((text, index) => {
        if (text !== correctOrder[index]) {
            allCorrect = false;
        }
    });
    
    allItems.forEach(item => {
        item.classList.remove('selected');
        const idx = l3Order.indexOf(item.dataset.text);
        if (idx > -1 && item.dataset.text === correctOrder[idx]) {
            item.classList.add('correct');
        } else if (idx > -1) {
            item.classList.add('wrong');
        }
    });
    
    if (allCorrect) {
        playSound('correct');
        score += 400; // 4 steps * 100
    } else {
        playSound('wrong');
        score = Math.max(0, score - 50);
        els.l3Steps.classList.add('shake');
        setTimeout(() => els.l3Steps.classList.remove('shake'), 400);
    }
    
    updateScore();
    isL3Sorted = true;
    els.l3Submit.disabled = true;
    
    setTimeout(() => {
        currentLevel = 4;
        saveProgress();
        showLevel(4);
    }, 1500);
}

// Result & Reflection
function renderResult() {
    const lang = gameData[currentLang].result;
    els.finalScore.textContent = Math.round(score);
    
    let badge = "";
    let message = "";
    
    if (score >= 1000) {
        badge = "🏆 Detektif Agung (Great Detective)";
        message = lang.feedback.perfect;
        triggerConfetti();
    } else if (score >= 700) {
        badge = "🥈 Detektif Andal (Skilled Detective)";
        message = lang.feedback.good;
    } else {
        badge = "🥉 Detektif Pemula (Novice Detective)";
        message = lang.feedback.ok;
    }
    
    els.badgeName.textContent = badge;
    els.resultMessage.textContent = message;
}

// Progress & Storage
function saveProgress() {
    localStorage.setItem('detektifDigital_score', score);
    localStorage.setItem('detektifDigital_unlocked', unlockedLevels);
}

function loadProgress() {
    const savedScore = localStorage.getItem('detektifDigital_score');
    const savedUnlocked = localStorage.getItem('detektifDigital_unlocked');
    
    if (savedScore) score = parseInt(savedScore);
    if (savedUnlocked) unlockedLevels = parseInt(savedUnlocked);
    
    updateScore();
}

function resetGame() {
    score = 0;
    currentLevel = 1;
    unlockedLevels = 1;
    selectedL1Options = [];
    currentL2Question = 0;
    l3Order = [];
    isL3Sorted = false;
    
    saveProgress();
    updateScore();
    renderLevel1();
    showLevel(1);
}

function updateScore() {
    els.scoreDisplay.textContent = Math.round(score);
}

function showLevel(level) {
    document.querySelectorAll('.level-screen').forEach(el => el.classList.remove('active'));
    
    if (level === 1) els.level1.classList.add('active');
    else if (level === 2) els.level2.classList.add('active');
    else if (level === 3) els.level3.classList.add('active');
    else if (level === 4) els.resultScreen.classList.add('active');
    
    els.currentLevelDisplay.textContent = `${Math.min(level, 3)} / 3`;
    
    const progress = ((level - 1) / 3) * 100;
    els.progressBar.style.width = `${progress}%`;
    
    updateUILanguage();
    
    if (level === 2) renderLevel2();
    if (level === 3) renderLevel3();
    if (level === 4) renderResult();
}

// Confetti Easter Egg
function triggerConfetti() {
    const canvas = els.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#1E3A8A', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6'];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 5 - 2.5
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        
        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;
            
            if (p.y < canvas.height) active = true;
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });
        
        if (active) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

// Start Game
init();
