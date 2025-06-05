'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log('Password reset email sent to:', email);
    }, 2000);
  };

  const handleResend = () => {
    setIsSubmitted(false);
    setEmail('');
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
              {!isSubmitted ? (
                <>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, #FFBFA3 0%, #FFF6A3 100%)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Lupa Password?</h2>
                  <p className="text-gray-600">Jangan khawatir, kami akan membantu Anda</p>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, #FFBFA3 0%, #FFF6A3 100%)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Email Terkirim!</h2>
                  <p className="text-gray-600">Cek email Anda untuk reset password</p>
                </>
              )}
            </div>

            {/* Content */}
            {!isSubmitted ? (
              <>
                {/* Instructions */}
                <div className="text-center mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Masukkan alamat email yang terdaftar pada akun Anda. 
                    Kami akan mengirimkan link untuk reset password ke email tersebut.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 px-4 rounded-lg font-semibold focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg text-white ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'hover:opacity-90'
                    }`}
                    style={!isLoading ? { background: 'linear-gradient(135deg, #FFBFA3 0%, #FFF6A3 100%)' } : {}}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim Email...
                      </div>
                    ) : (
                      'Kirim Link Reset Password'
                    )}
                  </button>
                </form>

                {/* Back to Login */}
                <div className="text-center pt-6 border-t border-gray-100 mt-6">
                  <Link 
                    href="/auth/login" 
                    className="inline-flex items-center text-sm font-medium hover:underline transition-colors duration-200"
                    style={{ color: '#FFBFA3' }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Kembali ke Login
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Success Message */}
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-green-700 text-sm font-medium text-center">
                      Email reset password berhasil dikirim!
                    </p>
                  </div>

                  <div className="text-gray-600 text-sm space-y-2 text-center">
                    <p>
                      Kami telah mengirimkan link reset password ke:
                    </p>
                    <p className="font-semibold text-gray-800">{email}</p>
                    <p>
                      Silakan cek inbox email Anda dan klik link yang diberikan untuk reset password.
                    </p>
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                    <h4 className="font-semibold text-blue-800 mb-2">Tips:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Cek folder spam/junk jika email tidak masuk</li>
                      <li>• Link akan expired dalam 24 jam</li>
                      <li>• Gunakan link sesegera mungkin</li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleResend}
                      className="w-full text-white py-3 px-4 rounded-lg font-semibold focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #FFBFA3 0%, #FFF6A3 100%)' }}
                    >
                      Kirim Ulang Email
                    </button>
                    
                    <Link 
                      href="/auth/login"
                      className="block w-full text-center bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 transition-all duration-200"
                    >
                      Kembali ke Login
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Additional Help */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Masih mengalami masalah? {' '}
              <Link 
                href="/contact" 
                className="font-medium hover:underline"
                style={{ color: '#FFBFA3' }}
              >
                Hubungi Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}