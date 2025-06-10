'use client';

import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  const lastUpdated = "15 Juni 2025";

  const sections = [
    {
      id: "pengumpulan-data",
      title: "1. Pengumpulan Informasi",
      content: [
        {
          subtitle: "Informasi yang Kami Kumpulkan:",
          items: [
            "Informasi pribadi seperti nama, email, nomor telepon saat registrasi",
            "Data profil parenting melalui Parent Match Quiz",
            "Riwayat aktivitas dalam forum diskusi dan konsultasi",
            "Preferensi konten dan artikel yang Anda baca",
            "Data teknis seperti alamat IP, jenis browser, dan perangkat yang digunakan"
          ]
        },
        {
          subtitle: "Cara Kami Mengumpulkan Data:",
          items: [
            "Secara langsung saat Anda mendaftar atau menggunakan layanan kami",
            "Melalui cookies dan teknologi pelacakan serupa",
            "Dari interaksi Anda dengan konten dan fitur platform",
            "Melalui feedback dan komunikasi dengan tim customer service"
          ]
        }
      ]
    },
    {
      id: "penggunaan-data",
      title: "2. Penggunaan Informasi",
      content: [
        {
          subtitle: "Kami Menggunakan Informasi Anda Untuk:",
          items: [
            "Memberikan rekomendasi konten parenting yang personal",
            "Mengelola akun dan memberikan layanan customer support",
            "Mengirimkan newsletter dan update terbaru tentang parenting",
            "Menganalisis penggunaan platform untuk peningkatan layanan",
            "Memfasilitasi diskusi dalam forum dan komunitas",
            "Memastikan keamanan dan mencegah penyalahgunaan platform"
          ]
        }
      ]
    },
    {
      id: "berbagi-data",
      title: "3. Berbagi Informasi",
      content: [
        {
          subtitle: "Kapan Kami Berbagi Informasi:",
          items: [
            "Dengan persetujuan eksplisit dari Anda",
            "Kepada penyedia layanan pihak ketiga yang membantu operasional platform",
            "Jika diwajibkan oleh hukum atau proses legal yang sah",
            "Untuk melindungi hak, properti, atau keselamatan ParentCare dan pengguna lain"
          ]
        },
        {
          subtitle: "Yang TIDAK Kami Lakukan:",
          items: [
            "Menjual data pribadi Anda kepada pihak ketiga",
            "Membagikan informasi sensitif anak tanpa persetujuan",
            "Menggunakan data untuk tujuan komersial di luar layanan kami"
          ]
        }
      ]
    },
    {
      id: "keamanan-data",
      title: "4. Keamanan Data",
      content: [
        {
          subtitle: "Langkah Keamanan yang Kami Terapkan:",
          items: [
            "Enkripsi data saat transmisi dan penyimpanan",
            "Akses terbatas hanya untuk staff yang berwenang",
            "Pemantauan sistem keamanan 24/7",
            "Backup data regular untuk mencegah kehilangan data",
            "Audit keamanan berkala oleh pihak ketiga independen"
          ]
        }
      ]
    },
    {
      id: "hak-pengguna",
      title: "5. Hak Anda",
      content: [
        {
          subtitle: "Sebagai Pengguna, Anda Memiliki Hak Untuk:",
          items: [
            "Mengakses dan melihat data pribadi yang kami simpan",
            "Memperbarui atau mengoreksi informasi yang tidak akurat",
            "Menghapus akun dan data pribadi Anda (right to be forgotten)",
            "Membatasi pemrosesan data pribadi Anda",
            "Meminta portabilitas data ke platform lain",
            "Menarik persetujuan penggunaan data kapan saja"
          ]
        },
        {
          subtitle: "Cara Menggunakan Hak Anda:",
          items: [
            "Hubungi kami melalui email: privacy@parentcare.id",
            "Gunakan pengaturan privasi di dashboard akun Anda",
            "Ajukan permintaan melalui formulir kontak kami"
          ]
        }
      ]
    },
    {
      id: "cookies",
      title: "6. Cookies dan Teknologi Pelacakan",
      content: [
        {
          subtitle: "Jenis Cookies yang Kami Gunakan:",
          items: [
            "Cookies Esensial: Diperlukan untuk fungsi dasar website",
            "Cookies Analitik: Membantu kami memahami penggunaan website",
            "Cookies Preferensi: Menyimpan pilihan dan pengaturan Anda",
            "Cookies Marketing: Untuk menampilkan konten yang relevan"
          ]
        },
        {
          subtitle: "Mengelola Cookies:",
          items: [
            "Anda dapat mengatur preferensi cookies melalui browser Anda",
            "Menonaktifkan cookies tertentu melalui pengaturan akun",
            "Menghapus cookies yang sudah tersimpan di perangkat Anda"
          ]
        }
      ]
    },
    {
      id: "data-anak",
      title: "7. Perlindungan Data Anak",
      content: [
        {
          subtitle: "Komitmen Khusus Kami:",
          items: [
            "Platform ini ditujukan untuk orang dewasa (18+ tahun)",
            "Kami tidak dengan sengaja mengumpulkan data anak di bawah 13 tahun",
            "Informasi tentang anak hanya dikumpulkan dari orang tua/wali",
            "Data terkait anak mendapat perlindungan ekstra dan tidak dibagikan",
            "Orang tua memiliki kontrol penuh atas informasi anak mereka"
          ]
        }
      ]
    },
    {
      id: "perubahan-kebijakan",
      title: "8. Perubahan Kebijakan",
      content: [
        {
          subtitle: "Tentang Pembaruan Kebijakan:",
          items: [
            "Kami dapat memperbarui kebijakan ini dari waktu ke waktu",
            "Perubahan signifikan akan diberitahukan melalui email atau notifikasi",
            "Tanggal pembaruan terakhir selalu tercantum di bagian atas halaman",
            "Penggunaan berkelanjutan platform berarti persetujuan terhadap perubahan"
          ]
        }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Kebijakan <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Privasi</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Kami menghargai kepercayaan Anda dan berkomitmen melindungi privasi serta data pribadi Anda. 
            Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
          </p>
          <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-orange-800">
              <strong>Terakhir diperbarui:</strong> {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Daftar Isi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-orange-50 border border-gray-100"
              >
                <span className="text-orange-500 font-semibold">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <div key={section.id} id={section.id} className="scroll-mt-20">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-3 h-8 bg-gradient-to-b from-orange-400 to-pink-400 rounded-full mr-4"></span>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-6">
                    {section.content.map((content, contentIndex) => (
                      <div key={contentIndex}>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                          {content.subtitle}
                        </h3>
                        <ul className="space-y-3">
                          {content.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              🛡️ Komitmen Keamanan Kami
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              ParentCare berkomitmen untuk terus meningkatkan standar keamanan dan privasi data. 
              Kepercayaan Anda adalah prioritas utama kami dalam membangun platform parenting yang aman dan terpercaya.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}