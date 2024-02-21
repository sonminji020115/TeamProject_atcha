import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sub02OriList from 'react-slick';
import styled from "styled-components";
import axios from "../api/axios.js";
import Leftutill from "../utill/Left.js";
import Original04 from "./Original04.js";
import Sub02FamilySite from './Sub02FamilySite.js';
import Original05List from "./Original05List.js";
import requests from '../api/requests.js';
import './SubPage02.css'
import './Original02.css'

const Original05 = () => {
    
    const navigate = useNavigate();
    let data = ['#영화', '#외국', '#SF&액션', '#판타지', '#코미디&가족', '#로맨스', '#호러&스릴러'];

    let [btnActive, setBtnActive] = useState("")

    const [modalOpen, setModalOpen] = useState(false);
    const handleOption = () => {
        setModalOpen(true)
    }

    const toggleActive = (e) => {
        setBtnActive((prev) => {
          return e.target.value;
        });
    };
    const [isFamilySite, setIsFamilySite] = useState(false);
    const handleFamilySite = () => {
        setIsFamilySite(!isFamilySite)
    } ;

    return(
        <Original05Wrap>
        <Leftutill/>
        <div className="Original05">
        <Original01wrap>
            <Original01wrap_header>
                <Main01Wrap>
                    <Logo>
                        <img
                            src='/img/atcha_logo.png'
                            alt="앗챠 로고"
                            onClick={()=>{navigate('/')}}
                        />
                    </Logo>
                    <Icon>
                        <ul>
                            <li className="icon01"><img src="/img/icon_wifi.png"/></li>
                            <li className="icon02"><img src="/img/icon_species.png"/></li>
                            <li className="icon03"><img src="/img/icon_person.png"/></li>
                        </ul>
                    </Icon>
                </Main01Wrap>
            </Original01wrap_header>
            <Original01wrap_main>
                <Main02Wrap>
                        <h2>디즈니 플러스 오리지널 시리즈</h2>
                        <Main02Wrap_02>
                            <ul>
                                <li><img src="/img/disney_logo.svg"/></li>
                                <li className="series">시리즈</li>
                            </ul>
                            <p 
                                className="gather"
                                onClick={handleOption}
                            >종류별 모아보기 +</p>
                        </Main02Wrap_02>
                </Main02Wrap>
            </Original01wrap_main>
            <Original01wrap_main02>
                    <Ori01_arrow>
                                <img src="/img/left_arrow.png" onClick={() => {navigate('/')}}/>
                    </Ori01_arrow>
                <Ori01_main03_01>
                    <ul>
                    {data && data.map((item, idx) => {
                        return (
                        <>
                            <li
                                value={idx}
                                className={"btn" + (idx == btnActive ? " active" : "")}
                                onClick={toggleActive}
                            >{item}</li>
                        </>
                        );
                    })}
                    </ul>
                </Ori01_main03_01>
            </Original01wrap_main02>
            <Original01wrap_main03>
                    <img className='mo' src="/img/disney_main.png"/>
                    <img className='pc' src="/img/disney_pcmain.png"/>
            </Original01wrap_main03>
        </Original01wrap>
        {modalOpen && <Original04 setModalOpen={setModalOpen} />}
            <Sub02TopBtn onClick={handleFamilySite}>
                <h2>다른 사이트로 이동</h2>
                <p>
                    <img src='/img/btn_drop-down.png'/>
                </p>
                <Sub02Modal>
                    {isFamilySite && <Sub02FamilySite /> }
                </Sub02Modal>
            </Sub02TopBtn>
            <DisneyItem>
                <Original05List title='영화' id='TR' fetchUrl={requests.fetchAdventureMovies}  />
                <Original05List title='역사' id='HT' fetchUrl={requests.fetchHistoryMovies}  />
                <Original05List title='외국' id='TR' fetchUrl={requests.fetchAdventureMovies}  />
                <Original05List title='로맨스' id='RM' fetchUrl={requests.fetchRomanceMovies}  />
                <Original05List title='드라마' id='TR' fetchUrl={requests.fetchAdventureMovies}  />
                <Original05List title='키즈' id='AM' fetchUrl={requests.fetchAnimation}  />
                <Original05List title='공포' id='HR' fetchUrl={requests.fetchHorrorMovies}  />
                <Original05List title='액션' id='AT' fetchUrl={requests.fetchActionMovies}  />
            </DisneyItem>
        </div></Original05Wrap>
    )
};

export default Original05;


const Original01wrap = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;
    @media screen and (min-width: 768px) {
        padding-left:240px    
    }
`
const Original05Wrap = styled.div``;
const DisneyItem = styled.div`
@media screen and (min-width: 768px) {
    padding-left:240px    
}
`;

const Original01wrap_header = styled.div`
    width: 100%;
    height: auto;
    background-color: #141517;
`

const Main01Wrap = styled.div`
    position: relative;
    max-width: 1200px;
    height: 46px;
    margin-left: auto;
    margin-right: auto;
`;

const Logo = styled.p`
    position: absolute;
    background-color: #141517;
    left: 20px;
    top: 10px;

    img{
        width: 100%;
        height: auto;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        display: none;   
    }

    cursor: pointer;
`;

const Icon = styled.div`
    width: 100%;

    ul{
        position: absolute;
        display: flex;
        right: 20px;
        top: 17px;
    }

    li{
        cursor: pointer;
        margin-left: 8px;
    }
`

const Original01wrap_main = styled.div`
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

const Main02Wrap = styled.div`
    padding-top: 23px;
    padding-left: 23px;
    padding-bottom: 15px;
    color : #fff;
    border-bottom: 1px solid #1D1D1D;

    h2{
        font-weight: 500;
        font-size: 20px;
    }

    ul{
        margin-top: 15px;
        margin-left: -38px;
        display: flex;
        align-items: center;
    }

    li{
        font-weight: 600;
        font-size: 24px;
    }

    img{
        width: 100px;
        height: auto;
    }
`

const Main02Wrap_02 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Original01wrap_main02 = styled.div`
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 18px;
    padding-left: 23px;
`

const Ori01_main03_01 = styled.div`
    padding-bottom: 13px;

    ul{
        box-sizing: border-box;
        flex-wrap: wrap;
        width: 100%;
        display: flex;
    }
    li{
        margin-right: 7px;
        padding: 7px 15px;
        margin-bottom: 13px;
        font-size: 12px;
        color: #989898;
        border: 1px solid #989898;
        border-radius: 20px;
        cursor: pointer;

        &.active {
            background-color: #fff;
            border: none;
            font-weight: 600;
        }
    }
`

const Original01wrap_main03 = styled.div`
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-left: 26px;
    padding-right: 26px;
    padding-bottom: 20px;

    img{
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    .pc{
        display: none;
    }
    @media screen and (min-width: 1024px) {
        .pc{
            display: block;
        }  
        .mo{
            display: none;
        } 
    }
`
const Ori01_arrow = styled.div`
    margin-left: 5px;
    margin-bottom: 15px;

    img{
        cursor: pointer;
    }
`

const Sub02TopBtn = styled.div`
    position: relative;
    display: flex;
    justify-content: right;
    max-width: 1440px;
    margin: 0 auto;
    padding-right: 20px;
    z-index: 800;
    cursor: pointer;
    h2{
        font-size: 14px;
        color: #fff;

    }
`;

const Sub02Modal = styled.div`
position: absolute;
top: 20px;
right: 35px;

`;
