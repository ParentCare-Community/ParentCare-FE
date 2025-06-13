"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../components/auth.context";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface UserProfile {
  nama_lengkap: string;
  email: string;
  avatar?: string;
  tanggal_lahir?: string;
  jenis_kelamin?: string;
  nomor_telepon?: string;
  alamat?: string;
  pekerjaan?: string;
  bio?: string;
  jumlah_anak?: number;
  usia_anak?: string;
}

export default function ProfilePage() {
  const { user, isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [profileData, setProfileData] = useState<UserProfile>({
    nama_lengkap: "",
    email: "",
    avatar: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    nomor_telepon: "",
    alamat: "",
    pekerjaan: "",
    bio: "",
    jumlah_anak: 0,
    usia_anak: "",
  });

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/auth/login");
      return;
    }

    if (user) {
      setProfileData({
        nama_lengkap: user.nama_lengkap || "",
        email: user.email || "",
        avatar: user.avatar || "",
        tanggal_lahir: user.tanggal_lahir || "",
        jenis_kelamin: user.jenis_kelamin || "",
        nomor_telepon: user.nomor_telepon || "",
        alamat: user.alamat || "",
        pekerjaan: user.pekerjaan || "",
        bio: user.bio || "",
        jumlah_anak: user.jumlah_anak || 0,
        usia_anak: user.usia_anak || "",
      });
    }
  }, [user, isLoggedIn, loading, router]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: name === "jumlah_anak" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Simulasi API call untuk menyimpan data
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Di sini Anda bisa menambahkan logika untuk menyimpan ke database
      console.log("Profile data to save:", profileData);
      
      setIsEditing(false);
      // Anda bisa menambahkan toast notification di sini
      alert("Profile berhasil diperbarui!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Gagal menyimpan profile. Silakan coba lagi.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (user) {
      setProfileData({
        nama_lengkap: user.nama_lengkap || "",
        email: user.email || "",
        avatar: user.avatar || "",
        tanggal_lahir: user.tanggal_lahir || "",
        jenis_kelamin: user.jenis_kelamin || "",
        nomor_telepon: user.nomor_telepon || "",
        alamat: user.alamat || "",
        pekerjaan: user.pekerjaan || "",
        bio: user.bio || "",
        jumlah_anak: user.jumlah_anak || 0,
        usia_anak: user.usia_anak || "",
      });
    }
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!isLoggedIn || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar Section */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white text-4xl font-bold overflow-hidden mb-4">
                {profileData.avatar ? (
                  <Image
                    src={profileData.avatar}
                    alt={profileData.nama_lengkap}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  profileData.nama_lengkap.charAt(0).toUpperCase()
                )}
              </div>
              {isEditing && (
                <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                  Ganti Foto
                </button>
              )}
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {profileData.nama_lengkap}
              </h1>
              <p className="text-gray-600 mb-4">{profileData.email}</p>
              {profileData.bio && (
                <p className="text-gray-700 mb-4">{profileData.bio}</p>
              )}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                {profileData.pekerjaan && (
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                    {profileData.pekerjaan}
                  </span>
                )}
                {profileData.jumlah_anak > 0 && (
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">
                    {profileData.jumlah_anak} Anak
                  </span>
                )}
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex space-x-3">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving ? "Menyimpan..." : "Simpan"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Profile</h2>
          
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="nama_lengkap"
                    value={profileData.nama_lengkap}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    required
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                    {profileData.nama_lengkap || "Belum diisi"}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <p className="px-4 py-3 bg-gray-100 rounded-lg text-gray-600">
                  {profileData.email} (tidak dapat diubah)
                </p>
              </div>

              {/* Tanggal Lahir */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Lahir
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    name="tanggal_lahir"
                    value={profileData.tanggal_lahir}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                    {profileData.tanggal_lahir || "Belum diisi"}
                  </p>
                )}
              </div>

              {/* Jenis Kelamin */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Kelamin
                </label>
                {isEditing ? (
                  <select
                    name="jenis_kelamin"
                    value={profileData.jenis_kelamin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                    {profileData.jenis_kelamin || "Belum diisi"}
                  </p>
                )}
              </div>

              {/* Nomor Telepon */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="nomor_telepon"
                    value={profileData.nomor_telepon}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    placeholder="Contoh: 08123456789"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                    {profileData.nomor_telepon || "Belum diisi"}
                  </p>
                )}
              </div>

              {/* Pekerjaan */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pekerjaan
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="pekerjaan"
                    value={profileData.pekerjaan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    placeholder="Contoh: Software Engineer"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                    {profileData.pekerjaan || "Belum diisi"}
                  </p>
                )}
              </div>

              {/* Jumlah Anak */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jumlah Anak
                </label>
                {isEditing ? (
                  <input
                    type="number"
                    name="jumlah_anak"
                    value={profileData.jumlah_anak}
                    onChange={handleInputChange}
                    min="0"
                    max="20"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                    {profileData.jumlah_anak || 0} anak
                  </p>
                )}
              </div>

              {/* Usia Anak */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Usia Anak
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="usia_anak"
                    value={profileData.usia_anak}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    placeholder="Contoh: 5 tahun, 8 tahun"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                    {profileData.usia_anak || "Belum diisi"}
                  </p>
                )}
              </div>
            </div>

            {/* Alamat */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat
              </label>
              {isEditing ? (
                <textarea
                  name="alamat"
                  value={profileData.alamat}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Masukkan alamat lengkap Anda"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                  {profileData.alamat || "Belum diisi"}
                </p>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio / Tentang Saya
              </label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Ceritakan sedikit tentang diri Anda..."
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                  {profileData.bio || "Belum diisi"}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Statistics/Activity Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Aktivitas Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <p className="text-gray-700">Quiz Selesai</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">12</div>
              <p className="text-gray-700">Artikel Dibaca</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <p className="text-gray-700">Forum Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}