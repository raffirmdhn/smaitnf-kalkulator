/**
 * Komponen SkillBadge
 * Komponen kecil (reusable) untuk menampilkan satu badge keahlian dengan efek hover interaktif.
 */
export default function SkillBadge({ skill }) {
  // Peta warna aksen dot untuk tiap kategori teknologi
  const dotColorMap = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    yellow: "bg-amber-400",
    cyan: "bg-cyan-500",
    teal: "bg-emerald-500",
    gray: "bg-gray-400",
  };

  const dotClass = dotColorMap[skill.color] || "bg-blue-500";

  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md cursor-default flex flex-col justify-between">
      {/* Header Badge */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${dotClass} group-hover:scale-125 transition-transform`}></span>
          <span className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
          {skill.category}
        </span>
      </div>

      {/* Footer Badge dengan Indikator Interaktif */}
      <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>{skill.level}</span>
        <span className="text-[11px] text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
          Tuntas ✓
        </span>
      </div>
    </div>
  );
}
