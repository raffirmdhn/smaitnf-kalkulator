function hitung() {
  // Mengambil value element
  const harga = Number(document.getElementById("harga").value);
  const diskon = Number(document.getElementById("diskon").value);

  // Validasi
  if (harga <= 0) {
    alert("Masukkan harga yang valid!");
    return;
  }

  if (diskon < 0 || diskon > 100) {
    alert("Diskon harus diantara 0 - 100");
    return;
  }

  // Perhitungan
  const potongan = harga * (diskon / 100);
  const total = harga - potongan;

  // Render ke table
  document.getElementById("txtHarga").innerText = "Rp. " + harga.toLocaleString("id-ID")
  document.getElementById("txtPotongan").innerText = "Rp. " + potongan.toLocaleString("id-ID")
  document.getElementById("txtTotalBayar").innerText = "Rp. " + total.toLocaleString("id-ID")

  document.body.classList.toggle('dark')
}

document.getElementById("hitung").addEventListener("click", hitung);
