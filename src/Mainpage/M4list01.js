import './M4list01.css';
import axios from "../api/axios";
import Slider from 'react-slick';

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const M4list01 = ({id, fetchUrl}) => {
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
        <div className="M4list01">
            <div className="list_in">
                <div className='pro'><img src="/img/Ellipse4.png" onClick={()=>{navigate('/otherpage')}} /></div>
                <div className="text">
                    <p className="txt01">앗챠 개발자's님의 리스트</p>
                    <p className="txt02"><h1>앗챠에서 일해? 요즘 볼 거 뭐있어?</h1></p>
                </div>
                <div className="more" onClick={()=>{navigate('/list04more')}}>더보기</div>
            </div>
            <Slider {...sliderSetting}>
                {movies.map((it)=>(
                    <div key={it.id} className='m4slide'>
                        <p className='m4poseter'>
                            <img src={`https://image.tmdb.org/t/p/original/${it.poster_path}`}
                                onClick={()=>{navigate(`/sub/${it.id}`)}}
                            />
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default M4list01;