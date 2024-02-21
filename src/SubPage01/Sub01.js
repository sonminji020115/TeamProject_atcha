import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios.js";
import Party02 from '../SubPage04/Party02.js'

import { truncate } from '../utill/truncate.js';
// import './SubPage01.css';

import styled from "styled-components";
import ReviewModal from "./ReviewModal.js";
import Sub01ModalDot from "./Sub01ModalDot.js";
import Sub01ModalMore from "./Sub01ModalMore.js";

const Sub01 = ({closeModal, showModal, isModal}) => {
    const navigate = useNavigate();

    const [isOption, setIsOption] = useState(false);
    const [ isDot, setIsDot ] = useState(false);
    const [ isMore, setIsMore] = useState(false);

    const openOption = () => {
        setIsOption(true);
    };
    const closeOption = () => {
        setIsOption(false);
    };
    const handleDot = () => {
        setIsDot(!isDot);
    };
    const openMore = () => {
        setIsMore(true);
    };
    const closeMore = () => {
        setIsMore(false);
    };

    let { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/movie/${movieId}`);
            // console.log(response);
            setMovieInfo(response.data);
            const response02 = await axios.get(`/movie/${movieId}/credits`);
            setCast(response02.data.cast.slice(0, 9));
        
        }
        fetchData();
    }, [movieId])
    // console.log(movieInfo)
    return (
      <div className="Sub01">
        <Wrap>
            {/* <Logo>
                <p>
                    <img
                        src='../img/atcha_logo.png'
                        alt="앗챠 로고"
                        onClick={() => { navigate('/') }}
                    />
                </p>
            </Logo> */}
            <Inner>
                <Sub01Wrap>
                </Sub01Wrap>
                <Sub02Wrap movieInfo={movieInfo}>
                    <SubPoster className="mo">
                        <img src={`http://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`} />
                        <SubTitleBackground>
                            <SubTitle className="mo">
                                {movieInfo.title}
                                <ul>
                                    <img src="../img/icon_12old.png" />
                                    <li>평균 {movieInfo.vote_average && movieInfo.vote_average.length > 0
                                    ? `${movieInfo.vote_average.toFixed(1)}`
                                    : '8.5'
                                    }</li>
                                    {/* <li>{`평균 ${movieInfo.vote_average.toFixed(1)}`}</li> */}
                                    <li>{new Date(movieInfo.release_date).getFullYear()}</li>
                                    <li>{`${movieInfo.runtime}분`}</li>
                                </ul>
                                <div>
                                    {movieInfo.genres && movieInfo.genres.map((it) => (
                                        <p key={it.id}>{it.name}</p>
                                    ))}
                                </div>
                            </SubTitle>
                        </SubTitleBackground>
                    </SubPoster>
                    {/* 여기서 부터 pc부분 */}
                    <SubPosterPC className="pc">
                        <img src={`http://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`} />
                        <p></p>
                        <SubTitleBackgroundPC>
                            <SubTitlePC className="pc">
                                {movieInfo.title}
                                <ul>
                                    <img src="../img/icon_12old.png" />
                                    <li>평균 {movieInfo.vote_average && movieInfo.vote_average.length > 0
                                    ? `${movieInfo.vote_average.toFixed(1)}`
                                    : '8.5'
                                    }</li>
                                    <li>{new Date(movieInfo.release_date).getFullYear()}</li>
                                    <li>{`${movieInfo.runtime}분`}</li>
                                    <li>{movieInfo.genres && movieInfo.genres.map((it) => (
                                        <span key={it.id}>{it.name}　</span>
                                    ))}</li>
                                </ul>
                                <p className="pc">{truncate(movieInfo.overview, 110)}<span onClick={openMore}>더보기</span></p>
                            </SubTitlePC>
                            <Sub03PosterPC className="pc">
                                <img src='/img/play.png' />
                            </Sub03PosterPC>
                        </SubTitleBackgroundPC>
                    </SubPosterPC>
                    {/* 여기까지 */}
                    <Subicon>
                        <Left>
                            <img
                                src='/img/icon_left_arrow.png'
                                onClick={() => { navigate(-1) }}
                            />
                        </Left>
                        <Right>
                            <img
                                src={
                                    isDot
                                     ? '/img/icon_more_hover.png'
                                     : '/img/icon_more.png'
                                }
                                onClick={handleDot}
                            />
                        </Right>
                    </Subicon>
                </Sub02Wrap>
                <Sub03wrap>
                    <Sub03Poster className="mo">
                        <img src='../img/play.png' />
                    </Sub03Poster>
                </Sub03wrap>
                <Sub04wrap>
                    <ul>
                        <li className="download"><img src='../img/icon_download.png' /></li>
                        <li className="puls"><img src='../img/icon_puls.png' /></li>
                        <li className="star"><img src='../img/icon_star.png' onClick={showModal} /></li>
                        <li className="chatting"><img src='../img/icon_chatting.png' onClick={openOption} /></li>
                    </ul>
                </Sub04wrap>
                <Sub05wrap>
                    <p className="mo">{truncate(movieInfo.overview, 110)}<span onClick={openMore}>더보기</span></p>
                    <img src='../img/sub01_banner2.png' />
                </Sub05wrap>
                <Sub01ModalWrap>
                    {isDot && <Sub01ModalDot />}
                </Sub01ModalWrap>
            </Inner>
            {isOption && <Party02 closeOption={closeOption} />}
            <Sub01ModalMoreWrap>
                {isMore && <Sub01ModalMore {...movieInfo} cast = {cast} closeMore={closeMore} />}
            </Sub01ModalMoreWrap>
        </Wrap>
      </div>
    );
  }
  
  export default Sub01;

  const Wrap = styled.div`
  width: 100%;
    @media screen and (min-width: 768px) {
        padding-left:240px    
    }

`;

