import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { searchNews } from "../api/newsApi";
import NewsList from "../components/NewsList";

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await searchNews(category);
      setArticles(news);
    };
    getNews();
  }, [category]);

  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-bold my-4 text-center capitalize">{category} News</h2>
      <NewsList articles={articles} />
    </div>
  );
};

export default CategoryPage;
