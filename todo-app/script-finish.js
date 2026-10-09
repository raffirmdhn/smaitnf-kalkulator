// ============================================================
// MODUL 1 - LIVE CODING JAVASCRIPT: SMART TO-DO LIST (COMPLETED)
// ============================================================

// --- 1. FITUR UMUM (TEMA & PETUNJUK LOGIKA) ---

function gantiMode() {
  document.body.classList.toggle("dark");
}

function toggleLegend() {
  const content = document.getElementById("legendContent");
  const btn = document.getElementById("btnLegend");

  if (content.classList.contains("is-blurred")) {
    content.classList.remove("is-blurred");
    btn.innerText = "Tutup";
  } else {
    content.classList.add("is-blurred");
    btn.innerText = "Buka";
  }
}


// --- 2. PENYIMPANAN DATA DI MEMORI (STATE) ---
// Data tugas kita simpan dalam array of objects: [{ id, title, completed }]
let daftarTugas = [];


// --- 3. SELEKSI ELEMEN DOM ---
const listContainer = document.getElementById("daftarTugas");
const formTugas = document.getElementById("formTugas");
const inputTugas = document.getElementById("inputTugas");
const badgeJumlah = document.getElementById("badgeJumlah");
const pesan = document.getElementById("pesan");


// --- 4. FUNGSI READ: RENDER DATA DARI ARRAY KE TAMPILAN HTML ---
function renderTugas() {
  // A. Bersihkan tampilan list lama
  listContainer.innerHTML = "";

  // B. Update jumlah badge & pesan jika kosong
  badgeJumlah.innerText = `${daftarTugas.length} Tugas`;
  if (daftarTugas.length === 0) {
    pesan.innerText = "Belum ada tugas. Tambahkan tugas baru atau muat data dari API!";
    pesan.style.display = "block";
    return;
  } else {
    pesan.style.display = "none";
  }

  // C. Looping setiap data tugas di array untuk dibuatkan elemen HTML
  daftarTugas.forEach((item, index) => {
    // Cek apakah tugas sudah selesai atau belum
    const kelasSelesai = item.completed ? "done" : "";
    const isChecked = item.completed ? "checked" : "";

    listContainer.innerHTML += `
      <li class="todo-item ${kelasSelesai}">
        <div class="todo-left" onclick="toggleStatus(${index})">
          <input type="checkbox" class="todo-checkbox" ${isChecked}>
          <span class="todo-text">${item.title}</span>
        </div>
        <button type="button" class="btn-delete" onclick="hapusTugas(${index})">Hapus</button>
      </li>
    `;
  });
}


// --- 5. FUNGSI CREATE: TAMBAH TUGAS BARU ---
formTugas.addEventListener("submit", function (e) {
  // Cegah form me-refresh halaman browser
  e.preventDefault();

  const teksTugas = inputTugas.value.trim();

  // Validasi: Jangan masukkan jika input kosong
  if (teksTugas === "") {
    alert("Silakan tulis nama tugas terlebih dahulu!");
    return;
  }

  // Masukkan objek tugas baru ke array paling depan (unshift) atau belakang (push)
  daftarTugas.unshift({
    id: Date.now(),
    title: teksTugas,
    completed: false
  });

  // Kosongkan kembali kotak input
  inputTugas.value = "";

  // Gambar ulang tampilan
  renderTugas();
});


// --- 6. FUNGSI UPDATE: GANTI STATUS SELESAI / BELUM ---
function toggleStatus(index) {
  // Balikkan nilai boolean: true jadi false, false jadi true
  daftarTugas[index].completed = !daftarTugas[index].completed;

  // Gambar ulang tampilan
  renderTugas();
}


// --- 7. FUNGSI DELETE: HAPUS TUGAS DARI ARRAY ---
function hapusTugas(index) {
  // Hapus 1 elemen dari array berdasarkan nomor index
  daftarTugas.splice(index, 1);

  // Gambar ulang tampilan
  renderTugas();
}


// --- 8. QUICK PEEK API: AMBIL DATA AWAL DARI INTERNET ---
function ambilDataAwal() {
  // Tampilkan status loading sebelum mengambil data
  pesan.innerText = "Sedang memuat data dari internet...";
  pesan.style.display = "block";

  fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
    .then((response) => response.json())
    .then((data) => {
      // Masukkan data dari internet ke dalam array kita
      daftarTugas = data;

      // Tampilkan hasilnya ke layar
      renderTugas();
    })
    .catch((error) => {
      console.error("Gagal mengambil data dari API:", error);
      pesan.innerText = "Gagal memuat data dari API!";
      pesan.style.display = "block";
    });
}

// Jalankan pengambilan data API pertama kali saat website dibuka
ambilDataAwal();
// renderTugas();
