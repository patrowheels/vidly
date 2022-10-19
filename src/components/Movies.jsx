import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import '../App.css';


class movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = (movie) => {
        // this gets the entire array of movies except the movie that we clicked on.
const movies = this.state.movies.filter(m => m._id !== movie._id)    
    // this.state sends message that state is about to be updated and will activate render method soon.
this.setState({movies: movies});
};
    render() { 
        const myStyle = {
            fontSize: "25px",
            color: "black",
            marginTop: "5%",
            marginBottom: "5%",
            fontFamily: "Sans-Serif"
          };
          
          // this defines a new constant called count and such that to the length property of movies
          const { length: count } = this.state.movies;

          if (this.state.movies.length === 0)
            return <p style={{paddingTop: 20,fontSize: 30,}}>There are no movies in the data base</p>;
       return (
       <table className='table'>
        
       <thead>
       <h1 style={myStyle}>Showing {count} movies in database</h1>
         <tr style={{backgroundColor: "grey"}}>
            {/* th and td both stack horizontally in tr */}
           <th>Title</th>
           <th>Genre</th>
           <th>Stock</th>
           <th>Rate</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         {this.state.movies.map(movie => ( 
         <tr style={{backgroundColor: "lightblue"}} k={movie._id}>
           <td>{movie.title}</td>
           <td>{movie.genre.name}</td>
           <td>{movie.numberInStock}</td>
           <td>{movie.dailyRentalRate}</td>
           <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
         </tr>
         ))}
       </tbody>
     </table>
       )
    }
}
       
        
        // const styles = {
        //   // fontSize: 50,
        //   // border: '2px solid black',
        //   // backgroundColor: "#282c34",
        //   // paddingLeft: 100,
        //   // paddingRight: 100,
        // };
        // let movies = this.getMovies.map
        // console.log(movies) 

 
export default movies;