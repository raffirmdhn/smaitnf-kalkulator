/**
 * DATA PROFIL SISWA (STUDENT-CENTERED)
 * =========================================================================
 * Simulasi sumber data terpusat (seperti data dari Database / API).
 * Di Pertemuan 6, data proyek diperkaya dengan tags, deskripsi, dan link
 * untuk mendukung fitur filter kategori dan detail expand interaktif.
 * =========================================================================
 */

export const studentData = {
  // 1. Identitas & Profil Siswa
  name: "Muhammad Fatih",
  nickname: "Fatih",
  avatarUrl: "/avatar.png",
  school: "SMAIT Nurul Fikri",
  role: "Aspiring Frontend Developer",
  bio: "Siswa SMA yang suka memecahkan masalah lewat kode. Tertarik mendalami pembuatan website modern yang bersih, fungsional, dan bermanfaat bagi lingkungan sekolah.",

  // 2. Tautan Kontak & Sosial Media
  socialLinks: {
    github: "https://github.com",
    instagram: "https://instagram.com",
    email: "fatih@sekolah.sch.id",
  },

  // 3. Daftar Keahlian (Dirender berulang menggunakan .map() di SkillSection)
  skills: [
    { name: "HTML5", level: "Dasar & Semantik", category: "Markup" },
    { name: "CSS3", level: "Layout & Responsif", category: "Style" },
    { name: "JavaScript", level: "Logika & DOM API", category: "Programming" },
    { name: "React", level: "Komponen & Props", category: "Framework" },
    { name: "Tailwind CSS", level: "Utility-First", category: "Framework" },
    { name: "Git Basics", level: "Simpan & Riwayat", category: "Tools" },
  ],

  // 4. Portofolio Karya Nyata Modul 1 (Mendukung Filter Tags & Conditional Rendering)
  projects: [
    {
      id: "kalkulator-belanja",
      title: "Kalkulator Belanja & Kasir NF",
      module: "Modul 1 • Pertemuan 3",
      category: "Logika Percabangan",
      tags: ["Logika", "DOM", "Matematika"],
      description: "Aplikasi kasir untuk menghitung subtotal belanja, potongan diskon bertingkat (if/else), dan format Rupiah otomatis.",
      demoUrl: "https://github.com",
    },
    {
      id: "smart-todo-app",
      title: "Smart To-Do List App",
      module: "Modul 1 • Pertemuan 4",
      category: "Data-Driven UI",
      tags: ["Array", "Fetch API", "DOM"],
      description: "Aplikasi pencatat tugas interaktif dengan operasi CRUD in-memory (unshift & splice) serta simulasi data asinkron dari internet.",
      demoUrl: "https://github.com",
    },
  ],
};
