'use client';

import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    weight: {
      authoritative: number;
      permissive: number;
      democratic: number;
      neglectful: number;
    };
  }[];
}

interface QuizResult {
  parentingStyle: string;
  description: string;
  recommendations: string[];
  tips: string[];
}

const ParentMatchQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Ketika anak Anda melakukan kesalahan, bagaimana respons Anda?",
      options: [
        {
          text: "Langsung memberikan hukuman tegas tanpa diskusi",
          value: "strict",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        },
        {
          text: "Menjelaskan kesalahan dan memberikan konsekuensi yang sesuai",
          value: "balanced",
          weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Membiarkan saja karena anak akan belajar sendiri",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Tidak terlalu peduli dan biarkan berlalu",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    },
    {
      id: 2,
      question: "Bagaimana Anda menetapkan aturan di rumah?",
      options: [
        {
          text: "Saya yang menentukan semua aturan tanpa input dari anak",
          value: "authoritarian",
          weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
        },
        {
          text: "Kami berdiskusi bersama untuk membuat aturan yang fair",
          value: "democratic",
          weight: { authoritative: 0, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Tidak ada aturan khusus, anak bebas melakukan apa saja",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Jarang memikirkan tentang aturan rumah",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    },
    {
      id: 3,
      question: "Ketika anak menunjukkan prestasi, bagaimana cara Anda merespons?",
      options: [
        {
          text: "Memberikan pujian berlebihan untuk segala hal",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Mengapresiasi usaha dan memberikan feedback konstruktif",
          value: "balanced",
          weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Mengatakan 'bagus' sekilas lalu melanjutkan aktivitas lain",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        },
        {
          text: "Menekankan bahwa ini adalah kewajiban, bukan prestasi",
          value: "authoritarian",
          weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
        }
      ]
    },
    {
      id: 4,
      question: "Bagaimana Anda menangani konflik dengan anak?",
      options: [
        {
          text: "Mendengarkan perspektif anak dan mencari solusi bersama",
          value: "democratic",
          weight: { authoritative: 0, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Menghindari konflik dengan memberikan apa yang diminta anak",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Menekankan otoritas saya sebagai orang tua",
          value: "authoritarian",
          weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
        },
        {
          text: "Berusaha menghindari atau mengabaikan konflik",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    },
    {
      id: 5,
      question: "Seberapa sering Anda menghabiskan waktu berkualitas dengan anak?",
      options: [
        {
          text: "Setiap hari dengan aktivitas yang terstruktur",
          value: "involved",
          weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Sering, tapi lebih banyak bermain tanpa aturan",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Sesekali saja ketika ada waktu luang",
          value: "limited",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        },
        {
          text: "Jarang, karena sibuk dengan pekerjaan/aktivitas lain",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    },
    {
      id: 6,
      question: "Bagaimana pendekatan Anda terhadap pendidikan anak?",
      options: [
        {
          text: "Menyeimbangkan akademis dan pengembangan karakter",
          value: "balanced",
          weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Fokus utama pada prestasi akademis",
          value: "academic",
          weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
        },
        {
          text: "Membiarkan anak belajar sesuai minatnya saja",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Tidak terlalu ikut campur dalam pendidikan anak",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    },
    {
      id: 7,
      question: "Ketika anak ingin mengambil keputusan penting, apa yang Anda lakukan?",
      options: [
        {
          text: "Membimbing anak untuk mempertimbangkan pro dan kontra",
          value: "guidance",
          weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Memutuskan sendiri apa yang terbaik untuk anak",
          value: "control",
          weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
        },
        {
          text: "Membiarkan anak memutuskan sendiri tanpa bimbingan",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Tidak terlalu peduli dengan keputusan anak",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    },
    {
      id: 8,
      question: "Bagaimana cara Anda mengomunikasikan harapan kepada anak?",
      options: [
        {
          text: "Menjelaskan dengan jelas dan memberikan alasan",
          value: "clear",
          weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Menyampaikan dengan tegas tanpa perlu penjelasan",
          value: "authoritarian",
          weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
        },
        {
          text: "Tidak memiliki harapan khusus yang jelas",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Jarang mengomunikasikan harapan secara eksplisit",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    },
    {
      id: 9,
      question: "Bagaimana Anda menunjukkan kasih sayang kepada anak?",
      options: [
        {
          text: "Melalui kata-kata positif dan pelukan secara konsisten",
          value: "affectionate",
          weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Lebih banyak melalui tindakan daripada kata-kata",
          value: "action",
          weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
        },
        {
          text: "Dengan memberikan kebebasan dan kemudahan",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Tidak terlalu ekspresif dalam menunjukkan kasih sayang",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    },
    {
      id: 10,
      question: "Bagaimana Anda mempersiapkan anak untuk masa depan?",
      options: [
        {
          text: "Mengajarkan keterampilan hidup dan nilai-nilai penting",
          value: "comprehensive",
          weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
        },
        {
          text: "Fokus pada disiplin dan kepatuhan",
          value: "discipline",
          weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
        },
        {
          text: "Membiarkan anak belajar dari pengalaman sendiri",
          value: "permissive",
          weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
        },
        {
          text: "Tidak memikirkan persiapan khusus untuk masa depan",
          value: "neglect",
          weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
        }
      ]
    }
  ];

  const calculateResult = (): QuizResult => {
    const scores = {
      authoritative: 0,
      permissive: 0,
      democratic: 0,
      neglectful: 0
    };

    // Calculate scores based on answers
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const selectedOption = question?.options.find(opt => opt.value === answer);
      
      if (selectedOption) {
        scores.authoritative += selectedOption.weight.authoritative;
        scores.permissive += selectedOption.weight.permissive;
        scores.democratic += selectedOption.weight.democratic;
        scores.neglectful += selectedOption.weight.neglectful;
      }
    });

    // Determine dominant parenting style
    const maxScore = Math.max(...Object.values(scores));
    const dominantStyle = Object.keys(scores).find(
      key => scores[key as keyof typeof scores] === maxScore
    ) as keyof typeof scores;

    // Return result based on dominant style
    const results: Record<keyof typeof scores, QuizResult> = {
      democratic: {
        parentingStyle: "Democratic Parenting (Authoritative)",
        description: "Anda cenderung menggunakan gaya parenting demokratis yang seimbang. Anda memberikan struktur dan aturan yang jelas namun tetap menghargai pendapat anak dan melibatkan mereka dalam pengambilan keputusan.",
        recommendations: [
          "Terus pertahankan komunikasi dua arah dengan anak",
          "Berikan penjelasan yang jelas tentang aturan dan konsekuensi",
          "Dorong anak untuk mengekspresikan pendapat mereka",
          "Tunjukkan konsistensi dalam menerapkan aturan"
        ],
        tips: [
          "Buat rutina keluarga yang melibatkan diskusi terbuka",
          "Rayakan pencapaian anak dengan cara yang bermakna",
          "Ajarkan anak untuk bertanggung jawab atas pilihan mereka",
          "Berikan dukungan emosional yang konsisten"
        ]
      },
      authoritative: {
        parentingStyle: "Authoritative Parenting",
        description: "Anda memiliki pendekatan parenting yang tegas namun penuh kasih. Anda menetapkan standar tinggi untuk anak sambil memberikan dukungan dan kehangatan yang mereka butuhkan.",
        recommendations: [
          "Pastikan aturan yang ditetapkan masuk akal dan dapat dijelaskan",
          "Berikan lebih banyak ruang untuk input anak dalam keputusan keluarga",
          "Fokus pada pengembangan karakter selain prestasi akademis",
          "Tunjukkan empati ketika anak menghadapi kesulitan"
        ],
        tips: [
          "Luangkan waktu untuk mendengarkan perspektif anak",
          "Berikan pilihan dalam hal-hal yang tidak prinsipil",
          "Ajarkan problem-solving skills kepada anak",
          "Tunjukkan apresiasi terhadap usaha, bukan hanya hasil"
        ]
      },
      permissive: {
        parentingStyle: "Permissive Parenting",
        description: "Anda cenderung sangat mendukung dan penuh kasih sayang, namun mungkin kurang dalam memberikan struktur dan batasan yang jelas. Anak mendapat banyak kebebasan namun mungkin membutuhkan lebih banyak bimbingan.",
        recommendations: [
          "Tetapkan aturan dan batasan yang jelas namun wajar",
          "Konsisten dalam menerapkan konsekuensi",
          "Berikan struktur dalam rutinitas harian anak",
          "Ajarkan anak tentang tanggung jawab dan akuntabilitas"
        ],
        tips: [
          "Buat jadwal dan rutinitas yang dapat diprediksi",
          "Berikan pilihan terbatas daripada kebebasan penuh",
          "Diskusikan konsekuensi sebelum menetapkan aturan",
          "Balance antara mendukung dan membimbing"
        ]
      },
      neglectful: {
        parentingStyle: "Perlu Peningkatan Keterlibatan",
        description: "Hasil quiz menunjukkan bahwa Anda mungkin perlu meningkatkan keterlibatan dan perhatian dalam pengasuhan anak. Setiap anak membutuhkan bimbingan, dukungan, dan perhatian yang konsisten dari orang tua.",
        recommendations: [
          "Luangkan waktu berkualitas setiap hari dengan anak",
          "Tunjukkan minat aktif terhadap aktivitas dan perasaan anak",
          "Tetapkan rutinitas dan aturan yang konsisten",
          "Berikan dukungan emosional dan fisik yang dibutuhkan anak"
        ],
        tips: [
          "Mulai dengan 15-30 menit waktu khusus setiap hari",
          "Tanyakan tentang hari anak dan dengarkan dengan aktif",
          "Libatkan diri dalam pendidikan dan aktivitas anak",
          "Cari dukungan parenting jika merasa kewalahan"
        ]
      }
    };

    return results[dominantStyle];
  };

  const handleAnswerSelect = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsLoading(true);
      // Simulate processing time
      setTimeout(() => {
        setIsLoading(false);
        setShowResult(true);
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setIsLoading(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion]?.id];
  const result = showResult ? calculateResult() : null;

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Menganalisis Jawaban Anda...
          </h3>
          <p className="text-gray-600">
            Mohon tunggu sebentar, kami sedang memproses hasil quiz Anda
          </p>
        </div>
      </div>
    );
  }

  if (showResult && result) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hasil Parent Match Anda</h2>
          <p className="text-gray-600">Berikut adalah analisis gaya parenting Anda</p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">
            {result.parentingStyle}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {result.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Rekomendasi Utama
            </h4>
            <ul className="space-y-3">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-200 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Tips Praktis
            </h4>
            <ul className="space-y-3">
              {result.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-200 text-green-800 text-sm font-semibold px-2 py-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleRestart}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0V9a8 8 0 1115.356 2M15 15v-2a4 4 0 00-4-4H9m0 0l2-2m-2 2l2 2" />
            </svg>
            Ulangi Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Pertanyaan {currentQuestion + 1} dari {questions.length}
          </span>
          <span className="text-sm font-medium text-orange-600">
            {Math.round(progress)}% selesai
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
          {questions[currentQuestion].question}
        </h3>

        {/* Options */}
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option.value)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                currentAnswer === option.value
                  ? 'border-orange-500 bg-orange-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-orange-300'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors duration-200 ${
                  currentAnswer === option.value
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-gray-300'
                }`}>
                  {currentAnswer === option.value && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-800 font-medium">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
            currentQuestion === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Sebelumnya
        </button>

        <button
          onClick={handleNext}
          disabled={!currentAnswer}
          className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
            !currentAnswer
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          {currentQuestion === questions.length - 1 ? 'Lihat Hasil' : 'Selanjutnya'}
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ParentMatchQuiz;