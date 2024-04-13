import { useState, useEffect } from "react";
import './App.css'
import SearchIcon from "./search.svg"
import MovieCard from "./Moviecard";

const API_URL = "http://www.omdbapi.com?apikey=82319fcc";

function App() {
  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("HArry Potter");
  }, []);


  return (
    <>
      <div className="app">
        <h1>MovieSearch</h1>

        <div className="search">
          <input placeholder="Search for Movies"
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

          <img src={SearchIcon} alt="search" onClick={() => 
            searchMovies(serachTerm)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : 
        (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

      </div>
    </>
  )
}

export default App