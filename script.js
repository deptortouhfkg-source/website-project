/* =======================================================
   E-LOGBOOK ORTODONTI - JS (Versi Lokal Lengkap)
   ======================================================= */

// ====== SELECTOR CEPAT ======
const $ = (id) => document.getElementById(id);

// ====== UTILITAS LOCAL STORAGE ======
function getAccounts() {
  return JSON.parse(localStorage.getItem("accounts") || "[]");
}

function saveAccounts(list) {
  localStorage.setItem("accounts", JSON.stringify(list));
}

// ====== NAVIGASI ANTAR HALAMAN ======
function showLogin() {
  hideAllPages();
  $("loginPage").style.display = "block";
}

function showRegister() {
  hideAllPages();
  $("registerPage").style.display = "block";
}

function showForgot() {
  hideAllPages();
  $("forgotPage").style.display = "block";
}

function showDashboard(user) {
  hideAllPages();
  $("mainContainer").style.display = "flex";
  configureSidebar(user.role || "mahasiswa");
  if ($("userName")) $("userName").innerText = user.nama;
  if ($("userEmail")) $("userEmail").innerText = user.email;
}

function hideAllPages() {
  ["loginPage", "registerPage", "forgotPage", "mainContainer"].forEach((id) => {
    const el = $(id);
    if (el) el.style.display = "none";
  });
}

// ====== EVENT LINK LOGIN / REGISTER / FORGOT ======
if ($("toRegister"))
  $("toRegister").onclick = (e) => {
    e.preventDefault();
    showRegister();
  };

if ($("toLogin1"))
  $("toLogin1").onclick = (e) => {
    e.preventDefault();
    showLogin();
  };

if ($("toForgot"))
  $("toForgot").onclick = (e) => {
    e.preventDefault();
    showForgot();
  };

if ($("toLogin2"))
  $("toLogin2").onclick = (e) => {
    e.preventDefault();
    showLogin();
  };

// ===================================================
// =============== FITUR LOGIN =======================
// ===================================================
if ($("loginForm")) {
  $("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("loginEmail").value.trim();
    const password = $("loginPassword").value.trim();
    const error = $("loginError");

    error.innerText = "";
    const accounts = getAccounts();
    const user = accounts.find((a) => a.email === email && a.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      showDashboard(user);
    } else {
      error.innerText = "❌ Email atau password salah.";
    }
  });
}

// ===================================================
// =============== FITUR REGISTER ====================
// ===================================================
if ($("registerForm")) {
  $("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = $("regNama").value.trim();
    const email = $("regEmail").value.trim();
    const password = $("regPassword").value.trim();
    const error = $("regError");

    error.innerText = "";

    if (!nama || !email || !password) {
      error.innerText = "⚠️ Semua kolom wajib diisi.";
      return;
    }

    const accounts = getAccounts();
    if (accounts.some((a) => a.email === email)) {
      error.innerText = "⚠️ Email sudah terdaftar.";
      return;
    }

    accounts.push({ nama, email, password, role: "mahasiswa" });
    saveAccounts(accounts);

    alert("✅ Akun berhasil dibuat! Silakan login.");
    showLogin();
  });
}

// ===================================================
// =============== FITUR LUPA PASSWORD ===============
// ===================================================
if ($("forgotForm")) {
  $("forgotForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("forgotEmail").value.trim();
    const error = $("forgotError");

    error.innerText = "";
    const accounts = getAccounts();
    const user = accounts.find((a) => a.email === email);

    if (!user) {
      error.innerText = "❌ Email tidak ditemukan.";
      return;
    }

    const newPass = Math.random().toString(36).slice(2, 8);
    user.password = newPass;
    saveAccounts(accounts);

    alert(`🔑 Password baru Anda: ${newPass}\nSilakan login kembali.`);
    showLogin();
  });
}

// ===================================================
// =============== FITUR LOGOUT ======================
// ===================================================
if ($("logoutBtn")) {
  $("logoutBtn").onclick = () => {
    localStorage.removeItem("currentUser");
    showLogin();
  };
}

// ===================================================
// ========== AUTO LOGIN & SIDEBAR ===================
// ===================================================
window.addEventListener("load", () => {
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");
  if (user) {
    showDashboard(user);
  } else {
    showLogin();
  }
});

// ===================================================
// =============== KONFIGURASI SIDEBAR ===============
// ===================================================
function configureSidebar(role) {
  const nav = document.querySelector(".sidebar nav");
  if (!nav) return;

  nav.innerHTML = "";

  const allMenu = [
    { id: "dashboardContent", icon: "home", text: "Dashboard" },
    { id: "announcementContent", icon: "bell", text: "Pengumuman" },
    { id: "attendanceContent", icon: "calendar", text: "Kehadiran" },
    { id: "journalReadingContent", icon: "book-open", text: "Journal Reading" },
    { id: "materiContent", icon: "file-text", text: "Materi Kepaniteraan" },
    { id: "kasusContent", icon: "briefcase", text: "Presentasi Kasus" },
    { id: "aktivasiContent", icon: "cpu", text: "Aktivasi Teman" },
    { id: "jurnalContent", icon: "file", text: "Presentasi Jurnal" },
    { id: "evaluasiContent", icon: "clipboard", text: "Evaluasi Kasus" },
    { id: "requirementContent", icon: "folder", text: "Requirement" },
    { id: "panduanContent", icon: "info", text: "Panduan Departemen" },
    { id: "profileContent", icon: "user", text: "Profil Mahasiswa" },
    { id: "evaluasiMahasiswaContent", icon: "bar-chart-2", text: "Evaluasi Mahasiswa" },
  ];

  const menuToShow =
    role === "dosen" || role === "admin"
      ? allMenu
      : allMenu.filter((m) => m.id !== "evaluasiMahasiswaContent");

  menuToShow.forEach((menu) => {
    const item = document.createElement("button");
    item.classList.add("menu-item");
    item.dataset.target = menu.id;
    item.innerHTML = `<i class="icon-${menu.icon}"></i><span>${menu.text}</span>`;
    item.onclick = () => showContent(menu.id);
    nav.appendChild(item);
  });
}

// ===================================================
// =============== GANTI KONTEN UTAMA ================
// ===================================================
function showContent(id) {
  const allContent = document.querySelectorAll(".tab-content, .content-section");
  allContent.forEach((c) => (c.style.display = "none"));

  const target = document.getElementById(id);
  if (target) target.style.display = "block";

  // Tutup sidebar otomatis di HP setelah klik menu
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    document.body.classList.remove("sidebar-open");
  }
}

// ===================================================
// =============== MENU TOGGLE MOBILE ================
// ===================================================
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      document.body.classList.toggle("sidebar-open");
    });
  }
});
