import React, { Component } from 'react'
import moviesData from "./moviesData"
import MovieItem from "./components/MovieItem"
import "./sass/app.css"
//import './App.css';
//console.log(moviesData);

//UI = fn(state, props)
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: [
        {title: 2, vote_average: 11}
      ]
    };
  }

  deleteMovie = idid => {
    //console.log("delete", id);
    //console.log("this", this);
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
    const {movies, moviesWillWatch} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {movies.map((film) => {
              return (
                <div key={film.id} className="col-6 mb-4">
                  <MovieItem 
                    item={film} 
                    deleteFilm={this.deleteMovie}
                  />
                </div>
              );
            })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {moviesWillWatch.length}</h4>
            <ul className="list-group">
               {moviesWillWatch.map(mWw => {
                 return (
                   <li key={mWw.id} className="list-group-item">
                    <div className="d-flex justify-content-beetwen">
                      <p>{mWw.title}</p>
                      <p>{mWw.vote_average}</p>
                    </div>
                   </li>
                 )
               })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

