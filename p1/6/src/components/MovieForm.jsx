import { useReducer, useState } from "react";
import "./MovieForm.css";

const initialState = {
  movies: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return { movies: [...state.movies, action.payload] };
    default:
      return state;
  }
}

const MovieForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");

  const [errorMessages, setErrorMessages] = useState({
    title: "",
    year: "",
    director: "",
    genre: ""
  });

  const submitForm = (e) => {
    e.preventDefault();

    const errors = { title: "", year: "", director: "", genre: "" };
    let isValid = true;
    const currentYear = new Date().getFullYear();

    if (!title.trim()) {
      errors.title = "Title is required";
      isValid = false;
    }

    const yearNum = parseInt(year);
    if (!year) {
      errors.year = "Year is required";
      isValid = false;
    } else if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear) {
      errors.year = `Year must be between 1900 and ${currentYear}`;
      isValid = false;
    }

    const nameParts = director.trim().split(" ").filter((p) => p.length > 0);
    if (!director.trim()) {
      errors.director = "Director is required";
      isValid = false;
    } else if (nameParts.length < 2) {
      errors.director = "Director must include first and last name";
      isValid = false;
    }

    if (!genre.trim()) {
      errors.genre = "Genre is required";
      isValid = false;
    } else if (genre.trim().length < 5) {
      errors.genre = "Genre must be at least 5 characters long";
      isValid = false;
    }

    setErrorMessages(errors);

    if (isValid) {
      dispatch({
        type: "ADD_MOVIE",
        payload: {
          title,
          year: yearNum,
          director,
          genre
        }
      });

      setTitle("");
      setYear("");
      setDirector("");
      setGenre("");
    }
  };

  return (
    <div className="movie-form-container">
      <h1>Add Movie</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          {errorMessages.title && <p className="error-message">{errorMessages.title}</p>}
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={errorMessages.title ? "error" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          {errorMessages.year && <p className="error-message">{errorMessages.year}</p>}
          <input
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={errorMessages.year ? "error" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="director">Director</label>
          {errorMessages.director && <p className="error-message">{errorMessages.director}</p>}
          <input
            type="text"
            id="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className={errorMessages.director ? "error" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          {errorMessages.genre && <p className="error-message">{errorMessages.genre}</p>}
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className={errorMessages.genre ? "error" : ""}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Movie
        </button>
      </form>

      <h2 className="movieslist">Movies List</h2>
      <ul>
        {state.movies.map((movie, index) => (
          <li className="moviesli" key={index}>
            {movie.title} ({movie.year}) - {movie.director} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieForm;
