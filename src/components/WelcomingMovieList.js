import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

class WelcomingMoviesList extends React.Component {
    state = {
        moviesList: [],
        searchCriteria: 'game'
    };

    componentDidMount(){ 
        axios
            .get(
                `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${
                    this.state.searchCriteria
                }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        const { moviesList } = this.state;

        return (
            <div>
                <div className="search-results">
                {
                    moviesList.map(movie => (
                        <MovieCard movieID={movie} key={movie} />
                    ))
                }
                 </div>
            </div>
        );
    }
}

export default WelcomingMoviesList