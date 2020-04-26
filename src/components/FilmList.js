import React, { Component } from 'react';

import axios from 'axios';

class FilmList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: {}
      };
    }
  
    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=mission`)
        
        .then(res => res.data)
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
     
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li>
                title={ item.Title }
                year={ item.Year }
                poster={ item.Poster }
                type={ item.Type }
                key={ item.imdbID }
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default FilmList