import React from 'react'

const MovieItem = (props) => {
 console.log(props);
 
 return (
  <div>Hello</div>
 //  <div className="card">
 //   <img 
 //    src={'https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}'} 
 //    alt="img" 
 //    className="card-img-top"
 //   />
 //   <div className="card-body">
 //    <h6 className="card-title">{item.title}</h6>
 //    <div className="d-flex justify-content-beetwen align-items-center">
 //     <p className="mb-0">Rating: {item.vote_average}</p>
 //     <button 
 //      className="btn btn-secondary"
 //      type="button"
 //     >
 //      Will Watch
 //     </button>
 //    </div>
 //    <button 
 //     type='button' 
 //     onClick={this.deleteMovie.bind(null, film.id)}
 //     >
 //      Delete
 //    </button>
 //   </div>
 //  </div>
  );
}

export default MovieItem