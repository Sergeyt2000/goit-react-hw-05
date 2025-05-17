import axios from "axios"

const API_KEY = "a7bf7e69f197ea30e80c521a52ea28a9";
const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2JmN2U2OWYxOTdlYTMwZTgwYzUyMWE1MmVhMjhhOSIsIm5iZiI6MS42MzA3NjI1Njc0MzI5OTk4ZSs5LCJzdWIiOiI2MTMzNzY0NzJjZGU5ODAwMmI2MzYzNzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CShP90oZehLKsLh0jbzwaQI_gue9yrEBLRHP9faDkZo";
const API_PATH = {
    trend: "/trending/movie/day?",
    movie: "/movie/",
    search: "/search/movie",
};
// const options = {
//   headers: {
//     Authorization: `Bearer ${ACCESS_KEY}`,
//   },
// };

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization: `Bearer ${ACCESS_KEY}`,
  accept: "application/json",
};

export const fetchTrendMovies = async () => {
  const response = await axios.get(API_PATH.trend, {
    params: {
      api_key: API_KEY,
    }    
  });
  return response.data;
};

export const fetchMoviesById = async (id) => {
  const response = await axios.get(API_PATH.movie + id, {
    params: {
      api_key: API_KEY,
    }
  });
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/credits?", {
    params: {
      api_key: API_KEY,
    }
  });
  return response.data;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/reviews?", {
    params: {
      api_key: API_KEY,
    }
  });
  return response.data;
};

export const fetchMovieSearch = async (query) => {
  const response = await axios.get(API_PATH.search, {
    params: {
      api_key: API_KEY,
      query,
    }
  });
  return response.data;
};