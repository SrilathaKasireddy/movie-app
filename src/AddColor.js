import { useState } from "react";
import { ColorBox } from "./ColorBox";


export function AddColor() {
 const [color, setColor] = useState("blue");

 const styl = {
  backgroundColor: color,
 marginTop:20,
 textAlign:"center",
 alignItems:"center",
 justifyContent:"center"

 };
 // const colourList =
 const [colourList, setColorList] = useState([
  "yellow",
  "red",
  "pink",
  "gold",
 ]);

 return (
  <div>
   <input
    style={styl}
    type="text"
    label="Enter color"
    onChange={(event) => setColor(event.target.value)} />
   <button onClick={() => setColorList([...colourList, color])}>

    Add color{" "}
   </button>

   {colourList.map((clr) => (
    <ColorBox color={clr} />
   ))}
  </div>
 );
}