// const Logo = styled.div`
//     height: 46px;
//     background-color: #141517;
//     p{
//         max-width: 1200px;
//         margin: 0 auto;
//         img{
//             margin-left: 15px;
//             padding-top: 10px;
//             width: 67px;
//             height: auto;
//             cursor: pointer;
//         }

//     }

// `;

const Inner = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto 30px;
    margin-bottom: 30px;
    background-color: #000;
        .mo{
            display:block;
        }
        .pc{
            display: none;
        }
    @media screen and (min-width: 1024px){
        .mo{
            display: none;
        }
        .pc{
            display: block;
        }
    }
`;

const SubPoster = styled.div`
    position: relative;
    opacity: 0.95;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    overflow: hidden;

    img{
        width: 100%;
        height: auto;
    }
`;
const SubPosterPC = styled.div`
    @media screen and (min-width: 1024px){
        position: relative;
        height: 350px;
        margin: 0 auto;
        // padding: 0 20px;
        padding-left: 20px;
        text-align: right;
        opacity: 0.95;
        overflow: hidden;
    
        > img{
            width: 70%;
            height: auto;
        }
        > p{
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 70%;
            background: linear-gradient(270deg, rgba(0, 0, 0, 0)0%, rgb(0, 0, 0)100%);
            
        }

    }

`;

const Subicon = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    background-color: #141517;

    img{
        cursor: pointer;
        position: absolute;
        top: 15px; 
        z-index: 1;
        width: 30px;
        heigt: 30px;
    }
`
const SubTitleBackground = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding-top: 100px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0)0%, rgb(0, 0, 0)100%);

`;
const SubTitleBackgroundPC = styled.div`
    @media screen and (min-width: 1024px){
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: auto;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0)0%, rgb(0, 0, 0)50%);
    }
`;
const SubTitle = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: auto;
    padding-top: 15px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0)0%, rgb(0, 0, 0)100%);

    img{
        margin-top: 3px;
        margin-right: -3px;
        width: 13px;
        height: 13px;
    }
    ul{
        display: flex;
        justify-content: center;
    }

    li{
        font-size: 13px;
        font-weight: 400;
        margin-left: 15px;
    }
    
    div{
        display: flex;
        justify-content: center; 
    }

    p{
        font-size: 13px;
        font-weight: 400;
        margin-left: 10px;
        margin-top: -18px
    }
    @media screen and (min-width: 768px){
        line-height: 1.4em;
        img{
            margin-top: 3px;
            margin-right: -3px;
            width: 18px;
            height: 18px;
        }

    }
`;
const SubTitlePC = styled.div`
    @media screen and (min-width: 1024px){
        position: absolute;
        bottom: 50px;
        left: 0;
        width: 40%;
        height: auto;
        max-width: 1200px;
        margin: 0 auto 20px;
        padding-left: 20px;
        padding-top: 15px;
        font-size: 36px;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: left;
    
        img{
            margin-right: -3px;
            width: 16px;
            height: 16px;
        }
        ul{
            display: flex;
            justify-content: left;
            padding-left: 0;
            margin-top: 15px;
        }
    
        li{
            display: flex;
            font-size: 13px;
            font-weight: 400;
            margin-left: 15px;
        }
        
        div{
            display: flex;
            justify-content: left; 
        }
        p{
            font-size: 13px;
            font-weight: 400;
            line-height: 1.3em;
            color: #999;
            span{
                color: #fff;
                cursor: pointer;
            }
        }
        
    }
`;

const Left = styled.div`
    margin-left: 15px;
`

const Right = styled.div`
    margin-right: 45px;
        &:hover{
            img{

            }
        }
`

const Sub01Wrap = styled.div`
    width: 100%;
    heigt: auto;
    background-color: #141517;
`;


const Sub02Wrap = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;
`;

const Sub03wrap = styled.div`
    text-align: center;
    background-color: #000;
    width: 100%;
`

const Sub03Poster = styled.div`
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    img{
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 90%;
        height: auto;
    }
    @media screen and (min-width: 768px){
        padding: 15px 0;
    }
`

const Sub03PosterPC = styled.div`
    @media screen and (min-width: 1024px){
        padding-left: 20px;
        margin-bottom: 20px;
            img{
                cursor: pointer;
            }
    }
`

const Sub04wrap = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border-bottom: 1px solid #1D1D1D;

    ul{
        width: 90%;
        margin-left: 20px;
        display: flex;
        justify-content: space-between;
    }

    li{
        cursor: pointer;
        align-items: center;
        padding: 8px 8px 9px;
        margin-bottom: 10px;
        &:hover{
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.1)
        }
    }
`

const Sub05wrap = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    background-color: #000;
    color: #999;

        img{
            margin-top: 20px;
            width: 100%;
            height: auto;
        }
        span{
            cursor: pointer;
            color: #fff;
        }
`;

const Sub01ModalWrap = styled.div`
    position: absolute;
    top: 45px;
    right: 20px;
    
`;

const Sub01ModalMoreWrap = styled.div`
`;