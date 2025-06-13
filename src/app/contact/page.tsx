'use client';

import { useState } from 'react';
import Footer from '../../components/Footer';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  parentingStage: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    parentingStage: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: "Apakah layanan ParentCare berbayar?",
      answer: "ParentCare menyediakan layanan gratis untuk fitur dasar seperti artikel dan forum diskusi. Untuk konsultasi dengan ahli dan fitur premium lainnya, tersedia paket berlangganan yang terjangkau.",
      isOpen: false
    },
    {
      id: 2,
      question: "Bagaimana cara menggunakan Parent Match Quiz?",
      answer: "Anda cukup mengklik menu 'Parent Match' di navbar, kemudian jawab 10 pertanyaan yang tersedia. Hasil analisis akan langsung muncul setelah semua pertanyaan dijawab.",
      isOpen: false
    },
    {
      id: 3,
      question: "Apakah data pribadi saya aman?",
      answer: "Ya, kami sangat mengutamakan keamanan data pengguna. Semua informasi pribadi dienkripsi dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda.",
      isOpen: false
    },
    {
      id: 4,
      question: "Bisakah saya berkonsultasi dengan psikolog anak?",
      answer: "Tentu! Kami memiliki tim psikolog dan konselor parenting berpengalaman. Anda bisa membuat janji konsultasi melalui halaman layanan atau menghubungi customer service kami.",
      isOpen: false
    },
    {
      id: 5,
      question: "Bagaimana cara bergabung dengan forum diskusi?",
      answer: "Setelah mendaftar akun, Anda bisa langsung mengakses forum diskusi di menu 'Forum'. Di sana Anda bisa berbagi pengalaman dan bertanya kepada sesama orang tua.",
      isOpen: false
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form setelah berhasil
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        parentingStage: ''
      });
      
      setSubmitStatus('success');
      
      // Reset status setelah 5 detik
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (id: number) => {
    setFaqs(prev => prev.map(faq => 
      faq.id === id 
        ? { ...faq, isOpen: !faq.isOpen }
        : { ...faq, isOpen: false }
    ));
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "info@parentcare.id",
      description: "Kirim email untuk pertanyaan detail",
      action: "mailto:info@parentcare.id"
    },
    {
      icon: "📞",
      title: "Telepon",
      value: "+62 812-3456-7890",
      description: "Hubungi kami di jam kerja",
      action: "tel:+6281234567890"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      description: "Chat langsung dengan tim support",
      action: "https://wa.me/6281234567890"
    },
    {
      icon: "📍",
      title: "Alamat",
      value: "Jakarta Selatan",
      description: "Kunjungi kantor kami",
      action: "#"
    }
  ];

  const officeHours = [
    { day: "Senin - Jumat", hours: "09:00 - 18:00 WIB" },
    { day: "Sabtu", hours: "09:00 - 15:00 WIB" },
    { day: "Minggu", hours: "Tutup" }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFE0D7] via-[#FFF5F0] to-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Hubungi <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">ParentCare</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Kami siap membantu perjalanan parenting Anda! Jangan ragu untuk menghubungi tim ahli kami 
              untuk konsultasi, pertanyaan, atau saran seputar pengasuhan anak.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-gray-600">Support Online</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-pink-500"> 2 Jam</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-purple-500">15K+</div>
                <div className="text-sm text-gray-600">Orang Tua Terbantu</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-500">98%</div>
                <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cara Menghubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih cara yang paling nyaman untuk Anda berkomunikasi dengan tim ParentCare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
                <div className="text-lg font-medium text-orange-500 mb-2">{method.value}</div>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-block bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {method.title === 'Email' ? 'Kirim Email' : 
                   method.title === 'Telepon' ? 'Telepon Sekarang' :
                   method.title === 'WhatsApp' ? 'Chat WhatsApp' : 'Lihat Lokasi'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Kirim Pesan Kepada Kami
                </h3>
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Pesan Anda berhasil dikirim! Tim kami akan merespons dalam 24 jam.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ❌ Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui WhatsApp.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                        placeholder="+62 812-3456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="parentingStage" className="block text-sm font-medium text-gray-700 mb-2">
                        Tahap Parenting
                      </label>
                      <select
                        id="parentingStage"
                        name="parentingStage"
                        value={formData.parentingStage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Pilih tahap parenting</option>
                        <option value="planning">Perencanaan Kehamilan</option>
                        <option value="pregnant">Sedang Hamil</option>
                        <option value="newborn">Bayi (0-12 bulan)</option>
                        <option value="toddler">Balita (1-3 tahun)</option>
                        <option value="preschool">Pra-sekolah (3-5 tahun)</option>
                        <option value="school">Usia Sekolah (6-12 tahun)</option>
                        <option value="teen">Remaja (13-18 tahun)</option>
                        <option value="adult">Anak Dewasa (18+ tahun)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                      placeholder="Ringkasan topik yang ingin dibahas"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-vertical"
                      placeholder="Ceritakan secara detail apa yang ingin Anda konsultasikan atau tanyakan..."
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim Pesan...
                        </span>
                      ) : (
                        'Kirim Pesan'
                      )}
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    * Wajib diisi. Pesan Anda akan direspons dalam waktu maksimal 24 jam.
                  </p>
                </form>
              </div>
            </div>

            {/* Office Hours & Additional Info */}
            <div className="space-y-8">
              
              {/* Office Hours */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">🕒</span>
                  Jam Operasional
                </h4>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Darurat:</strong> Untuk situasi darurat parenting, 
                    hubungi WhatsApp kami kapan saja. Tim on-call siap membantu 24/7.
                  </p>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">💡</span>
                  Tips Menghubungi Kami
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Sertakan detail usia dan kondisi anak untuk konsultasi yang lebih tepat
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Gunakan WhatsApp untuk respons yang lebih cepat
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Cek FAQ di bawah sebelum mengirim pertanyaan umum
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Untuk konsultasi mendalam, buat janji melalui form di atas
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-200">
                <h4 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                  <span className="mr-3">🚨</span>
                  Kontak Darurat
                </h4>
                <p className="text-sm text-red-600 mb-4">
                  Jika Anda menghadapi situasi parenting yang memerlukan bantuan segera:
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Chat Darurat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum seputar layanan ParentCare
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="mb-4">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-2xl text-orange-400 transition-transform duration-300 ${faq.isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </button>
                
                {faq.isOpen && (
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg mt-2 p-6 border-l-4 border-orange-400">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Tidak menemukan jawaban yang Anda cari?
            </p>
            <a
              href="#contact-form"
              className="inline-block bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}