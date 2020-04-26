import React, { Component } from 'react';
import axios from 'axios';


class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.addToWishlist = this.addToWishlist.bind(this);
        this.deleteFromWishList = this.deleteFromWishList.bind(this);
        this.state = {
            movieData: {},
            isAdded: false,
            textAdd: 'Add to wishlist'
        };
      }
    
      addToWishlist(){
        this.setState({ isAdded: true, textAdd: 'Added'});
        let moviesList  = JSON.parse(localStorage.getItem('moviesList'));
        if(moviesList !== null){
            if(moviesList.find(item => item.imdbID == this.state.movieData.imdbID) == null){
                moviesList.push(this.state.movieData);
                localStorage.setItem('moviesList',JSON.stringify(moviesList));
            }
            
        } else {
            moviesList = [];
            moviesList.push(this.state.movieData);
            localStorage.setItem('moviesList',JSON.stringify(moviesList));
        }
        
      };

      deleteFromWishList(){
        this.setState({ isAdded: false, textAdd: 'Add to wishlist' });
        let moviesList  = JSON.parse(localStorage.getItem('moviesList'));
        let toDelete = moviesList.find(item => item.imdbID == this.state.movieData.imdbID);
        let index = moviesList.indexOf(toDelete);
        if (index > -1) {
            moviesList.splice(index, 1);
            localStorage.setItem('moviesList',JSON.stringify(moviesList));
            this.setState({movieData:moviesList})
        }
      };

    componentDidMount() {
        axios
            .get(
                `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${
                    this.props.movieID
                }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieData: res });
            });
    }

    render() {
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;

        if (!Poster || Poster === 'N/A') {
            return null;
        }

        return (
            <div>
            <div className="movie-cards-container">
                <div className="image-container">
                    <div
                        className="image-poster"
                        style={{ backgroundImage: `url(${Poster})` }}
                    />
                </div>
                <div className="movie-info">
                    <h2>Movie Details</h2>
                    <div>
                        <h1>{Title}</h1>
                        <small>Released Date: {Released}</small>
                    </div>
                    <h4>Rating: {imdbRating} / 10</h4>
                    <p>{Plot}</p>
                    <div className="tags-container">
                        Genre: {Genre}
                    </div>
                </div>
                </div>
                <div className="buttons-container">
                <div  className="add-towishlist-button hide-add" onClick={this.addToWishlist}><p>{this.state.textAdd}</p></div>
                <div  className="delete-fromwishlist-button  hide-delete" onClick={this.deleteFromWishList} ><p>Delete</p></div>
            </div>
            </div>
        );
    }
}

export default MovieCard