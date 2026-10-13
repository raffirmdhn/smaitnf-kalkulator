# 🚀 The Living Portfolio - Starter Pack (Pertemuan 5)
**Praktikum Pemrograman Web: SMAIT Nurul Fikri**

Selamat datang di lembar kerja praktikum **Pertemuan 5**! Pada pertemuan ini, kita akan merakit aplikasi portofolio pribadi modern menggunakan **React** dan **Tailwind CSS**.

---

## ⚡ Akses Cepat di Chromebook (Tanpa Install)

Bagi siswa yang menggunakan **Chromebook** atau belum menginstal Node.js di laptop, kamu bisa langsung ngoding di browser hanya dengan satu klik:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/raffirmdhn/portfolio-starter-nufidevs)

> 💡 **Petunjuk Penggunaan StackBlitz:**
> 1. Klik tombol **Open in StackBlitz** di atas.
> 2. Tunggu beberapa detik hingga proses instalasi dan server otomatis berjalan.
> 3. Klik tombol **Fork** di pojok kiri atas untuk menyimpan salinan proyek ke akunmu sendiri.
> 4. Mulai kerjakan misi dari **TODO 1** di file `src/App.jsx`!

---

## 🛠️ Langkah Menjalankan di Laptop Pribadi (VS Code)

Jika menggunakan laptop pribadi dengan VS Code dan Node.js yang sudah terpasang:

1. Pasang dependencies (cukup 1x di awal):
   ```bash
   npm install
   ```
2. Jalankan development server lokal:
   ```bash
   npm run dev
   ```
3. Tekan `Ctrl + Klik` tautan `http://localhost:5173` yang muncul di terminal untuk membukanya di browser!

---

## 📝 Checklist Misi Live-Coding Siswa

Ikuti panduan berurutan di bawah ini bersama guru / mentor di kelas:

### [ ] TODO 1: Tata Letak & Kanvas Utama (`src/App.jsx`)
* **TODO 1A**: Tambahkan class Tailwind pada container utama `<div>` (`min-h-screen bg-gray-50 text-gray-900`).
* **TODO 1B**: Tambahkan class Tailwind pada tag `<main>` agar terpusat rapi di tengah dan memiliki jarak vertikal antar komponen (`max-w-4xl mx-auto px-4 py-8 space-y-8`).

---

### [ ] TODO 2: Kartu Profil Pertama (`src/components/HeaderProfile.jsx`)
* **TODO 2A**: Tambahkan class Tailwind pada tag `<header id="profil">` (`bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm`).
* **TODO 2B**: Buat avatar foto profil siswa (`<img>` bulat `w-20 h-20`).
* **TODO 2C**: Tulis nama lengkapmu di dalam tag `<h1>`.
* **TODO 2D**: Tulis role / minat teknologi & nama sekolah di dalam tag `<p>`.
* **TODO 2E**: Tulis bio singkat 1-2 kalimat perkenalan dirimu di dalam tag `<p>`.
* **TODO 2F**: Buat tombol aksi 'Lihat Karya' dan 'Kontak'.

---

### [ ] TODO 3: Eksperimen Kartu Manual (`src/components/SkillSection.jsx`)
* Buka berkas `src/components/SkillSection.jsx`.
* Ketik 1 kartu keahlian secara manual (hardcode) ke dalam grid untuk memahami strukturnya.
* *Diskusi Kelas:* Mengapa cara copy-paste tag HTML manual seperti ini tidak efisien jika datanya banyak?

---

### [ ] TODO 4: Solusi Dinamis: Data Terpusat & Reusable Component
* **TODO 4A**: Buat berkas baru `src/data/studentData.js`, lalu buat objek `studentData` yang memuat array `skills` dan `projects`.
* **TODO 4B**: Buka `src/components/SkillBadge.jsx`. Buat cetakan komponen yang menerima prop `{ skill }` dan tampilkan `{skill.name}`, `{skill.level}`, dan `{skill.category}`.
* **TODO 4C**: Kembali ke `src/components/SkillSection.jsx`. Hapus kartu manual dan ganti dengan perulangan array dinamis:
  ```jsx
  {skills.map((skill, index) => (
    <SkillBadge key={index} skill={skill} />
  ))}
  ```
* **TODO 4D**: Buka `src/App.jsx`. Hubungkan data keahlian dari `studentData.js` dengan meng-uncomment impor dan mengirim prop ke `<SkillSection skills={studentData.skills} />`.

---

### [ ] TODO 5: Showcase Karya Portofolio Modul 1
* **TODO 5A**: Buka `src/components/ProjectCard.jsx`. Buat cetakan kartu yang menerima prop `{ project }` dan tampilkan `{project.module}`, `{project.title}`, dan `{project.category}`.
* **TODO 5B**: Buka `src/components/ProjectSection.jsx`. Lakukan looping array menggunakan `projects.map(...)` untuk memanggil `<ProjectCard />`.
* **TODO 5C**: Kembali ke `src/App.jsx`. Kirim prop karya proyek ke `<ProjectSection projects={studentData.projects} />`.

---

## 💡 Tips & Trik:
* Ingin mengganti foto profil? Cukup simpan file fotomu di dalam folder `public/` dengan nama `avatar.png`, foto otomatis akan terpasang!
* Kartu karya proyek sengaja dibuat ringkas pekan ini. Pekan depan (**Pertemuan 6**), kita akan belajar **React State (`useState`)** untuk menambahkan filter tags, fitur suka/likes, dan detail kartu interaktif!
