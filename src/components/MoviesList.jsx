import React from "react";

function MoviesList({ movies }) {
  return (
    <>
      <h2 className="m-2 text-center text-xl font-semibold">List of movies</h2>
      <div className="table-wrapper">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-600">
              <th className="bg-green px-4 py-2 text-left">Title</th>
              <th className="bg-green px-4 py-2 text-left">Genre</th>
              <th className="bg-green px-4 py-2 text-left">Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="px-4 py-2">{movie.title}</td>
                <td className="px-4 py-2">{movie.genre}</td>
                <td className="px-4 py-2">{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MoviesList;
