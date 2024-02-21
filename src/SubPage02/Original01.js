import React, { useState } from "react";
import styled from "styled-components";
import axios from "../api/axios.js";
import './SubPage02.css'
import Leftutill from "../utill/Left.js";
import Original04 from "./Original04.js";
import { useNavigate } from "react-router-dom";

const Original01 = () => {
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
            <div className="Original01">
            <Leftutill/>
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
                                <li className="icon01"><img src="img/icon_wifi.png"/></li>
                                <li className="icon02"><img src="img/icon_species.png"/></li>
                                <li className="icon03"><img src="img/icon_person.png"/></li>
                            </ul>
                        </Icon>
                    </Main01Wrap>
                </Original01wrap_header>
                <Original01wrap_main>
                    <Main02Wrap>
                            <h2>넷플릭스 오리지널 시리즈</h2>
                            <Main02Wrap_02>
                                <ul>
                                    <li><img src="/img/netflix_logo.png"/></li>
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
                    <img src="/img/Original01_banner.png"/>
                </Original01wrap_main03>
            </Original01wrap>
            {modalOpen && <Original04 setModalOpen={setModalOpen} />}
            </div>
        );
}

export default Original01;

const Original01wrap = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;
    @media screen and (min-width: 768px) {
        padding-left:240px    
    }
`

const Original01wrap_header = styled.div`
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
`
const Ori01_arrow = styled.div`
    margin-left: 5px;
    margin-bottom: 15px;

    img{
        cursor: pointer;
    }
`