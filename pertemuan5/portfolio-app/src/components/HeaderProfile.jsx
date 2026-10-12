/**
 * Komponen HeaderProfile
 * Menampilkan kartu identitas personal siswa dengan gaya modern, hangat, dan tanpa AI-slop.
 */
export default function HeaderProfile({ profile }) {
  // Ambil inisial nama siswa
  const initials = profile.name
    ? profile.name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "NF";

  return (
    <header id="profil" className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Avatar Profil: Lingkaran foto dengan fallback ke inisial */}
        <div className="shrink-0">
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-gray-200 shadow-sm"
            />
          ) : (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600 text-white font-bold text-2xl md:text-3xl flex items-center justify-center shadow-sm">
              {initials}
            </div>
          )}
        </div>

        {/* Informasi Utama Siswa */}
        <div className="flex-1 space-y-2">
          {/* Nama & Role */}
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm md:text-base font-semibold text-blue-600 mt-0.5">
              {profile.role} • {profile.school}
            </p>
          </div>

          {/* Bio Singkat Personal */}
          <p className="text-sm text-gray-600 leading-relaxed pt-1">
            {profile.bio}
          </p>

          {/* Tombol Aksi (CTA) Berhierarki Jelas */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>Lihat Hasil Karya</span>
              <span className="text-xs">&darr;</span>
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-200 transition-colors"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
