/**
 * Komponen Footer & Kontak
 * Bagian penutup yang memuat saluran komunikasi dan hak cipta portofolio.
 */
export default function Footer({ studentName, school, socialLinks }) {
  return (
    <footer id="kontak" className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Mari Terhubung
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Punya masukan atau ingin mendiskusikan seputar proyek web ini? Jangan ragu menyapa!
          </p>
        </div>

        {/* Tautan Sosial Media / Kontak */}
        <div className="flex flex-wrap gap-3 pt-2">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-lg transition-colors"
            >
              GitHub Profil
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-medium rounded-lg transition-colors"
            >
              Instagram
            </a>
          )}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors"
            >
              Kirim Email
            </a>
          )}
        </div>

        {/* Copyright & Catatan Kelas */}
        <div className="border-t border-gray-100 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <p>
            &copy; {new Date().getFullYear()} {studentName}. All rights reserved.
          </p>
          <p>
            Kelas Web Development • {school}
          </p>
        </div>
      </div>
    </footer>
  );
}
