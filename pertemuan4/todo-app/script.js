// ============================================================
// MODUL 1 - LIVE CODING JAVASCRIPT: SMART TO-DO LIST (STARTER)
// ============================================================

// --- 1. FITUR UMUM (TEMA GELAP) ---
function gantiMode() {
  document.body.classList.toggle("dark");
}

// --- 2. TEMPAT SIMPAN DATA DI MEMORI (STATE) ---
// 1: Buat variabel array kosong bernama daftarTugas
let daftarTugas = [];

// --- 3. AMBIL ELEMEN DARI HTML (DOM SELECTOR) ---
// TODO 2: Ambil elemen HTML yang dibutuhkan menggunakan document.getElementById
// List ID yang perlu diambil:
// - daftarTugas
// - formTugas
// - inputTugas
// - badgeJumlah
// - pesan

const listContainer = document.getElementById("daftarTugas");
const formTugas = document.getElementById("formTugas");
const inputTugas = document.getElementById("inputTugas");
const badgeJumlah = document.getElementById("badgeJumlah");
const pesan = document.getElementById("pesan");

// --- 4. FUNGSI READ: TAMPILKAN DATA DARI ARRAY KE HTML ---
function renderTugas() {
  // A. Bersihkan isi list sebelumnya
  listContainer.innerHTML = "";

  // B. Update jumlah tugas di badge
  badgeJumlah.innerText = daftarTugas.length + " Tugas";

  // C. Cek apakah daftar kosong (jika kosong tampilkan pesan & return, jika ada sembunyikan)
  if (daftarTugas.length === 0) {
    pesan.style.display = "block";
    pesan.innerText = "Tidak ada daftar tugas!";
    return;
  } else {
    pesan.style.display = "none";
  }

  // 3: Looping daftarTugas menggunakan forEach untuk menambahkan HTML string
  daftarTugas.forEach((item, index) => {
    // Clue: gunakan ternary operator (kondisi ? nilai_true : nilai_false)
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


// --- 5. FUNGSI CREATE: TAMBAH TUGAS BARU DARI FORM ---
formTugas.addEventListener("submit", function (e) {
  // 4: Cegah reload halaman saat form di-submit
  e.preventDefault();

  // Ambil nilai input dan hapus spasi di awal/akhir (.trim())
  const teks = inputTugas.value.trim();

  // Validasi: Cek jika input kosong, tampilkan alert lalu return
  if (teks == "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  // 5: Masukkan objek tugas baru ke array daftarTugas ({ id, title, completed })
  // Clue: gunakan unshift() atau push()
  daftarTugas.unshift({
    id: Date.now(),
    title: teks,
    completed: false,
  })

  // Kosongkan input dan render ulang tampilan
  inputTugas.value = ""
  renderTugas();
});

// --- 6. FUNGSI UPDATE: GANTI STATUS SELESAI / BELUM ---
function toggleStatus(index) {
  // 6: Balik status completed (true <-> false) pada daftarTugas[index]
  // Clue: daftarTugas[index].completed = !daftarTugas[index].completed
  daftarTugas[index].completed = !daftarTugas[index].completed;
  // Jangan lupa panggil renderTugas()
  renderTugas();
}

// --- 7. FUNGSI DELETE: HAPUS TUGAS DARI ARRAY ---
function hapusTugas(index) {
  // 7: Hapus 1 item dari array berdasarkan index menggunakan splice()
  // Clue: daftarTugas.splice(index, 1)
  daftarTugas.splice(index, 1)
  // Jangan lupa panggil renderTugas()
  renderTugas();
}

// --- 8. QUICK PEEK API: AMBIL DATA AWAL DARI INTERNET ---
function ambilDataAwal() {
  // Status Loading: Tampilkan teks loading di elemen pesan
  pesan.innerText = "Sedang memuat data dari internet...";
  pesan.style.display = "block";
  
  // 8: Panggil fetch() ke endpoint: "https://jsonplaceholder.typicode.com/todos?_limit=4"
  // - .then() ke-1: konversi response ke JSON (.then((response) => response.json()))
  // - .then() ke-2: simpan data ke daftarTugas lalu panggil renderTugas()
  // - .catch(): tangkap pesan error jika gagal (.catch((err) => console.error(...)))
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then(response => response.json())
  .then(results => {
    daftarTugas = results;
    renderTugas();
  })
  .catch(err => {
    pesan.innerText = "Gagal mengambil data tugas";
    pesan.style.display = "block"
  })
}

// Jalankan saat pertama kali dibuka (opsional)
// renderTugas();
ambilDataAwal();
