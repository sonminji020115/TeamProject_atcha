import { useEffect, useState } from "react";
import { truncate } from "../utill/truncate";
import './Main02List02.css';
import Slider from "react-slick";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Main02List02 = ({ title, id, fetchUrl }) => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        // console.log(response);
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchMovieData([]);
    }, [fetchMovieData]);

    // console.log(movies);

    const sliderSetting = {
        slidesToShow: 2,
        arrows: false

    }

    function myFunc(i) {
        if (i >= 5) {
            return;
        }
        myFunc(i+1);
    }


    return (
        <div className="Main02List02">
            <div className="m2title">
                <h2>{title}</h2>
                <p className="m2_more" onClick={()=>{navigate('/recom')}}>더보기</p>
            </div>
            <Slider {...sliderSetting}>
                {movies.map((movie) => (
                    <div key={movie.id} className="sImgCard2">
                        <p className="poster2">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                onClick={()=>{navigate(`/sub/${movie.id}`)}}
                            />
                        </p>
                        <p className="title">
                            {
                                truncate(movie.title || movie.name,8)
                            }
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Main02List02;