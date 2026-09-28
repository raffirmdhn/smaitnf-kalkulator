function hitung() {
  // 1. Ambil nilai harga dan diskon dari HTML
  let harga = Number(document.getElementById("harga").value);
  let diskon = Number(document.getElementById("diskon").value);

  // 2. Validasi input: Cek jika belum diisi
  if (harga === 0 || diskon === 0) {
    alert("Isi harga dan diskon terlebih dahulu!");
    return;
  }

  // 2. Validasi input: Cek angka diskon aneh
  if (diskon < 0 || diskon > 100) {
    alert("Diskon harus antara 0 sampai 100%!");
    return;
  }

  // 3. Hitung potongan dan total harga
  let potongan = harga * (diskon / 100);
  let totalBayar = harga - potongan;

  // 4. Logika Spesial: Jika belanjaan di atas 200rb
  let barisBonus = document.getElementById("barisBonus");

  if (totalBayar > 200000) {
    // Diberi potongan tambahan Rp 10.000
    totalBayar = totalBayar - 10000;
    
    // Tampilkan baris bonus di tabel
    barisBonus.style.display = "table-row";
    alert("🎉 Selamat! Total belanja di atas 200rb, kamu dapat Potongan Tambahan Rp 10.000 + Free Ongkir!");
  } else {
    // Sembunyikan baris bonus jika di bawah 200rb
    barisBonus.style.display = "none";
  }

  // 5. Tampilkan ke Tabel dengan Format Rupiah (.toLocaleString("id-ID"))
  document.getElementById("txtHarga").innerText = "Rp " + harga.toLocaleString("id-ID");
  document.getElementById("txtPotongan").innerText = "- Rp " + potongan.toLocaleString("id-ID");
  document.getElementById("txtTotal").innerText = "Rp " + totalBayar.toLocaleString("id-ID");
}
