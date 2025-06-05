import ForumPost from '../../components/ForumPost';

const posts = [
  { question: "Anak 3 tahun susah tidur malam, ada yang pernah ngalami?" },
  { question: "Anak 3 tahun susah tidur malam, ada yang pernah ngalami?" },
  { question: "Anak 3 tahun susah tidur malam, ada yang pernah ngalami?" },
];

export default function Forum() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Forum Komunitas</h1>
      <input type="text" placeholder="Cari diskusi..." className="w-full p-2 mb-4 border rounded" />
      {posts.map((post, index) => (
        <ForumPost key={index} {...post} />
      ))}
    </main>
  );
}