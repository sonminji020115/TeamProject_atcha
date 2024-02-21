import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import axios from "../api/axios";
import Party04 from "./Party04"


const Party03 = () => {
    let { movieId } = useParams();
    const [movies, setMovies] = useState([]);
    const [dropout, setDropout] = useState(false);
    const navigate = useNavigate();

    const handleUser = () => {
        setDropout(true);
    };

    useEffect(()=>{
        async function fetchData() {
            
                const response = await axios.get(`/movie/${movieId}`);
            setMovies(response.data);

            const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
                params: { append_to_response: 'videos' }
            });
            // console.log(movieDetail)
            setMovies(movieDetail);

        }
        fetchData();
    }, [movieId])

    // console.log(movies);
    // console.log('hj', movies.videos);
    
    return(
        <Party03Wrap>
            <Party03TopWrap>
                <Header>
                    <HeaderTxt>
                        <h2>{movies.title}</h2>
                        <h3>{movies.tagline}</h3>
                    </HeaderTxt>
                    <p><img 
                    src="/img/close.png"
                    onClick={()=>{navigate(-1)}}
                    /></p>
                </Header>
                {/* <Boddy></Boddy> */}
                <Screen>
                        { movies.videos && movies.videos.results.length > 0
                        ?
                        <div>
                            <iframe 
                                src={`http://www.youtube.com/embed/${movies.videos.results[0].key}?autoplay=1&mute=1&loop=1&playlist=${movies.videos.results[0].key}`}
                                frameBorder='0'
                                allow="autoplay; fullscreen"
                            ></iframe> 
                            <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} />
                        </div>
                            
                        : <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} />
                        }
                        
                </Screen>
                <p></p>
                <TimeWrap>
                    <p>32:12</p>
                    <TimeBarWrap>
                        <p className="time_bar1"></p>
                        <p className="time_bar2"></p>
                        <p className="time_bar3"></p>
                    </TimeBarWrap>
                    <p>1:03:21</p>
                </TimeWrap>
                <IconWrap>
                    <IconLeft>
                        <p>
                            <img src="/img/play_party.png" />
                        </p>
                        <p>
                            <img src="/img/rewind.png" />
                        </p>
                        <p>
                            <img src="/img/fast_forward.png" />
                        </p>
                        <p>
                            <img src="/img/volume.png" />
                        </p>
                    </IconLeft>
                    <IconRight>
                        <p>
                            <img src="/img/option.png" />
                        </p>
                        <p>
                            <img src="/img/chat.png" />
                        </p>
                        <p>
                            <img src="/img/full_screen.png" />
                        </p>
                    </IconRight>
                </IconWrap>
            </Party03TopWrap>
            {/* <p></p> */}
            <Party03BottomWrap>
                <Party03BottomInner>
                    <BottomHeader>
                        <BotHeadTxt>
                            <p>영화 같이 봐요!</p>
                        </BotHeadTxt>
                        <BotHeadIcon><p>39/100</p></BotHeadIcon>
                        <BotHeadBtnWrap>
                            <button>초대하기</button>
                            <button>파티 설정</button>
                        </BotHeadBtnWrap>
                    </BottomHeader>
                    <Party03BottomBody>
                            <ul>
                                <li>
                                    <img src="/img/photo_chat01.png" />
                                    <p>은지: <span>역시 다 같이 봐야 재밌네요ㅋㅋㅋ</span></p>
                                </li>
                                <li>
                                    <img src="/img/photo_chat02.png" />
                                    <p>가영: <span>주인공이 잘못했네;</span></p>
                                </li>
                                <li>
                                    <img src="/img/photo_chat03.png" />
                                    <p>민지: <span>(팝콘 냠냠)</span></p>
                                </li>
                                <li>
                                    <img src="/img/photo_chat04.png" />
                                    <p>중원: <span>일이 생겨서..다들 재밌게 보세요!ㅠㅠ</span></p>
                                </li>
                                <li>
                                    <img src="/img/photo_chat05.png" onClick={handleUser} />
                                    <p>앗챠차: <span>방금 못봤는데 땡겨주시면 안되나요ㅜㅜ</span></p>
                                </li>
                                <DropoutWrap>{dropout && <Party04 setDropout={setDropout} />}</DropoutWrap>
                            </ul>
                            <button><img src="/img/party_more_chat.png" /></button>
                            <p>
                                <input placeholder="남에게 피해를 주는 스포일러 및 비속어 사용을 지양해주세요." />
                            </p>
                    </Party03BottomBody>
                </Party03BottomInner>
            </Party03BottomWrap>
        </Party03Wrap>
    )
};

