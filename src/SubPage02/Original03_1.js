import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axios.js";
import Leftutill from "../utill/Left.js";
import './Original03_1.css'
import Recommend from "../Recommend/Recommend.js";
import styled from "styled-components";

const Original03_1 = ({fetchUrl}) => {
    const navigate = useNavigate();

    const [movie, setMovies] = useState([]);

    const fetchMovie = async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results.slice(0, 1));
    };

    useEffect(() => {
        fetchMovie();
    })
    
    return(
        <RecommendWrap>
                <Leftutill />
            <div className="Recommend1">
                {movie.map((movie) => (
                    <div className='arrow'>
                        <img src='/img/left_arrow.png' onClick={()=>{navigate(`/sub/${movie.id}`)}}/>
                    </div>
                ))}

                <img src='./img/ormore.jpg'/>
                <h1>5.1지원 채널 지원 고음질 콘텐츠</h1>
                <h2>영화 130개</h2>
                <p>5.1채널 서라운드 음질과 함께 나만의 홈시네마를 즐겨보세요!</p>
            </div>
        </RecommendWrap>
    )
}
export default Original03_1

const RecommendWrap = styled.div`

`;