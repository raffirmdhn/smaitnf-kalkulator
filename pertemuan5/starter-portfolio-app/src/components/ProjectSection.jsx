import ProjectCard from "./ProjectCard";

/**
 * =========================================================================
 * MODUL 2 - LIVE CODING REACT: THE LIVING PORTFOLIO (STARTER)
 * KOMPONEN 5: ProjectSection.jsx
 * =========================================================================
 * Menampilkan grid portofolio karya nyata yang dibangun di Modul 1.
 * Menerima array data dari prop: { projects }.
 * 
 * TODO 5B:
 * Looping daftar proyek dari prop 'projects' menggunakan .map() dan render <ProjectCard />!
 * 
 * Clue cara looping:
 * {projects.map((project) => (
 *   <ProjectCard key={project.id} project={project} />
 * ))}
 * =========================================================================
 */
export default function ProjectSection({ projects = [] }) {
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
        {/* 
          TODO 5B: Looping array projects menggunakan .map() dan panggil <ProjectCard />
          
          Clue:
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        */}
      </div>
    </section>
  );
}
