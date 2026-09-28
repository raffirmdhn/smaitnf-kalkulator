// 1. Fungsi Ganti Tema (Dark Mode)
function gantiMode() {
  document.body.classList.toggle("dark");
}

// 2. Fungsi Hitung Diskon & Tampilkan ke Tabel
function hitung() {
  // Ambil nilai harga dan diskon dari input HTML
  let harga = Number(document.getElementById("harga").value);
  let diskon = Number(document.getElementById("diskon").value);

  // Validasi input: Cek jika belum diisi
  if (harga === 0 || diskon === 0) {
    alert("Isi harga dan diskon terlebih dahulu!");
    return;
  }

  // Validasi input: Cek persentase diskon
  if (diskon < 0 || diskon > 100) {
    alert("Diskon harus antara 0 sampai 100%!");
    return;
  }

  // Hitung potongan dan total harga
  let potongan = harga * (diskon / 100);
  let totalBayar = harga - potongan;

  // Logika Spesial: Jika belanjaan di atas 200rb
  let barisBonus = document.getElementById("barisBonus");

  if (totalBayar > 200000) {
    // Potongan tambahan Rp 10.000
    totalBayar = totalBayar - 10000;
    
    // Tampilkan baris bonus di tabel
    barisBonus.style.display = "table-row";
    alert("🎉 Selamat! Total belanja di atas 200rb, kamu dapat Potongan Tambahan Rp 10.000 + Free Ongkir!");
  } else {
    // Sembunyikan baris bonus jika di bawah 200rb
    barisBonus.style.display = "none";
  }

  // Tampilkan ke Tabel dengan Format Rupiah (.toLocaleString("id-ID"))
  document.getElementById("txtHarga").innerText = "Rp " + harga.toLocaleString("id-ID");
  document.getElementById("txtPotongan").innerText = "- Rp " + potongan.toLocaleString("id-ID");
  document.getElementById("txtTotal").innerText = "Rp " + totalBayar.toLocaleString("id-ID");
}
