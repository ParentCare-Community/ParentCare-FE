import { useState } from 'react';

interface Answer {
  id: string;
  nama_lengkap: string;
  answer: string;
  created_at: string;
}

interface ForumPostProps {
  id: string;
  content: string;
  nama_lengkap: string;
  answers: Answer[];
  onAddAnswer: (postId: string, answer: string) => void;
}

const ForumPost = ({ id, content, nama_lengkap, answers, onAddAnswer }: ForumPostProps) => {
  const [answerText, setAnswerText] = useState('');

  const handleSubmit = () => {
    if (answerText.trim()) {
      onAddAnswer(id, answerText);
      setAnswerText('');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <p className="font-semibold">{nama_lengkap}</p>
      <p className="mb-2">{content}</p>

      <div className="mt-2">
        <input
          type="text"
          placeholder="Tulis jawaban..."
          className="border p-2 w-full rounded"
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
          onClick={handleSubmit}
        >
          Kirim
        </button>
      </div>

      {answers.length > 0 && (
        <div className="mt-3">
          <p className="text-sm font-bold">Jawaban:</p>
          {answers.map((a) => (
            <p key={a.id} className="text-sm ml-2 mt-1">- {a.nama_lengkap}: {a.answer}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForumPost;
