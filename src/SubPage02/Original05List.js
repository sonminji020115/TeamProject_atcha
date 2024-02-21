import Sub02OriList from 'react-slick';
import { useEffect, useState } from "react";

import axios from "../api/axios.js";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Sub02FamilySite from './Sub02FamilySite.js';


const Original05List = ({ title, id, fetchUrl }) => {

    const navigate = useNavigate();

    const [isFamilySite, setIsFamilySite] = useState(false);
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

    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData]);
    return(
        <div className="Original05List">
        <Sub02OriWrap>
            <Sub02OriTop>
                <Sub02OriTitle>{title}</Sub02OriTitle>
                <p onClick={() => { navigate('/original03') }}>더보기</p>
            </Sub02OriTop>
            <Sub02OriList {...settings}>
                {movies && movies.map((movie) => (
                    <Sub02OriItem key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        />
                        <Sub02OriLogo>
                            <p>
                                <img
                                    src='/img/disney_ori.png'
                                />
                                <img className='disney_logo' src='/img/disney_logo.svg' />
                            </p>
                        </Sub02OriLogo>
                        <span></span>
                    </Sub02OriItem>
                ))}
            </Sub02OriList>
        </Sub02OriWrap>
        </div>
    )
};

export default Original05List;


const Sub02OriWrap = styled.div`
    padding:  0 0 0 20px; 
    background-color: black;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px
`;

const Sub02OriTop = styled.div`
    padding:  0 20px 0 0; 
    display: flex;
    justify-content: space-between;
    p{
        cursor: pointer;
        color: #777;
    }

`;

const Sub02OriTitle = styled.h1`
    margin-bottom: 0px;
    font-size: 18px;
    line-height: 1em;
    color: #fff;
`;

const Sub02OriItem = styled.div`
        position: relative;
        padding-right: 21px;
        box-sizing: border-box;
        img{
            width: 100%;
            height: auto;
            border-radius: 4px;
            cursor: pointer;
        }
    
`;

const Sub02OriLogo = styled.div`
        position: absolute;
        top: 0;
        right: 21px;
        width: 15%;
        height: auto;
        box-sizing: border-box;
        object-fit: contain;
            p{
                position: relative;
                img{
                    display: block;
                    width: 100%;
                    height: auto;
                    background-size: 100%;
                }
                img.disney_logo{
                    position: absolute;
                    top: 0px;
                    bottom: 5px;
                    right: 0px;
                    left: 0px;
                    padding: 2px;
                    margin: auto;
                    z-index: 900;
                }

                ::after{
                    content: '';
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0px;
                    width: 100%;
                    height: auto;
                    aspect-ratio: 1/0.7;
                    background-color: #1b1d29;
                    z-index: 800;
                    // background-img: url(./disney_logo_img/disney_logo.svg);
                    // background-size: 100%;
                }
            }

`;