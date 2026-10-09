# Alur Logika: Kalkulator Diskon Belanja

## Ringkasan Aturan Logika (Overview)

### 1. Logika Diskon
```
Potongan = Harga x (Diskon / 100)
Total = Harga - Potongan
```

### 2. Validasi Input
* Harga & Diskon tidak boleh kosong atau $\le 0$.
* Diskon harus berada di antara **0% – 100%**.

### 3. (Fitur Ekstra) Bonus Belanja > 200rb
Jika `Total > 200.000` ➔ Potongan ekstra Rp 10.000 + Baris bonus muncul di tabel.

---

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>

## 📖 Detail Langkah Live Coding (Step-by-Step)

### Langkah 1: Ambil Data Input (DOM)
Ambil nilai dari form HTML dan ubah menjadi tipe data angka (`Number`):
* `harga` $\leftarrow$ `document.getElementById('harga').value`
* `diskon` $\leftarrow$ `document.getElementById('diskon').value`

---

### Langkah 2: Validasi Input (Cegah Data Salah)
Pastikan data yang diinput valid sebelum diproses:
1. **Harga**: Tidak boleh kosong atau $\le 0$.
2. **Diskon**: Harus berada di rentang **0% – 100%**.

> *Jika tidak valid $\rightarrow$ munculkan `alert()` lalu hentikan fungsi dengan `return`.*

---

### Langkah 3: Rumus Perhitungan
Hitung nominal potongan dan total bayar:
```javascript
potongan = harga * (diskon / 100);
totalBayar = harga - potongan;
```

---

### Langkah 4: Logika Percabangan (Bonus Belanja > 200rb)
Cek apakah pembeli berhak mendapat promo khusus:
* **Jika `totalBayar > 200000`**:
  * Beri potongan ekstra Rp 10.000 (`totalBayar = totalBayar - 10000`).
  * Tampilkan baris bonus di tabel (`display = 'table-row'`).
* **Jika tidak (`else`)**:
  * Sembunyikan baris bonus (`display = 'none'`).

---

### Langkah 5: Tampilkan Hasil ke Tabel
Format angka menjadi Rupiah menggunakan `.toLocaleString("id-ID")` lalu masukkan ke HTML (`.innerText`):
```javascript
txtHarga.innerText = "Rp " + harga.toLocaleString("id-ID");
txtPotongan.innerText = "- Rp " + potongan.toLocaleString("id-ID");
txtTotal.innerText = "Rp " + totalBayar.toLocaleString("id-ID");
```

---

## 🧪 Skenario Uji Coba (Live Demo dengan Siswa)

| Skenario | Input Harga | Input Diskon | Hasil yang Diharapkan |
| :--- | :--- | :--- | :--- |
| **Normal** | `Rp 100.000` | `10%` | Potongan: `Rp 10.000` \| **Total: `Rp 90.000`** |
| **Dapat Bonus (>200rb)** | `Rp 250.000` | `10%` | Potongan awal: `25rb` (sisa 225rb) $\rightarrow$ Ekstra -10rb $\rightarrow$ **Total: `Rp 215.000`** + Baris Bonus Muncul |
| **Validasi Error (Diskon)** | `Rp 50.000` | `150%` | Muncul alert: *"Diskon harus antara 0 sampai 100%!"* |
| **Validasi Error (Harga)** | `0` atau Kosong | `10%` | Muncul alert: *"Masukkan harga barang yang valid!"* |