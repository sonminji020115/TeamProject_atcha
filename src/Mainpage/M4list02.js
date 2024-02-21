import './M4list02.css';
import axios from "../api/axios";
import M4Slider from 'react-slick';

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const M4list02 = ({id, title, fetchUrl}) => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    const fetchMovieData = async() => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
    };

    useEffect(()=>{
        fetchMovieData();
    },[fetchMovieData]);

    const sliderSetting = {
        slidesToShow : 3,
    }

    return(
        <div className="M4list02">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <M4Slider {...sliderSetting}>
                {movies && movies.map((it)=>(
                    <div key={it.id} className='m4slide'>
                        <p className='m4poseter'>
                            <img src={`https://image.tmdb.org/t/p/original/${it.poster_path}`}
                                onClick={()=>{navigate(`/sub/${it.id}`)}}
                            />
                        </p>
                    </div>
                ))}
            </M4Slider>
        </div>
    )
}

export default M4list02;