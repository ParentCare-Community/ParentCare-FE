// src/app/terms/page.tsx
'use client';

import React from 'react';
import Footer from '../../components/Footer'; // Tambahkan import Footer di sini

const TermsAndConditionsPage = () => {
  const lastUpdated = "15 Januari 2025";

  return (
    <div className="min-h-screen bg-[#fff5f0]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-pink-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-orange-100 mb-4">
              Ketentuan penggunaan layanan ParentCare
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Terakhir diperbarui: {lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-orange-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                📋
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Pendahuluan</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Selamat datang di ParentCare! Dengan menggunakan layanan kami, Anda menyetujui untuk terikat dengan syarat dan ketentuan berikut. 
              Mohon baca dengan seksama sebelum menggunakan platform kami. Jika Anda tidak setuju dengan ketentuan ini, 
              harap tidak menggunakan layanan ParentCare.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Definisi dan Interpretasi
              </h3>
              <div className="text-gray-700 space-y-4">
                <p><strong className="text-orange-600">"ParentCare"</strong> mengacu pada platform digital parenting yang menyediakan layanan konsultasi, artikel, dan forum diskusi.</p>
                <p><strong className="text-orange-600">"Pengguna"</strong> adalah setiap individu yang mengakses atau menggunakan layanan ParentCare.</p>
                <p><strong className="text-orange-600">"Layanan"</strong> mencakup semua fitur yang tersedia di platform, termasuk Parent Match Quiz, artikel parenting, dan forum diskusi.</p>
                <p><strong className="text-orange-600">"Konten"</strong> adalah semua informasi, teks, gambar, video, atau materi lain yang tersedia di platform.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Penerimaan Ketentuan
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>Dengan mengakses atau menggunakan ParentCare, Anda menyatakan bahwa:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Anda berusia minimal 18 tahun atau memiliki izin dari orang tua/wali</li>
                  <li>Anda memiliki kapasitas hukum untuk mengadakan kontrak</li>
                  <li>Anda akan mematuhi semua ketentuan yang berlaku</li>
                  <li>Informasi yang Anda berikan adalah akurat dan terkini</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Layanan yang Disediakan
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>ParentCare menyediakan layanan berupa:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-600 mb-2">Parent Match Quiz</h4>
                    <p className="text-sm">Kuis interaktif untuk mengenali gaya parenting dan mendapatkan rekomendasi yang sesuai.</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-600 mb-2">Artikel Parenting</h4>
                    <p className="text-sm">Koleksi artikel edukatif yang disusun oleh ahli parenting berpengalaman.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-600 mb-2">Forum Diskusi</h4>
                    <p className="text-sm">Platform untuk berbagi pengalaman dan bertanya kepada komunitas orang tua.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Kewajiban Pengguna
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>Sebagai pengguna ParentCare, Anda berkewajiban untuk:</p>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-lg border border-orange-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Memberikan informasi yang akurat dan tidak menyesatkan
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Menjaga kerahasiaan akun dan kata sandi Anda
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Tidak menyalahgunakan platform untuk tujuan ilegal atau merugikan
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Menghormati hak privasi dan pendapat pengguna lain
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Tidak mengunggah konten yang mengandung ujaran kebencian atau konten dewasa
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Hak Kekayaan Intelektual
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>Semua konten di ParentCare, termasuk namun tidak terbatas pada teks, gambar, logo, dan desain, 
                adalah milik ParentCare atau pemberi lisensi yang sah. Pengguna tidak diperkenankan untuk:</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="space-y-2 text-red-700">
                    <li>• Menyalin, memodifikasi, atau mendistribusikan konten tanpa izin</li>
                    <li>• Menggunakan konten untuk tujuan komersial tanpa persetujuan tertulis</li>
                    <li>• Menghapus atau mengubah pemberitahuan hak cipta</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Pembatasan Tanggung Jawab
              </h3>
              <div className="text-gray-700 space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-semibold mb-2">⚠️ Penting untuk Diperhatikan:</p>
                  <p>ParentCare menyediakan informasi edukatif dan tidak menggantikan konsultasi medis profesional. 
                  Kami tidak bertanggung jawab atas keputusan yang diambil berdasarkan informasi dari platform ini.</p>
                </div>
                <p>Layanan disediakan "sebagaimana adanya" tanpa jaminan tersurat maupun tersirat mengenai:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keakuratan, kelengkapan, atau keandalan informasi</li>
                  <li>Kesesuaian untuk tujuan tertentu</li>
                  <li>Tidak adanya gangguan atau kesalahan teknis</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Pemutusan Layanan
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>ParentCare berhak untuk menangguhkan atau menghentikan akses Anda jika:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p>• Melanggar syarat dan ketentuan</p>
                    <p>• Menyalahgunakan platform</p>
                    <p>• Memberikan informasi palsu</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Mengganggu pengguna lain</p>
                    <p>• Melakukan aktivitas ilegal</p>
                    <p>• Atas kebijaksanaan kami</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Perubahan Ketentuan
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>ParentCare berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diberitahukan melalui:</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    📧 Email notifikasi
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    📱 Notifikasi aplikasi
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    🌐 Pengumuman di website
                  </div>
                </div>
                <p className="mt-4">Penggunaan berkelanjutan setelah perubahan berarti Anda menyetujui ketentuan yang baru.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ada Pertanyaan?</h3>
            <p className="mb-6 text-orange-100">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, 
              jangan ragu untuk menghubungi tim dukungan kami.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:legal@parentcare.id" 
                className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                legal@parentcare.id
              </a>
              <a 
                href="/contact" 
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Ditambahkan di sini */}
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;