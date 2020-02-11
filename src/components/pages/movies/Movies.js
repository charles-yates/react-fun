import React, { Component, PropTypes } from 'react';
import api from '../../services/api';
import { MovieList } from '../../lists/movies';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        api.getMovies()
            .then(res => {
                const movies = res.body ? res.body.movies : []
                this.setState({
                    movies: movies
                })
            });
    }

    render() {
        return (
            <div className="movies-container">
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default Movies;