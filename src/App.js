import React, { Component } from 'react'
// import moviesData from "./moviesData"
import {API_URL, API_KEY_3} from './utils/api'
import MovieItem from "./components/MovieItem"
import './App.sass';
//console.log(moviesData);

//UI = fn(state, props)
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      // movies: moviesData,
      movies: [],
      moviesWillWatch: []
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
    .then((response)=>{
      console.log('then');
      return response.json()
    })
    .then((data)=>{
      console.log('data', data);
      this.setState({
        movies: data.results
      })
    })
  }

   //удаление фильма из списка
  deleteMovie = idid => {
    //console.log("delete", id);
    //console.log("this", this);
    const updateMovies = this.state.movies.filter(films => {
      return films.id !== idid;
    });
    //console.log(updateMovies);
    //this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  }
  //добавление фильма в избранное(т.е. в пустой массив)
  addMovieToWillWatch = amtww => {
    //console.log(amtww);
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, amtww]
    //updateMoviesWillWatch.push(amtww);
    
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  //удаление фильма из избранного(т.е. из пустого массива)
  deleteMovieFromWillWatch = dmfww => {
    const deleteMoviesWillWatch = this.state.moviesWillWatch.filter(
      kino => kino.id !== dmfww
    );
    
    this.setState({
      moviesWillWatch: deleteMoviesWillWatch
    });
  }
  
  render() {
    //console.log(this);
    //console.log("render");
    const {movies, moviesWillWatch} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <div className="row">
              {movies.map((film) => {
              return (
                <div key={film.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <MovieItem 
                    item={film} 
                    // data={film} 
                    deleteFilm={this.deleteMovie}
                    addFilmToWillWatch={this.addMovieToWillWatch}
                    deleteFilmFromWillWatch={this.deleteMovieFromWillWatch}
                  />
                </div>
              );
            })}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <h4>Will Watch: {moviesWillWatch.length}</h4>
            <ul className="list-group">
               {moviesWillWatch.map(mWw => {
                 return (
                   <li key={mWw.id} className="list-group-item">
                    {/* <div className="d-flex justify-content-beetwen"> */}
                      <p>{mWw.title}</p>
                      <p>{mWw.vote_average}</p>
                    {/* </div> */}
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

