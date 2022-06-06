import { useState } from "react";

export function Counter() {
 const [like, setLike] = useState(0);
 const [disLike, setDislike] = useState(0);


 return (
  <div className="App">
   <button className="likebutton" onClick={() => setLike(like + 1)}>👍{like}</button>
   <button className="dislikebutton" onClick={() => setDislike(disLike + 1)}>👎{disLike}</button>



  </div>
 );
}
