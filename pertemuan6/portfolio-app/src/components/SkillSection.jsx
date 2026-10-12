import SkillBadge from "./SkillBadge";

/**
 * Komponen SkillSection
 * Membungkus seluruh badge keahlian siswa dalam tata letak grid yang rapi.
 */
export default function SkillSection({ skills }) {
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

      {/* Grid Badge Keahlian */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
