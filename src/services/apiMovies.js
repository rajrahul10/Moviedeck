const BASE_URL = import.meta.VITE_BASE_URL;
const API_KEY = import.meta.VITE_API_KEY;

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();

  return await data.results;
}
