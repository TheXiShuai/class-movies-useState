import moviesData from "../movies-data.json";
import { useState } from 'react';
import './MoviesList.css';


function MoviesList() {
    // The moviesData array is passed as initial value to the useState hook
    const [movies, setMovies] = useState(moviesData);

    // The state is used to decide if we want to display the movies or not
    const [doIWantToDisplayMovies, setdoIWantToDisplayMovies] = useState(false);

    function handleClick(movieId) {
        // Double check that the function is called when we click on the button and that the movie ID is correct
        console.log(movieId);

        // the filter method returns a new array with the elements that pass the condition
        const filteredMovies = movies.filter((movie) => {
            // Double check that the function is called for each movie and that the movie ID is correct
            console.log("Checking the movie ID", movie._id);
            // I want also to see the movie ID that I pass as argument
            console.log("Comparing it to the argument", movieId);
            // The condition is that the movie ID is different from the one that I pass as argument
            // If the condition is true, the movie is kept in the new array, if not, it's not included
            return movie._id !== movieId
        })

        setMovies(filteredMovies);
    }

    if (doIWantToDisplayMovies) {
        return (
            <div className="movies-container">
                <h2>Movies List</h2>
                {/* 
                This button will change the state to false, so the component will be re-rendered and the movies will be hidden
                 */}
                <button onClick={() => setdoIWantToDisplayMovies(false)}>Hide movies</button>
                {movies.map((movie) => (
                    <div className="movie-card" key={movie._id}>
                        <h3>{movie.title}</h3>
                        <p>Director: {movie.director}</p>
                        <p>Rating: {movie.IMDBRating}</p>
                        <p>{movie._id}</p>
                        {/* 
                        The next line is a ternary operator. It's a short way to write an if/else statement.
                         */}
                        {movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars!</p>}
                        {/* 
                        The click handler is a function that is defined above. It's a good practice to define the function before using it.
                        As argument, we pass the movie ID. We already have this information in the movie object, so we can use it.
                         */}
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
                {/* 
                When we click on the button, we change the state to true, so the component will be re-rendered and the movies will be displayed
                 */}
                <button onClick={() => setdoIWantToDisplayMovies(true)}>DISPLAY MOVIES</button>
            </>
        )
    }
}

export default MoviesList