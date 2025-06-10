const ArticleCard = ({ title, date, content }: { title: string; date: string; content: string }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{date}</p>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
};

export default ArticleCard;