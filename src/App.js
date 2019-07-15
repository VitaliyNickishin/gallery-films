import React, { Component } from 'react'
import moviesData from "./moviesData"
import MovieItem from "./components/MovieItem"
//import './App.css';
//console.log(moviesData);


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    }
  }

  deleteMovie = idid => {
    //console.log("delete", id);
    console.log("this", this);
    const updateMovies = this.state.movies.filter(films => {
      return films.id !== idid;
    });
    console.log(updateMovies);
    //this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  }
  
  
  render() {
    //console.log(this);
    //console.log("render");
    const {movies} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            {movies.map((film) => {
              return <MovieItem key={film.id} title="yo"/>;
              /*
              return (
              <div key={film.id}>
                <p>{film.title}</p>
                <p>{film.vote_average}</p>
                <button 
                 type='button' 
                 onClick={this.deleteMovie.bind(null, film.id)}
                 >
                  Delete
                </button>
              </div>
              );
              */
            })}
          </div>
        </div>
      </div>
    )
  }
}

