/**
 * =========================================================================
 * MODUL 2 - LIVE CODING REACT: THE LIVING PORTFOLIO (STARTER)
 * KOMPONEN 4: ProjectCard.jsx (Komponen Reusable)
 * =========================================================================
 * Menampilkan kartu showcase untuk 1 buah proyek karya Modul 1 siswa.
 * Komponen ini menerima data dari komponen induk melalui prop: { project }.
 * 
 * TODO 5A:
 * Buat kartu proyek yang menampilkan data dari prop 'project':
 * 1. Tampilkan {project.module} pada badge/label atas
 * 2. Tampilkan {project.title} pada judul <h3>
 * 3. Tampilkan {project.category} pada label kategori <p>
 * 
 * Clue:
 * return (
 *   <div className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer shadow-sm hover:shadow-md hover:border-blue-500 transition-all">
 *     <div className="flex justify-between text-xs text-gray-500">
 *       <span>{project.module}</span>
 *       <span>&rarr;</span>
 *     </div>
 *     <h3 className="text-base font-bold text-gray-900 mt-2">
 *       {project.title}
 *     </h3>
 *     <p className="text-xs text-gray-500 mt-1">
 *       {project.category}
 *     </p>
 *   </div>
 * );
 * =========================================================================
 */
export default function ProjectCard({ project }) {
  // Cegah error jika prop project belum dikirim
  if (!project) return null;

  // TODO 5A: Tulis return JSX kartu proyek di bawah ini (atau buka komentar Clue di atas):
  return null;
}
