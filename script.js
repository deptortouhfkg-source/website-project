// ===============================
// E-LOGBOOK ORTODONTI - SCRIPT FINAL
// ===============================

// === Ganti antar form ===
function showRegister() {
    document.getElementById("formTitle").innerText = "Daftar Akun Baru";
    hideAllForms();
    document.getElementById("registerForm").classList.add("active");
}

function showForgot() {
    document.getElementById("formTitle").innerText = "Lupa Password";
    hideAllForms();
    document.getElementById("forgotForm").classList.add("active");
}

function showLogin() {
    document.getElementById("formTitle").innerText = "Login E-Logbook";
    hideAllForms();
    document.getElementById("loginForm").classList.add("active");
}

function hideAllForms() {
    document.querySelectorAll(".form-section").forEach(f => f.classList.remove("active"));
}

// === Simpan akun ke localStorage ===
function register() {
    const name = document.getElementById("regName").value.trim();
    const nim = document.getElementById("regNIM").value.trim();
    const pass = document.getElementById("regPass").value.trim();
    const role = document.getElementById("regRole").value;

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

    alert("Akun berhasil dibuat! Silakan login.");
    showLogin();
}

// === Login ===
function login() {
    const nim = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    if (!nim || !pass) {
        alert("Isi NIM dan password!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.nim === nim && u.pass === pass && u.role === role);

    if (!user) {
        alert("NIM atau password salah!");
        return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
}

// === Cek status login di dashboard ===
function checkLogin() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) {
        alert("Silakan login terlebih dahulu!");
        window.location.href = "index.html";
    }
    return user;
}

// === Logout ===
function logout() {
    alert("Anda telah logout.");
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}
