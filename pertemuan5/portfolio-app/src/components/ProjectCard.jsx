/**
 * Komponen ProjectCard (Versi Ringkas Ramah Siswa)
 * Kartu ringkas karya siswa yang rapi, clickable, dan mudah dipahami kodenya.
 */
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-blue-500 transition-colors">
      <div className="flex justify-between text-xs text-gray-500">
        <span>{project.module}</span>
        <span>&rarr;</span>
      </div>
      <h3 className="text-base font-bold text-gray-900 mt-2">
        {project.title}
      </h3>
      <p className="text-xs text-gray-500 mt-1">
        {project.category}
      </p>
    </div>
  );
}
