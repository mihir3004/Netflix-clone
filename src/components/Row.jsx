import { useEffect, useState } from "react";
import instance from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/w500";

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailer, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchURL]);
    console.log(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    function trailerHandeler(movie) {
        if (trailer) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie?.original_name || movie?.title)
                .then((url) => {
                    console.log(url);
                    const urlParam = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParam.get("v"));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    return (
        <div className="row bg-black pt-2">
            <h2 className="text-white ms-3 font-bold bg-black">
                {props.title}
            </h2>
            <div className="flex w-fit overflow-y-hidden overflow-x-scroll p-3 posters">
                {movies.map((movie, index) =>
                    movie.backdrop_path ? (
                        <img
                            key={index}
                            className="rounded-[4px] w-[10%] row_poster me-4 object-contain hover: transition-all"
                            onClick={() => trailerHandeler(movie)}
                            src={
                                props.isLarge
                                    ? base_url + movie.poster_path
                                    : base_url + movie.backdrop_path
                            }
                            alt={movie.title ? movie.title : movie.name}
                        ></img>
                    ) : (
                        <div key={index}></div>
                    )
                )}
            </div>
            {trailer && <YouTube videoId={trailer} opts={opts}></YouTube>}
        </div>
    );
}

export default Row;
