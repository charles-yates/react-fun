import React from 'react';
import PropTypes from 'prop-types';

const MovieList = props => {
    return (
        <div className="movie-list">
            { props.movies === undefined || props.movies.length === 0 ? (
                <div>No movies found.</div>
            ) : (
                <div className="list-wrapper">
                    {props.movies.map(movie => {
                        return (
                            <div key={movie.id} className="movie-card">
                                <span className="title">{movie.title} ({movie.year})</span>
                                <span>{movie.length/60}h {movie.length%60}min {movie.rating}*</span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MovieList;