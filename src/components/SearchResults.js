import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MovieItems from './MovieItems';

export default function SearchResults(props) {
    const param = useParams();
    const movie = param.movie;

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const getMovies = async (movie) => {
        let recom = await fetch(
            "https://movie-recommender-backend-g.onrender.com/search/" + movie
        );
        let recomjson = await recom.json();
        console.log(recomjson);
        setMovies(recomjson);
        setLoading(false);
    }
    useEffect(() => {
        console.log(movie);
        getMovies(movie);
    }, [movie])

    if (loading) {
        return (
            <div style={{ padding: '1rem 1.5rem' }}>
                <h1 style={{ color: 'black' }}>Loading...</h1>
            </div>
        )
    }

    return (
        <>
            <Container>
                {movies.map((item, idx) => {
                    return <MovieItems movieitem={item} key={idx} />;
                })}
            </Container>
        </>
    );
}

const Container = styled.div`
      height: 80vh;
      margin-top: 3em;
      display: flex;
      flex-wrap: wrap;
      margin: auto;
      margin-left: 5%;
      justify-content: flex-start;
      background-color: #14213d;`
