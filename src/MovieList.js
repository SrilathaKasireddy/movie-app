import Button from '@mui/material/Button';
import { Movie } from "./Movie";
import { useState } from "react";
import TextField from '@mui/material/TextField';

export function MovieList({ moviedetails, setMovieList }) {
 
  const [moviename, setMoviename] = useState(" ");

 const [rating, setRating] = useState("  ");
 const [pic, setPic] = useState(" ");
 const [summary, setSummary] = useState("");
 const [trailer, setTrailer] = useState("");
 
 return (
  <div>
   <div className="add-movie-form">
   <TextField id="outlined-basic" label="Movie Name" variant="outlined"
     onChange={(event) => setMoviename(event.target.value)} />
     <TextField id="outlined-basic" label="Rating" variant="outlined"
     onChange={(event) => setRating(event.target.value)} />
    
    <TextField id="outlined-basic" label="Pic" variant="outlined"
     onChange={(event) => setPic(event.target.value)} />

<TextField id="outlined-basic" label="Summary" variant="outlined"
     onChange={(event) => setSummary(event.target.value)} />
     <TextField id="outlined-basic" label="Trailer" variant="outlined"
     onChange={(event) => setTrailer(event.target.value)} />


    
    <Button  onClick={() => {
     const newMovie = {
      moviename: moviename,
      rating: rating,
      pic: pic,
      summary: summary,
      trailer:trailer
      
     };
     setMovieList([...moviedetails, newMovie]);
    }} variant="outlined">Add Movie</Button>
   </div>
   <div className="Movie-list">
    {moviedetails.map((nm, index) => (
     <Movie key={index} name={nm.moviename} pic={nm.pic}
      summary={nm.summary} rating={nm.rating} trailer={nm.trailer} id={index} />
    ))}

   </div>
   
  </div>





 );


}
