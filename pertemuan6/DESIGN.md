# Standar Desain: Pertemuan 5 - The Living Portfolio (Part 1)

**Target Pembelajar**: Siswa SMAIT Nurul Fikri (Pemula - Belajar React & Tailwind CSS)  
**Teknologi Utama**: Vite + React + Tailwind CSS  
**Filosofi**: *Clean, Readable, Student-Centered, & Realistic* (Anti-Slop)

---

## 1. Filosofi & Batasan Desain
Tujuan tampilan ini adalah memperkenalkan konsep **Komponen React** dan **Tailwind CSS Utility Classes** secara bertahap tanpa membingungkan siswa SMA:
- **Clean Light Theme**: Tampilan terang profesional yang menyerupai resume/portfolio web developer junior di industri modern.
- **Student-Centered**: Desain dan struktur kode dirancang agar siswa mudah memodifikasi data profil (nama, inisial/avatar, bio/passion, minat khusus, tautan medsos/GitHub).
- **Anti-Slop Strict**:
  - Maksimal **4–7 utility classes** per elemen JSX agar tidak membuat siswa pusing membaca baris kode.
  - Bebas arbitrary values (`[...]`), bebas glassmorphism (`backdrop-blur`), bebas gradien neon pelangi.
  - Efek interaksi cukup transisi warna sederhana (`transition-colors duration-200`).

---

## 2. Palet Warna (Color Palette - Preset Clean Light)

| Peran | Utility Tailwind | Nilai Warna | Keterangan Penggunaan |
| :--- | :--- | :--- | :--- |
| **Latar Belakang (Body)** | `bg-gray-50` | `#f9fafb` | Latar utama halaman, bersih dan nyaman di mata |
| **Permukaan Kartu (Card)** | `bg-white` | `#ffffff` | Kontainer komponen (Navbar, Profile, Card) |
| **Garis Batas (Border)** | `border-gray-200` | `#e5e7eb` | Garis pembatas halus yang terstruktur |
| **Teks Judul / Utama** | `text-gray-900` | `#111827` | Heading, nama siswa, judul proyek |
| **Teks Sekunder / Body** | `text-gray-600` | `#4b5563` | Deskripsi, bio siswa, teks paragraf |
| **Teks Redup (Muted)** | `text-gray-400` / `500`| `#9ca3af` | Label kecil, kategori, copyright |
| **Aksen / Tombol Utama** | `bg-blue-600` `hover:bg-blue-700` | `#2563eb` | Tombol CTA (Lihat Proyek, Kontak) |
| **Badge Khusus Siswa NF** | `bg-emerald-50 text-emerald-700 border-emerald-200` | `#059669` | Identitas siswa NF ("Siswa Web Dev SMAIT NF") |

---

## 3. Tipografi & Tata Letak (Layout)
- **Font**: Sans-serif standar sistem / Tailwind default (`font-sans`).
- **Kontainer Utama**: `max-w-4xl mx-auto px-4 py-8` (fokus di tengah, proporsional, dan nyaman dilihat di laptop sekolah maupun HP).
- **Grid Proyek**: `grid grid-cols-1 md:grid-cols-2 gap-6` (1 kolom di mobile, 2 kolom di tablet/desktop).
- **Responsivitas**: Hanya menggunakan breakpoint standar `md:` untuk transisi mobile ke desktop yang mudah dipahami siswa.

---

## 4. Anatomi Komponen UI (Konsep Balok Lego)

```
App.jsx
 ├── <Navbar />              -> Header navigasi atas (Logo NF / Nama, tautan anchor)
 ├── <HeaderProfile />       -> Kartu perkenalan siswa (Avatar inisial, Nama, Badge, Bio bebas)
 ├── <SkillSection />        -> Kumpulan badge keahlian (HTML, CSS, JS, React, Tailwind)
 ├── <ProjectSection />      -> Showcase karya Modul 1
 │     ├── <ProjectCard />   -> Proyek 1: Kalkulator Belanja & Kasir NF (P3)
 │     └── <ProjectCard />   -> Proyek 2: Smart To-Do List App (P4)
 └── <Footer />              -> Tautan GitHub/Medsos & pesan penutup personal
```

