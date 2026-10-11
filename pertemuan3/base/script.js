// 1. Fungsi Ganti Tema (Dark Mode)
function gantiMode() {
  document.body.classList.toggle("dark");
}

// 2. Fungsi Buka / Tutup Petunjuk Logika (Spoiler)
function toggleLegend() {
  let content = document.getElementById("legendContent");
  let btn = document.getElementById("btnLegend");

  if (content.classList.contains("is-blurred")) {
    content.classList.remove("is-blurred");
    btn.innerText = "Tutup";
  } else {
    content.classList.add("is-blurred");
    btn.innerText = "Buka";
  }
}

// 3. Fungsi Hitung Diskon & Tampilkan ke Tabel
function hitung() {
  // Ambil nilai input dari form
  let harga = Number(document.getElementById("harga").value);
  let diskon = Number(document.getElementById("diskon").value);

  // Validasi input
  if (harga <= 0) {
    alert("Masukkan harga barang yang valid!");
    return;
  }

  if (diskon < 0 || diskon > 100) {
    alert("Diskon harus antara 0 sampai 100%!");
    return;
  }

  // Hitung potongan dan total harga
  let potongan = harga * (diskon / 100);
  let totalBayar = harga - potongan;

  // Logika Bonus: Jika belanja di atas 200rb
  let barisBonus = document.getElementById("barisBonus");

  if (totalBayar > 200000) {
    totalBayar = totalBayar - 10000; // Potongan ekstra Rp 10.000
    barisBonus.style.display = "table-row";
    alert("Selamat! Total belanja di atas 200rb dapat Potongan Ekstra Rp 10.000 + Free Ongkir!");
  } else {
    barisBonus.style.display = "none";
  }

  // Tampilkan hasil ke tabel
  document.getElementById("txtHarga").innerText = "Rp " + harga.toLocaleString("id-ID");
  document.getElementById("txtPotongan").innerText = "- Rp " + potongan.toLocaleString("id-ID");
  document.getElementById("txtTotal").innerText = "Rp " + totalBayar.toLocaleString("id-ID");
}
