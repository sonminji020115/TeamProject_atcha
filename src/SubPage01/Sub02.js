import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../api/axios.js';


const Sub02 = () => {
    let { movieId } = useParams();
    const [sub02Info, setSub02Info] = useState([]);
    const [director, setDirector] = useState([]);
    const [printPeople, setPrintPeople] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/movie/${movieId}/credits`);
            // console.log(response)
            setSub02Info(response.data.cast.slice(0, 9)); 
            setDirector(response.data.crew.filter((it)=>((it.job) == "Director")));
        }
        fetchData();
        // setDirector(response.data.crew.filter((it)=>((it.job) == "Director")))
    }, [movieId])


    // console.log(director, '111');
    // console.log(sub02Info, '3333');
    // console.log(crew, '222');
    // console.log()



    return (
        // 고침
        <Sub02Wrap> 
            <Sub02Top><h3>콘텐츠 정보</h3></Sub02Top>
            {/* <Sub02Title>감독/출연</Sub02Title> */}
                <Sub02Title>감독</Sub02Title>
                <Sub02Item>
                    <Sub02Photo>
                        {director && director.length > 0 
                            ? <p>
                                <img src={`https://image.tmdb.org/t/p/w500/${director[0].profile_path}`} />
                            </p>
                            : <p>Loding data...</p>    
                        }
                    </Sub02Photo>
                        {director && director.length > 0 ? <span>{director[0].name}</span> : <span>Loding data...</span> }
                </Sub02Item>
                <Sub02Title>출연</Sub02Title>
                
            <Sub02List>
                {sub02Info && sub02Info.map((it) => (
                    <Sub02Item key={it.id}>
                        <Sub02Photo> 
                                <img src={`https://image.tmdb.org/t/p/w500/${it.profile_path}`} />
                        </Sub02Photo>
                        <Sub02Txt>
                            <p>{it.character}</p>
                            <p>{it.name}</p>
                        </Sub02Txt>
                    </Sub02Item>
                ) 
                )}
            </Sub02List>
        </Sub02Wrap>
    )
};

export default Sub02;

const Sub02Wrap = styled.div`
    background-color: #000;
    color: #fff;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    @media screen and (min-width: 768px) {
        padding-left:260px // 고침
    }
`;

const Sub02Top = styled.div`
    margin-bottom: 30px;
    padding-bottom: 1px;
    text-align: center;
    border-bottom: 1px solid #1d1d1d;
    h3{
        display: inline-block;
        padding: 0 40px 9px 40px;
        font-size: 16px;
        border-bottom: 1px solid #fff;

    }

`;

const Sub02Title = styled.h1`
    font-size: 18px;
    line-height: 1em;
    margin-bottom: 10px;
`;

const Sub02List = styled.div` // 고침
    margin-bottom: 50px;
        @media screen and (min-width: 768px){
            display: flex;
            flex-wrap: wrap;
            
        }
        @media screen and (min-width: 1024px){
            width: 80%;
            
        }

`;

const Sub02Item = styled.div` // 고침
    display: flex;
    padding: 10px 0px;
    span{
        padding-top: 22px;
        font-size: 15px;
        font-weight: 700;
        color: #fff;
    }
    @media screen and (min-width: 768px){
        width: 50%;
        
    }
`;

const Sub02Photo = styled.p`
    margin-right: 10px;
    object-fit: contain;
    overflow: hidden;
    width: 62px;
    height: 62px;
    border-radius: 100%;
    overflow: hidden;
        img{
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    
`;

const Sub02Txt = styled.div`
    line-height: 1em;
    padding-top: 15px;
        p{
            margin: 0;
        }
`;