### 1. `<Navbar />`
- **Tujuan**: Memperkenalkan pembungkus layout atas dengan flexbox sederhana dan hover interaktif.
- **Elemen**: Logo nama siswa di kiri (dengan inisial rounded-xl), tautan anchor `#skills` dan `#proyek` ber-hover pill, dan tombol aksi `#kontak`.

### 2. `<HeaderProfile />`
- **Tujuan**: Membangun rasa kepemilikan (*student-centered*) yang hangat, manusiawi, dan bebas AI-slop.
- **Elemen**: Avatar monogram `rounded-2xl` berborder `ring-4 ring-blue-50` dengan label *STUDENT* dan status dot aktif `🟢`, nama lengkap (`<h1>`), role siswa, lokasi & sekolah, bio personal, quote belajar murid, serta tombol CTA berhierarki jelas.

### 3. `<SkillBadge />`
- **Tujuan**: Mempelajari komponen kecil yang dapat digunakan berulang kali (*reusable*) dengan micro-interaction Tailwind yang menyenangkan.
- **Elemen**: Kartu keahlian ber-elevasi halus (`hover:-translate-y-1 hover:border-blue-400`), dot warna kategori (`HTML5`, `CSS3`, `JS`, `React`, `Tailwind`, `Git`), dan indikator status *Tuntas ✓* saat kursor melintas.

### 4. `<ProjectCard />`
- **Tujuan**: Menampilkan portofolio nyata dari hasil karya Modul 1 (P3 & P4) sekaligus menyiapkan *hook* interaktif untuk Pertemuan 6.
- **Elemen**: Badge modul, indikator *Siap Diuji*, Judul, Deskripsi, kotak *💡 Fokus Belajar*, tag teknologi, serta tombol pemicu *Buka Rincian Logika ↓* yang siap disambungkan ke `useState` di P6.

### 5. `<Footer />`
- **Tujuan**: Bagian penutup yang memuat hak cipta siswa dan tautan profil (GitHub/Instagram/Email).

---

## 5. Panduan Kustomisasi Murid (Student-Centered Prompt)
Agar siswa tidak hanya copy-paste ("plek ketiplek"), starter code menyediakan variabel data profil terpisah (misal di objek `studentData` atau props) yang wajib mereka ubah sendiri:
1. `name`: Nama lengkap siswa.
2. `tagline`: Minat / impian teknologi siswa (contoh: *Frontend Developer & Designer*).
3. `bio`: Cerita singkat 1–2 kalimat tentang hal yang disukai dalam ngoding.
4. `skills`: Daftar kemampuan atau hobi teknologi yang ingin dipelajari.
5. `socialLinks`: Tautan akun nyata atau portfolio mereka.

---

## 6. Aturan Do's & Don'ts (Cegah AI-Slop)

| ✅ Yang Wajib Dilakukan (DO) | ❌ Yang Dilarang Keras (DON'T) |
| :--- | :--- |
| Gunakan class Tailwind standar (`p-4`, `rounded-xl`, `bg-white`) | Dilarang arbitrary values (`p-[19px]`, `w-[325px]`, `bg-[#131722]`) |
| Batasi maksimal 4–7 class per elemen JSX | Dilarang menumpuk belasan class membingungkan bagi siswa pemula |
| Gunakan warna teks dengan rasio kontras tinggi (`text-gray-900`) | Dilarang warna redup tak terbaca atau efek neon glow (`shadow-blue-500/50`) |
| Transisi hover lembut (`transition-colors duration-150`) | Dilarang animasi pantul/berputar berlebih (`animate-bounce`, spin 3D) |
| Pisahkan komponen ke dalam folder `src/components/` | Dilarang menumpuk semua ratusan baris JSX dalam 1 file raksasa |
