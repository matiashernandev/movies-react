import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { get } from "../utils/httpClient";
//import movies from "./movies.json"; cambiado por lo de api fetch
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    /*   useEffect(
        () =>
            fetch("https://api.themoviedb.org/3/discover/movie", {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
                    "Content-Type": "application/json;charset=utf-8",
                },
            })
                .then((result) => result.json())
                .then((data) => {
                    setMovies(data.results);
                }, [])
        // [] arreglo de dependencias para no ciclo infinito
    ); */

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);

    //axios llamadas asincronas es más simple

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}
