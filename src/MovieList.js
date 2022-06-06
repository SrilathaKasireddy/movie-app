import { Movie } from "./Movie";
import { useState } from "react";

export function MovieList({ moviedetails, setMovieList }) {
 const [moviename, setMoviename] = useState(" ");

 const [rating, setRating] = useState("  ");
 const [pic, setPic] = useState(" ");
 const [summary, setSummary] = useState("");
 return (
  <div>
   <div className="add-movie-form">
    <input placeholder="Movie Name"
     onChange={(event) => setMoviename(event.target.value)} />
    <input placeholder="Rating"
     onChange={(event) => setRating(event.target.value)} />
    <input placeholder="Pic"
     onChange={(event) => setPic(event.target.value)} />
    <input placeholder="Summary"
     onChange={(event) => setSummary(event.target.value)} />

    <button onClick={() => {
     const newMovie = {
      moviename: moviename,
      rating: rating,
      pic: pic,
      summary: summary,
     };
     setMovieList([...moviedetails, newMovie]);
    }}


    >Add Movie
    </button>

   </div>

   <div className="Movie-list">
    {moviedetails.map((nm, index) => (
     <Movie key={index} name={nm.moviename} pic={nm.pic} summary={nm.summary} rating={nm.rating} />
    ))}

   </div>
  </div>





 );


}
