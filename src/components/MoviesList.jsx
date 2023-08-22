import moviesData from "../movies-data.json";
import { useState } from 'react';
import './MoviesList.css';


function MoviesList() {
    const [movies, setMovies] = useState(moviesData);

    const [doIWantToDisplayMovies, setdoIWantToDisplayMovies] = useState(false);

    function handleClick(movieId) {
        console.log(movieId);
        const filteredMovies = movies.filter((movie) => {
            console.log("Checking the movie ID", movie._id);
            console.log("Comparing it to the argument", movieId);
            return movie._id !== movieId
        })

        setMovies(filteredMovies);
    }

    if (doIWantToDisplayMovies) {
        return (
            <div className="movies-container">
                <h2>Movies List</h2>
                <button onClick={() => setdoIWantToDisplayMovies(false)}>Hide movies</button>
                {movies.map((movie) => (
                    <div className="movie-card" key={movie._id}>
                        <h3>{movie.title}</h3>
                        <p>Director: {movie.director}</p>
                        <p>Rating: {movie.IMDBRating}</p>
                        <p>{movie._id}</p>
                        {movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars!</p>}
                        <button onClick={() => handleClick(movie._id)}>Delete</button>
                    </div>
                )
                )}

            </div>
        )
    } else {
        return (
            <>
                <h1>There is nothing to see here</h1>
                <button onClick={() => setdoIWantToDisplayMovies(true)}>DISPLAY MOVIES</button>
            </>
        )
    }
}

export default MoviesList