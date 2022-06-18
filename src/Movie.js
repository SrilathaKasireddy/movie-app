import { useState,useEffect } from "react";
import { Counter } from "./Counter";
import  { navigate,useNavigate } from "react-router-dom";
import { Button, Card, Paper } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import InfoIcon from '@mui/icons-material/Info';
export function Movie({ pic, name, summary, rating ,id}) {
 const style = {
  color: rating >= 8 ? "green" : "red"
 };

 const [show, setShow] = useState(true);
 

 const navigate=useNavigate();
 
 


 
 return (
  
  

<Card style={{borderRadius:10,margin:10,minHeight:"100vh"}}>



   <img  classname="img" src={pic} alt={name}></img>
   

   <h1>{name} <span style={style}> {<Button onClick={()=>navigate(`/movies/${id}`)}><InfoIcon sx={{fontSize:15}}/></Button>}⭐{rating}   <br></br></span></h1>
   
   
   <div className="summary">
    <Button className="summary" onClick={() => setShow(!show)}>
    {show? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</Button>
    {show ? <p>{summary}</p> : null} </div>
   
   

<span>
  

 
<Button style={{border:"none",margin:20,borderRadius:50}} ><Counter/></Button> 
<Button style={{color:"purple"}}><EditIcon/> </Button>


    
   
   <Button  style={{color:"red"}}   >< DeleteIcon/></Button>
  




</span>


  
</Card>

 );

    }