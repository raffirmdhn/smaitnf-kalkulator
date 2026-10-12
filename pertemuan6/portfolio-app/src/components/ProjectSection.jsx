import { useState } from "react";
import ProjectCard from "./ProjectCard";

/**
 * Komponen ProjectSection (Pertemuan 6)
 * =========================================================================
 * Menerapkan React State:
 * 1. Filter Kategori (selectedTag): Menyaring daftar proyek berdasarkan tag.
 * 2. Conditional Rendering (selectedProject): Menampilkan panel detail proyek
 *    khusus di bawah grid saat salah satu kartu diklik.
 * 3. Like Counter (likes): Menghitung apresiasi per proyek secara reaktif.
 * =========================================================================
 */
export default function ProjectSection({ projects }) {
  // State 1: Tag filter aktif
  const [selectedTag, setSelectedTag] = useState("Semua");

  // State 2: Proyek yang sedang dipilih untuk melihat rincian di bawah grid
  const [selectedProject, setSelectedProject] = useState(null);

  // State 3: Catatan jumlah like per id proyek
  const [likes, setLikes] = useState({
    "kalkulator-belanja": 0,
    "smart-todo-app": 0,
  });

  // Daftar pilihan tag filter
  const filterTags = ["Semua", "DOM", "Logika", "Array", "Fetch API", "Matematika"];

  // Filter daftar proyek berdasarkan tag
  const filteredProjects = selectedTag === "Semua"
    ? projects
    : projects.filter((project) => project.tags.includes(selectedTag));

  // Fungsi menambah like
  const handleLike = (projectId) => {
    setLikes((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) + 1,
    }));
  };

  return (
    <section id="proyek" className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Karya & Portofolio Siswa
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Aplikasi web nyata yang telah dibangun mandiri pada Modul 1 (Dasar Pemrograman Web).
        </p>
      </div>

      {/* Bar Tombol Filter Tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {filterTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid Kartu Proyek (Tetap Simetris & Rapi) */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject?.id === project.id}
              onSelect={() =>
                setSelectedProject(
                  selectedProject?.id === project.id ? null : project
                )
              }
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-500">
          Tidak ada proyek dengan tag <span className="font-semibold text-blue-600">#{selectedTag}</span>.
        </div>
      )}

      {/* 
        CONDITIONAL RENDERING:
        Panel Detail Proyek muncul tepat di bawah grid hanya jika ada proyek yang dipilih!
      */}
      {selectedProject && (
        <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm space-y-4 transition-all">
          {/* Header Panel Detail */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                Rincian Karya • {selectedProject.module}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Kategori: {selectedProject.category}
              </p>
            </div>
            {/* Tombol Tutup */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="text-xs text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-lg transition-colors font-medium"
            >
              ✕ Tutup
            </button>
          </div>

          {/* Deskripsi Proyek */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {selectedProject.description}
          </p>

          {/* Tags Teknologi */}
          <div className="flex flex-wrap gap-1.5">
            {selectedProject.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Aksi Interaktif: Like Counter & Tautan Demo */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => handleLike(selectedProject.id)}
              className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>❤️ Beri Apresiasi</span>
              <span>({likes[selectedProject.id] || 0})</span>
            </button>

            <a
              href={selectedProject.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
            >
              <span>Buka Demo</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
