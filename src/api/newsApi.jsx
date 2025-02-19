import axios from "axios";

const API_KEY = "0350d57aaedc4f1b8778d69b1b2e38cf";
const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const searchNews = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error searching news:", error);
    return [];
  }
};
