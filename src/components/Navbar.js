import { useState } from "react";
import * as React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo-lg.svg";
// import { useFormControl } from "@mui/material/FormControl";

// import { orange } from "@mui/material/colors";

export default function Navbar(props) {
  let navigate = useNavigate();
  const [movieName, setMovieName] = useState("");

  // const [ids,setIds] = useState({});
  // const getIds = async (movieName) => {
  //   let data = await fetch(`https://movie-recommender-backend-g.onrender.com/getids/${movieName}`);
  //   let datajson = await data.json();
  //   // //console.log(ids);
  //   navigate(`/movies/${datajson.tmdb_id}`);
  //   window.location.reload();
  // };
  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo style={{ width: '9rem', height: 'auto' }} />
      </Link>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <Input type="text" list="moviename" role={'combobox'} placeholder="Enter movie name" onChange={(e) => setMovieName(e.target.value)} value={movieName} onKeyDown={(e) => {
          if (e.key === "Enter") navigate(`/search/${movieName}`);
        }} />
        {
          <datalist id="moviename">
            {
              props.movieList.map((item, idx) => {
                return <option value={item} key={idx}>{item}</option>
              })
            }
          </datalist>

        }

        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          onSelect={(event) => {
            setMovieName(event.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") return getIds(movieName);
          }}

          options={props.movieList}
          sx={{ width: 500, height: 45 }}
          renderInput={(params) => (
            <TextField
              {...params}
              color="warning"
              label="Search Movie"
              sx={{ input: { color: "white" } }}
              focused
            />
          )}
        /> */}

        <Button type="submit" onClick={() => navigate(`/search/${movieName}`)}>
          <Icon
            src="https://img.icons8.com/color/48/000000/search--v2.png"
            alt=""
          />
        </Button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #14213d;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Title = styled.div`
  margin-left: 1em;
  font-size: 24px;
  color: #fca311;
`;

const Icon = styled.img`
  margin: auto;
`;
// h-10 bg-gray-200 my-2 p-2 rounded-4 outline-none border-none
const Button = styled.button`
  background: transparent;
  border: none;
`;
const Input = styled.input`
border: none;
border-radius: 1rem;
width: 20rem;
color: black;
padding: 12px;
outline: none;`