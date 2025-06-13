import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    layanan: [
      { name: 'Parent Match Quiz', href: '/parent-match' },
      { name: 'Artikel Parenting', href: '/artikel' },
      { name: 'Forum Diskusi', href: '/forum' }
    ],
    tentang: [
      { name: 'Tentang Kami', href: '/about' },
      { name: 'FAQ', href: '/faq' }
    ],
    bantuan: [
      { name: 'Kontak Kami', href: '/contact' },
      { name: 'Syarat & Ketentuan', href: '/terms' },
      { name: 'Kebijakan Privasi', href: '/privacy' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/parentcare', icon: '📷' },
    { name: 'Facebook', href: 'https://facebook.com/parentcare', icon: '📘' },
    { name: 'Twitter', href: 'https://twitter.com/parentcare', icon: '🐦' },
    { name: 'YouTube', href: 'https://youtube.com/parentcare', icon: '📺' },
    { name: 'WhatsApp', href: 'https://wa.me/62812345678', icon: '💬' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                ParentCare
              </h2>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Platform digital yang mendukung perjalanan parenting Anda dengan panduan ilmiah, 
                komunitas yang supportif, dan tools interaktif untuk menciptakan keluarga yang bahagia.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">📧</span>
                <span className="text-gray-300">info@parentcare.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">📞</span>
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">📍</span>
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tentang */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Tentang</h4>
            <ul className="space-y-3">
              {footerLinks.tentang.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.bantuan.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Stats */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">Ikuti Kami</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-400">15K+</div>
                <div className="text-sm text-gray-300">Orang Tua</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">500+</div>
                <div className="text-sm text-gray-300">Artikel</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-sm text-gray-300">Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ParentCare. Semua hak dilindungi undang-undang.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;