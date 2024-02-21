import './Click01.css';

import styled from "styled-components";
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';

const Click01 = () => {
    const navigate = useNavigate();
    return(
        <Click01Wrap>
            <Wrap>
                <Click_arrow onClick={()=>{navigate(-1)}}>
                    <img src="/img/left_arrow_.png"/>
                </Click_arrow>
                <YouTubeWrap>
                            <YouTube
                                videoId="FqyHdERatW8"
                                opts={{
                                    width: "100%",
                                    height: "420px",
                                    playerVars: {
                                     autoplay: 1, 
                                     modestbranding: 1,
                                     loop: 1,
                                     playlist: "FqyHdERatW8",
                                    },
                                   }}
                                   onReady={(e) => {
                                    e.target.mute();
                                   }}
                            /> 
                </YouTubeWrap>
                <MainText>
                    <p>남산의 부장들</p>
                    <ul>
                        <li className="mainTxt"><img src="/img/12_year_old user.png"/></li>
                        <li>평균 3.5</li>
                        <li>2019</li>
                        <li>1시간 53분</li>
                    </ul>
                </MainText>
                <MainText02>
                    <p>관련 동영상</p>
                    <ul>
                        <li><img src="/img/Related_video01.jpg"/></li>
                        <li><img src="/img/Related_video02.jpg"/></li>
                    </ul>
                </MainText02>
                <MainText03>
                    <p>비슷한 콘텐츠</p>
                    <ul>
                        <li><img src="/img/SimilarContent.jpg"/></li>
                        <li><img src="/img/SimilarContent02.jpg"/></li>
                        <li><img src="/img/SimilarContent03.jpg"/></li>
                    </ul>
                </MainText03>
            </Wrap>
        </Click01Wrap>
    )
}

export default Click01;

const Click01Wrap = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;
`

const Wrap = styled.div`
    max-width: 768px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

const Click_arrow = styled.div`
    img{
        margin-top: 15px;
        margin-left: 15px;
        padding-bottom: 15px;
        cursor: pointer;
    }
`

const YouTubeWrap = styled.div`
    max-width: 768px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

const MainText = styled.div`
    margin-left: 15px;
    color: #fff;

    p{
        padding-bottom: 10px;
        font-size: 17px;
    }
    ul{
        display: flex;
    }
    li{
        align-items: center;
        margin-right: 8px;
        padding-bottom: 15px;
        font-size: 13px;
    }
`

const MainText02 = styled.div`
    margin-left: 15px;
    color: #fff;

    img{
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    p{
        margin-bottom: 10px;
    }
    ul{
        display: flex;
        padding-bottom: 15px;
    }
    li{
        margin-right: 17px;
    }
`

const MainText03 = styled.div`
    margin-left: 15px;
    color: #fff;

    p{
        margin-bottom: 10px;
    }
    ul{
        display: flex;
        padding-bottom: 17px;
    }
    li{
        margin-right: 13px;
    }
    img{
        width: 100%;
        height: auto;
        cursor: pointer;
    }
`