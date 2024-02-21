import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Leftutill from "../utill/Left.js";
import requests from '../api/requests.js';

import './Original06.css'
import './Original02.css'
import Original06List from "./Original06List.js";
import Original04 from "./Original04.js";
import Sub02FamilySite from "../SubPage02/Sub02FamilySite.js";

const Original06 = () => {
    const [isFamilySite, setIsFamilySite] = useState(false);
    const handleFamilySite = () => {
        setIsFamilySite(!isFamilySite)
    } ;
    
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

    return(
        <div className="Original06">
            <Leftutill/>
            <Original06wrap>
                <Original06wrap_header>
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
                                <li className="icon01"><img src="img/icon_wifi.png"/></li>
                                <li className="icon02"><img src="img/icon_species.png"/></li>
                                <li className="icon03"><img src="img/icon_person.png"/></li>
                            </ul>
                        </Icon>
                    </Main01Wrap>
                </Original06wrap_header>
                <Original06wrap_main>
                    <Main02Wrap>
                            <h2>티빙 오리지널 시리즈</h2>
                            <Main02Wrap_02>
                                <ul>
                                    <li><img src="/img/tving_logo.png"/></li>
                                    <li className="series">시리즈</li>
                                </ul>
                                <p 
                                    className="gather"
                                    onClick={handleOption}
                                >종류별 모아보기 +</p>
                            </Main02Wrap_02>
                    </Main02Wrap>
                </Original06wrap_main>
                <Original06wrap_main02>
                        <Ori01_arrow>
                                    <img src="/img/left_arrow.png" onClick={() => {navigate('/')}}/>
                        </Ori01_arrow>
                    <Ori06_main03_01>
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
                    </Ori06_main03_01>
                </Original06wrap_main02>
                <Original06wrap_main03>
                    <img className='mo' src="/img/tving_main.png"/>
                    <img className='pc' src="/img/tving_pcmain.png"/>
                </Original06wrap_main03>
            </Original06wrap>
            {modalOpen && <Original04 setModalOpen={setModalOpen} />}
            <Sub02TopBtn onClick={handleFamilySite}>
                <h2>다른 사이트로 이동</h2>
                <p>
                    <img src='img/btn_drop-down.png'/>
                </p>
                <Sub02Modal>
                    {isFamilySite && <Sub02FamilySite /> }
                </Sub02Modal>
            </Sub02TopBtn>
            <div className="Original06List">
                <Original06List title='영화' id='TR' fetchUrl={requests.fetchAdventureMovies} />
                <Original06List title='역사' id='HT' fetchUrl={requests.fetchHistoryMovies} />
                <Original06List title='외국' id='TR' fetchUrl={requests.fetchAdventureMovies} />
                <Original06List title='로맨스' id='RM' fetchUrl={requests.fetchRomanceMovies} />
                <Original06List title='드라마' id='TR' fetchUrl={requests.fetchAdventureMovies} />
                <Original06List title='키즈' id='AM' fetchUrl={requests.fetchAnimation} />
                <Original06List title='공포' id='HR' fetchUrl={requests.fetchHorrorMovies} />
                <Original06List title='액션' id='AT' fetchUrl={requests.fetchActionMovies} />
            </div>
        </div>
    )
}

export default Original06

const Original06wrap = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;
    @media screen and (min-width: 768px) {
        padding-left:240px    
    }
`

const Original06wrap_header = styled.div`
    width: 100%;
    height: auto;
    background-color: #141517;
`

const Main01Wrap = styled.div`
    position: relative;
    height: 46px;
    max-width: 1200px;
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

const Original06wrap_main = styled.div`
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

    .series{
        margin-left: 7px;
    }

    img{
        margin-left: 4px;
        width: 90px;
        height: 29px;
    }
`

const Original06wrap_main02 = styled.div`
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 18px;
    padding-left: 23px;
`

const Ori06_main03_01 = styled.div`
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

const Original06wrap_main03 = styled.div`
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