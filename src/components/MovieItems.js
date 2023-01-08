import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function MovieItems({ movieitem }) {
  console.log(movieitem);
  // let rating = 5.5;
  let navigate = useNavigate();

  let poster = "/gPQM1zqqsm6Lw1tHF41BwbmOkya.jpg";
  let title = "Movie Name";
  if (
    typeof movieitem?.poster_path !== "undefined" &&
    movieitem?.poster_path !== null
  )
    poster = movieitem.poster_path;
  if (typeof movieitem?.title !== "undefined" && movieitem?.title !== null)
    title = movieitem.title;
  if (
    typeof movieitem?.original_title !== "undefined" &&
    movieitem.original_title !== null
  )
    title = movieitem.original_title;
  if (
    typeof movieitem?.original_name !== "undefined" &&
    movieitem.original_name !== null
  )
    title = movieitem.original_name;
  if (
    typeof movieitem?.vote_average !== "undefined" &&
    movieitem.vote_average !== null
  )
    return (
      <>
        {movieitem?.title &&
          <div className="movie-item">
            <Image src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" />
            <div
              className="overlay"
              onClick={() => {
                navigate(`/movies/${movieitem.id}`);
                // window.location.reload();
              }}
            >
              <div className="text">{title}</div>
            </div>
          </div>}
      </>
    );
}

const Image = styled.img`
  display: block;
  height: 300px;
  border-radius: 15px;
`;
