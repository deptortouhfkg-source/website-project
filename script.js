// ====== TAMPILAN LOGIN ======
function showRegister() {
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("forgotForm").style.display = "none";
}

function showForgot() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("forgotForm").style.display = "block";
}

function showLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("forgotForm").style.display = "none";
}

// ====== REGISTRASI ======
function register() {
  let name = document.getElementById("regName").value.trim();
  let nim = document.getElementById("regNIM").value.trim();
  let pass = document.getElementById("regPass").value.trim();
  let role = document.getElementById("regRole").value;

  if (!name || !nim || !pass) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some(u => u.nim === nim)) {
    alert("NIM sudah terdaftar!");
    return;
  }

  users.push({ name, nim, pass, role });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Akun berhasil dibuat!");
  showLogin();
}

// ====== LOGIN ======
function login() {
  let nim = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let role = document.getElementById("role").value;

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = users.find(u => u.nim === nim && u.pass === pass && u.role === role);

  if (!user) {
    alert("NIM atau Password salah!");
    return;
  }

  localStorage.setItem("loggedUser", JSON.stringify(user));
  window.location.href = "dashboard.html";
}

// ====== DASHBOARD ======
function loadDashboard() {
  let user = JSON.parse(localStorage.getItem("loggedUser"));
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("roleTitle").textContent =
    user.role === "dosen" ? "Dosen Ortodonti" : "Mahasiswa";

  const menuList = document.getElementById("menuList");
  const menus =
    user.role === "dosen"
      ? [
          "Dashboard",
          "Pengumuman",
          "Kehadiran Mahasiswa",
          "Review Journal",
          "Verifikasi Materi",
          "Penilaian",
          "Profil Dosen"
        ]
      : [
          "Dashboard",
          "Pengumuman",
          "Kehadiran",
          "Journal Reading",
          "Materi Kepaniteraan",
          "Presentasi Kasus",
          "Aktivitas Teman",
          "Profil",
          "Evaluasi Mahasiswa"
        ];

  menus.forEach(menu => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" onclick="showContent('${menu}')">${menu}</a>`;
    menuList.appendChild(li);
  });
}

function showContent(menu) {
  const main = document.getElementById("mainContent");
  if (menu === "Journal Reading" || menu === "Review Journal") {
    main.innerHTML = `<h3>${menu}</h3><iframe src="panduan-ortodonti.pdf"></iframe>`;
  } else {
    main.innerHTML = `<h3>${menu}</h3><p>Konten ${menu} akan ditampilkan di sini.</p>`;
  }
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

// ====== TOGGLE MENU HP ======
function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}
