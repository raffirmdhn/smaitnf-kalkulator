import ProjectCard from "./ProjectCard";

/**
 * Komponen ProjectSection
 * Membungkus daftar proyek karya siswa dalam grid 2 kolom yang responsif.
 */
export default function ProjectSection({ projects }) {
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

      {/* Grid Kartu Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
