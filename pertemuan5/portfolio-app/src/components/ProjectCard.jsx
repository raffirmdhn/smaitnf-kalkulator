/**
 * Komponen ProjectCard (Pertemuan 5)
 * =========================================================================
 * Menampilkan kartu ringkas portofolio karya Modul 1.
 * Dibuat clean, minimalis, dan clickable dengan hover responsif.
 * 
 * 💡 PANDUAN PRAKTIKUM (SPEAKING MENTOR):
 * "Di Pertemuan 5 ini kita buat kartu ringkasnya dulu: modul, judul, dan kategori.
 * Kartu ini clickable dengan hover yang rapi.
 * Nanti di Pertemuan 6, ketika kartu ini diklik, kita pasang CONDITIONAL RENDERING:
 * baru deh muncul deskripsi, screenshot hasil tugas, dan rincian logikanya!"
 * =========================================================================
 */
export default function ProjectCard({ project }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="group bg-white border border-gray-200 hover:border-blue-500 rounded-xl p-5 transition-all cursor-pointer hover:shadow-sm text-left flex flex-col justify-between"
    >
      {/* Header: Modul & Indikator Interaksi */}
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-gray-500">
          {project.module}
        </span>
        <span className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all text-sm font-semibold">
          &rarr;
        </span>
      </div>

      {/* Konten Utama: Judul & Kategori Singkat */}
      <div className="mt-3">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {project.category}
        </p>
      </div>
    </div>
  );
}
