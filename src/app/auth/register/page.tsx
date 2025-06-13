'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleGoogleRegister = () => {
    // Add Google registration logic here
    console.log('Google registration clicked');
  };
   const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Konfirmasi password tidak cocok');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          namaLengkap: formData.namaLengkap,
          email: formData.email,
          password: formData.password
        })
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || 'Registrasi gagal');
      } else {
        alert('Registrasi berhasil!');
        // Reset form
        setFormData({
          namaLengkap: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan koneksi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FFBFA3 0%, #FFF6A3 100%)' }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white rotate-45 opacity-20"></div>
        <div className="absolute top-32 left-32 w-3 h-3 bg-white rotate-45 opacity-30"></div>
        <div className="absolute top-40 left-16 w-2 h-2 bg-white rotate-45 opacity-25"></div>
        <div className="absolute bottom-32 right-20 w-5 h-5 bg-white rotate-45 opacity-20"></div>
        <div className="absolute bottom-20 right-32 w-3 h-3 bg-white rotate-45 opacity-30"></div>
        <div className="absolute bottom-48 right-16 w-2 h-2 bg-white rotate-45 opacity-25"></div>
        
        <div className="flex flex-col items-center justify-center w-full p-12 text-center">
          {/* Logo/Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="relative">
                {/* Heart with Cross */}
                <svg className="w-16 h-16 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                {/* Cross overlay */}
                <svg className="w-8 h-8 text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10S19.1 12 18 12H14V16C14 17.1 13.1 18 12 18S10 17.1 10 16V12H6C4.9 12 4 11.1 4 10S4.9 8 6 8H10V4C10 2.9 10.9 2 12 2Z"/>
                </svg>
              </div>
            </div>
            {/* Hand illustration */}
            <div className="absolute -bottom-4 -right-4">
              <svg className="w-20 h-20 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 5.5V18.5C23 20.43 21.43 22 19.5 22H4.5C2.57 22 1 20.43 1 18.5V5.5C1 3.57 2.57 2 4.5 2H19.5C21.43 2 23 3.57 23 5.5ZM20 5.5C20 5.22 19.78 5 19.5 5H4.5C4.22 5 4 5.22 4 5.5V18.5C4 18.78 4.22 19 4.5 19H19.5C19.78 19 20 18.78 20 18.5V5.5Z"/>
              </svg>
            </div>
          </div>
          
          {/* Brand Name */}
          <h1 className="text-4xl font-bold text-white mb-4">ParentCare</h1>
          
          {/* Tagline */}
          <p className="text-white text-lg opacity-90 max-w-md leading-relaxed">
            Discover the power of personalized health insights and seamless tracking with ParentCare
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign up</h2>
              <p className="text-gray-600">Daftarkan akun anda</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nama Lengkap */}
              <div>
                <input
                  type="text"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white py-3 px-4 rounded-lg font-semibold focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, #FFBFA3 0%, #FFF6A3 100%)'
                }}
              >
                Sign up
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or sign up with</span>
                </div>
              </div>

              {/* Google Login Button */}
              <button
                type="button"
                onClick={handleGoogleRegister}
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Daftar dengan Google
              </button>

              {/* Login Link */}
              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Sudah punya akun?{' '}
                  <Link 
                    href="/auth/login" 
                    className="font-medium hover:underline"
                    style={{ color: '#FFBFA3' }}
                  >
                    Masuk di sini
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}