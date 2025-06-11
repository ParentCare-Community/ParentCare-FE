// src/app/faq/page.tsx
'use client';

import { useState } from "react";
import Footer from '../../components/Footer';
import styles from "../page.module.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Apa itu ParentCare dan bagaimana cara kerjanya?",
      answer: "ParentCare adalah platform digital yang membantu orang tua memahami gaya parenting mereka melalui quiz interaktif. Sistem kami menganalisis jawaban Anda berdasarkan teori psikologi perkembangan dan memberikan rekomendasi yang dipersonalisasi untuk meningkatkan kualitas pengasuhan.",
      category: "umum"
    },
    {
      id: 2,
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan quiz?",
      answer: "Quiz Parent Match terdiri dari 10 pertanyaan yang dirancang khusus dan dapat diselesaikan dalam waktu 5-10 menit. Kami merekomendasikan Anda menjawab dengan tenang dan jujur untuk mendapatkan hasil yang akurat.",
      category: "quiz"
    },
    {
      id: 3,
      question: "Apakah hasil quiz ini akurat dan dapat diandalkan?",
      answer: "Ya, quiz kami dikembangkan berdasarkan penelitian psikologi perkembangan anak dan teori parenting yang telah terbukti. Namun, hasil ini sebaiknya digunakan sebagai panduan awal dan bukan sebagai diagnosis profesional. Untuk kasus yang kompleks, kami tetap merekomendasikan konsultasi dengan ahli.",
      category: "quiz"
    },
    {
      id: 4,
      question: "Apakah ParentCare gratis untuk digunakan?",
      answer: "Ya, fitur dasar ParentCare termasuk quiz Parent Match dan rekomendasi dasar dapat digunakan secara gratis. Kami juga menyediakan paket premium dengan analisis yang lebih mendalam dan konsultasi personal dengan ahli parenting.",
      category: "layanan"
    },
    {
      id: 5,
      question: "Bagaimana jika saya tidak puas dengan hasil quiz?",
      answer: "Anda dapat mengulang quiz kapan saja jika merasa jawaban sebelumnya tidak mencerminkan situasi terkini. Gaya parenting dapat berubah seiring waktu dan pengalaman, jadi kami mendorong pengguna untuk melakukan assessment berkala.",
      category: "quiz"
    },
    {
      id: 6,
      question: "Apakah data pribadi saya aman di ParentCare?",
      answer: "Keamanan data adalah prioritas utama kami. Semua informasi pribadi dienkripsi dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda. Kami mematuhi standar keamanan data internasional untuk melindungi privasi pengguna.",
      category: "keamanan"
    },
    {
      id: 7,
      question: "Bisakah saya mendiskusikan hasil quiz dengan pasangan?",
      answer: "Tentu saja! Kami bahkan merekomendasikan untuk mendiskusikan hasil dengan pasangan atau keluarga. ParentCare juga menyediakan panduan khusus untuk membantu pasangan menyelaraskan gaya parenting mereka.",
      category: "umum"
    },
    {
      id: 8,
      question: "Apakah ada dukungan untuk orang tua tunggal?",
      answer: "Ya, ParentCare memahami tantangan unik yang dihadapi orang tua tunggal. Rekomendasi kami disesuaikan dengan situasi keluarga, termasuk panduan khusus dan tips praktis untuk single parent.",
      category: "layanan"
    },
    {
      id: 9,
      question: "Bagaimana cara menghubungi tim support jika ada masalah?",
      answer: "Anda dapat menghubungi tim support kami melalui email di support@parentcare.id atau melalui form kontak di website. Tim kami siap membantu Anda dalam waktu 1x24 jam pada hari kerja.",
      category: "layanan"
    },
    {
      id: 10,
      question: "Apakah ParentCare cocok untuk semua usia anak?",
      answer: "ParentCare dirancang untuk orang tua dengan anak usia 0-18 tahun. Quiz dan rekomendasi kami akan disesuaikan berdasarkan rentang usia anak yang Anda masukkan dalam profil.",
      category: "umum"
    }
  ];

  const categories = [
    { value: 'semua', label: 'Semua Pertanyaan' },
    { value: 'umum', label: 'Umum' },
    { value: 'quiz', label: 'Quiz & Assessment' },
    { value: 'layanan', label: 'Layanan' },
    { value: 'keamanan', label: 'Keamanan & Privasi' }
  ];

  const filteredFAQ = selectedCategory === 'semua' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Temukan jawaban atas pertanyaan yang sering diajukan tentang ParentCare. 
              Jika tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim support kami.
            </p>
            <div className="flex justify-center">
              <a 
                href="/parent-match" 
                className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Mulai Quiz Sekarang
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 bg-white border-b">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-4">
              {filteredFAQ.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${
                      activeId === faq.id ? 'rotate-180' : ''
                    }`}>
                      <svg 
                        className="w-6 h-6 text-gray-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFAQ.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🤔</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tidak ada pertanyaan dalam kategori ini
                </h3>
                <p className="text-gray-600">
                  Pilih kategori lain atau lihat semua pertanyaan yang tersedia.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-pink-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tim support kami siap membantu Anda. Hubungi kami melalui email atau form kontak 
              dan kami akan merespons dalam waktu 1x24 jam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@parentcare.id"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Form Kontak
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}