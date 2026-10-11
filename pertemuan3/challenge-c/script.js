// Variabel global untuk menyimpan total tagihan
let totalTagihanGlobal = 0;

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

// 3. Fungsi Hitung Tagihan Lengkap
function hitung() {
  let harga = Number(document.getElementById("harga").value);
  let qty = Number(document.getElementById("qty").value);
  let diskon = Number(document.getElementById("diskon").value);
  let voucher = document.getElementById("voucher").value.trim().toUpperCase();

  // Validasi Input
  if (harga <= 0) {
    alert("Masukkan harga satuan barang yang valid!");
    return;
  }
  if (qty <= 0) {
    alert("Jumlah beli (Qty) minimal 1!");
    return;
  }
  if (diskon < 0 || diskon > 100) {
    alert("Diskon harus antara 0 sampai 100%!");
    return;
  }

  // Hitung Subtotal & Diskon
  let subtotal = harga * qty;
  let potonganDiskon = subtotal * (diskon / 100);
  let totalSetelahDiskon = subtotal - potonganDiskon;

  // Logika Voucher
  let potonganVoucher = 0;
  if (voucher === "HEMAT10") {
    potonganVoucher = 10000;
  } else if (voucher === "NFJUARA") {
    potonganVoucher = 25000;
  } else if (voucher !== "") {
    alert("Kode voucher '" + voucher + "' tidak ditemukan!");
  }

  // Logika Ongkir & Bonus Belanja >= 200rb
  let ongkir = 15000;
  let bonusBelanja = 0;
  let barisBonus = document.getElementById("barisBonus");

  if (totalSetelahDiskon >= 200000) {
    ongkir = 0; // Free Ongkir
    bonusBelanja = 10000; // Ekstra potongan
    barisBonus.style.display = "table-row";
  } else if (totalSetelahDiskon >= 100000) {
    ongkir = 10000;
    barisBonus.style.display = "none";
  } else {
    ongkir = 15000;
    barisBonus.style.display = "none";
  }

  // Hitung Total Akhir
  totalTagihanGlobal = totalSetelahDiskon - potonganVoucher - bonusBelanja + ongkir;
  if (totalTagihanGlobal < 0) totalTagihanGlobal = 0;

  // Render ke Tabel
  document.getElementById("txtSubtotal").innerText = "Rp " + subtotal.toLocaleString("id-ID");
  document.getElementById("txtPotongan").innerText = "- Rp " + potonganDiskon.toLocaleString("id-ID");
  document.getElementById("txtVoucher").innerText = "- Rp " + potonganVoucher.toLocaleString("id-ID");
  document.getElementById("txtOngkir").innerText = ongkir === 0 ? "GRATIS" : "Rp " + ongkir.toLocaleString("id-ID");
  document.getElementById("txtTotal").innerText = "Rp " + totalTagihanGlobal.toLocaleString("id-ID");

  // Reset status kembalian jika hitung ulang
  let kotakKembalian = document.getElementById("kotakKembalian");
  kotakKembalian.style.display = "none";
}

// 4. Fungsi Proses Pembayaran & Kembalian
function prosesBayar() {
  if (totalTagihanGlobal === 0) {
    alert("Hitung tagihan terlebih dahulu sebelum melakukan pembayaran!");
    return;
  }

  let uangBayar = Number(document.getElementById("uangBayar").value);
  let kotak = document.getElementById("kotakKembalian");

  if (uangBayar <= 0) {
    alert("Masukkan jumlah uang pembayaran yang valid!");
    return;
  }

  kotak.style.display = "block";

  if (uangBayar < totalTagihanGlobal) {
    let kurang = totalTagihanGlobal - uangBayar;
    kotak.className = "box-status status-error";
    kotak.innerText = "Uang Kurang: Rp " + kurang.toLocaleString("id-ID") + ". Pembayaran belum cukup!";
  } else if (uangBayar === totalTagihanGlobal) {
    kotak.className = "box-status status-success";
    kotak.innerText = "Uang Pas! Pembayaran berhasil. Terima kasih!";
  } else {
    let kembalian = uangBayar - totalTagihanGlobal;
    kotak.className = "box-status status-success";
    kotak.innerText = "Pembayaran Berhasil! Kembalian Anda: Rp " + kembalian.toLocaleString("id-ID");
  }
}

// 5. Fungsi Reset Semua Form
function resetSemua() {
  totalTagihanGlobal = 0;
  document.getElementById("harga").value = "";
  document.getElementById("qty").value = "1";
  document.getElementById("diskon").value = "0";
  document.getElementById("voucher").value = "";
  document.getElementById("uangBayar").value = "";

  document.getElementById("txtSubtotal").innerText = "Rp 0";
  document.getElementById("txtPotongan").innerText = "Rp 0";
  document.getElementById("txtVoucher").innerText = "Rp 0";
  document.getElementById("txtOngkir").innerText = "Rp 0";
  document.getElementById("txtTotal").innerText = "Rp 0";

  document.getElementById("barisBonus").style.display = "none";
  document.getElementById("kotakKembalian").style.display = "none";
}