export default Party03;

const Party03Wrap = styled.div`
    position: relative;
    color: #fff;
    background-color: #000;
        // p{
        //     width: 100%;
        // }
`;

const Party03TopWrap = styled.div`
max-width: 1200px;
margin: 0 auto;
`;


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    h2{
        margin-bottom: 8px;
        font-size: 18px;
        font-weight: 700;
        line-height: 1em;
    }
    h3{
        font-size: 14px;
        font-weight: 500 ;
        
    }
`;

const HeaderTxt = styled.div``;

const Screen = styled.div`
    // position: absolute;
    // top: 76px;
    // left: 0;
    // right: 0;
    width: 100%;
    height: auto;
    img{
        width: 100%;
        height: auto;
    }
    iframe{
        position: absolute;
        top: 76px;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        padding-bottom: 76px;
    }
`;

const TimeWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    color: #E3E3E3;
`;

const TimeBarWrap = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 10px 15px;
    box-sizing: border-box;
    .time_bar1{
        width: 40%;
        height: 2px;
        background-color: #FF0558;
    }
    .time_bar2{
        width: 10%;
        height: 2px;
        background-color: #494949;
    }
    .time_bar3{
        width: 50%;
        height: 2px;
        background-color: #1D1D1D;
    }

`;

const IconWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
`;

const IconLeft = styled.div`
    display: flex;
    img{
        cursor: pointer;
        padding-right: 10px;
    }
`;

const IconRight = styled.div`
    display: flex;
    img{
        cursor: pointer;
        padding-left: 10px;
    }

`;

const Party03BottomWrap = styled.div`
    position: relative;
    background-color: #141517;
`;

const Party03BottomInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 20px;
    background-color: #141517;

`;

const BottomHeader = styled.header`
    margin-bottom: 10px;
    border-bottom: 1px solid #fff;
    max-width: 1200px;
    margin: 0 auto;
`;


const BotHeadTxt = styled.div`
    text-align: center;
    line-height: 45px;
        img{
            cursor: pointer;
            margin-top: 50%;
        }
        p{
            font-size: 18px;
            font-weight: 700;
        }
`;

const BotHeadIcon = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    
    ::before{
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        margin-right: 5px;
        background-image: url(/img/user-wh.png);
        background-size: 130%;

    }

`;

const BotHeadBtnWrap = styled.div`
    padding-bottom: 10px;
    button{
        width: calc(50% - 5px);
        height: 30px;
        font-size: 16px;
        font-weight: 600;
        box-sizing: border-box;
        border-radius: 4px;
        color: #FF0558;
        background-color: #1F2023;
    }
    button:first-child{
        margin-right: 10px;
    }
`;

const Party03BottomBody = styled.div`
    padding: 0 0px 90px;
    max-width: 1200px;
    margin: 0 auto;
    input{
        color: #fff
    }
    ul{
        position: relative;
        padding-left: 0px; 
        li{
            display: flex;
            // margin-bottom: 13px;
            img{
                cursor: pointer;
                margin-right: 10px; 
                object-fit: contain;
            }
            p{
                padding-top: 15px;
            }
        }
    }
    button{
        margin-left: calc(50% - 20px);
        padding: 15px 0;
    }
    input{
        width: 100%;
        height: 35px;
        padding: 0 10px;
        box-sizing: border-box;
        border-radius: 4px;
        border-color: #e0e0e0 ;
        background-color: #1F2023;
    }
`;

const DropoutWrap = styled.div`
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 375px;
    margin-left: -20px;
`;