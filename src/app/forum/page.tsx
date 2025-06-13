"use client";

import { useEffect, useState } from "react";
import ForumPost from "../../components/ForumPost";
import NewPostForm from "../../components/NewPostForm";
import axios from "axios";
import { useAuth } from "../../components/hook/useAuth";

interface Answer {
  id: string;
  nama_lengkap: string;
  answer: string;
  created_at: string;
}

interface Post {
  id: string;
  nama_lengkap: string;
  content: string;
  topic?: string;
  created_at: string;
  forum_answers: Answer[];
}

export default function ForumList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const { user, loading } = useAuth();

  const fetchPosts = async () => {
    try {
      const res = await axios.get<Post[]>("http://localhost:4000/api/forum", {
        withCredentials: true, // penting untuk kirim cookie
      });
      setPosts(res.data);
    } catch (error) {
      console.error("Gagal mengambil data post", error);
    }
  };

  useEffect(() => {
    if (!loading) {
      if (!user) {
        alert("Anda belum login");
        window.location.href = "/auth/login";
      } else {
        fetchPosts();
      }
    }
  }, [loading, user]);

  const handleAddPost = async (post: { topic: string; content: string }) => {
    const { topic, content } = post;

    if (!user) return alert("User belum login");

    try {
      await axios.post(
        "http://localhost:4000/api/forum",
        {
          nama_lengkap: user.nama_lengkap,
          topic,
          content,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${user.token}`, // pastikan ada token
          },
        }
      );

      fetchPosts();
    } catch (error) {
      console.error("Gagal membuat post", error);
      alert("Gagal membuat post, mungkin token tidak valid");
    }
  };

  const handleAddAnswer = async (postId: string, answer: string) => {
    if (!user) return alert("User belum login");

    try {
      await axios.post(
        `http://localhost:4000/api/forum/${postId}/answer`,
        {
          answer,
        },
        { withCredentials: true }
      );
      fetchPosts();
    } catch (error) {
      console.error("Gagal menambahkan jawaban", error);
      alert("Gagal menambahkan jawaban");
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Forum Diskusi</h1>

      <NewPostForm onAddPost={handleAddPost} />

      <input
        type="text"
        placeholder="Cari post..."
        className="border p-2 w-full rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada post ditemukan.</p>
      ) : (
        filteredPosts.map((post) => (
          <ForumPost
            key={post.id}
            id={post.id}
            content={post.content}
            nama_lengkap={post.nama_lengkap}
            answers={post.forum_answers || []}
            onAddAnswer={handleAddAnswer}
          />
        ))
      )}
    </div>
  );
}
