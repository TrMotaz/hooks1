import React from 'react';
import MovieCard from './MovieCard';

function MovieList({movieList}) {
    return (
        <div className="disp">
            {movieList.map((obj,indice) => <MovieCard indice={obj.id} movie={obj} /> )};

        </div>

    )
}

export default MovieList
