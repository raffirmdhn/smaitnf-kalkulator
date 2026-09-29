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

// 3. Fungsi Hitung Diskon + Voucher
function hitung() {
  // Ambil nilai dari input HTML
  let harga = Number(document.getElementById("harga").value);
  let diskon = Number(document.getElementById("diskon").value);
  let voucher = document.getElementById("voucher").value.trim().toUpperCase();

  // Validasi input dasar
  if (harga <= 0) {
    alert("Masukkan harga barang yang valid!");
    return;
  }

  if (diskon < 0 || diskon > 100) {
    alert("Diskon harus antara 0 sampai 100%!");
    return;
  }

  // Hitung potongan persen dan total sementara
  let potonganDiskon = harga * (diskon / 100);
  let totalSetelahDiskon = harga - potonganDiskon;

  // Logika Voucher Promo
  let potonganVoucher = 0;
  if (voucher === "HEMAT10") {
    potonganVoucher = 10000;
  } else if (voucher === "NFJUARA") {
    potonganVoucher = 25000;
  } else if (voucher !== "") {
    alert("Kode voucher '" + voucher + "' tidak berlaku!");
  }

  // Logika Bonus jika belanja di atas 200rb
  let barisBonus = document.getElementById("barisBonus");
  let bonusBelanja = 0;

  if (totalSetelahDiskon > 200000) {
    bonusBelanja = 10000;
    barisBonus.style.display = "table-row";
  } else {
    barisBonus.style.display = "none";
  }

  // Total Bayar Akhir
  let totalBayar = totalSetelahDiskon - potonganVoucher - bonusBelanja;
  if (totalBayar < 0) totalBayar = 0; // Mencegah total minus

  // Tampilkan ke Tabel dengan Format Rupiah
  document.getElementById("txtHarga").innerText = "Rp " + harga.toLocaleString("id-ID");
  document.getElementById("txtPotongan").innerText = "- Rp " + potonganDiskon.toLocaleString("id-ID");
  document.getElementById("txtVoucher").innerText = "- Rp " + potonganVoucher.toLocaleString("id-ID");
  document.getElementById("txtTotal").innerText = "Rp " + totalBayar.toLocaleString("id-ID");
}
