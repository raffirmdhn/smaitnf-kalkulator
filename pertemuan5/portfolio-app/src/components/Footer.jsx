/**
 * Komponen Footer (Versi Ringkas Ramah Siswa)
 * Bagian penutup yang memuat tombol kontak dan hak cipta.
 */
export default function Footer({ studentName, school, socialLinks }) {
  return (
    <footer id="kontak" className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">Mari Terhubung</h2>
      <p className="text-sm text-gray-600 mt-1">
        Kirim pesan atau hubungi saya melalui:
      </p>

      {/* Tombol Sosial Media */}
      <div className="flex gap-3 mt-4">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg hover:bg-gray-800"
          >
            GitHub
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-pink-600 text-white text-xs rounded-lg hover:bg-pink-700"
          >
            Instagram
          </a>
        )}
        {socialLinks.email && (
          <a
            href={`mailto:${socialLinks.email}`}
            className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700"
          >
            Email
          </a>
        )}
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-400 border-t border-gray-100 pt-4 mt-6">
        &copy; {new Date().getFullYear()} {studentName} • {school}
      </p>
    </footer>
  );
}
