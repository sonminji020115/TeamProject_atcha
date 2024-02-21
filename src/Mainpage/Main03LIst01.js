import Main03Slide01Wrap from 'react-slick';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Main03.css';

import axios from "../api/axios";
import Button from './Button.js'

const Main03List01  = ({title, id, fetchUrl}) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        // console.log(response);
        setMovies(response.data.results);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    useEffect(()=>{
        fetchMovieData();
    }, [fetchMovieData]);

    // console.log(movies);

    return(
        <div className="Main03List01 ">
            <h1>{title}</h1>
            <Main03Slide01Wrap {...settings}>
                {movies.map((movie)=>(
                    <div key={movie.id} className="sImgCard">
                        <div className='watchingphoto'>
                            <div>
                                <img 
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    onClick={()=>{navigate('/sub/play')}}
                                />
                                
                            </div>
                            <p onClick={()=>{navigate('/sub/play')}}    >
                                <Button type={'play'} />
                            </p>
                            <p className="waching_box">
                                <Button type={'wc_more'}/>
                            </p>
                        </div>
                    </div>
                ))}</Main03Slide01Wrap>
        </div>
    )
}

export default Main03List01 ;