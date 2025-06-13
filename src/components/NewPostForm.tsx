import React, { useState } from "react";

type NewPostFormProps = {
  onAddPost: (post: { topic: string; content: string }) => void;
};

export default function NewPostForm({ onAddPost }: NewPostFormProps) {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic || !content) {
      alert("Topic dan konten tidak boleh kosong!");
      return;
    }
    onAddPost({ topic, content });
    setTopic("");
    setContent("");
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Buat Post Baru</h2>
      <input
        type="text"
        placeholder="Topik"
        className="border p-2 w-full rounded mb-2"
        value={topic}
        onChange={handleTopicChange}
      />
      <textarea
        placeholder="Isi post"
        className="border p-2 w-full rounded mb-2"
        value={content}
        onChange={handleContentChange}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Kirim Post
      </button>
    </form>
  );
}
