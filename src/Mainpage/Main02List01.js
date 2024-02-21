import { Children, useEffect, useRef, useState } from "react";
import './Main02List01.css';
import axios from "../api/axios";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";



const Main02List01 = ({ title, id, fetchUrl,}) => {
    const navigate = useNavigate();


    const [movies, setMovies] = useState([]);

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        // console.log(response);
        setMovies(response.data.results.slice(0,10));
    };

    useEffect(() => {
        fetchMovieData([]);
    }, [fetchMovieData]);

    // console.log(movies);

    const sliderSetting = {
        slidesToShow: 2,
        arrows : false
    }

    return (
        <div className="Main02List01">
            <h2><span>개봉관 </span> {title}</h2>
            <Slider {...sliderSetting} className="slider">
                {movies.map((movie, idx) => (
                    <div key={movie.id} className="sImgCard1">
                        <div className="poster1">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                onClick={()=>{navigate(`/sub/${movie.id}`)}}
                            />
                            <div className="num">
                                {idx+1}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Main02List01;