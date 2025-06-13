"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Footer from "../../components/Footer";

export default function About() {
  const teamMembers = [
    {
      name: "Revan Fazry Huda",
      role: "Frontend dan Backend",
      education: "S1 Teknik Informatika, Universitas Muhammadiyah Cirebon",
      image: "/team/revan.jpg",
    },
    {
      name: "Moh Syafiq Adeluindra",
      role: "Frontend dan Backend",
      education: "S1 Teknik Informatika, Universitas Muhammadiyah Cirebon",
      image: "/team/syafiq.jpg",
    },
    {
      name: "Syahrani",
      role: "Frontend dan Backend",
      education: "S1 Teknik Informatika, Universitas Muhammadiyah Cirebon",
      image: "/team/syahrani.jpg",
    },
    {
      name: "Safiratun Nisa",
      role: "Machine Learning",
      education: "S1 Teknik Informatika, Universitas Muhammadiyah Cirebon",
      image: "/team/safira.jpg",
    },
    {
      name: "Shakira Angelina Ika Putri",
      role: "Machine Learning",
      education: "S1 Teknik Informatika, Universitas Mercu Buana",
      image: "/team/shakira.jpg",
    },
    {
      name: "Nabiel Muhammad Imjauzanansyah",
      role: "Machine Learning",
      education: "S1 Teknik Informatika, Universitas Muhammadiyah Sumatera Utara",
      image: "/team/nabiel.jpg",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Berdasarkan Sains",
      description:
        "Semua konten dan rekomendasi kami didasarkan pada penelitian ilmiah terkini dalam bidang psikologi perkembangan anak.",
    },
    {
      icon: "❤️",
      title: "Pendekatan Humanis",
      description:
        "Kami memahami bahwa setiap keluarga unik, dan pendekatan kami selalu mengutamakan empati dan pemahaman.",
    },
    {
      icon: "🌱",
      title: "Pertumbuhan Berkelanjutan",
      description:
        "Kami berkomitmen untuk terus belajar dan berkembang bersama dengan keluarga Indonesia.",
    },
    {
      icon: "🤝",
      title: "Komunitas Supportif",
      description:
        "Membangun komunitas orang tua yang saling mendukung dan berbagi pengalaman positif.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSliderNavigation = (direction: "prev" | "next") => {
    const slider = document.querySelector(
      `.${styles.teamSlider}`
    ) as HTMLElement;
    if (slider) {
      const cardWidth = 300;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (direction === "next") {
        if (slider.scrollLeft >= maxScroll) {
          // Jika sudah di akhir, kembali ke awal
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          setActiveSlide(0);
        } else {
          slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
          setActiveSlide(activeSlide + 1);
        }
      } else {
        if (slider.scrollLeft <= 0) {
          slider.scrollTo({
            left: maxScroll,
            behavior: "smooth",
          });
          setActiveSlide(teamMembers.length - 1);
        } else {
          slider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
          setActiveSlide(activeSlide - 1);
        }
      }
    }
  };

  return (
    <div className={`min-h-screen ${styles.page}`}>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Tentang{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              ParentCare
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Didirikan dengan misi untuk mendukung setiap orang tua dalam
            membesarkan anak-anak yang bahagia dan sehat. Kami percaya bahwa
            parenting yang baik dimulai dari pemahaman yang mendalam.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-4xl mr-4">🎯</span>
                Misi Kami
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Memberikan dukungan komprehensif kepada orang tua melalui
                platform digital yang mudah diakses, dengan menyediakan tools
                interaktif, konten edukatif, dan komunitas yang supportif untuk
                membantu menciptakan lingkungan keluarga yang harmonis dan
                mendukung perkembangan optimal anak.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-4xl mr-4">🌟</span>
                Visi Kami
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Menjadi platform parenting digital terdepan di Indonesia yang
                memberdayakan setiap orang tua dengan pengetahuan dan tools yang
                mereka butuhkan untuk membesarkan generasi yang lebih bahagia,
                sehat, dan berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang memandu setiap langkah kami dalam melayani
              keluarga Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 text-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-2 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tim Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Team pembuat ParentCare
            </p>
          </div>

          <div className={styles.teamSliderContainer}>
            <div className={styles.teamSlider}>
              {teamMembers.map((member, index) => (
                <div key={index} className={styles.teamCard}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className={`rounded-full mb-6 object-cover ${styles.teamCardProfile}`}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {member.education}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              className={`${styles.navArrow} ${styles.navArrowLeft}`}
              onClick={() => handleSliderNavigation("prev")}
            >
              &#8249;
            </button>
            <button
              className={`${styles.navArrow} ${styles.navArrowRight}`}
              onClick={() => handleSliderNavigation("next")}
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Cerita Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Perjalanan dari ide sederhana hingga menjadi platform parenting
                terpercaya
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-2">
                  <div className="bg-white rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Awal Mula (2023)
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      ParentCare lahir dari keprihatinan akan banyaknya orang
                      tua yang merasa bingung dan overwhelmed dalam mengasuh
                      anak di era digital. Tim kami yang terdiri dari psikolog,
                      ahli pendidikan, dan teknologi berkumpul untuk menciptakan
                      solusi.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Perkembangan (2024)
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Dengan feedback dari ribuan orang tua, kami terus
                      mengembangkan fitur Parent Match Quiz, koleksi artikel
                      yang komprehensif, dan forum diskusi yang aktif.
                      Kepercayaan keluarga Indonesia menjadi motivasi utama
                      kami.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Masa Depan (2025+)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Kami berkomitmen untuk terus berinovasi dengan teknologi
                      terdepan dan penelitian terbaru untuk memberikan
                      pengalaman parenting yang lebih personal dan efektif bagi
                      setiap keluarga.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      15K+
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">
                        Orang Tua Terdaftar
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Keluarga yang mempercayai kami
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      500+
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">
                        Artikel Berkualitas
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Konten yang telah diverifikasi ahli
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      98%
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">
                        Tingkat Kepuasan
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Berdasarkan survey pengguna
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Perjalanan Parenting yang Lebih Baik?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan ribuan orang tua yang telah merasakan manfaat
              ParentCare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/parent-match"
                className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Mulai Parent Match Quiz
              </a>
              <a
                href="/articles"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300"
              >
                Baca Artikel
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
