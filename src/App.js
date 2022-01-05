import "./App.css";
import { useState, useEffect } from "react";
import Carousel from "./components/Carousel";

import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  // const [progress, setProgress] = useState(0);
  const [options, setOptions] = useState([]);
  const getMoviesList = async () => {
    let data = await fetch("https://movie-recom-api.herokuapp.com/movielist");
    let datajson = await data.json();
    setOptions(datajson);
    console.log(data);
  };
  useEffect(() => {
    getMoviesList();
  }, []);

  return (
    <div>
      {/* <LoadingBar color="#f11946" progress={progress} /> */}
      <Router>
        <Navbar movieList={options} />
        <Routes>
          <Route path="/" element={[<Carousel />, <Movies />]} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
      {/* <MovieDetails/> */}
      {/* <MovieItems /> */}
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
