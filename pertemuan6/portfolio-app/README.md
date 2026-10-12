# The Living Portfolio: Pertemuan 5 (Finished Version)
**Materi Ajar & Praktikum Web Development: SMAIT Nurul Fikri**

Selamat datang di proyek **The Living Portfolio (Bagian 1)**! Pada sesi Pertemuan 5 ini, kita beralih ke ekosistem modern frontend menggunakan **React** dan **Tailwind CSS**.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

1. Buka folder ini di terminal:
   ```bash
   cd pertemuan5/portfolio-app
   ```
2. Pastikan dependencies sudah terpasang:
   ```bash
   npm install
   ```
3. Jalankan development server lokal:
   ```bash
   npm run dev
   ```
4. Buka tautan lokal yang muncul di terminal (biasanya `http://localhost:5173`) di browser.

---

## 🎯 Panduan Kustomisasi Data Pribadi (Biar Nggak Plek Ketiplek!)

Agar portofolio ini mencerminkan identitas dan kepribadianmu sendiri, kamu cukup membuka file:
👉 `src/data/studentData.js`

Di dalam file tersebut, kamu bisa mengganti:
1. **Nama & Panggilan**: Ubah nama lengkap dan inisial avatar.
2. **Role & Impian**: Misal: *"Aspiring Game Developer"*, *"Mobile App Explorer"*, dsb.
3. **Bio Personal**: Ceritakan hal seru yang membuatmu tertarik dengan dunia pemrograman.
4. **Keahlian & Hobi Tech**: Tambahkan keahlian yang sedang kamu tekuni.
5. **Portofolio Modul 1**: Hubungkan ke tugas Kalkulator Belanja (P3) dan To-Do List (P4) buatanmu sendiri!
6. **Kontak & Medsos**: Masukkan tautan GitHub atau media sosial aslimu.

---

## 🧱 Anatomi Komponen (Balok Lego React)

Proyek ini disusun dengan memecah antarmuka menjadi komponen-komponen kecil di dalam folder `src/components/`:

```
src/
 ├── data/
 │    └── studentData.js    <- Pusat data profil & karya siswa
 ├── components/
 │    ├── Navbar.jsx         <- Bar navigasi atas (logo inisial & menu anchor)
 │    ├── HeaderProfile.jsx  <- Kartu profil, avatar inisial, dan badge identitas NF
 │    ├── SkillSection.jsx   <- Pembungkus grid keahlian
 │    ├── SkillBadge.jsx     <- Kartu keahlian satuan (reusable component)
 │    ├── ProjectSection.jsx <- Pembungkus grid karya siswa
 │    ├── ProjectCard.jsx    <- Kartu showcase proyek Modul 1 (P3 & P4)
 │    └── Footer.jsx         <- Bagian kontak dan copyright
 ├── App.jsx                 <- Wadah utama yang menyusun semua komponen
 └── index.css               <- Integrasi Tailwind CSS v4
```

---

## 🎨 Standar Desain Bersih (Anti-Slop Guidelines)
- Desain menggunakan tema **Clean Light** (`bg-gray-50`, card `bg-white`, teks berjarak nyaman).
- Setiap elemen JSX dibatasi hanya menggunakan **4–7 kelas Tailwind** agar mudah dibaca dan dipahami alurnya oleh pemula.
- Bebas nilai arbitrary aneh (`w-[...]`) dan bebas efek visual berlebihan.
