/**
 * =========================================================================
 * MODUL 2 - LIVE CODING REACT: THE LIVING PORTFOLIO (STARTER)
 * KOMPONEN 1: HeaderProfile.jsx
 * =========================================================================
 * Komponen ini adalah kartu perkenalan profil diri siswa.
 * Di sini kita belajar dasar penulisan JSX dan styling utility Tailwind CSS!
 * =========================================================================
 */
export default function HeaderProfile() {
  return (
    // TODO 2A: Tambahkan class styling Tailwind pada tag <header> di bawah ini:
    // - Latar belakang putih (bg-white)
    // - Garis tepi abu-abu halus (border border-gray-200)
    // - Sudut membulat modern (rounded-xl)
    // - Jarak bantalan dalam (p-6)
    // - Tata letak flexbox responsif (flex flex-col sm:flex-row gap-6 items-center)
    // - Efek bayangan halus (shadow-sm)
    // Clue: <header id="profil" className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm">
    <header id="profil">
      {/* TODO 2B: Buat avatar foto profil siswa (lingkaran bulat w-20 h-20) */}
      {/* Foto profil tersimpan di folder 'public/avatar.png' */}
      {/* Clue:
      <div className="shrink-0">
        <img
          src="/avatar.png"
          alt="Foto Profil Siswa"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      */}

      {/* Info Profil Siswa */}
      <div className="flex-1 text-center sm:text-left">
        {/* TODO 2C: Buat tag <h1> untuk nama lengkapmu */}
        {/* Clue: <h1 className="text-2xl font-bold text-gray-900">Nama Lengkap Siswa</h1> */}

        {/* TODO 2D: Buat tag <p> untuk role / minat teknologi & nama sekolah */}
        {/* Clue: <p className="text-sm text-blue-600 font-medium mt-1">Aspiring Web Developer • SMAIT Nurul Fikri</p> */}

        {/* TODO 2E: Buat tag <p> untuk bio singkat 1-2 kalimat tentang dirimu */}
        {/* Clue: <p className="text-sm text-gray-600 mt-2">Siswa SMA yang antusias belajar web development modern.</p> */}

        {/* TODO 2F: Buat tombol aksi 'Lihat Karya' (href="#proyek") dan 'Kontak' (href="#kontak") */}
        {/* Clue:
        <div className="flex gap-3 justify-center sm:justify-start mt-4">
          <a
            href="#proyek"
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Lihat Karya
          </a>
          <a
            href="#kontak"
            className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
          >
            Kontak
          </a>
        </div>
        */}
      </div>
    </header>
  );
}
