// src/app/parent-match/page.tsx
'use client';

import React, { useState } from 'react';
import ParentMatchQuiz from '../../components/ParentMatchQuiz';

const ParentMatchPage = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowQuiz(false)}
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-4 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Beranda
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Parent Match Quiz
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jawab 10 pertanyaan berikut untuk mendapatkan analisis gaya parenting Anda dan rekomendasi yang tepat
            </p>
          </div>

          {/* Quiz Component */}
          <ParentMatchQuiz />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Temukan Gaya 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                {" "}Parenting{" "}
              </span>
              Terbaik Anda
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dengan Parent Match, dapatkan pemahaman mendalam tentang gaya parenting Anda 
              melalui quiz interaktif dan rekomendasi yang dipersonalisasi untuk keluarga yang lebih harmonis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Mulai Quiz Sekarang
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-200">
                Pelajari Lebih Lanjut
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">10</div>
                <div className="text-gray-600">Pertanyaan Terarah</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">4</div>
                <div className="text-gray-600">Gaya Parenting</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
                <div className="text-gray-600">Tips Praktis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ParentMatchPage;