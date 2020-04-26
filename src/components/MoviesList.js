import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'


class MoviesList extends React.Component {
    state = {
        // default movies by search parameter "frozen"/>
        moviesList: ['tt1323045','tt2294629', 'tt4520988'],
        searchCriteria: ''
    };

    search = event => {
        event.preventDefault();
        axios.get(
                `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${
                    this.state.searchCriteria
                }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    this.setState({ moviesList: [] });
                    return;
                }

                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchCriteria: event.target.value
        });
    };

    render() {
        const { moviesList } = this.state;

        return (
            <div>
                <div className="search-title">Search by criteria</div>
                <form className="main-search" onSubmit={this.search}>
                    <input
                        placeholder="Search for a movie"
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        <i className="fa fa-search" />
                    </button>
                </form>
                <div className="search-results">
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                     
                        <MovieCard  movieID={movie} key={movie}   />
                       
                    ))
                ) : (
                    <p>
                        Couldn't find any movie.
                    </p>
                )}
                 </div>
            </div>
        );
    }
}

export default MoviesList