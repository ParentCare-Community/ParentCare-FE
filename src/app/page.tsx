// src/app/page.tsx
'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function Home() {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Assessment",
      description: "Quiz komprehensif yang dirancang khusus untuk mengidentifikasi gaya parenting Anda"
    },
    {
      icon: "📊",
      title: "Analisis Mendalam",
      description: "Hasil analisis yang detail berdasarkan penelitian psikologi perkembangan anak"
    },
    {
      icon: "💡",
      title: "Rekomendasi Praktis",
      description: "Tips dan saran yang dapat langsung diterapkan dalam keseharian bersama anak"
    },
    {
      icon: "🎨",
      title: "Pendekatan Holistik",
      description: "Mempertimbangkan aspek emosional, sosial, dan kognitif dalam pengasuhan"
    }
  ];

  // State untuk testimoni dengan data default
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah M.",
      role: "Ibu dari 2 anak",
      content: "ParentCare membantu saya memahami pendekatan parenting yang tepat. Sekarang hubungan dengan anak-anak jadi lebih harmonis!",
      avatar: "S",
      rating: 5
    },
    {
      id: 2,
      name: "Budi P.",
      role: "Ayah dari 1 anak",
      content: "Quiz ini sangat membantu! Saya jadi lebih aware dengan gaya parenting saya dan bisa memperbaiki hal-hal yang kurang tepat.",
      avatar: "B",
      rating: 5
    },
    {
      id: 3,
      name: "Dina R.",
      role: "Ibu dari 3 anak",
      content: "Rekomendasi yang diberikan sangat praktis dan mudah diterapkan. Anak-anak jadi lebih kooperatif dan bahagia.",
      avatar: "D",
      rating: 5
    }
  ]);

  // State untuk form input
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5
  });

  const [showForm, setShowForm] = useState(false);

  // Handler untuk perubahan input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  // Handler untuk submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name.trim() && formData.role.trim() && formData.content.trim()) {
      const newTestimonial: Testimonial = {
        id: Date.now(),
        name: formData.name,
        role: formData.role,
        content: formData.content,
        avatar: formData.name.charAt(0).toUpperCase(),
        rating: formData.rating
      };

      setTestimonials(prev => [...prev, newTestimonial]);
      
      // Reset form
      setFormData({
        name: '',
        role: '',
        content: '',
        rating: 5
      });
      
      setShowForm(false);
    }
  };

  // Handler untuk hapus testimoni
  const handleDeleteTestimonial = (id: number) => {
    setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Section Utama */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Dukungan Parenting Digital untuk Keluarga Bahagia
            </h1>
            <p className={styles.heroDescription}>
              ParentCare adalah ruang aman bagi para orang tua untuk belajar dan berbagi. Di sini, kamu bisa menemukan panduan sederhana, artikel yang relevan, dan komunitas yang memahami lika-liku menjadi orang tua di era sekarang.
            </p>
            <div className={styles.ctas}>
              <a href="/parent-match" className={`${styles.ctaButton} ${styles.primary}`}>
                Mulai Tentukan Gaya Parentingmu!
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/family.png" alt="Hero Image" width={500} height={400} className="rounded-lg" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Mengapa Memilih Parent Match?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Platform kami menggunakan pendekatan ilmiah untuk membantu Anda memahami 
                dan mengoptimalkan gaya parenting yang sesuai dengan kebutuhan keluarga.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Bagaimana Cara Kerjanya?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proses sederhana dalam 3 langkah untuk mendapatkan insight parenting yang mendalam
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Jawab Quiz Interaktif
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lengkapi 10 pertanyaan yang dirancang khusus untuk mengidentifikasi pola parenting Anda dalam berbagai situasi.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Analisis Mendalam
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sistem kami menganalisis jawaban Anda berdasarkan teori psikologi perkembangan untuk menentukan gaya parenting dominan.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Rekomendasi Personal
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dapatkan rekomendasi yang dipersonalisasi dan tips praktis untuk mengoptimalkan hubungan dengan anak Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Testimonials Section */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Apa Kata Mereka?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beberapa orang tua telah merasakan manfaat ParentCare dalam meningkatkan kualitas parenting mereka
              </p>
              
              {/* Tombol untuk menambah testimoni */}
              <div className="mt-8">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {showForm ? 'Tutup Form' : 'Tambah Testimoni'}
                </button>
              </div>
            </div>

            {/* Form Input Testimoni */}
            {showForm && (
              <div className="max-w-2xl mx-auto mb-12 bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Bagikan Pengalaman Anda
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                      placeholder="Contoh: Sarah Marlina"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Peran/Status
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                      placeholder="Contoh: Ibu dari 2 anak"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                      Testimoni
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-vertical"
                      placeholder="Ceritakan pengalaman Anda menggunakan Parent Match..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 Bintang)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 Bintang)</option>
                      <option value={3}>⭐⭐⭐ (3 Bintang)</option>
                      <option value={2}>⭐⭐ (2 Bintang)</option>
                      <option value={1}>⭐ (1 Bintang)</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      Kirim Testimoni
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Display Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                  {/* Tombol hapus (hanya muncul saat hover) */}
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    className="absolute top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600 flex items-center justify-center text-sm"
                    title="Hapus testimoni"
                  >
                    ×
                  </button>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic mb-4">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'fill-gray-300'}`} 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {testimonials.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Belum ada testimoni. Jadilah yang pertama untuk berbagi pengalaman!</p>
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}