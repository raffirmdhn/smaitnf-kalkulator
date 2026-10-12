import { studentData } from "./data/studentData";
import Navbar from "./components/Navbar";
import HeaderProfile from "./components/HeaderProfile";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";

/**
 * Komponen Utama: App
 * Menggabungkan seluruh balok komponen Lego menjadi satu halaman The Living Portfolio utuh.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* 1. Bar Navigasi Atas */}
      <Navbar
        studentName={studentData.nickname}
        schoolName={studentData.school}
      />

      {/* 2. Kontainer Utama Konten (Tengah, Rapi, & Proporsional) */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Kartu Profil & Identitas Siswa */}
        <HeaderProfile profile={studentData} />

        {/* Bagian Keahlian & Teknologi */}
        <SkillSection skills={studentData.skills} />

        {/* Bagian Portofolio Karya Nyata Modul 1 */}
        <ProjectSection projects={studentData.projects} />

        {/* Bagian Footer & Kontak */}
        <Footer
          studentName={studentData.name}
          school={studentData.school}
          socialLinks={studentData.socialLinks}
        />
      </main>
    </div>
  );
}
