import ArticleCard from '../../components/ArticleCard';

const articles = [
  { title: "Mengatasi Emosi Anak Tanpa Marah", date: "12 Jan 2024", content: "Strategi yang efektif untuk membantu orang tua..." },
  { title: "Marah", date: "12 Jan 2024", content: "Strategi yang efektif untuk membantu orang tua..." },
  { title: "Mengatasi Emosi Anak Tanpa Marah", date: "12 Jan 2024", content: "Strategi yang efektif untuk membantu orang tua..." },
];

export default function Artikel() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Artikel & Tips Parenting</h1>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </main>
  );
}