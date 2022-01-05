import React from "react";
// import "./Carousel.css";
import styled from "styled-components";
import spidey from "./spidey.jpg";
import money from "./money.jpg";
import star from "./star.jpg";
export default function Carousel() {
  return (
      <Container>
            <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Img src={spidey} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Spider Man: No Way Home</h5>
              <p>Available at cinema nearest to you</p>
            </div>
          </div>
          <div className="carousel-item">
            <Img src={star} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Star Wars Series</h5>
              <p>Now streaming on Prime</p>
            </div>
          </div>
          <div className="carousel-item">
            <Img src={money} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>La Casa de Papel</h5>
              <p>Now streaming only on Netflix</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      </Container>
  );
}
const Container = styled.div`
  width: 95vw;
  margin:0 2.5vw;
`;
const Img = styled.img`
  
`;
