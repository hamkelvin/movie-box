import React from 'react';
import '../index.css';


const Movie = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <>
        <div onClick={() => selectMovie(movie)} className={"movie"}>
            <div className="movie-title" >
                {movie.poster_path &&
                <img data-testid="movie-poster" src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
                }
                <div className={"flex between movie-infos"} >
                    <h5 className={"movie-title"} data-testid= "movie-title">{movie.title}</h5>
                    <h5 className='rdate' data-testid= "movie-release-date">{movie.release_date}</h5>
                    {movie.vote_average ? <span className={"movie-voting"}>{movie.vote_average}</span> : null}
                    
                </div>
            </div>
        </div>
            
        </>
    );
};


export default Movie;