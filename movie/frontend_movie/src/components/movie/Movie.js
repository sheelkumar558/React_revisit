import React, { useEffect, useState } from "react";
import axios from "axios";
import "./movie.css";
export const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("https://datamovie.herokuapp.com/movie").then((res) => {
      setMovies(res.data.movie);
    });
  }, []);
  console.log(movies);
  return (
    <div className="main">
      {movies.map((e, index) => {
        return (
          <div key={index} className="main-div">
            <img src={e.Poster} alt="poster" />
            <p>
              <span>Movie</span> - {e.Name}
            </p>
            <div className="actor">
              <p>
                {e.actorId.map((n) => (
                  <p key={n.id}>
                    <span>Actor</span> - {n.Name}
                  </p>
                ))}
              </p>
              <p>
                <span>Producer</span> - {e.producerId.Name}
              </p>
            </div>
            <div className="plot">
              <p>
                <span>Release Date</span> - {e.Year_of_release}
              </p>
              <p>
                <span>Plot No.</span> - {e.Plot}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
