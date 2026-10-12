/**
 * Komponen Navbar
 * Menampilkan bar navigasi sederhana di bagian paling atas halaman dengan hover state responsif.
 */
export default function Navbar({ studentName, schoolName }) {
  return (
    <nav className="bg-white/95 backdrop-blur-none border-b border-gray-200 sticky top-0 z-20">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Nama Siswa */}
        <a
          href="#profil"
          className="group flex items-center gap-2.5 text-gray-900 font-bold text-base hover:text-blue-600 transition-colors"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-black shadow-sm group-hover:scale-105 transition-transform">
            {studentName ? studentName.charAt(0) : "N"}
          </span>
          <div className="flex flex-col">
            <span className="leading-tight">{studentName || "Portfolio"}</span>
            <span className="text-[10px] text-gray-400 font-normal">Siswa Web Dev</span>
          </div>
        </a>

        {/* Menu Navigasi Anchor dengan Hover Pill Interaktif */}
        <div className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-gray-600">
          <a
            href="#skills"
            className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-gray-100 transition-all"
          >
            Keahlian
          </a>
          <a
            href="#proyek"
            className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-gray-100 transition-all"
          >
            Proyek
          </a>
          <a
            href="#kontak"
            className="ml-1 sm:ml-2 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5 text-xs sm:text-sm font-semibold"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
