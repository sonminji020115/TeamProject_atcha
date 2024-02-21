import './SubPage02.css'

import styled from "styled-components";
import axios from "../api/axios.js";

const Original04 = ({setModalOpen}) => {


    return(
        <Original04wrap>
            <Original04wrap_header>
                <Header_Wrap>
                    <Icon01>
                        <img 
                            src='/img/left_arrow.png'
                            onClick={()=>{setModalOpen(false)}}
                        />
                    </Icon01>
                    <Icon02>
                        <ul>
                            <li className="icon01"><img src="img/icon_wifi.png"/></li>
                            <li className="icon02"><img src="img/icon_species.png"/></li>
                            <li className="icon03"><img src="img/icon_person.png"/></li>
                        </ul>
                    </Icon02>
                </Header_Wrap>
            </Original04wrap_header>
            <Original04wrap_main>
                <Main_Wrap>
                    <h1>종류별 모아보기</h1>
                    <p>역사</p>
                    <p>외국</p>
                    <p>키즈</p>
                    <p>SF&액션</p>
                    <p>코미디&가족</p>
                    <p>로맨스</p>
                    <p>호러&스릴러</p>
                    <p>판타지</p>
                </Main_Wrap>
            </Original04wrap_main>
        </Original04wrap>
    )
}

export default Original04;

const Original04wrap = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 999;
    background-color: #000;
`

const Original04wrap_header = styled.div`
    width: 100%;
    height: auto;
    background-color: #141517;
`

const Header_Wrap = styled.div`
    position: relative;
    background-color: #141517;
    max-width: 1200px;
    height: 46px;
    margin-left: auto;
    margin-right: auto;
`

const Icon01 = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    top: 20px;
    left: 20px;

    img{
        cursor: pointer;
    }
`

const Icon02 = styled.div`
    width: 100%;

    ul{
        position: absolute;
        display: flex;
        right: 20px;
        top: 17px;
    }

    li{
        margin-left: 8px;
    }

    img{
        cursor: pointer;
    }
`

const Original04wrap_main = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;
`

const Main_Wrap = styled.div`
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 40px;
    padding-left: 27px;
    padding-right: 27px;
    padding-bottom: 25px;
    color: #fff;

    h1{ 
        margin-bottom: 40px;
        font-size: 22px;
    }

    p{  
        margin-bottom: 15px;
        padding-bottom: 19px;
        font-size: 17px;
        font-weight: 600;
        border-bottom: 1px solid #1D1D1D;
        cursor: pointer;
    }
`