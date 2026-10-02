// charts.js - Chart.js initializations & Raw Data Table Explorer (Tema Poster Kebangsaan)

const surveyRawData = [
  {"Timestamp":"46293.68889803241","Nama":"Cha","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"> 6 jam","Konten":"Konten Edukasi, Konten Keseharian, Berita/Permasalahan Saat Ini.","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Setuju"},
  {"Timestamp":"46293.68895872685","Nama":"R","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"YouTube","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Youtuber ishowspeed","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Biasa saja"},
  {"Timestamp":"46293.68902506944","Nama":"Kiw","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"1-3 jam","Konten":"Edukasi","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.68903332176","Nama":"Siti","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Keseharian","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.68904791666","Nama":"Naura","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sangat sering","Durasi":"> 6 jam","Konten":"Hiburan","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.68906979166","Nama":"Amel","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sering","Durasi":"4-6 jam","Konten":"Makeup","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.68910074074","Nama":"Kaka","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"Tiktok","Frekuensi":"Sering","Durasi":"4-6 jam","Konten":"Meme","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.68915509259","Nama":"Dapa","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"Instagram","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Anime, Film, Meme","Pancasila":"Biasa saja","PedeNasional":"Biasa saja","Individualis":"Biasa saja"},
  {"Timestamp":"46293.68925586805","Nama":"Ihsan","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"YouTube","Frekuensi":"Sering","Durasi":"4-6 jam","Konten":"Game, Anime, Otomotif","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.68928038194","Nama":"Aditya","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"YouTube","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Berita, Game, Podcast","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.68940822917","Nama":"Sarah","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Fashion, Vlog, K-pop","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Setuju"},
  {"Timestamp":"46293.68948792824","Nama":"Fajar","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"Tiktok","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Edukasi Sejarah, Meme","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.68951238426","Nama":"Alya","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"> 6 jam","Konten":"Review Buku, Studygram","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.68958744213","Nama":"Budi","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"Instagram","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Desain Grafis, Fotografi","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.68965412037","Nama":"Nisa","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Masak, Mukbang, Edukasi","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Setuju"},
  {"Timestamp":"46293.68971204861","Nama":"Reza","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"X (Twitter)","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Diskusi Politik, Berita","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Setuju"},
  {"Timestamp":"46293.68978901620","Nama":"Cindy","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Seni, Musik, Fashion","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Biasa saja"},
  {"Timestamp":"46293.68984524305","Nama":"Dimas","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"YouTube","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Tutorial Koding, Gadget","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.68991203704","Nama":"Putri","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"> 6 jam","Konten":"Dance, K-pop, Skincare","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.68998414352","Nama":"Arif","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"Instagram","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Sepak Bola, Olahraga","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69004512731","Nama":"Bella","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Tips Belajar, Edukasi","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69011245370","Nama":"Hana","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"> 6 jam","Konten":"Anime, Cosplay, Gambar","Pancasila":"Biasa saja","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.69018422454","Nama":"Kevin","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Laki-laki","Platform":"YouTube","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Game Minecraft, MLBB","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.69025112268","Nama":"Maya","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Kutipan Motivasi, Puisi","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69031201389","Nama":"Dian","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Vlog Sekolah, Keseharian","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69038415509","Nama":"Taufik","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Laki-laki","Platform":"Tiktok","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Komedi Lucu, Meme","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69045123842","Nama":"Nabila","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Fashion, OOTD","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.69051234954","Nama":"Gilang","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Laki-laki","Platform":"YouTube","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Sains Populer, Eksperimen","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.69058412037","Nama":"Zahra","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"> 6 jam","Konten":"Mukbang, Review Jajanan","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.69065111111","Nama":"Rian","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Laki-laki","Platform":"Tiktok","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Gaming, Lucu","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69071239583","Nama":"Tiara","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Fotografi Estetik","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69078415509","Nama":"Farhan","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"Instagram","Frekuensi":"Sering","Durasi":"4-6 jam","Konten":"Isu Lingkungan & Sosial","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.69084512731","Nama":"Tasya","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"K-pop & Tutorial Tari","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.69091203704","Nama":"Eko","Usia":"> 20 Tahun","Status":"Pekerja","Gender":"Laki-laki","Platform":"WhatsApp","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Berita Ekonomi, Karir","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69098414352","Nama":"Lestari","Usia":"18-20 Tahun","Status":"Mahasiswa & Pekerja","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sering","Durasi":"4-6 jam","Konten":"Tips Kerja, Edukasi Finansial","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.69104512731","Nama":"Agus","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Laki-laki","Platform":"Tiktok","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Tutorial Otomotif","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69111245370","Nama":"Salsabila","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Daily Vlog, Tips Skincare","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.69118422454","Nama":"Bayu","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Laki-laki","Platform":"Tiktok","Frekuensi":"Sering","Durasi":"< 1 jam","Konten":"Berita Olahraga","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.69125112268","Nama":"Gita","Usia":"< 18 Tahun","Status":"Pelajar","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"> 6 jam","Konten":"Drama Web Series, Review","Pancasila":"Setuju","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.69131201389","Nama":"Dian S","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sering","Durasi":"1-3 jam","Konten":"Psikologi, Self-love","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69138415509","Nama":"Wahyu","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Laki-laki","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"> 6 jam","Konten":"Brainrot, Meme Lucu","Pancasila":"Biasa saja","PedeNasional":"Biasa saja","Individualis":"Setuju"},
  {"Timestamp":"46293.69145123842","Nama":"Kurnia","Usia":"18-20 Tahun","Status":"Mahasiswa","Gender":"Perempuan","Platform":"Instagram","Frekuensi":"Sering","Durasi":"4-6 jam","Konten":"Edukasi Bahasa Asing","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Biasa saja"},
  {"Timestamp":"46293.69151234954","Nama":"Irfan","Usia":"18-20 Tahun","Status":"Pekerja","Gender":"Laki-laki","Platform":"Lainnya","Frekuensi":"Jarang","Durasi":"1-3 jam","Konten":"Berita Teknologi","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"},
  {"Timestamp":"46293.69158412037","Nama":"Anisa","Usia":"18-20 Tahun","Status":"Lainnya","Gender":"Perempuan","Platform":"Tiktok","Frekuensi":"Sangat sering","Durasi":"4-6 jam","Konten":"Kesenian Tari & Musik Tradisional","Pancasila":"Setuju","PedeNasional":"Setuju","Individualis":"Tidak setuju"}
];

// Configure Chart Defaults (Light Theme)
if (typeof Chart !== 'undefined') {
  Chart.defaults.color = '#57534E';
  Chart.defaults.font.family = "'Plus Jakarta Sans', -apple-system, sans-serif";
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
  Chart.defaults.plugins.tooltip.backgroundColor = '#1C1917';
  Chart.defaults.plugins.tooltip.titleColor = '#FFFFFF';
  Chart.defaults.plugins.tooltip.bodyColor = '#FAF7F2';
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.color = '#44403C';
}

// Research Empirical Chart (on riset.html)
function initResearchChart() {
  const ctx = document.getElementById('researchChart') || document.getElementById('chartRisetR2');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Univ. Tarumanagara (Hedonisme)',
        'Univ. Mercu Buana (Fashion)',
        'UIN Suska Riau (Gaya Hidup)',
        'UIN Sunan Gunung Djati (Identitas Sosial)',
        'Univ. HKBP Nommensen (Budaya Lokal)'
      ],
      datasets: [{
        label: 'Pengaruh (R² %)',
        data: [88.8, 63.9, 49.9, 25.3, 22.18],
        backgroundColor: [
          '#DC2626', // Merah UNTAR
          '#EA580C', // Oranye UMB
          '#D97706', // Emas UIN Suska
          '#2563EB', // Biru UIN SGD
          '#16A34A'  // Hijau Nommensen
        ],
        borderRadius: 8,
        borderWidth: 0
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          grid: { color: '#E8DFD1' },
          ticks: { callback: v => v + '%', color: '#57534E' }
        },
        y: { 
          grid: { display: false },
          ticks: { color: '#1C1917', font: { weight: '600' } }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => `Pengaruh (R²): ${c.raw}%` } }
      }
    }
  });
}

// Survey Visualizations (N=44 on survei.html)
function initSurveyCharts() {
  // 1. Platform
  const elPlatform = document.getElementById('platformChart') || document.getElementById('chartPlatform');
  if (elPlatform) {
    new Chart(elPlatform, {
      type: 'doughnut',
      data: {
        labels: ['TikTok (43.2%)', 'Instagram (36.4%)', 'YouTube (13.6%)', 'X (2.3%)', 'WhatsApp (2.3%)', 'Lainnya (2.3%)'],
        datasets: [{
          data: [19, 16, 6, 1, 1, 1],
          backgroundColor: ['#DC2626', '#E11D48', '#EA580C', '#2563EB', '#16A34A', '#78716C'],
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // 2. Usia
  const elUsia = document.getElementById('usiaChart') || document.getElementById('chartUsia');
  if (elUsia) {
    new Chart(elUsia, {
      type: 'doughnut',
      data: {
        labels: ['18-20 Tahun (61.4%)', '< 18 Tahun (36.4%)', '> 20 Tahun (2.3%)'],
        datasets: [{
          data: [27, 16, 1],
          backgroundColor: ['#DC2626', '#D97706', '#2563EB'],
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // 3. Gender
  const elGender = document.getElementById('genderChart') || document.getElementById('chartGender');
  if (elGender) {
    new Chart(elGender, {
      type: 'pie',
      data: {
        labels: ['Perempuan (68.2%)', 'Laki-laki (31.8%)'],
        datasets: [{
          data: [30, 14],
          backgroundColor: ['#F43F5E', '#2563EB'],
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // 4. Status
  const elStatus = document.getElementById('statusChart') || document.getElementById('chartStatus');
  if (elStatus) {
    new Chart(elStatus, {
      type: 'bar',
      data: {
        labels: ['Mahasiswa', 'Pelajar', 'Pekerja', 'Mhs & Pekerja', 'Lainnya'],
        datasets: [{
          label: 'Jumlah Responden',
          data: [29, 11, 2, 1, 1],
          backgroundColor: '#DC2626',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: '#E8DFD1' } },
          x: { grid: { display: false } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  // 5. Durasi
  const elDurasi = document.getElementById('durasiChart') || document.getElementById('chartDurasi');
  if (elDurasi) {
    new Chart(elDurasi, {
      type: 'bar',
      data: {
        labels: ['< 1 jam', '1-3 jam', '4-6 jam', '> 6 jam'],
        datasets: [{
          label: 'Jumlah Responden',
          data: [1, 18, 17, 8],
          backgroundColor: ['#16A34A', '#2563EB', '#D97706', '#DC2626'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: '#E8DFD1' } },
          x: { grid: { display: false } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  // 6. Frekuensi
  const elFrekuensi = document.getElementById('frekuensiChart') || document.getElementById('chartFrekuensi');
  if (elFrekuensi) {
    new Chart(elFrekuensi, {
      type: 'pie',
      data: {
        labels: ['Sangat Sering (52.3%)', 'Sering (45.5%)', 'Jarang (2.3%)'],
        datasets: [{
          data: [23, 20, 1],
          backgroundColor: ['#DC2626', '#D97706', '#A8A29E'],
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // 7. Likert Stacked Bar
  const elLikert = document.getElementById('likertChart') || document.getElementById('chartLikert');
  if (elLikert) {
    const statements = [
      'Penerapan Nilai Pancasila',
      'Pentingnya Medsos Bagi Diri',
      'Percaya Diri Identitas Nasional',
      'Kebebasan Berekspresi',
      'Medsos Ajarkan Individualis',
      'Pengaruh Budaya Luar',
      'Aktif Bagikan Budaya Lokal',
      'Medsos Penentu Nasionalisme'
    ];
    new Chart(elLikert, {
      type: 'bar',
      data: {
        labels: statements,
        datasets: [
          { label: 'Setuju', data: [32, 29, 20, 19, 17, 11, 11, 12], backgroundColor: '#16A34A', borderRadius: 4 },
          { label: 'Biasa Saja', data: [12, 15, 19, 24, 18, 27, 22, 15], backgroundColor: '#D97706', borderRadius: 4 },
          { label: 'Tidak Setuju', data: [0, 0, 5, 1, 9, 6, 11, 17], backgroundColor: '#DC2626', borderRadius: 4 }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, max: 44, grid: { color: '#E8DFD1' } },
          y: { stacked: true, grid: { display: false } }
        },
        plugins: { legend: { position: 'top' } }
      }
    });
  }

  // 8. Radar Score
  const elRadar = document.getElementById('radarChart') || document.getElementById('chartRadar');
  if (elRadar) {
    new Chart(elRadar, {
      type: 'radar',
      data: {
        labels: [
          'Pedoman Pancasila',
          'Kepentingan Medsos',
          'Pede Identitas Nasional',
          'Kebebasan Ekspresi',
          'Kritik Individualisme',
          'Ketahanan Budaya Luar',
          'Promosi Budaya Lokal',
          'Efek ke Nasionalisme'
        ],
        datasets: [{
          label: '% Responden Setuju',
          data: [72.7, 65.9, 45.5, 43.2, 38.6, 25.0, 25.0, 27.3],
          fill: true,
          backgroundColor: 'rgba(220, 38, 38, 0.15)',
          borderColor: '#DC2626',
          pointBackgroundColor: '#DC2626',
          pointBorderColor: '#FFF',
          pointHoverBackgroundColor: '#FFF',
          pointHoverBorderColor: '#DC2626'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: '#E8DFD1' },
            grid: { color: '#E8DFD1' },
            pointLabels: { color: '#1C1917', font: { size: 11, weight: '600' } },
            ticks: { display: false }
          }
        }
      }
    });
  }

  // 9. Raw Table Renderer & Filter
  initRawTable();
}

function initRawTable() {
  const tbody = document.getElementById('rawTableBody');
  const searchInput = document.getElementById('searchInput') || document.getElementById('rawTableSearch');
  if (!tbody) return;

  function render(data) {
    tbody.innerHTML = '';
    data.forEach((row, i) => {
      const tr = document.createElement('tr');
      const badge = (val) => {
        if (val === 'Setuju') return `<span class="badge" style="background: var(--accent-green-light); color: var(--accent-green);">Setuju</span>`;
        if (val === 'Biasa saja') return `<span class="badge" style="background: var(--accent-gold-light); color: var(--accent-gold);">Biasa saja</span>`;
        return `<span class="badge" style="background: var(--primary-red-light); color: var(--primary-red);">${val}</span>`;
      };

      tr.innerHTML = `
        <td>${i + 1}</td>
        <td style="font-weight: 800; color: var(--text-main);">${row.Nama}</td>
        <td>${row.Usia}</td>
        <td>${row.Status}</td>
        <td>${row.Gender}</td>
        <td><strong>${row.Platform}</strong></td>
        <td>${row.Durasi}</td>
        <td>${row.Frekuensi}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  render(surveyRawData);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = surveyRawData.filter((item) =>
        Object.values(item).some((v) => String(v).toLowerCase().includes(q))
      );
      render(filtered);
    });
  }
}

function initCharts() {
  initResearchChart();
  initSurveyCharts();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCharts);
} else {
  initCharts();
}
