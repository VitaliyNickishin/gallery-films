import React, { Component } from 'react'
import moviesData from "./moviesData"
//import './App.css';
//console.log(moviesData);

function deleteMovie(id) {
  console.log("delete", id);
  
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    }
  }
  
  render() {
    console.log(this);
    const {movies} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            {movies.map((film) => {
              return (
              <div>
                <p>{film.title}</p>
                <p>{film.vote_average}</p>
                <button type='button' onClick={deleteMovie(film.id)}>Delete</button>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

