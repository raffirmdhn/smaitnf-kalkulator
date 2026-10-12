/**
 * Komponen HeaderProfile (Versi Ringkas Ramah Siswa)
 * Menampilkan kartu profil siswa dengan class Tailwind yang ringkas dan mudah dipelajari.
 */
export default function HeaderProfile({ profile }) {
  // Ambil inisial nama jika foto tidak ada
  const initials = profile.name ? profile.name.charAt(0) : "N";

  return (
    <header className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm">
      {/* Avatar Foto / Inisial */}
      <div className="shrink-0">
        {profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-blue-600 text-white font-bold text-2xl flex items-center justify-center">
            {initials}
          </div>
        )}
      </div>

      {/* Info Profil Siswa */}
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
        <p className="text-sm text-blue-600 font-medium mt-1">
          {profile.role} • {profile.school}
        </p>
        <p className="text-sm text-gray-600 mt-2">{profile.bio}</p>

        {/* Tombol Aksi */}
        <div className="flex gap-3 justify-center sm:justify-start mt-4">
          <a
            href="#proyek"
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Lihat Karya
          </a>
          <a
            href="#kontak"
            className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
          >
            Kontak
          </a>
        </div>
      </div>
    </header>
  );
}
