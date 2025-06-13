'use client';

import React, { useState } from 'react';

type LabelKey = 'authoritative' | 'permissive' | 'democratic' | 'neglectful' | 'mixed';

interface QuizResult {
  parentingStyle: string;
  description: string;
  recommendations: string[];
  tips: string[];
}
interface Weight {
  authoritative: number;
  permissive: number;
  democratic: number;
  neglectful: number;
}
interface Question {
id: number;
question: string;
options: {
  text: string;
  value: string;
  score: number;
  weight: Weight;
}[];}
const questions: Question[] = [
  {
    id: 1,
    question: "Ketika anak Anda melakukan kesalahan, bagaimana respons Anda?",
    options: [
      {
        text: "Langsung memberikan hukuman tegas tanpa diskusi",
        value: "strict",
        score: 1,
        weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
      },
      {
        text: "Menjelaskan kesalahan dan memberikan konsekuensi yang sesuai",
        value: "balanced",
        score: 5,
        weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Membiarkan saja karena anak akan belajar sendiri",
        value: "permissive",
        score: 3,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Tidak terlalu peduli dan biarkan berlalu",
        value: "neglect",
        score: 1,
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
        score: 2,
        weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
      },
      {
        text: "Kami berdiskusi bersama untuk membuat aturan yang fair",
        value: "democratic",
        score: 5,
        weight: { authoritative: 0, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Tidak ada aturan khusus, anak bebas melakukan apa saja",
        value: "permissive",
        score: 3,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Jarang memikirkan tentang aturan rumah",
        value: "neglect",
        score: 1,
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
        score: 3,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Mengapresiasi usaha dan memberikan feedback konstruktif",
        value: "balanced",
        score: 5,
        weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Mengatakan 'bagus' sekilas lalu melanjutkan aktivitas lain",
        value: "neglect",
        score: 1,
        weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
      },
      {
        text: "Menekankan bahwa ini adalah kewajiban, bukan prestasi",
        value: "authoritarian",
        score: 2,
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
        score: 5,
        weight: { authoritative: 0, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Menghindari konflik dengan memberikan apa yang diminta anak",
        value: "permissive",
        score: 3,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Menekankan otoritas saya sebagai orang tua",
        value: "authoritarian",
        score: 2,
        weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
      },
      {
        text: "Berusaha menghindari atau mengabaikan konflik",
        value: "neglect",
        score: 1,
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
        score: 5,
        weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Sering, tapi lebih banyak bermain tanpa aturan",
        value: "permissive",
        score: 3,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Sesekali saja ketika ada waktu luang",
        value: "limited",
        score: 2,
        weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
      },
      {
        text: "Jarang, karena sibuk dengan pekerjaan/aktivitas lain",
        value: "neglect",
        score: 1,
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
        score: 5,
        weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Fokus utama pada prestasi akademis",
        value: "academic",
        score: 4,
        weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
      },
      {
        text: "Membiarkan anak belajar sesuai minatnya saja",
        value: "permissive",
        score: 3,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Tidak terlalu ikut campur dalam pendidikan anak",
        value: "neglect",
        score: 1,
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
        score: 5,
        weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Memutuskan sendiri apa yang terbaik untuk anak",
        value: "control",
        score: 3,
        weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
      },
      {
        text: "Membiarkan anak memutuskan sendiri tanpa bimbingan",
        value: "permissive",
        score: 2,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Tidak terlalu peduli dengan keputusan anak",
        value: "neglect",
        score: 1,
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
        score: 5,
        weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Menyampaikan dengan tegas tanpa perlu penjelasan",
        value: "authoritarian",
        score: 3,
        weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
      },
      {
        text: "Tidak memiliki harapan khusus yang jelas",
        value: "permissive",
        score: 2,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Jarang mengomunikasikan harapan secara eksplisit",
        value: "neglect",
        score: 1,
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
        score: 5,
        weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Lebih banyak melalui tindakan daripada kata-kata",
        value: "action",
        score: 4,
        weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
      },
      {
        text: "Dengan memberikan kebebasan dan kemudahan",
        value: "permissive",
        score: 2,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Tidak terlalu ekspresif dalam menunjukkan kasih sayang",
        value: "neglect",
        score: 1,
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
        score: 5,
        weight: { authoritative: 1, permissive: 0, democratic: 1, neglectful: 0 }
      },
      {
        text: "Fokus pada disiplin dan kepatuhan",
        value: "discipline",
        score: 4,
        weight: { authoritative: 1, permissive: 0, democratic: 0, neglectful: 0 }
      },
      {
        text: "Membiarkan anak belajar dari pengalaman sendiri",
        value: "permissive",
        score: 2,
        weight: { authoritative: 0, permissive: 1, democratic: 0, neglectful: 0 }
      },
      {
        text: "Tidak memikirkan persiapan khusus untuk masa depan",
        value: "neglect",
        score: 1,
        weight: { authoritative: 0, permissive: 0, democratic: 0, neglectful: 1 }
      }
    ]
  }
];

const resultTemplates: Record<LabelKey, QuizResult> = {
  authoritative: {
    parentingStyle: "Authoritative Parenting",
    description: "Anda memiliki pendekatan parenting yang tegas namun penuh kasih...",
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
    description: "Anda cenderung sangat mendukung dan penuh kasih sayang...",
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
  democratic: {
    parentingStyle: "Democratic Parenting (Authoritative)",
    description: "Anda cenderung menggunakan gaya parenting demokratis yang seimbang...",
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
  neglectful: {
    parentingStyle: "Perlu Peningkatan Keterlibatan",
    description: "Hasil quiz menunjukkan bahwa Anda mungkin perlu meningkatkan keterlibatan...",
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
  },
  mixed: {
  parentingStyle: "Gaya Campuran (Mixed Parenting)",
  description: "Hasil menunjukkan bahwa gaya parenting Anda merupakan gabungan dari beberapa pendekatan. Ini menunjukkan fleksibilitas dalam pengasuhan, namun penting untuk tetap konsisten dalam nilai dan batasan.",
  recommendations: [
    "Identifikasi gaya mana yang paling dominan dan evaluasi konsistensinya",
    "Pastikan anak tetap mendapatkan struktur yang stabil",
    "Refleksikan situasi mana yang memicu perubahan gaya parenting Anda",
    "Pertimbangkan untuk berdiskusi dengan profesional parenting jika perlu"
  ],
  tips: [
    "Buat jurnal pengasuhan untuk mengenali pola",
    "Libatkan pasangan atau keluarga dalam evaluasi gaya parenting",
    "Fokus pada kebutuhan emosional anak secara konsisten",
    "Gunakan pendekatan fleksibel namun tetap terstruktur"
  ]
}
};

const ParentMatchQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { value: string; weight: Weight; score: number }>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | {
    score: number[];
    label: string;
    description: string;
    recommendations: string[];
    tips: string[];
    parentingStyle: string;
  }>(null);

  const handleAnswerSelect = (value: string, weight: Weight) => {
    const score = Object.values(weight).reduce((a, b) => a + b, 0);
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: { value, weight, score } }));
  };

  const handleNextOrSubmit = async () => {
    const currentAns = answers[questions[currentQuestion].id];
    if (!currentAns) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      return;
    }

    setIsLoading(true);
    const finalScores = questions.map(q => answers[q.id]?.score ?? 0);
    try {
      const res = await fetch('http://localhost:4000/api/parentmatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scores: finalScores })
      });
      const data = await res.json();
      const rawLabel = data.label?.toLowerCase();

      if (['authoritative', 'permissive', 'democratic', 'neglectful', 'mixed'].includes(rawLabel)) {
        const labelKey = rawLabel as LabelKey;
        const template = resultTemplates[labelKey];
      setResult({
        score: data.score,
        label: data.label,
        ...template
      });
      } else {
  alert("Label tidak dikenali: " + rawLabel);
}
    } catch (e) {
      alert("Gagal memproses hasil: " + e);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevious = () => setCurrentQuestion(prev => Math.max(prev - 1, 0));
  const handleRestart = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
  };

  const currentAnswer = answers[questions[currentQuestion]?.id];

  if (isLoading) return <div className="text-center p-6">Menganalisis jawaban…</div>;

  if (result) {
  const totalScore = result.score.reduce((sum, val) => sum + val, 0);
  const normalizedScore = Math.round(((totalScore - 10) / 40) * 80 + 20);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Hasil Parent Match Anda</h2>
         <div className="mt-6 text-center">
  <p className="text-gray-500 text-sm mb-2">Skor Anda</p>
  <div className="inline-block bg-orange-100 rounded-full p-6 shadow-inner relative">
    <svg
      className="absolute -top-3 -left-3 w-6 h-6 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
    </svg>
    <p className="text-7xl font-extrabold text-orange-600">{normalizedScore}</p>
  </div>
  <p className="text-sm text-gray-500 mt-2 italic">
    (Skor dari 20 hingga 100)
  </p>
</div>

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
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <p className="text-gray-600 mb-2">Pertanyaan {currentQuestion + 1} dari {questions.length}</p>
      <div className="w-full bg-gray-200 h-2 rounded mb-4">
        <div className="h-2 bg-orange-500 rounded" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
      </div>
      <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h3>
      <div className="space-y-3 mb-6">
        {questions[currentQuestion].options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswerSelect(opt.value, opt.weight)} className={`w-full px-4 py-2 text-left border rounded ${currentAnswer?.value === opt.value ? 'bg-orange-100 border-orange-500' : 'hover:bg-gray-100'}`}>
            {opt.text}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={handlePrevious} disabled={currentQuestion === 0} className="px-4 py-2 bg-gray-300 text-white rounded disabled:opacity-50">Sebelumnya</button>
        <button onClick={handleNextOrSubmit} disabled={!currentAnswer} className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50">
          {currentQuestion === questions.length - 1 ? 'Lihat Hasil' : 'Selanjutnya'}
        </button>
      </div>
    </div>
  );
};

export default ParentMatchQuiz;