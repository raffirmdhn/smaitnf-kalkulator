import Navbar from "./components/Navbar";
import HeaderProfile from "./components/HeaderProfile";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";

// TODO 4D & 5C: Setelah file 'src/data/studentData.js' selesai dibuat di tengah sesi,
// uncomment baris impor di bawah ini untuk menghubungkan data terpusat:
// import { studentData } from "./data/studentData";

/**
 * =========================================================================
 * MODUL 2 - LIVE CODING REACT: THE LIVING PORTFOLIO (STARTER)
 * FILE UTAMA: App.jsx
 * =========================================================================
 * Di file inilah seluruh balok Lego komponen disatukan menjadi 1 aplikasi utuh!
 * 
 * ALUR BELAJAR DI KELAS:
 * 1. Mulai dari file ini (App.jsx)  -> selesaikan tata letak dasar TODO 1A & 1B!
 * 2. Buka 'HeaderProfile.jsx'       -> selesaikan kartu profil TODO 2A s/d 2F
 * 3. Buka 'SkillSection.jsx'        -> ketik kartu manual TODO 3
 * 4. Buat 'src/data/studentData.js' -> buat data objek terpusat (TODO 4A)
 * 5. Buka 'SkillBadge.jsx'          -> buat cetakan kartu dinamis (TODO 4B)
 * 6. Buka 'SkillSection.jsx'        -> ganti kartu manual dengan perulangan .map() (TODO 4C)
 * 7. Buka 'ProjectCard.jsx'         -> buat cetakan kartu karya Modul 1 (TODO 5A)
 * 8. Buka 'ProjectSection.jsx'      -> looping array projects dengan .map() (TODO 5B)
 * 9. Kembali ke file ini (App.jsx)  -> sambungkan data studentData via props (TODO 4D & 5C)!
 * =========================================================================
 */
export default function App() {
  return (
    // TODO 1A: Berikan class Tailwind pada container utama <div> di bawah ini:
    // - Tinggi minimal 1 layar penuh (min-h-screen)
    // - Warna latar abu-abu lembut (bg-gray-50)
    // - Warna teks utama gelap (text-gray-900)
    // Clue: <div className="min-h-screen bg-gray-50 text-gray-900">
    <div>
      {/* Bar Navigasi Atas (Sudah disediakan) */}
      <Navbar studentName="Portofolio Siswa" />

      {/* TODO 1B: Berikan class Tailwind pada tag <main> di bawah ini:
          - Lebar maksimal dan rata tengah (max-w-4xl mx-auto)
          - Jarak padding samping dan atas-bawah (px-4 py-8)
          - Jarak renggang vertikal antar komponen (space-y-8)
          Clue: <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      */}
      <main>
        {/* KOMPONEN 1: Kartu Profil Siswa (Latihan TODO 2) */}
        <HeaderProfile />

        {/* KOMPONEN 2: Daftar Keahlian (Latihan TODO 3 & TODO 4) */}
        {/* Nanti di TODO 4D, kirim prop: <SkillSection skills={studentData.skills} /> */}
        <SkillSection />

        {/* KOMPONEN 3: Showcase Karya Modul 1 (Latihan TODO 5) */}
        {/* Nanti di TODO 5C, kirim prop: <ProjectSection projects={studentData.projects} /> */}
        <ProjectSection />

        {/* Komponen Footer & Tautan Sosial Media (Sudah disediakan) */}
        <Footer />
      </main>
    </div>
  );
}
