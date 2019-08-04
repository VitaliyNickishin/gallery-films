import React, { Component } from 'react'
import './MovieItem.sass'

//import img1 from "../images/1.jpeg"


export default class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      willWatch: false
    }
  }
  
  handleClickWatch = () => {
    this.setState({
        willWatch: !this.state.willWatch
      });
    if (this.state.willWatch) {
      this.props.deleteFilmFromWillWatch(this.props.item.id);
    } else {
    this.props.addFilmToWillWatch(this.props.item);
    }
  };

  render() {
    const {
      item, 
      deleteFilm
    } = this.props;
    return (
      <div className="card">
        <div className="card-img">
          <img 
            // src={'https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}'} 
            src={item.img} 
            //={img1} 
            alt="img"
          />
        </div>
      <div className="card-body">
        <h6 className="card-title">{item.title}</h6>
        {/* <div className="d-flex justify-content-beetwen align-items-center"> */}
        <p className="">Rating: {item.vote_average}</p>
        <button 
          className={`btn ${this.state.willWatch ? "btn-success" : "btn-secondary"}`}
          type="button"
          //onClick={addFilmToWillWatch.bind(null, item)}
          onClick={this.handleClickWatch}
        >
          Will Watch
        </button>
        {/* </div> */}
        <button
        className="btn btn-danger" 
        type='button' 
        onClick={deleteFilm.bind(null, item.id)}
        >
          Delete
        </button>
      </div>
      </div>
      );
    }
  }
