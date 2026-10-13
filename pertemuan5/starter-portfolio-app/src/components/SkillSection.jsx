import SkillBadge from "./SkillBadge";

/**
 * =========================================================================
 * MODUL 2 - LIVE CODING REACT: THE LIVING PORTFOLIO (STARTER)
 * KOMPONEN 2: SkillSection.jsx
 * =========================================================================
 * Bagian ini menampilkan daftar keahlian & teknologi web yang dipelajari.
 * Di sini kita belajar:
 * 1. Menulis kartu hardcode manual (TODO 3)
 * 2. Mengubah kartu manual menjadi perulangan dinamis .map() (TODO 4C)
 * =========================================================================
 */
export default function SkillSection({ skills = [] }) {
  return (
    <section id="skills" className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Keahlian & Teknologi
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Kumpulan teknologi web yang telah dipelajari dan dipraktikkan di kelas.
        </p>
      </div>

      {/* Grid Kartu Keahlian */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {/* 
          TODO 3 (Tahap Hardcode Manual):
          Ketik 1 kartu keahlian manual di bawah ini bersama mentor untuk melihat strukturnya!
          
          Clue:
          <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-bold text-gray-900 text-sm">HTML5</h3>
              <p className="text-xs text-gray-500 mt-0.5">Dasar & Semantik</p>
            </div>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Markup</span>
          </div>
        */}

        {/* 
          TODO 4C (Tahap Reusable & Dynamic Array):
          Setelah membuat file 'src/data/studentData.js' dan komponen <SkillBadge />,
          ganti kartu manual dengan perulangan dinamis menggunakan .map()!
          
          Clue:
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        */}
      </div>
    </section>
  );
}
