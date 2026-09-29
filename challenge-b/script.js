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

// 3. Fungsi Hitung Belanja + Qty + Ongkir
function hitung() {
  let harga = Number(document.getElementById("harga").value);
  let qty = Number(document.getElementById("qty").value);
  let diskon = Number(document.getElementById("diskon").value);

  // Validasi input
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

  // 1. Hitung Subtotal dan Potongan Diskon
  let subtotal = harga * qty;
  let potonganDiskon = subtotal * (diskon / 100);
  let totalSetelahDiskon = subtotal - potonganDiskon;

  // 2. Logika Ongkir Bertingkat
  // < 100rb: 15.000 | 100rb - 200rb: 10.000 | >= 200rb: GRATIS
  let ongkir = 15000;
  let barisBonus = document.getElementById("barisBonus");

  if (totalSetelahDiskon >= 200000) {
    ongkir = 0;
    barisBonus.style.display = "table-row";
  } else if (totalSetelahDiskon >= 100000) {
    ongkir = 10000;
    barisBonus.style.display = "none";
  } else {
    ongkir = 15000;
    barisBonus.style.display = "none";
  }

  // 3. Total Akhir
  let totalBayar = totalSetelahDiskon + ongkir;

  // 4. Render ke Tabel
  document.getElementById("txtSubtotal").innerText = "Rp " + subtotal.toLocaleString("id-ID");
  document.getElementById("txtPotongan").innerText = "- Rp " + potonganDiskon.toLocaleString("id-ID");
  document.getElementById("txtOngkir").innerText = ongkir === 0 ? "GRATIS (Rp 0)" : "Rp " + ongkir.toLocaleString("id-ID");
  document.getElementById("txtTotal").innerText = "Rp " + totalBayar.toLocaleString("id-ID");
}
