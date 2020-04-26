import React, { Component } from 'react';
import MovieCard from './MovieCard'

class MoviesWishList extends React.Component {
    state = {
        moviesList: {}
    };

    componentDidMount() {
        const moviesList = JSON.parse(localStorage.getItem('moviesList'));
        if(moviesList !== null){
        moviesList.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });      
            }   
    };

    render() {
        const { moviesList } = this.state;

        return (
            <div>
                <div className="wishlist-results">
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        <MovieCard  key={movie.imdbID} movieID={movie.imdbID} />                     
                    ))
                ) : (
                    <p>
                        You don't have any posts.
                    </p>
                )}
                 </div>
            </div>
        );
    }
}

export default MoviesWishList