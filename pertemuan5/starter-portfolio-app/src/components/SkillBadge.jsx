/**
 * =========================================================================
 * MODUL 2 - LIVE CODING REACT: THE LIVING PORTFOLIO (STARTER)
 * KOMPONEN 3: SkillBadge.jsx (Komponen Reusable)
 * =========================================================================
 * Ini adalah 'cetakan' balok Lego satuan untuk setiap kartu keahlian.
 * Komponen ini menerima data dari komponen induk melalui 'PROPS' ({ skill }).
 * 
 * TODO 4B:
 * Buat kartu keahlian yang menampilkan data dari prop 'skill':
 * 1. Tampilkan {skill.name} di dalam judul <h3>
 * 2. Tampilkan {skill.level} di dalam teks deskripsi <p>
 * 3. Tampilkan {skill.category} di dalam badge <span>
 * 
 * Clue:
 * return (
 *   <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all">
 *     <div>
 *       <h3 className="font-bold text-gray-900 text-sm">{skill.name}</h3>
 *       <p className="text-xs text-gray-500 mt-0.5">{skill.level}</p>
 *     </div>
 *     <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
 *       {skill.category}
 *     </span>
 *   </div>
 * );
 * =========================================================================
 */
export default function SkillBadge({ skill }) {
  // Cegah error jika prop skill belum dikirim
  if (!skill) return null;

  // TODO 4B: Tulis return JSX kartu keahlian di bawah ini (atau buka komentar Clue di atas):
  return null;
}
