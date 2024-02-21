import Main03Slide02Wrap from 'react-slick';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Main03.css';

import axios from "../api/axios";

const Main03List02  = ({title, id, fetchUrl}) => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        // console.log(response);
        setMovies(response.data.results);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    useEffect(()=>{
        fetchMovieData();
    }, [fetchMovieData]);

    // console.log(movies);

    return(
        <div className="Main03List02 ">
            <h1>{title}</h1>
            <Main03Slide02Wrap {...settings}>
                {movies.map((movie)=>(
                    <div key={movie.id} className="sImgCard">
                        <p>
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                onClick={()=>{navigate(`/sub/${movie.id}`)}}
                            />
                        </p>
                    </div>
                ))}
            </Main03Slide02Wrap>
        </div>
    )
}

export default Main03List02 ;