import { useEffect, useState } from "react";
import { getPopularMovies } from "./services/apiMovies";
import MovieCard from "./ui/MovieCard";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(function () {
    console.log(getPopularMovies());
    setPopularMovies(getPopularMovies());
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold">Moviedeck</h1>
      {/* {popularMovies.map((m) => (
        <MovieCard key={m.id} original_title={m.original_title} />
      ))} */}
      {popularMovies}
    </>
  );
}

export default App;
