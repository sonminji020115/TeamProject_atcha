import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios.js";

const Sub01ModalMore = ({cast, closeMore, title, release_date, genres, runtime, vote_average, overview, original_language}) => {

    
    let { movieId } = useParams();
    const [director, setDirector] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/movie/${movieId}/credits`);
            setDirector(response.data.crew.filter((it)=>((it.job) == "Director")))
            // console.log(response, 21212);
        
        }
        fetchData();
    }, [movieId])
    // console.log(movieInfo)
    console.log(director,111)
    return(
        <MoreWrap>
                <MoreInner>
                    <p><img src='/img/btn_close.png' onClick={closeMore} /></p>
                    <MoreSection01 className="section">
                        <h1>{title}</h1>
                        <h3>기본정보</h3>
                        <p><span className="sec_left">개봉연도</span><span>{new Date(release_date).getFullYear()}</span></p>
                        <p><span className="sec_left">장르</span>
                            {genres && genres.map((item) => (
                                <span key={item.id}>{item.name}　</span>
                            ))}
                        </p>
                        <p><span className="sec_left">언어</span><span>{original_language}</span></p>
                        <p><span className="sec_left">상영시간</span><span>{runtime}분</span></p>
                        <p><span className="sec_left">평점</span><span>평균　{`${vote_average.toFixed(1)}`}</span></p>
                        {/* <p>연령 등급<span>{}</span></p> */}
                    </MoreSection01>
                    <MoreSection02 className="section">
                        <h3>줄거리</h3>
                        <p><span>{overview}</span></p>
                    </MoreSection02>
                    <MoreSection03 className="section">
                        <h3>감독/출연</h3>
                        <p> <span className="sec_left">감독</span>
                            {director && director.length > 0 ? <span>{director[0].name}</span> : <span>Loding data...</span> }
                            {/* <span>{director[0].name}</span> */}
                        </p>
                        <CastList>
                            <CastItem>
                            <p className="sec_left"><span>출연</span></p>
                                {cast && cast.map((it)=>(
                                    <p key={it.id}>
                                        <span>{it.name},</span>
                                    </p>
                                ))}
                                {/* <span>...</span> */}
                        </CastItem>
                            </CastList>
                    </MoreSection03>
                </MoreInner>
        </MoreWrap>
    )
};

export default Sub01ModalMore;

const MoreWrap = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 998;
        h1{
            margin-bottom: 30px;
            font-size: 28px;
            font-weight: 600;
        }
    
`;
const MoreInner = styled.div`
    overflow-y: auto;
    position: relative;
    max-width: 650px;
    max-height: 80%;
    margin: 100px auto 0;
    padding: 50px;
    z-index: 999;
    border-radius: 4px;
    background-color: #28292a;
    color: #fff;
        >div{
            border-bottom: 1px solid #555;
            margin-bottom: 20px;
        }
        >p{
            position: absolute;
            top: 15px;
            right: 15px;

        }
        img{
            cursor: pointer;
        }
        h3{
            font-size: 18px;
            font-weight: 600;
        }
        span{
            font-size: 12px;
            color: #e0e0e0;
        }
        .sec_left{
            width: 15%;
            font-size: 14px;
            color: #fff;
            
        }
`;

const MoreSection01 = styled.div`
        p{
            display: flex;
        }
`;

const MoreSection02 = styled.div``;

const MoreSection03 = styled.div`
    p{
        display: flex;
    }
`;

const CastList = styled.div`
    display: flex;
    // flex-wrap: no-wrap;
`;
const CastItem = styled.div`
    display: flex;
`;