
document.addEventListener("DOMContentLoaded", () => {
    const $ = id => document.getElementById(id);

    // ====== GLOBAL PENGUMUMAN (untuk semua user) ======
    let pengumumanData = JSON.parse(localStorage.getItem("pengumumanData") || "[]");

    // Fungsi untuk menyimpan data pengumuman ke localStorage
    function savePengumuman() {
        localStorage.setItem("pengumumanData", JSON.stringify(pengumumanData));
    }


    const loginPage = $("loginPage");
    const dashboardPage = $("dashboardPage");
    if (typeof feather !== "undefined") feather.replace();

    const mahasiswaData = [
        {
            id: "mhs01",
            nama: "Andi Mahasiswa",
            journalFiles: { asli: "Andi_Journal_Asli.pdf", terjemahan: "Andi_Journal_Terjemahan.pdf", ppt: "Andi_Journal_PPT.pdf", laporan: "Andi_Journal_Laporan.pdf" },
            jurnalVerified: false, jurnalScore: null,
            materiAjuan: [{ materi: "CSL Desain Peranti", tanggal: "2025-10-21", verified: false }],
            aktivasiTeman: [{ tanggal: "2025-10-21", kode: "RA: LB, RB: FS 32", operator: "Fadlur", pembimbing: "IP", verified: false }, { tanggal: "2025-10-24", kode: "RA:-, RB: Bumper 31", operator: "Santi", pembimbing: "RD", verified: false }],
            presentasiJurnal: [{ tanggal: "2025-10-25", judul: "Effect of Orthodontic Forces on PDL Cells", pembimbing: "RD", verified: false }],
            evaluasiPresentasi: [{ model: "Model 1", namaPasien: "Budi", umur: 16, tanggal: "2025-10-20", verified: false, nilai: null }],
            aktivasiPasien: [{ id: 1, tanggal: "2025-10-15", kode: "RA: LB", keterangan: "Aktivasi awal", verified: false }, { id: 2, tanggal: "2025-10-20", kode: "RB: FS 32", keterangan: "Follow up", verified: false }]
        },
        {
            id: "mhs02",
            nama: "Bunga Mahasiswa",
            journalFiles: { asli: "Bunga_Journal_Asli.pdf", terjemahan: "Bunga_Journal_Terjemahan.pdf", ppt: "Bunga_Journal_PPT.pdf", laporan: "Bunga_Journal_Laporan.pdf" },
            jurnalVerified: false, jurnalScore: null,
            materiAjuan: [{ materi: "CSL Insersi dan Aktivasi", tanggal: "2025-10-18", verified: false }],
            aktivasiTeman: [{ tanggal: "2025-10-19", kode: "RA: LB", operator: "Fadlur", pembimbing: "RD", verified: false }],
            presentasiJurnal: [{ tanggal: "2025-10-22", judul: "Bracket Materials Comparison", pembimbing: "RD", verified: false }],
            evaluasiPresentasi: [{ model: "Model 2", namaPasien: "Siti", umur: 14, tanggal: "2025-10-18", verified: false, nilai: null }],
            aktivasiPasien: [{ id: 1, tanggal: "2025-10-10", kode: "RA:-, RB: Bumper 31", keterangan: "Initial", verified: false }]
        },
        {
            id: "mhs03",
            nama: "Fadlur Mahasiswa",
            journalFiles: { asli: "Fadlur_Journal_Asli.pdf", terjemahan: "Fadlur_Journal_Terjemahan.pdf", ppt: "Fadlur_Journal_PPT.pdf", laporan: "Fadlur_Journal_Laporan.pdf" },
            jurnalVerified: false, jurnalScore: null,
            materiAjuan: [{ materi: "CSL Pencetakan Studi Model", tanggal: "2025-10-12", verified: false }],
            aktivasiTeman: [{ tanggal: "2025-10-11", kode: "RA: LB, RB: FS 32", operator: "Citra", pembimbing: "RD", verified: false }],
            presentasiJurnal: [{ tanggal: "2025-10-15", judul: "Orthodontic Retention Strategies", pembimbing: "RD", verified: false }],
            evaluasiPresentasi: [{ model: "Model 3", namaPasien: "Anton", umur: 18, tanggal: "2025-10-14", verified: false, nilai: null }],
            aktivasiPasien: [{ id: 1, tanggal: "2025-10-05", kode: "RA: LB", keterangan: "Initial", verified: false }]
        },
        {
            id: "mhs04",
            nama: "Citra Mahasiswa",
            journalFiles: { asli: "Citra_Journal_Asli.pdf", terjemahan: "Citra_Journal_Terjemahan.pdf", ppt: "Citra_Journal_PPT.pdf", laporan: "Citra_Journal_Laporan.pdf" },
            jurnalVerified: false, jurnalScore: null,
            materiAjuan: [{ materi: "Administrasi Klinik Ortodonti", tanggal: "2025-10-05", verified: false }],
            aktivasiTeman: [{ tanggal: "2025-10-06", kode: "RA:-, RB: Bumper 31", operator: "Rahman", pembimbing: "RD", verified: false }],
            presentasiJurnal: [{ tanggal: "2025-10-08", judul: "3D Imaging in Orthodontics", pembimbing: "RD", verified: false }],
            evaluasiPresentasi: [{ model: "Model 1", namaPasien: "Nina", umur: 15, tanggal: "2025-10-07", verified: false, nilai: null }],
            aktivasiPasien: [{ id: 1, tanggal: "2025-10-02", kode: "RB: FS 32", keterangan: "First", verified: false }]
        },
        {
            id: "mhs05",
            nama: "Rahman Mahasiswa",
            journalFiles: { asli: "Rahman_Journal_Asli.pdf", terjemahan: "Rahman_Journal_Terjemahan.pdf", ppt: "Rahman_Journal_PPT.pdf", laporan: "Rahman_Journal_Laporan.pdf" },
            jurnalVerified: false, jurnalScore: null,
            materiAjuan: [{ materi: "Mekanisme Presentasi Ilmiah", tanggal: "2025-09-30", verified: false }],
            aktivasiTeman: [{ tanggal: "2025-10-01", kode: "RA: LB", operator: "Andi", pembimbing: "RD", verified: false }],
            presentasiJurnal: [{ tanggal: "2025-10-03", judul: "Clear Aligners vs Braces", pembimbing: "RD", verified: false }],
            evaluasiPresentasi: [{ model: "Model 2", namaPasien: "Dewi", umur: 17, tanggal: "2025-10-02", verified: false, nilai: null }],
            aktivasiPasien: [{ id: 1, tanggal: "2025-09-29", kode: "RA: LB", keterangan: "Initial", verified: false }]
        }
    ];

    const accounts = {
        mahasiswa: { user: "J014232000", pass: "12345", nama: "Mahasiswa Ortodonti", role: "mahasiswa" },

        dosen_donald: { user: "donald", pass: "admin123", nama: "drg. Donald Nahusona, M.Kes., Sp.Ort", role: "dosen" },
        dosen_eka: { user: "eka", pass: "admin123", nama: "Dr.drg. Eka Erwansyah, M.Kes, Sp.Ort(K)", role: "dosen" },
        dosen_eddy: { user: "eddy", pass: "admin123", nama: "Dr.drg. Eddy Heryanto Habar, Sp.Ort(K)", role: "dosen" },
        dosen_bahar: { user: "bahar", pass: "admin123", nama: "drg. Baharuddin M. Ranggang, Sp.Ort", role: "dosen" },
        dosen_ardiansyah: { user: "ardiansyah", pass: "admin123", nama: "drg. Ardiansyah S. Pawinru , Sp.Ort", role: "dosen" },
        dosen_rika: { user: "rika", pass: "admin123", nama: "drg. Rika Damayanti Syarif , M.Kes", role: "dosen" },
        dosen_karima: { user: "karima", pass: "admin123", nama: "drg. Karima Qurnia Mansjur, Ph.D", role: "dosen" },
        dosen_nasyrah: { user: "nasyrah", pass: "admin123", nama: "drg. Nasyrah Hidayati, Sp. Ort(K)", role: "dosen" },
        dosen_zilal: { user: "zilal", pass: "admin123", nama: "drg. Zilal Islami Paramma, Sp. Ort(K)", role: "dosen" },
        dosen_ita: { user: "ita", pass: "admin123", nama: "drg. Ita Purnama Alwi, Sp.Ort", role: "dosen" },
        dosen_izzah: { user: "izzah", pass: "admin123", nama: "drg. Muhammad Izzah Abdullah, M.Sc", role: "dosen" },

        kepalaUsernames: ["eddy"],   // Eddy kepala departemen
        sekUsernames: ["rika"],      // Rika sekdep
        ksmUsernames: ["nasyrah"]    // Nasyrah KSM
    };


    const loginForm = $("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const role = $("role").value;
            const user = $("username").value.trim();
            const pass = $("password").value.trim();
            if (role === "mahasiswa" && user === accounts.mahasiswa.user && pass === accounts.mahasiswa.pass) {
                localStorage.setItem("role", "mahasiswa");
                localStorage.setItem("nama", accounts.mahasiswa.nama);
                localStorage.setItem("username", user);
                showDashboard("mahasiswa", user);
            }
            else if (role === "dosen") {
                const matchedAccount = Object.values(accounts).find(
                    acc => acc.role === "dosen" && acc.user === user && acc.pass === pass
                );

                if (matchedAccount) {
                    localStorage.setItem("role", matchedAccount.role);
                    localStorage.setItem("nama", matchedAccount.nama);
                    localStorage.setItem("username", matchedAccount.user);
                    showDashboard("dosen", matchedAccount.user);
                } else {
                    $("loginError").innerText = "Username atau password salah!";
                }
            }


            else {
                $("loginError").innerText = "Username atau password salah!";
            }
        });
    }

    function showDashboard(role, username) {
        loginPage.style.display = "none";
        dashboardPage.style.display = "flex";

        // Ambil nama dari localStorage
        let nama = localStorage.getItem("nama");

        // Jika nama belum ada di localStorage, cari berdasarkan username
        if (!nama) {
            const akun = Object.values(accounts).find(acc => acc.user === username);
            nama = akun ? akun.nama : username;
            localStorage.setItem("nama", nama);
        }

        // Tampilkan nama
        const welcomeTitle = document.querySelector(".welcome h2");
        const nameDisplay = document.getElementById("userName");
        if (welcomeTitle && nameDisplay) {
            welcomeTitle.innerText = "Selamat Datang";
            nameDisplay.innerText = nama;
        }

        // Ganti foto sesuai akun
        const profilePic = document.getElementById("profilePic");
        if (profilePic) {
            const user = localStorage.getItem("username");
            if (role === "dosen") {
                if (user === "sekretaris1") profilePic.src = "sekretaris.jpg";
                else if (user === "kepala1") profilePic.src = "kepala.jpg";
                else if (user === "ksm1") profilePic.src = "ksm.jpg";
                else profilePic.src = "dosen.jpg";
            } else if (role === "mahasiswa") {
                profilePic.src = "mahasiswa.jpg";
            } else {
                profilePic.src = "profile.jpg";
            }
        }

        configureSidebar(role);
        document.querySelectorAll(".tablinks").forEach((btn) => btn.addEventListener("click", () => showTab(btn.dataset.tab)));
        showTab("dashboardContent");

        if (role === "mahasiswa") initMahasiswa();
        else initDosen();
    }


    function configureSidebar(role) {
        const nav = document.querySelector(".sidebar nav");
        nav.innerHTML = "";
        const allMenu = [
            { id: "dashboardContent", icon: "home", text: "Dashboard" },
            { id: "announcementContent", icon: "bell", text: "Pengumuman" },
            { id: "attendanceContent", icon: "calendar", text: "Kehadiran" },
            { id: "journalReadingContent", icon: "book-open", text: "Journal Reading" },
            { id: "materiContent", icon: "file-text", text: "Materi Kepaniteraan" },
            { id: "kasusContent", icon: "briefcase", text: "Mengikuti Presentasi Kasus" },
            { id: "aktivasiContent", icon: "cpu", text: "Mengikuti Aktivasi Teman" },
            { id: "jurnalContent", icon: "file", text: "Mengikuti Presentasi Jurnal" },
            { id: "evaluasiContent", icon: "clipboard", text: "Evaluasi Presentasi Kasus" },
            { id: "requirementContent", icon: "folder", text: "Requirement" },
            { id: "panduanContent", icon: "info", text: "Panduan Departemen" },
            { id: "profileContent", icon: "user", text: "Profil Mahasiswa" },
            { id: "evaluasiMahasiswaContent", icon: "bar-chart-2", text: "Evaluasi Mahasiswa" }
        ];
        allMenu.forEach((m) => {
            if (role === "mahasiswa" && m.id === "evaluasiMahasiswaContent") return;
            if (role !== "mahasiswa" && m.id === "attendanceContent") return;
            if (role === "dosen" && m.id === "evaluasiMahasiswaContent") {
                const usernameNow = localStorage.getItem("username");
                if (!accounts.kepalaUsernames.includes(usernameNow) && !accounts.sekUsernames.includes(usernameNow) && !accounts.ksmUsernames.includes(usernameNow)) return;
            }
            const btn = document.createElement("button");
            btn.classList.add("tablinks");
            btn.dataset.tab = m.id;
            btn.innerHTML = `<i data-feather="${m.icon}"></i> ${m.text}`;
            nav.appendChild(btn);
        });
        const logoutBtn = document.createElement("button");
        logoutBtn.classList.add("logout");
        logoutBtn.innerHTML = `<i data-feather="log-out"></i> Logout`;
        logoutBtn.addEventListener("click", () => { localStorage.clear(); location.reload(); });
        nav.appendChild(logoutBtn);
        feather.replace();
    }

    function showTab(tabId) {
        document.querySelectorAll(".tab-content").forEach((t) => (t.style.display = "none"));
        const tgt = document.getElementById(tabId);
        if (tgt) tgt.style.display = "block";
        document.querySelectorAll(".tablinks").forEach((b) => b.classList.remove("active"));
        const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeBtn) activeBtn.classList.add("active");
        const role = localStorage.getItem("role");
        if (role === "dosen") {
            if (tabId === "journalReadingContent") renderJournalTableForDosen();
            if (tabId === "materiContent") renderMateriForDosen();
            if (tabId === "aktivasiContent") renderAktivasiForDosen();
            if (tabId === "jurnalContent") renderPresentasiJurnalForDosen();
            if (tabId === "evaluasiContent") renderEvaluasiPresentasiForDosen();
            if (tabId === "requirementContent") renderRequirementForDosen();
            if (tabId === "kasusContent") buildKasusDosen();
            if (tabId === "evaluasiMahasiswaContent") renderEvaluasiMahasiswa();
        } else {
            if (tabId === "attendanceContent") buildKehadiran();
            if (tabId === "materiContent") buildMateriStudent();
            if (tabId === "kasusContent" || tabId === "aktivasiContent" || tabId === "jurnalContent") buildTablesStudent();
            if (tabId === "evaluasiContent") buildEvaluasiStudent();
            if (tabId === "requirementContent") buildRequirementStudent();
        }
    }

    function initMahasiswa() {
        buildKehadiran();
        buildMateriStudent();
        buildTablesStudent();
        buildEvaluasiStudent();
        buildRequirementStudent();
        buildProfileStudent();
        updateDashboardProfile();

    }

    function buildKehadiran() {
        const body = $("attendanceBody");
        if (!body) return;

        // Data awal contoh
        const data = [
            { date: "10/10/2025", time: "08:00", status: "Hadir", loc: "RSGMP Unhas Kandea" },
            { date: "11/10/2025", time: "08:15", status: "Hadir", loc: "RSGMP Unhas Kandea" }
        ];
        body.innerHTML = data
            .map(
                (d, i) =>
                    `<tr><td>${i + 1}</td><td>${d.date}</td><td>${d.time}</td><td><span class="status-hadir">${d.status}</span></td><td>${d.loc}</td></tr>`
            )
            .join("");

        const btn = $("generateQR");
        if (!btn) return;

        // 🧠 Hapus semua event listener lama agar tidak double
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        // Pasang event listener baru (hanya satu)
        newBtn.addEventListener("click", () => {
            if (!navigator.geolocation) {
                alert("Perangkat Anda tidak mendukung fitur lokasi.");
                return;
            }

            // Koordinat area yang diizinkan (contoh: RSGMP Unhas Kandea)
            const allowedLocation = { lat: -5.1461, lng: 119.4325 };
            const maxDistanceMeters = 150; // radius 150 meter

            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;

                    // Hitung jarak dengan rumus haversine
                    const R = 6371000;
                    const dLat = (latitude - allowedLocation.lat) * Math.PI / 180;
                    const dLon = (longitude - allowedLocation.lng) * Math.PI / 180;
                    const a =
                        Math.sin(dLat / 2) ** 2 +
                        Math.cos(allowedLocation.lat * Math.PI / 180) *
                        Math.cos(latitude * Math.PI / 180) *
                        Math.sin(dLon / 2) ** 2;
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    const distance = R * c;

                    if (distance > maxDistanceMeters) {
                        alert("❌ Anda berada di luar area yang diizinkan untuk mencatat kehadiran.");
                        return;
                    }

                    // Jika lokasi valid, catat kehadiran
                    const now = new Date();
                    const date = now.toLocaleDateString("id-ID");
                    const time = now.toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });

                    const rowCount = body.querySelectorAll("tr").length;
                    body.insertAdjacentHTML(
                        "beforeend",
                        `<tr><td>${rowCount + 1}</td><td>${date}</td><td>${time}</td><td><span class="status-hadir">Hadir</span></td><td>RSGMP Unhas Kandea</td></tr>`
                    );

                    alert("✅ Kehadiran berhasil dicatat!");
                },
                (err) => {
                    alert("Gagal mendapatkan lokasi: " + err.message);
                }
            );
        });
    }


    function buildMateriStudent() {
        const list = $("materiList");
        if (!list) return;

        const materi = [
            "Administrasi Klinik Ortodonti",
            "Regulasi Kepaniteraan Ortodonti",
            "Mekanisme Presentasi Ilmiah",
            "CSL Pencetakan Pembuatan Studi Model dan Basis",
            "CSL Insersi dan Aktivasi",
            "CSL Desain Peranti",
            "Administrasi Kepaniteraan Ortodonti"
        ];

        // Tampilkan daftar materi dengan tombol ajukan
        list.innerHTML = materi
            .map(
                (m, i) =>
                    `<li>${i + 1}. ${m} <button class="btn-verif">Ajukan Verifikasi</button></li>`
            )
            .join("");

        // Saat tombol diklik → ubah menjadi “Menunggu Verifikasi”
        list.querySelectorAll(".btn-verif").forEach((btn) => {
            btn.addEventListener("click", () => {
                btn.textContent = "Menunggu Verifikasi";
                btn.classList.add("waiting");
                btn.disabled = true;
            });
        });
    }



    function buildTablesStudent() {
        const kasus = $("kasusBody"),
            aktivasi = $("aktivasiBody"),
            jurnal = $("jurnalBody");
        if (!kasus || !aktivasi || !jurnal) return;

        // Kosongkan isi tabel
        kasus.innerHTML = "";
        jurnal.innerHTML = "";
        aktivasi.innerHTML = "";

        // ====== Daftar dosen pembimbing ======
        const dosenList = [
            "drg. Donald Nahusona, M.Kes., Sp.Ort",
            "Dr.drg. Eka Erwansyah, M.Kes, Sp.Ort(K)",
            "Dr.drg. Eddy Heryanto Habar, Sp.Ort(K)",
            "drg. Baharuddin M. Ranggang, Sp.Ort",
            "drg. Ardiansyah S. Pawinru , Sp.Ort",
            "drg. Rika Damayanti Syarif , M.Kes",
            "drg. Karima Qurnia Mansjur, Ph.D",
            "drg. Nasyrah Hidayati, Sp. Ort(K)",
            "drg. Zilal Islami Paramma, Sp. Ort(K)",
            "drg. Ita Purnama Alwi, Sp.Ort",
            "drg. Muhammad Izzah Abdullah, M.Sc"
        ];
        const dosenOptions = dosenList.map(d => `<option value="${d}">${d}</option>`).join("");

        // ====== Mengikuti Presentasi Kasus ======
        for (let i = 1; i <= 30; i++) {
            kasus.innerHTML += `
      <tr>
        <td>${i}</td>
        <td><input type="date" class="tgl-input"></td>
        <td><input type="text" class="nama-input" placeholder="Nama Mahasiswa"></td>
        <td>
          <select class="dosen-select">
            <option value="">-- Pilih Dosen Pembimbing --</option>
            ${dosenOptions}
          </select>
        </td>
        <td><button class="btn-verif">Ajukan</button></td>
      </tr>`;
        }

        // ====== Mengikuti Aktivasi Teman ======
        for (let i = 1; i <= 50; i++) {
            aktivasi.innerHTML += `
      <tr>
        <td>${i}</td>
        <td><input type="date" class="tgl-input"></td>
        <td><input type="text" class="kode-input" placeholder="Kode Elemen & Komponen"></td>
        <td><input type="text" class="operator-input" placeholder="Operator"></td>
        <td>
          <select class="dosen-select">
            <option value="">-- Pilih Dosen Pembimbing --</option>
            ${dosenOptions}
          </select>
        </td>
        <td><button class="btn-verif">Ajukan</button></td>
      </tr>`;
        }

        // ====== Mengikuti Presentasi Jurnal ======
        for (let i = 1; i <= 30; i++) {
            jurnal.innerHTML += `
      <tr>
        <td>${i}</td>
        <td><input type="date" class="tgl-input"></td>
        <td><input type="text" class="judul-input" placeholder="Judul Jurnal"></td>
        <td><input type="text" class="nama-input" placeholder="Nama Mahasiswa"></td>
        <td>
          <select class="dosen-select">
            <option value="">-- Pilih Dosen Pembimbing --</option>
            ${dosenOptions}
          </select>
        </td>
        <td><button class="btn-verif">Ajukan</button></td>
      </tr>`;
        }

        // === Saat tombol diklik ===
        document.querySelectorAll(".btn-verif").forEach((btn) => {
            btn.addEventListener("click", () => {
                const row = btn.closest("tr");
                const tanggal = row.querySelector(".tgl-input")?.value.trim();
                const dosen = row.querySelector(".dosen-select")?.value.trim();

                // Tentukan kolom wajib berdasarkan jenis tabel
                if (row.querySelector(".kode-input")) {
                    // Aktivasi Teman
                    const kode = row.querySelector(".kode-input").value.trim();
                    const operator = row.querySelector(".operator-input").value.trim();
                    if (!tanggal || !kode || !operator || !dosen) {
                        alert("⚠️ Harap isi semua kolom (Tanggal, Kode Elemen & Komponen, Operator, dan Dosen Pembimbing) sebelum mengajukan verifikasi.");
                        return;
                    }
                } else if (row.querySelector(".nama-input") && !row.querySelector(".judul-input")) {
                    // Presentasi Kasus
                    const nama = row.querySelector(".nama-input").value.trim();
                    if (!tanggal || !nama || !dosen) {
                        alert("⚠️ Harap isi semua kolom (Tanggal, Nama Mahasiswa, dan Dosen Pembimbing) sebelum mengajukan verifikasi.");
                        return;
                    }
                } else if (row.querySelector(".judul-input")) {
                    // Presentasi Jurnal
                    const judul = row.querySelector(".judul-input").value.trim();
                    const nama = row.querySelector(".nama-input").value.trim();
                    if (!tanggal || !judul || !nama || !dosen) {
                        alert("⚠️ Harap isi semua kolom (Tanggal, Judul Jurnal, Nama Mahasiswa, dan Dosen Pembimbing) sebelum mengajukan verifikasi.");
                        return;
                    }
                }

                // Ubah tombol jadi "Menunggu Verifikasi"
                btn.textContent = "Menunggu Verifikasi";
                btn.classList.add("waiting");
                btn.disabled = true;
            });
        });
    }

    function buildEvaluasiStudent() {
        const e = $("evaluasiBody");
        if (!e) return;
        e.innerHTML = "";

        // Tetap 3 model saja
        for (let i = 1; i <= 3; i++) {
            e.innerHTML += `
      <tr>
        <td>Model ${i}</td>
        <td><input placeholder="Nama Pasien"></td>
        <td><input type="number" placeholder="Umur"></td>
        <td><input type="date"></td>
        <td><button class="btn-verif">Ajukan</button></td>
        <td class="nilai-dosen">-</td>
      </tr>`;
        }

        // 🔧 Ganti bagian tombol Ajukan di sini
        e.querySelectorAll(".btn-verif").forEach((btn) => {
            btn.addEventListener("click", () => {
                const row = btn.closest("tr");
                const nama = row.querySelector("input[placeholder='Nama Pasien']")?.value.trim();
                const umur = row.querySelector("input[placeholder='Umur']")?.value.trim();
                const tanggal = row.querySelector("input[type='date']")?.value.trim();

                // Validasi input wajib
                if (!nama || !umur || !tanggal) {
                    alert("⚠️ Harap isi Nama Pasien, Umur, dan Tanggal Presentasi Kasus sebelum mengajukan verifikasi.");
                    return;
                }

                // Jika valid → ubah tombol jadi oranye & disable
                btn.textContent = "Menunggu Verifikasi";
                btn.classList.add("waiting");
                btn.disabled = true;
            });
        });
    }


    function buildRequirementStudent() {
        const container = document.getElementById("requirementContainer");
        if (!container) return;

        container.innerHTML = "";

        // buat 3 pasien (bisa ubah jumlah sesuai kebutuhan)
        for (let i = 1; i <= 3; i++) {
            const pasien = document.createElement("div");
            pasien.classList.add("req-folder");

            pasien.innerHTML = `
      <div class="folder-header">Pasien ${i}</div>
      <div class="folder-content" style="display:none;">
        
        <!-- ==================== DATA PASIEN ==================== -->
        <div class="folder-section data-pasien">
          <h4>Data Pasien</h4>
          <label>Nama Pasien:</label><input type="text" placeholder="Nama pasien">
          <label>Umur:</label><input type="number" placeholder="Umur">
          <label>Alamat:</label><input type="text" placeholder="Alamat">
          <label>No Telepon:</label><input type="text" placeholder="Nomor telepon">
          <label>Tanggal Cetak Awal:</label><input type="date">
          <label>Tanggal Cetak Akhir:</label><input type="date">
          <label>No Rekam Medik:</label><input type="text" placeholder="Nomor rekam medik">
        </div>

        <!-- ==================== INSERSI PERANTI ==================== -->
        <div class="folder-section">
          <h4>Insersi Peranti</h4>
          <div id="insersiPasien${i}"></div>
        </div>

        <!-- ==================== AKTIVASI PASIEN ==================== -->
        <div class="folder-section">
          <h4>Aktivasi Pasien</h4>
          <div id="aktivasiPasien${i}"></div>
        </div>

      </div>
    `;

            container.appendChild(pasien);
        }

        // toggle buka/tutup folder dan panggil builder
        document.querySelectorAll(".folder-header").forEach((header, index) => {
            header.addEventListener("click", () => {
                const content = header.nextElementSibling;
                content.style.display = content.style.display === "block" ? "none" : "block";

                if (content.style.display === "block") {
                    buildInsersi(index + 1);
                    buildAktivasi(index + 1);
                }
            });
        });
    }


    function buildInsersi(pasienIndex) {
        const container = document.getElementById(`insersiPasien${pasienIndex}`);
        if (!container) return;

        // Bersihkan isi sebelumnya
        container.innerHTML = "";

        const dosenList = [
            "drg. Donald Nahusona, M.Kes., Sp.Ort",
            "Dr.drg. Eka Erwansyah, M.Kes, Sp.Ort(K)",
            "Dr.drg. Eddy Heryanto Habar, Sp.Ort(K)",
            "drg. Baharuddin M. Ranggang, Sp.Ort",
            "drg. Ardiansyah S. Pawinru , Sp.Ort",
            "drg. Rika Damayanti Syarif , M.Kes",
            "drg. Karima Qurnia Mansjur, Ph.D",
            "drg. Nasyrah Hidayati, Sp. Ort(K)",
            "drg. Zilal Islami Paramma, Sp. Ort(K)",
            "drg. Ita Purnama Alwi, Sp.Ort",
            "drg. Muhammad Izzah Abdullah, M.Sc"
        ];

        const dosenOptions = dosenList.map(d => `<option value="${d}">${d}</option>`).join("");

        // === Satu form Insersi tanpa angka ===
        container.innerHTML = `
    <div class="sub-aktivasi">
      <strong>Insersi</strong>
      <label>Tanggal Insersi:</label>
      <input type="date" class="tgl-insersi">

      <label>Insersi Peranti:</label>
      <input type="text" class="jenis-input" placeholder="Contoh: Insersi Peranti RA & RB">

      <label>Dosen Pembimbing:</label>
      <select class="dosen-select">
        <option value="">-- Pilih Dosen Pembimbing --</option>
        ${dosenOptions}
      </select>

      <button class="btn-verif">Ajukan Verifikasi</button>
    </div>
  `;

        // === Event untuk tombol Ajukan Verifikasi ===
        const btn = container.querySelector(".btn-verif");
        btn.addEventListener("click", () => {
            const tanggal = container.querySelector(".tgl-insersi")?.value.trim();
            const jenis = container.querySelector(".jenis-input")?.value.trim();
            const dosen = container.querySelector(".dosen-select")?.value.trim();

            if (!tanggal || !jenis || !dosen) {
                alert("⚠️ Harap isi semua kolom (Tanggal, Jenis Peranti, dan Dosen Pembimbing) sebelum mengajukan verifikasi.");
                return;
            }

            btn.textContent = "Menunggu Verifikasi";
            btn.classList.add("waiting");
            btn.disabled = true;
        });
    }

    function buildAktivasi(pasienIndex) {
        const container = document.getElementById(`aktivasiPasien${pasienIndex}`);
        if (!container) {
            console.warn("Elemen aktivasiPasien tidak ditemukan untuk pasien " + pasienIndex);
            return;
        }

        // Bersihkan isi sebelumnya
        container.innerHTML = "";

        // === Daftar dosen pembimbing terbaru ===
        const dosenList = [
            "drg. Donald Nahusona, M.Kes., Sp.Ort",
            "Dr.drg. Eka Erwansyah, M.Kes, Sp.Ort(K)",
            "Dr.drg. Eddy Heryanto Habar, Sp.Ort(K)",
            "drg. Baharuddin M. Ranggang, Sp.Ort",
            "drg. Ardiansyah S. Pawinru , Sp.Ort",
            "drg. Rika Damayanti Syarif , M.Kes",
            "drg. Karima Qurnia Mansjur, Ph.D",
            "drg. Nasyrah Hidayati, Sp. Ort(K)",
            "drg. Zilal Islami Paramma, Sp. Ort(K)",
            "drg. Ita Purnama Alwi, Sp.Ort",
            "drg. Muhammad Izzah Abdullah, M.Sc"
        ];
        const dosenOptions = dosenList
            .map((d) => `<option value="${d}">${d}</option>`)
            .join("");

        // === Buat 3 baris Aktivasi (misal Aktivasi 1–3) ===
        for (let i = 1; i <= 15; i++) {
            container.innerHTML += `
      <div class="sub-aktivasi">
        <strong>Aktivasi ${i}</strong>
        <label>Tanggal Aktivasi:</label>
        <input type="date" class="tgl-input">
        <label>Komponen yang Diaktifkan:</label>
        <input type="text" class="komponen-input" placeholder="Komponen">
        <label>Dosen Pembimbing:</label>
        <select class="dosen-select">
          <option value="">-- Pilih Dosen Pembimbing --</option>
          ${dosenOptions}
        </select>
        <button class="btn-verif">Ajukan Verifikasi</button>
      </div>
    `;
        }

        // === Tombol Ajukan Verifikasi ===
        container.querySelectorAll(".btn-verif").forEach((btn) => {
            btn.addEventListener("click", () => {
                const sub = btn.closest(".sub-aktivasi");
                const tanggal = sub.querySelector(".tgl-input")?.value.trim();
                const komponen = sub.querySelector(".komponen-input")?.value.trim();
                const dosen = sub.querySelector(".dosen-select")?.value.trim();

                if (!tanggal || !komponen || !dosen) {
                    alert("⚠️ Harap isi semua kolom (Tanggal, Komponen, dan Dosen Pembimbing) sebelum mengajukan verifikasi.");
                    return;
                }

                btn.textContent = "Menunggu Verifikasi";
                btn.classList.add("waiting");
                btn.disabled = true;
            });
        });
    }


    function buildProfileStudent() {
        const profileImage = document.getElementById("profileImage");
        const uploadInput = document.getElementById("uploadPhoto");
        const uploadBtn = document.getElementById("btnUploadPhoto");
        const editBtn = document.getElementById("btnEditProfile");
        const saveBtn = document.getElementById("btnSaveProfile");
        const changePassBtn = document.getElementById("btnChangePassword");
        const changePassSection = document.getElementById("changePasswordSection");
        const savePassBtn = document.getElementById("btnSavePassword");
        const dosenSelect = document.getElementById("profileDosen");

        // 🩺 Cegah error kalau profil belum aktif
        if (!profileImage || !uploadBtn) return;

        // === 1. Isi dropdown dosen pembimbing ===
        const dosenList = [
            "drg. Donald Nahusona, M.Kes., Sp.Ort",
            "Dr.drg. Eka Erwansyah, M.Kes, Sp.Ort(K)",
            "Dr.drg. Eddy Heryanto Habar, Sp.Ort(K)",
            "drg. Baharuddin M. Ranggang, Sp.Ort",
            "drg. Ardiansyah S. Pawinru , Sp.Ort",
            "drg. Rika Damayanti Syarif , M.Kes",
            "drg. Karima Qurnia Mansjur, Ph.D",
            "drg. Nasyrah Hidayati, Sp. Ort(K)",
            "drg. Zilal Islami Paramma, Sp. Ort(K)",
            "drg. Ita Purnama Alwi, Sp.Ort",
            "drg. Muhammad Izzah Abdullah, M.Sc"
        ];
        if (dosenSelect.options.length <= 1) {
            dosenList.forEach(d => {
                const opt = document.createElement("option");
                opt.value = d;
                opt.textContent = d;
                dosenSelect.appendChild(opt);
            });
        }

        // === 2. Load data dari localStorage (agar bisa diedit ulang) ===
        const data = JSON.parse(localStorage.getItem("profileData") || "{}");
        if (data.nama) document.getElementById("profileNama").value = data.nama;
        if (data.nim) document.getElementById("profileNIM").value = data.nim;
        if (data.ovo) document.getElementById("profileOVO").value = data.ovo;
        if (data.dosen) document.getElementById("profileDosen").value = data.dosen;

        const savedPhoto = localStorage.getItem("profileImage");
        if (savedPhoto) profileImage.src = savedPhoto;

        // === 3. Tombol unggah foto ===
        uploadBtn.addEventListener("click", () => uploadInput.click());
        uploadInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    profileImage.src = reader.result;
                    localStorage.setItem("profileImage", reader.result);
                    updateDashboardProfile();
                };
                reader.readAsDataURL(file);
            }
        });

        // === 4. Tombol Edit Profil ===
        editBtn.addEventListener("click", () => {
            document.querySelectorAll("#profileSection input, #profileSection select").forEach((el) => {
                if (el.id !== "uploadPhoto") el.disabled = false;
            });
            editBtn.style.display = "none";
            saveBtn.style.display = "inline-block";
        });

        // === 5. Tombol Simpan Profil ===
        saveBtn.addEventListener("click", () => {
            document.querySelectorAll("#profileSection input, #profileSection select").forEach((el) => {
                el.disabled = true;
            });
            editBtn.style.display = "inline-block";
            saveBtn.style.display = "none";

            const newData = {
                nama: document.getElementById("profileNama").value,
                nim: document.getElementById("profileNIM").value,
                ovo: document.getElementById("profileOVO").value,
                dosen: document.getElementById("profileDosen").value,
            };
            // 💾 Simpan ke localStorage
            localStorage.setItem("profileData", JSON.stringify(newData));

            // 🧩 Sinkronkan ke dataset global agar dosen bisa tahu pembimbing mahasiswa ini
            const currentUser = localStorage.getItem("username");
            const mahasiswaNow = mahasiswaData.find(m => m.id === currentUser || m.nama === newData.nama);
            if (mahasiswaNow) mahasiswaNow.pembimbing = newData.dosen;

            alert("✅ Data profil berhasil disimpan.");
            updateDashboardProfile();
        });



        // === 6. Ubah Password ===
        changePassBtn.addEventListener("click", () => {
            changePassSection.style.display = changePassSection.style.display === "none" ? "block" : "none";
        });

        savePassBtn.addEventListener("click", () => {
            const newPass = document.getElementById("newPassword").value;
            const confirmPass = document.getElementById("confirmPassword").value;
            if (!newPass || !confirmPass) return alert("⚠️ Isi semua kolom password.");
            if (newPass !== confirmPass) return alert("❌ Password tidak cocok.");
            alert("✅ Password berhasil diperbarui.");
            document.getElementById("newPassword").value = "";
            document.getElementById("confirmPassword").value = "";
            changePassSection.style.display = "none";
        });

        const m = mahasiswaData.find(x => x.nama === localStorage.getItem("nama"));
        if (m && m.pembimbing) {
            const profile = JSON.parse(localStorage.getItem("profileData") || "{}");
            if (!profile.dosen) {
                profile.dosen = m.pembimbing;
                localStorage.setItem("profileData", JSON.stringify(profile));
            }
        }

    }

    function updateDashboardProfile() {
        const data = JSON.parse(localStorage.getItem("profileData") || "{}");
        const photo = localStorage.getItem("profileImage") || "default-photo.png";

        // --- Update foto & data di dashboard tengah ---
        const dashboard = document.getElementById("dashboardMiddle");
        if (dashboard) {
            dashboard.innerHTML = `
      <div class="dashboard-profile-card">
        <img src="${photo}" alt="Foto" class="dashboard-profile-photo">
        <div class="dashboard-profile-info">
          <h3>${data.nama || "Nama Mahasiswa"}</h3>
          <p><strong>NIM:</strong> ${data.nim || "-"}</p>
          <p><strong>OVO ke:</strong> ${data.ovo || "-"}</p>
          <p><strong>Dosen Pembimbing:</strong> ${data.dosen || "-"}</p>
        </div>
      </div>
    `;
        }

        // --- 🔥 Update foto dan nama di sidebar ---
        const sidebarPhoto = document.getElementById("sidebarPhoto");
        const sidebarName = document.getElementById("sidebarName");
        if (sidebarPhoto) sidebarPhoto.src = photo; // <--- ini bagian penting
        if (sidebarName) sidebarName.textContent = data.nama || "Mahasiswa Ortodonti";

        // --- Update tulisan "Selamat Datang" di dashboard ---
        const nameDisplay = document.getElementById("userName");
        if (nameDisplay) nameDisplay.textContent = data.nama || "Mahasiswa Ortodonti";
    }






    function initDosen() {
        renderJournalTableForDosen();
        renderMateriForDosen();
        renderAktivasiForDosen();
        renderPresentasiJurnalForDosen();
        renderEvaluasiPresentasiForDosen();
        renderRequirementForDosen();
        buildKasusDosen();
        const usernameNow = localStorage.getItem("username");
        if (accounts.kepalaUsernames.includes(usernameNow) || accounts.sekUsernames.includes(usernameNow) || accounts.ksmUsernames.includes(usernameNow)) {
            buildEvaluasiMahasiswa();
        }
        attachGlobalVerifHandlers();
    }

    function findMahasiswaByName(name) {
        return mahasiswaData.find(m => m.nama === name || m.id === name);
    }

    function showModal(title, html) {
        const old = $("e_modal");
        if (old) old.remove();
        const overlay = document.createElement("div");
        overlay.id = "e_modal";
        overlay.style.position = "fixed";
        overlay.style.inset = 0;
        overlay.style.background = "rgba(0,0,0,0.45)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = 9999;
        const box = document.createElement("div");
        box.style.width = "90%";
        box.style.maxWidth = "720px";
        box.style.background = "white";
        box.style.borderRadius = "10px";
        box.style.padding = "18px";
        box.innerHTML = `<h3 style="color:#004aad;margin-bottom:8px">${title}</h3><div id="e_modal_content">${html}</div>`;
        const close = document.createElement("button");
        close.innerText = "Tutup";
        close.style.marginTop = "12px";
        close.style.background = "#e63946";
        close.style.color = "#fff";
        close.style.border = "none";
        close.style.padding = "8px 12px";
        close.style.borderRadius = "6px";
        close.addEventListener("click", () => overlay.remove());
        box.appendChild(close);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }

    function renderJournalTableForDosen() {
        const container = document.getElementById("journalReadingContent");
        if (!container) return;

        const namaDosen = localStorage.getItem("nama");

        const mahasiswaBimbingan = mahasiswaData.filter(m =>
            m.pembimbing === namaDosen &&
            m.journalFiles.asli && m.journalFiles.terjemahan && m.journalFiles.ppt && m.journalFiles.laporan
        );

        if (mahasiswaBimbingan.length === 0) {
            container.innerHTML = `<h1>Journal Reading</h1><p>Tidak ada mahasiswa yang telah mengunggah file lengkap.</p>`;
            return;
        }

        let html = `
    <h1>Journal Reading Mahasiswa Bimbingan</h1>
    <table>
      <thead>
        <tr>
          <th>No</th><th>Nama Mahasiswa</th><th>File Asli</th><th>Terjemahan</th><th>PPT</th><th>Laporan</th>
        </tr>
      </thead>
      <tbody>
        ${mahasiswaBimbingan.map((m, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${m.nama}</td>
            <td><a href="${m.journalFiles.asli}" target="_blank">Lihat</a></td>
            <td><a href="${m.journalFiles.terjemahan}" target="_blank">Lihat</a></td>
            <td><a href="${m.journalFiles.ppt}" target="_blank">Lihat</a></td>
            <td><a href="${m.journalFiles.laporan}" target="_blank">Lihat</a></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
        container.innerHTML = html;
    }

    function renderPengumuman() {
        const container = document.getElementById("announcementContent");
        const formDiv = document.getElementById("announcementForm");
        const listDiv = document.getElementById("announcementList");
        if (!container) return;

        const usernameNow = localStorage.getItem("username");
        const role = localStorage.getItem("role");

        // Bersihkan tampilan
        listDiv.innerHTML = "";
        formDiv.innerHTML = "";

        // === 🧑‍💼 Jika login sebagai kepala/sekdep/ksm, tampilkan form tambah pengumuman ===
        if (
            role === "dosen" &&
            (accounts.kepalaUsernames.includes(usernameNow) ||
                accounts.sekUsernames.includes(usernameNow) ||
                accounts.ksmUsernames.includes(usernameNow))
        ) {
            formDiv.innerHTML = `
      <div class="upload-container" style="margin-bottom:20px;">
        <label>Judul Pengumuman:</label>
        <input type="text" id="judulPengumuman" placeholder="Masukkan judul" />
        <label>Isi Pengumuman:</label>
        <textarea id="isiPengumuman" rows="3" placeholder="Masukkan isi pengumuman"></textarea>
        <button id="btnTambahPengumuman" class="btn-verif">Tambah Pengumuman</button>
      </div>
    `;

            document.getElementById("btnTambahPengumuman").addEventListener("click", () => {
                const judul = document.getElementById("judulPengumuman").value.trim();
                const isi = document.getElementById("isiPengumuman").value.trim();
                if (!judul || !isi) {
                    alert("⚠️ Harap isi judul dan isi pengumuman!");
                    return;
                }

                pengumumanData.unshift({
                    id: Date.now(),
                    judul,
                    isi,
                    tanggal: new Date().toLocaleString("id-ID"),
                    pembuat: localStorage.getItem("nama")
                });
                savePengumuman();
                renderPengumuman();
                alert("✅ Pengumuman berhasil ditambahkan!");
            });
        }

        // === 📢 Tampilkan daftar pengumuman untuk semua user ===
        if (pengumumanData.length === 0) {
            listDiv.innerHTML = "<p>Tidak ada pengumuman saat ini.</p>";
            return;
        }

        pengumumanData.forEach((p, i) => {
            const item = document.createElement("li");
            item.innerHTML = `
      <strong>${p.judul}</strong> 
      <span style="font-size:12px;color:#666;">(${p.tanggal} oleh ${p.pembuat})</span>
      <p>${p.isi}</p>
    `;

            // Jika admin (kadep/sekdep/ksm), bisa hapus
            if (
                role === "dosen" &&
                (accounts.kepalaUsernames.includes(usernameNow) ||
                    accounts.sekUsernames.includes(usernameNow) ||
                    accounts.ksmUsernames.includes(usernameNow))
            ) {
                const delBtn = document.createElement("button");
                delBtn.textContent = "Hapus";
                delBtn.classList.add("btn-verif", "waiting");
                delBtn.style.marginTop = "5px";
                delBtn.addEventListener("click", () => {
                    if (confirm(`Hapus pengumuman "${p.judul}"?`)) {
                        pengumumanData = pengumumanData.filter(x => x.id !== p.id);
                        savePengumuman();
                        renderPengumuman();
                    }
                });
                item.appendChild(delBtn);
            }

            listDiv.appendChild(item);
        });
    }



    function refreshJournalTableButtons() {
        const tb = $("tb_journal");
        if (!tb) return;
        tb.querySelectorAll(".btn-verif").forEach(b => {
            const m = findMahasiswaByName(b.dataset.mhs);
            if (!m) return;
            b.innerText = m.jurnalVerified ? "✅ Diverifikasi" : "Verifikasi / Nilai";
            if (m.jurnalVerified) b.classList.add("approved");
        });
    }

    function renderMateriForDosen() {
        const section = $("materiContent");
        if (!section) return;
        section.innerHTML = `<h1>Materi Kepaniteraan (Pengajuan Verifikasi)</h1><table><thead><tr><th>No</th><th>Nama Mahasiswa</th><th>Materi</th><th>Tanggal</th><th>Verifikasi</th></tr></thead><tbody id="tb_materi"></tbody></table>`;
        const tb = $("tb_materi");
        let idx = 1;
        mahasiswaData.forEach(m => {
            m.materiAjuan.forEach(a => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${idx++}</td><td><a href="#" class="mhs-link" data-mhs="${m.nama}">${m.nama}</a></td><td>${a.materi}</td><td>${a.tanggal}</td><td><button class="btn-verif small" data-mhs="${m.nama}" data-materi="${a.materi}">${a.verified ? "✅ Diverifikasi" : "Verifikasi"}</button></td>`;
                tb.appendChild(tr);
            });
        });
        tb.querySelectorAll(".mhs-link").forEach(a => a.addEventListener("click", (ev) => {
            ev.preventDefault();
            const m = findMahasiswaByName(ev.currentTarget.dataset.mhs);
            if (!m) return;
            const html = `<p><strong>Pengajuan Materi oleh ${m.nama}</strong></p><ul>${m.materiAjuan.map(x => `<li>${x.materi} — ${x.tanggal} — Status: ${x.verified ? "Diverifikasi" : "Menunggu"}</li>`).join("")}</ul>`;
            showModal(`${m.nama} — Materi`, html);
        }));
        tb.querySelectorAll(".btn-verif").forEach(b => b.addEventListener("click", (ev) => {
            const m = findMahasiswaByName(ev.currentTarget.dataset.mhs);
            const materiName = ev.currentTarget.dataset.materi;
            const item = m.materiAjuan.find(x => x.materi === materiName);
            if (!item) return;
            item.verified = true;
            ev.currentTarget.innerText = "✅ Diverifikasi";
            ev.currentTarget.classList.add("approved");
        }));
    }

    function renderAktivasiForDosen() {
        const section = $("aktivasiContent");
        if (!section) return;
        section.innerHTML = `<h1>Mengikuti Aktivasi Teman (Pengajuan)</h1><table><thead><tr><th>No</th><th>Tanggal</th><th>Kode Elemen & Komponen</th><th>Operator</th><th>Dosen Pembimbing</th><th>Verifikasi</th></tr></thead><tbody id="tb_aktivasi"></tbody></table>`;
        const tb = $("tb_aktivasi");
        let idx = 1;
        mahasiswaData.forEach(m => {
            m.aktivasiTeman.forEach(a => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${idx++}</td><td>${a.tanggal}</td><td>${a.kode}</td><td>${a.operator}</td><td>${a.pembimbing}</td><td><button class="btn-verif small" data-mhs="${m.nama}" data-tgl="${a.tanggal}" data-kode="${a.kode}">${a.verified ? "✅ Diverifikasi" : "Verifikasi"}</button></td>`;
                tb.appendChild(tr);
            });
        });
        tb.querySelectorAll(".btn-verif").forEach(b => b.addEventListener("click", (ev) => {
            const m = findMahasiswaByName(ev.currentTarget.dataset.mhs);
            const tgl = ev.currentTarget.dataset.tgl;
            const kode = ev.currentTarget.dataset.kode;
            const item = m.aktivasiTeman.find(x => x.tanggal === tgl && x.kode === kode);
            if (!item) return;
            item.verified = true;
            ev.currentTarget.innerText = "✅ Diverifikasi";
            ev.currentTarget.classList.add("approved");
        }));
    }

    function renderPresentasiJurnalForDosen() {
        const section = $("jurnalContent");
        if (!section) return;
        section.innerHTML = `<h1>Mengikuti Presentasi Jurnal (Pengajuan)</h1><table><thead><tr><th>No</th><th>Tanggal</th><th>Judul Jurnal</th><th>Nama Mahasiswa</th><th>Dosen Pembimbing</th><th>Verifikasi</th></tr></thead><tbody id="tb_jurnal_pres"></tbody></table>`;
        const tb = $("tb_jurnal_pres");
        let idx = 1;
        mahasiswaData.forEach(m => {
            m.presentasiJurnal.forEach(p => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${idx++}</td><td>${p.tanggal}</td><td>${p.judul}</td><td>${m.nama}</td><td>${p.pembimbing}</td><td><button class="btn-verif small" data-mhs="${m.nama}" data-judul="${p.judul}">${p.verified ? "✅ Diverifikasi" : "Verifikasi"}</button></td>`;
                tb.appendChild(tr);
            });
        });
        tb.querySelectorAll(".btn-verif").forEach(b => b.addEventListener("click", (ev) => {
            const m = findMahasiswaByName(ev.currentTarget.dataset.mhs);
            const judul = ev.currentTarget.dataset.judul;
            const item = m.presentasiJurnal.find(x => x.judul === judul);
            if (!item) return;
            item.verified = true;
            ev.currentTarget.innerText = "✅ Diverifikasi";
            ev.currentTarget.classList.add("approved");
        }));
    }

    function renderEvaluasiPresentasiForDosen() {
        const section = $("evaluasiContent");
        if (!section) return;
        section.innerHTML = `<h1>Evaluasi Presentasi Kasus (Pengajuan)</h1><table><thead><tr><th>Model</th><th>Nama Pasien</th><th>Umur</th><th>Tanggal Presentasi Kasus</th><th>Verifikasi</th><th>Nilai</th></tr></thead><tbody id="tb_eval_pres"></tbody></table>`;
        const tb = $("tb_eval_pres");
        mahasiswaData.forEach(m => {
            m.evaluasiPresentasi.forEach(ev => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${ev.model}</td><td>${ev.namaPasien}</td><td>${ev.umur}</td><td>${ev.tanggal}</td><td><button class="btn-verif small" data-mhs="${m.nama}" data-model="${ev.model}">${ev.verified ? "✅ Diverifikasi" : "Verifikasi"}</button></td><td><input type="number" min="0" max="100" placeholder="${ev.nilai !== null ? ev.nilai : "-"}" style="width:80px" data-mhs="${m.nama}" data-model="${ev.model}" class="input-nilai" /></td>`;
                tb.appendChild(tr);
            });
        });
        tb.querySelectorAll(".btn-verif").forEach(b => b.addEventListener("click", (ev) => {
            const m = findMahasiswaByName(ev.currentTarget.dataset.mhs);
            const model = ev.currentTarget.dataset.model;
            const item = m.evaluasiPresentasi.find(x => x.model === model);
            if (!item) return;
            item.verified = true;
            ev.currentTarget.innerText = "✅ Diverifikasi";
            ev.currentTarget.classList.add("approved");
        }));
        tb.querySelectorAll(".input-nilai").forEach(inp => inp.addEventListener("change", (e) => {
            const m = findMahasiswaByName(e.currentTarget.dataset.mhs);
            const model = e.currentTarget.dataset.model;
            const val = Number(e.currentTarget.value);
            const item = m.evaluasiPresentasi.find(x => x.model === model);
            if (!item) return;
            item.nilai = val;
        }));
    }

    function renderRequirementForDosen() {
        const section = $("requirementContent");
        if (!section) return;
        section.innerHTML = `<h1>Requirement (Ajuan Mahasiswa)</h1><table><thead><tr><th>No</th><th>Nama Mahasiswa</th><th>Aksi</th></thead><tbody id="tb_requirement"></tbody></table>`;
        const tb = $("tb_requirement");
        mahasiswaData.forEach((m, idx) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${idx + 1}</td><td><a href="#" class="mhs-link" data-mhs="${m.nama}">${m.nama}</a></td><td><button class="btn-verif small" data-mhs="${m.nama}">Lihat & Verifikasi</button></td>`;
            tb.appendChild(tr);
        });
        tb.querySelectorAll(".mhs-link, .btn-verif").forEach(el => el.addEventListener("click", (ev) => {
            ev.preventDefault();
            const m = findMahasiswaByName(ev.currentTarget.dataset.mhs);
            if (!m) return;
            const html = `<p><strong>Aktivasi Pasien oleh ${m.nama}</strong></p><ul>${m.aktivasiPasien.map(a => `<li>ID ${a.id} — ${a.tanggal} — ${a.kode} — ${a.keterangan} — Status: ${a.verified ? "Diverifikasi" : "Menunggu"} <button class="verif-aktivasi" data-mhs="${m.nama}" data-id="${a.id}">${a.verified ? "Sudah" : "Verifikasi"}</button></li>`).join("")}</ul>`;
            showModal(`${m.nama} — Aktivasi Pasien`, html);
            setTimeout(() => {
                document.querySelectorAll(".verif-aktivasi").forEach(btn => btn.addEventListener("click", (e) => {
                    const mid = e.currentTarget.dataset.mhs;
                    const id = Number(e.currentTarget.dataset.id);
                    const mm = findMahasiswaByName(mid);
                    const act = mm.aktivasiPasien.find(x => x.id === id);
                    if (!act) return;
                    act.verified = true;
                    const modal = $("e_modal");
                    if (modal) modal.remove();
                    const btnFake = document.querySelector(`.btn-verif[data-mhs="${mid}"]`);
                    if (btnFake) btnFake.click();
                }));
            }, 50);
        }));
    }

    function buildKasusDosen() {
        const container = document.getElementById("kasusContent");
        if (!container) return;
        container.innerHTML = `
      <h1>Mengikuti Presentasi Kasus (Pengajuan Mahasiswa)</h1>
      <table>
        <thead>
          <tr>
            <th>Nama Mahasiswa</th>
            <th>Model Kasus</th>
            <th>Nama Pasien</th>
            <th>Umur</th>
            <th>Tanggal</th>
            <th>Nilai</th>
            <th>Verifikasi</th>
          </tr>
        </thead>
        <tbody id="kasusDosenBody"></tbody>
      </table>
    `;
        const tbody = document.getElementById("kasusDosenBody");
        tbody.innerHTML = "";
        mahasiswaData.forEach(mhs => {
            mhs.evaluasiPresentasi.forEach(kasus => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
          <td>${mhs.nama}</td>
          <td>${kasus.model}</td>
          <td>${kasus.namaPasien}</td>
          <td>${kasus.umur}</td>
          <td>${kasus.tanggal}</td>
          <td>${kasus.nilai ?? "-"}</td>
          <td><button class="verifyBtn">${kasus.verified ? "✅ Diverifikasi" : "Verifikasi"}</button></td>
        `;
                const btn = tr.querySelector(".verifyBtn");
                btn.addEventListener("click", () => {
                    kasus.verified = true;
                    btn.innerText = "✅ Diverifikasi";
                    btn.disabled = true;
                });
                tbody.appendChild(tr);
            });
        });
    }

    function buildEvaluasiMahasiswa() {
        const container = document.getElementById("evaluasiMahasiswaContent");
        if (!container) return;
        const evaluasiData = [
            { nama: "Andi Mahasiswa", aktivasi: 32, journal: 22, presentasiKasus: 21, presentasiJurnal: 1, pasien: 16 },
            { nama: "Bunga Mahasiswa", aktivasi: 28, journal: 15, presentasiKasus: 12, presentasiJurnal: 1, pasien: 10 },
            { nama: "Fadlur Mahasiswa", aktivasi: 35, journal: 24, presentasiKasus: 22, presentasiJurnal: 1, pasien: 17 },
            { nama: "Citra Mahasiswa", aktivasi: 26, journal: 18, presentasiKasus: 20, presentasiJurnal: 1, pasien: 14 },
            { nama: "Rahman Mahasiswa", aktivasi: 30, journal: 19, presentasiKasus: 16, presentasiJurnal: 1, pasien: 12 },
            { nama: "Santi Mahasiswa", aktivasi: 31, journal: 22, presentasiKasus: 23, presentasiJurnal: 1, pasien: 18 },
            { nama: "Dewi Mahasiswa", aktivasi: 25, journal: 17, presentasiKasus: 18, presentasiJurnal: 1, pasien: 10 },
            { nama: "Rudi Mahasiswa", aktivasi: 29, journal: 20, presentasiKasus: 15, presentasiJurnal: 1, pasien: 9 }
        ];
        container.innerHTML = `
  <h1>Evaluasi Mahasiswa</h1>
  <table>
    <thead>
      <tr>
        <th>Nama Mahasiswa</th>
        <th>Aktivasi Teman</th>
        <th>Mengikuti Jurnal</th>
        <th>Presentasi Kasus</th>
        <th>Presentasi Jurnal</th>
        <th>Aktivasi Pasien</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody id="evalBody"></tbody>
  </table>
`;
        const tbody = document.getElementById("evalBody");
        tbody.innerHTML = "";
        evaluasiData.forEach(mhs => {
            const memenuhi =
                mhs.aktivasi >= 30 &&
                mhs.journal >= 20 &&
                mhs.presentasiKasus >= 20 &&
                mhs.presentasiJurnal >= 1 &&
                mhs.pasien >= 15;
            const status = memenuhi ? "✅ Memenuhi Syarat" : "⚠️ Belum Memenuhi Syarat";
            const tr = document.createElement("tr");
            tr.innerHTML = `<td><a href="#" class="eval-mhs-link" data-mhs="${mhs.nama}">${mhs.nama}</a></td><td>${mhs.aktivasi}</td><td>${mhs.journal}</td><td>${mhs.presentasiKasus}</td><td>${mhs.presentasiJurnal}</td><td>${mhs.pasien}</td><td style="color:${memenuhi ? "#00b050" : "red"};font-weight:bold">${status}</td>`;
            tbody.appendChild(tr);
        });
        tbody.querySelectorAll(".eval-mhs-link").forEach(a => a.addEventListener("click", (ev) => {
            ev.preventDefault();
            const name = ev.currentTarget.dataset.mhs;
            const m = evaluasiData.find(x => x.nama === name);
            if (!m) return;
            const html = `
  <p><strong>Rekap ${m.nama}</strong></p>
  <ul>
    <li>Aktivasi Teman: ${m.aktivasi}</li>
    <li>Mengikuti Jurnal: ${m.journal >= 20 ? "Ya" : "Tidak"}</li>
    <li>Presentasi Kasus: ${m.presentasiKasus}</li>
    <li>Presentasi Jurnal: ${m.presentasiJurnal}</li>
    <li>Aktivasi Pasien: ${m.pasien}</li>
  </ul>
`;

            showModal(`${m.nama} — Rekap Perkembangan`, html);
        }));
    }

    function attachGlobalVerifHandlers() {
        document.querySelectorAll(".btn-verif").forEach(b => {
            if (b._bound) return;
            b._bound = true;
            b.addEventListener("click", () => {
                b.innerText = "✅ Diverifikasi";
                b.classList.add("approved");
                b.disabled = false;
            });
        });
    }

    // === Tambahan menu PANDUAN === (gabung dalam blok utama)
    const sidebar = document.querySelector(".sidebar nav");
    if (sidebar && !document.querySelector('button[data-tab="panduanContent"]')) {
        const panduanBtn = document.createElement("button");
        panduanBtn.className = "tablinks";
        panduanBtn.dataset.tab = "panduanContent";
        panduanBtn.innerHTML = `<i data-feather="book"></i> Panduan`;
        sidebar.insertBefore(panduanBtn, document.getElementById("logoutBtn"));
        panduanBtn.addEventListener("click", () => showTab("panduanContent"));
        if (typeof feather !== "undefined") feather.replace();
    }

    // === MENU RESPONSIVE UNTUK MOBILE ===
    window.addEventListener("DOMContentLoaded", () => {
        const menuBtn = document.getElementById("menuToggle");
        const sidebar = document.querySelector(".sidebar");

        if (menuBtn && sidebar) {
            menuBtn.addEventListener("click", (e) => {
                e.stopPropagation(); // jangan trigger event body
                sidebar.classList.toggle("active");
                document.body.classList.toggle("sidebar-open");

                // Update ikon Feather
                if (typeof feather !== "undefined") feather.replace();
            });
        }

        // Tutup sidebar jika klik di luar
        document.body.addEventListener("click", (e) => {
            if (
                document.body.classList.contains("sidebar-open") &&
                !e.target.closest(".sidebar") &&
                !e.target.closest("#menuToggle")
            ) {
                sidebar.classList.remove("active");
                document.body.classList.remove("sidebar-open");
            }
        });
    });




    // Jalankan auto-login bila localStorage masih ada
    const savedRole = localStorage.getItem("role");
    if (savedRole) showDashboard(savedRole, localStorage.getItem("username"));
});

