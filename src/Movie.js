import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ pic, name, summary, rating }) {
 const style = {
  color: rating >= 8 ? "green" : "red"
 };

 const [show, setShow] = useState(true);
 { /*const para= {
      display:show ? "block" : "none",
    }*/
 }

 return (


  <div>

   <img src={pic} alt={name}></img>

   <h1>{name} <span style={style}>⭐{rating}  <Counter /> <br></br></span></h1>
   <a href="#">Reviews:</a>
   <div className="summary"><button className="summary" onClick={() => setShow(!show)}>Summary:-</button><br></br>
    {show ? <p>{summary}</p> : null}</div>
   {/*<p style={para}>{summary}</p>*/}






  </div>
 );

}
