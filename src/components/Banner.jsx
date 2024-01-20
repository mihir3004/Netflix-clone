import { useEffect, useState } from "react";
import instance from "../axios";
import requests from "../request";

function Banner() {
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + "..." : string;
    }
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        async function getMovie() {
            const request = await instance.get(requests.fetchTrending);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        // const data=getMovie();
        getMovie();
    }, []);
    return (
        <>
            <header
                className="text-white object-contain pt-10 h-[400px]"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
                    backgroundSize: "cover",
                }}
            >
                <div className="ms-20 pt-14 h-[190px]">
                    <div className="title text-4xl font-bold pb-2">
                        {movie?.title || movie?.name || movie?.original_name}
                    </div>
                    <div className="button mt-4">
                        <button className="bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition-all rounded-sm  px-5 py-1 border-none outline-none font-semibold">
                            Play
                        </button>
                        <button className="bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition-all rounded-sm ms-2 px-5 py-1 border-none outline-none font-semibold">
                            Add to List
                        </button>
                    </div>
                    <div className="description mt-3  w-[44rem] max-w-[296px] h-[80px]">
                        {truncate(movie.overview, 150)}
                    </div>
                </div>
                <div className="fade"></div>
            </header>
        </>
    );
}

export default Banner;
