const NewsCard = ({ article }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
          <p className="text-sm text-gray-600">{article.description || "No description available."}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-blue-500 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default NewsCard;
  