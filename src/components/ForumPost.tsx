const ForumPost = ({ question }: { question: string }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-gray-800">{question}</p>
        <input type="text" placeholder="Tulis jawaban..." className="w-full p-2 mt-2 border rounded" />
      </div>
    );
  };
  
  export default ForumPost;