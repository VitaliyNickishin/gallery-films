import React from 'react'
//import img1 from "../images/1.jpeg"

const MovieItem = (props) => {
 console.log(props);
 const {item, deleteFilm} = props;
 return (
  <div className="card">
   <img 
    // src={'https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}'} 
    src={'{item.backdrop_path || item.poster_path}'} 
    //={img1} 
    alt="img" 
    className="card-img-top"
   />
   <div className="card-body">
    <h6 className="card-title">{item.title}</h6>
    <div className="d-flex justify-content-beetwen align-items-center">
     <p className="mb-0">Rating: {item.vote_average}</p>
     <button 
      className="btn btn-secondary"
      type="button"
     >
      Will Watch
     </button>
    </div>
    <button 
     type='button' 
     onClick={deleteFilm.bind(null, item.id)}
     >
      Delete
    </button>
   </div>
  </div>
  );
}

export default MovieItem