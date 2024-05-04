import React, { useState } from "react";
import MoviesList from "./MoviesList.jsx";
import GenreFilter from "./GenreFilter.jsx";
import data from "../data/data.js";

function App() {
  const [filteredGenre, setFilteredGenre] = useState(null);

  const handleGenreChange = (genre) => {
    setFilteredGenre(genre);
  };

  const filteredMovies = filteredGenre
    ? data.filter((movie) => movie.genre === filteredGenre)
    : data;

  return (
    <main className="mx-auto max-w-4xl">
      <header>
        <h1 className="m-4 text-center text-3xl font-bold">
          Top 15 Movies of All Time
        </h1>
      </header>
      <nav>
        <GenreFilter onGenreChange={handleGenreChange} />
      </nav>
      <section>
        <MoviesList movies={filteredMovies} />
      </section>
    </main>
  );
}

export default App;
