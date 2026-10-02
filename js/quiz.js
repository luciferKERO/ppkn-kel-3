// quiz.js - Interactive Quiz Engine for PPKn Digital Identity

const quizData = [
  {
    id: 1,
    question: "Menurut konsep dramaturgi Erving Goffman (1959) dalam konteks bermedia sosial, apa yang dimaksud dengan 'Front Stage' (Panggung Depan)?",
    options: [
      "Ruang privat tempat individu melepaskan seluruh topeng sosialnya.",
      "Instalasi representasi diri yang terkurasi ketat dan difabrikasi untuk memenuhi ekspektasi audiens serta metrik validasi.",
      "Interaksi tanpa filter yang menampilkan kelemahan dan realitas apa adanya.",
      "Algoritma sistem rekomendasi yang mengunci preferensi pengguna."
    ],
    answer: 1,
    explanation: "Erving Goffman membedakan front stage (panggung depan) sebagai ruang penampilan yang dirancang untuk audiens dengan seleksi tata rias, pose, dan estetika terkurasi demi validasi, sementara back stage adalah ruang privat tanpa topeng sosial."
  },
  {
    id: 2,
    question: "Berdasarkan riset Nadeak et al. (2025), terjadi asimetri tajam antara kesadaran normatif dan perilaku konsumsi kebudayaan mahasiswa, yaitu:",
    options: [
      "50% sadar identitas nasional dan 50% aktif konsumsi budaya lokal.",
      "92% mengakui pentingnya identitas nasional, namun hanya 22.2% yang rutin mengakses konten budaya lokal harian.",
      "22.2% sadar identitas nasional, namun 92% menonton budaya asing.",
      "70% mahasiswa menolak nilai Pancasila di media sosial."
    ],
    answer: 1,
    explanation: "Temuan empiris menunjukkan paradoks: 92% mahasiswa secara verbal mengakui pentingnya identitas nasional, namun konsumsi harian didominasi platform komersial dan hanya 22.2% yang rutin mengakses kebudayaan lokal."
  },
  {
    id: 3,
    question: "Studi empiris Universitas Tarumanagara (Damayanti et al., 2021) menemukan besaran pengaruh media sosial terhadap gaya hidup hedonis mahasiswa sebesar:",
    options: [
      "R² = 25.3%",
      "R² = 49.9%",
      "R² = 63.9%",
      "R² = 88.8%"
    ],
    answer: 3,
    explanation: "Studi UNTAR mencatat koefisien determinasi tertinggi (R² = 88.8%), membuktikan integrasi social commerce dan FOMO sangat dominan memicu gaya hidup hedonis dan impulsif pada mahasiswa."
  },
  {
    id: 4,
    question: "Apa dampak dari fenomena 'Upward Social Comparison' (Komparasi Sosial ke Atas) menurut teori Leon Festinger pada pengguna media sosial?",
    options: [
      "Meningkatkan rasa cinta tanah air secara otomatis.",
      "Memicu disonansi kognitif, impostor syndrome, dan penurunan kepuasan diri akibat membandingkan diri dengan panggung depan orang lain.",
      "Menghilangkan kecanduan screen time.",
      "Mendorong terciptanya filter bubble yang netral."
    ],
    answer: 1,
    explanation: "Komparasi ke atas terhadap profil digital yang menampilkan narasi sukses semu memicu evaluasi diri negatif, kecemasan, dan distorsi konsep diri (R² = 59.4% berdasarkan Manullang et al., 2025)."
  },
  {
    id: 5,
    question: "Teori Simulakra dan Hiperrealitas dari Jean Baudrillard (1981) menjelaskan bahwa konsumsi di era media sosial lebih didorong oleh:",
    options: [
      "Nilai guna (use value) murni berdasarkan fungsi primer objek.",
      "Nilai tanda (sign value) dan prestise simbolik di mana citra digital dianggap lebih nyata daripada realitas fisik.",
      "Kebutuhan biologis dasar manusia.",
      "Kepatuhan terhadap hukum kenegaraan semata."
    ],
    answer: 1,
    explanation: "Baudrillard menekankan bahwa masyarakat modern mengonsumsi tanda/simbol (status, prestise, instagrammability) melampaui nilai guna fungsional barang tersebut."
  },
  {
    id: 6,
    question: "Riset di FKIP Universitas HKBP Nommensen (2025) mencatat bahwa generasi muda rentan mengalami pergeseran identitas karena:",
    options: [
      "37% mahasiswa mempersepsikan medsos jauh lebih masif menyuplai budaya asing dibanding konten kearifan lokal.",
      "100% mahasiswa tidak memiliki gawai pintar.",
      "Semua algoritma hanya mempromosikan tarian daerah.",
      "Tidak ada interaksi parasosial di TikTok."
    ],
    answer: 0,
    explanation: "Sebanyak 37% mahasiswa mempersepsikan medsos lebih masif mengalirkan budaya asing, yang dapat membentuk identitas hibrida transnasional jika tidak diimbangi literasi budaya lokal."
  },
  {
    id: 7,
    question: "Dalam Tri-Level Policy Roadmap, langkah apa yang direkomendasikan pada Tingkat Mikro (Individu Mahasiswa)?",
    options: [
      "Memblokir semua jaringan internet kampus secara permanen.",
      "Penerapan Digital Mindfulness, dekonstruksi kritis konten highlight reel, dan pembatasan durasi akses harian di bawah 3 jam.",
      "Menghapus kurikulum kebangsaan dari universitas.",
      "Mewajibkan penggunaan Paylater untuk seluruh tugas kuliah."
    ],
    answer: 1,
    explanation: "Pada tingkat mikro, mahasiswa diarahkan membangun kesadaran reflektif (digital mindfulness), membatasi screen time (<3 jam), serta menghindari konsumsi impulsif paylater."
  },
  {
    id: 8,
    question: "Sesuai nilai Pancasila dan prinsip 'Bermedia Global, Beridentitas Nasional', bagaimana sikap bijak generasi muda Indonesia?",
    options: [
      "Menutup diri sepenuhnya dari perkembangan teknologi dan budaya global.",
      "Meniru semua tren luar negeri tanpa menyaring nilai moral dan etika.",
      "Mengadopsi wawasan global dan keterampilan digital sambil tetap berakar teguh pada etika Pancasila, keadaban siber, dan promosi budaya lokal.",
      "Menggunakan media sosial hanya untuk menyebarkan sinisme politik dan ujaran kebencian."
    ],
    answer: 2,
    explanation: "Konsep 'Bermedia Global, Beridentitas Nasional' menegaskan bahwa pemuda Indonesia terbuka pada wawasan global namun tetap kokoh memegang kepribadian bangsa dan etika Pancasila."
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function getQuizBox() {
  return document.getElementById('quiz-container') || document.getElementById('quiz-box');
}

function initQuiz() {
  const quizBox = getQuizBox();
  if (!quizBox) return;

  renderQuestion();
}

function renderQuestion() {
  const quizBox = getQuizBox();
  if (!quizBox) return;

  if (currentQuestion >= quizData.length) {
    renderResult(quizBox);
    return;
  }

  const q = quizData[currentQuestion];
  const progressPct = ((currentQuestion) / quizData.length) * 100;

  quizBox.innerHTML = `
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" style="width: ${progressPct}%"></div>
    </div>
    <div class="question-header">
      <span class="question-num">Pertanyaan ${currentQuestion + 1} dari ${quizData.length}</span>
      <span class="badge-pill badge-blue">Evaluasi Materi PPKn</span>
    </div>
    <h3 class="question-text">${q.question}</h3>
    <div class="options-list" id="options-container">
      ${q.options
        .map(
          (opt, i) => `
        <button class="quiz-option" onclick="selectAnswer(${i})">
          <span style="font-weight:800; min-width:24px; color:var(--text-dim);">${String.fromCharCode(65 + i)}.</span>
          <span>${opt}</span>
        </button>
      `
        )
        .join('')}
    </div>
    <div class="quiz-explanation" id="quiz-explanation"></div>
    <div class="quiz-actions">
      <span style="font-size:0.85rem; color:var(--text-dim);">Pilih satu jawaban terbaik</span>
      <button class="btn btn-primary" id="btn-next-quiz" style="display:none;" onclick="nextQuestion()">
        ${currentQuestion === quizData.length - 1 ? 'Lihat Hasil Akhir →' : 'Pertanyaan Selanjutnya →'}
      </button>
    </div>
  `;
}

function selectAnswer(selectedIndex) {
  const q = quizData[currentQuestion];
  const options = document.querySelectorAll('.quiz-option');
  const expBox = document.getElementById('quiz-explanation');
  const nextBtn = document.getElementById('btn-next-quiz');

  // Disable all options
  options.forEach((btn) => (btn.disabled = true));

  const isCorrect = selectedIndex === q.answer;
  if (isCorrect) {
    score++;
    options[selectedIndex].classList.add('correct');
    expBox.className = 'quiz-explanation show correct-box';
    expBox.innerHTML = `<strong>Jawaban Benar!</strong><br>${q.explanation}`;
  } else {
    options[selectedIndex].classList.add('incorrect');
    options[q.answer].classList.add('correct');
    expBox.className = 'quiz-explanation show incorrect-box';
    expBox.innerHTML = `<strong>Jawaban Kurang Tepat.</strong> Jawaban benar: <b>${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}</b><br>${q.explanation}`;
  }

  userAnswers.push({ questionId: q.id, selected: selectedIndex, isCorrect });
  nextBtn.style.display = 'inline-flex';
}

function nextQuestion() {
  currentQuestion++;
  renderQuestion();
}

function renderResult(container) {
  const total = quizData.length;
  const percentage = Math.round((score / total) * 100);

  let badgeMsg = '';
  let badgeColor = 'badge-green';
  let desc = '';

  if (percentage >= 85) {
    badgeMsg = 'Sangat Memuaskan (Mastery)';
    badgeColor = 'badge-green';
    desc = 'Pemahaman Anda mengenai konsep identitas nasional, teori sosiologi media, dan etika Pancasila sangat matang!';
  } else if (percentage >= 60) {
    badgeMsg = 'Cukup Baik (Competent)';
    badgeColor = 'badge-blue';
    desc = 'Anda telah memahami poin-poin utama materi PPKn, namun disarankan membaca kembali modul riset dan teori untuk pendalaman.';
  } else {
    badgeMsg = 'Perlu Pendalaman (Review)';
    badgeColor = 'badge-amber';
    desc = 'Pelajari kembali 5 Modul Pelajaran PPKn untuk memperkuat pemahaman nilai kebangsaan di ruang digital.';
  }

  container.innerHTML = `
    <div class="quiz-result-card">
      <span class="badge-pill ${badgeColor}" style="margin-bottom: 1.5rem; font-size: 0.85rem; padding: 6px 16px;">${badgeMsg}</span>
      <div class="score-circle">
        <span class="score-num">${percentage}%</span>
        <span class="score-max">${score} dari ${total} benar</span>
      </div>
      <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 0.75rem;">Evaluasi Selesai!</h2>
      <p style="color: var(--text-muted); max-width: 520px; margin: 0 auto 2rem; font-size: 0.95rem;">${desc}</p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="restartQuiz()">Ulangi Kuis ↺</button>
        <a href="materi/index.html" class="btn btn-secondary">Pelajari Modul Materi →</a>
      </div>
    </div>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  renderQuestion();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuiz);
} else {
  initQuiz();
}
