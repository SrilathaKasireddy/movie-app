import { AddColor } from "./AddColor";
import "./App.css"
import { useState } from "react"
import { MovieList } from "./MovieList";
import {Routes,Route,Link,navigate,useParams,useNavigate} from "react-router-dom";
import { TicTacToe } from "./Tictactoe";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Movie} from "./Movie";
import {useTheme,ThemeProvider,createTheme} from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import {Paper} from "@mui/material";



function App() {
  
  
  const moviedetails = [
    {
      moviename: "RRR",
      rating: 8.8,
      pic: "https://1.bp.blogspot.com/-xXozKBO7bb4/YNtPyI0431I/AAAAAAAAGVo/XqivzSQ4qBwTPKEXv0zCI1xzcxJ0Z43RACLcBGAsYHQ/s0/HDgallery%2BRRR%2BRC%2BNTR.jpeg",
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    ,trailer:"https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      moviename: "Iron man 2",
      rating: 7,
      pic: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    ,trailer:"https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      moviename: "No Country for Old Men",
      rating: 8.1,
      pic: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e21dcb82167047.5d14eb668443a.jpg",
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    ,trailer:"https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      moviename: "Jai Bhim",
      rating: 8.8,
      pic: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"
    ,trailer:"https://www.youtube.com/embed/nnXpbTFrqXA"
  },
    {
      moviename: "The Avengers",
      rating: 8,
      pic: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
    ,trailer:"https://www.youtube.com/embed/eOrNdBpGMv8"
    },

    {
      moviename: "Interstellar",
      rating: 8.6,
      pic: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    ,trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      moviename: "Baahubali",
      rating: 8,
      pic: "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg",
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    ,trailer:"https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      moviename: "Ratatouille",
      rating: 8,
      pic: "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    ,trailer:"https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      moviename: "96",
      rating: 8.6,
      pic: "https://m.media-amazon.com/images/M/MV5BZTM1MGM3NjgtZjE4Mi00ZTNlLWI3ODAtNTViZjFmMDc3MjlhXkEyXkFqcGdeQXVyOTA3MTM0MTM@._V1_.jpg",
      summary: "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."
    ,trailer:"https://www.youtube.com/embed/r0synl-lI4I"
    },
    {
      moviename: "M.S. Dhoni: The Untold Story",
      rating: 7.9,
      pic: "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      summary: "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams."
    ,trailer:"https://www.youtube.com/embed/6L6XqWoS8tw"},
    {
      moviename: "The Dark Knight",
      rating: 9,
      pic: "https://m.media-amazon.com/images/I/51r4i5VQK3L._AC_.jpg",
      summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    ,trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      moviename: "King Kong",
      rating: 9,
      pic: "https://cdn.wallpapersafari.com/42/10/RmUqYA.jpg",
      summary: "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
   ,trailer:"https://www.youtube.com/embed/V00s34PFHVo"
}]
const initial = [
  {
    moviename: "RRR",
    rating: 8.8,
    pic: "https://1.bp.blogspot.com/-xXozKBO7bb4/YNtPyI0431I/AAAAAAAAGVo/XqivzSQ4qBwTPKEXv0zCI1xzcxJ0Z43RACLcBGAsYHQ/s0/HDgallery%2BRRR%2BRC%2BNTR.jpeg",
    summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
  ,trailer:"https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    moviename: "Iron man 2",
    rating: 7,
    pic: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
  ,trailer:"https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    moviename: "No Country for Old Men",
    rating: 8.1,
    pic: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e21dcb82167047.5d14eb668443a.jpg",
    summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
  ,trailer:"https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    moviename: "Jai Bhim",
    rating: 8.8,
    pic: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"
  ,trailer:"https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    moviename: "The Avengers",
    rating: 8,
    pic: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    summary: "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
  ,trailer:"https://www.youtube.com/embed/eOrNdBpGMv8"
  },

  {
    moviename: "Interstellar",
    rating: 8.6,
    pic: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
  ,trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    moviename: "Baahubali",
    rating: 8,
    pic: "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg",
    summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
  ,trailer:"https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    moviename: "Ratatouille",
    rating: 8,
    pic: "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
    summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  ,trailer:"https://www.youtube.com/embed/NgsQ8mVkN8w"
  },
  {
    moviename: "96",
    rating: 8.6,
    pic: "https://m.media-amazon.com/images/M/MV5BZTM1MGM3NjgtZjE4Mi00ZTNlLWI3ODAtNTViZjFmMDc3MjlhXkEyXkFqcGdeQXVyOTA3MTM0MTM@._V1_.jpg",
    summary: "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."
  ,trailer:"https://www.youtube.com/embed/r0synl-lI4I"
  },
  {
    moviename: "M.S. Dhoni: The Untold Story",
    rating: 7.9,
    pic: "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    summary: "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams."
  ,trailer:"https://www.youtube.com/embed/6L6XqWoS8tw"},
  {
    moviename: "The Dark Knight",
    rating: 9,
    pic: "https://m.media-amazon.com/images/I/51r4i5VQK3L._AC_.jpg",
    summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  ,trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    moviename: "King Kong",
    rating: 9,
    pic: "https://cdn.wallpapersafari.com/42/10/RmUqYA.jpg",
    summary: "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
 ,trailer:"https://www.youtube.com/embed/V00s34PFHVo"
}]
  const [movieList, setMovieList] = useState(initial);
  const navigate=useNavigate();
  const [mode,setMode]=useState("dark")
  const theme=createTheme({
    palette:{
      mode:mode,
    }
  })
  return (

    < ThemeProvider theme={theme}>
      
      <Paper elevation={4} style={{borderRadius:10,margin:10,minHeight:"100vh"}}>
    <div className="App">


<AppBar position="static">
        <Toolbar>
        <div>
      <nav className="nav">
        
          
            <Button className="home"  sx={{color:"white"}}onClick={()=>navigate("/")}>Home</Button>
        
          
            <Button  sx={{color:"white"}} className="colorgame" onClick={()=>navigate("/color-game")} >Color Game</Button>
           
            
            <Button  sx={{color:"white"}} className="movie" onClick={()=>navigate("/movies")}>Movies</Button>
    
      
            <Button sx={{color:"white"}} className="addmovie" onClick={()=>navigate("/addmovies")}>Add Movies</Button>
            
            <Button sx={{color:"white"}} className="tictactoe" onClick={()=>navigate("/tictactoe")}>Tic-Tac-Toe</Button>
      <Button sx={{color:"white"}} className="mode"  
      startIcon={mode==="dark" ? <Brightness7Icon/> : <Brightness4Icon/>}
      onClick={()=>setMode(mode==="light" ? "dark" :"light")}>{mode==="light" ? "Dark" :"light"}</Button>
      </nav>
      </div>
          
        </Toolbar>
      </AppBar>
    
      <Routes>
        <Route path="/tictactoe" element={<TicTacToe/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/color-game" element={<AddColor/>}/>
        <Route path="/movies" 
        element={moviedetails.map((nm, index) => (
     <Movie key={index} name={nm.moviename} pic={nm.pic} summary={nm.summary} rating={nm.rating} id={index} />
    ))}/>
    <Route path="/addmovies"element={<MovieList moviedetails={movieList} setMovieList={setMovieList}  />
    }/>
       <Route path="*"  element={<NotFound/>}/>
       <Route path="/movies/:id" element={<MovieDetails  movieList={moviedetails}/>} />
       <Route path="/movies/edit/:id" element={<MovieDetails  movieList={moviedetails}/>} />
      </Routes>

      {/* <MovieList moviedetails={movieList} setMovieList={setMovieList} /> */}

    </div>
    </Paper>
    </ThemeProvider>
    
  )}

  function MovieDetails({movieList,moviedetails}){
    
    const {id}=useParams();
    console.log(id);
    console.log(movieList[id])
    const movie=movieList[id];
      
    
    const style = {
      color: movie.rating >= 8 ? "green" : "red"
     };
     const navigate=useNavigate();
     
return(
  <div>
<div className="movie-container">
  <div className="specs">
  <iframe width="100%" height="498" src={movie.trailer}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h6 className="movie-name">{movie.moviename}</h6>
  <span style={style} className="movie-rating">
    ⭐{movie.rating}
  </span>


</div>
<p className="movie-summary">{movie.summary}</p>
<Button  onClick={()=>navigate(-1)}  > <ArrowBackIcon/>Back</Button>
</div>


</div>
)
    
   

  }

  function NotFound(){
    return(
   <div>
    <img className="notfound" alt ="404 page not found" src="https://s.tmimgcdn.com/scr/1200x750/122600/error-page-not-found-illustration_122693-original.jpg"></img>
    </div>
  )}


function Home(){
  return(
  <div>
    <h1 className="mainhead">Welcome To The Movie App🎉🎉🎉🎉</h1>
    </div>
  
)}
export default App;



      