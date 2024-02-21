import Main03Slide03Wrap from 'react-slick'
import { useContext, useEffect, useState } from "react";

import './Main03.css';

import axios from "../api/axios.js";
import Button from './Button.js'
import { useNavigate } from 'react-router-dom';


const Main03List03 = ({title, id, fetchUrl}) => {
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

    const [data, setData] = useState([]);
    return(
        <div className="Main03List03">
        <div className='top'>
            <h1>{title}</h1>
            <p onClick={()=>{navigate('/party')}}>더보기</p>
        </div>
        <Main03Slide03Wrap {...settings}>
            {movies.map((movie)=>(
                <div key={movie.id} className="sImgCard">
                    <div className='partyphoto'>
                        <p>
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                onClick={()=>{navigate(`/party_play/${movie.id}`)}}
                            />
                        </p>
                        <p><Button 
                                type={'play'}
                                onClick={()=>{navigate(`/party_play/${movie.id}`)}} 
                            /></p>
                        <p className="party_box">{movie.title}</p>
                    </div>
                </div>
            ))}
            </Main03Slide03Wrap>

        </div>
    )
};

export default Main03List03;