import styled from "styled-components";
import './SubPage04.css';
import { useState } from "react";

const Party04 = ({setDropout}) => {

    const handleCloseModal = () => {
        setDropout(false)
    }

    return(
        <Party04Wrap>
            <Party04MainWrap>
                <Party04Main>
                    <img src="/img/main_backgorundimage.jpg"/>
                </Party04Main>
                <Party04_Icon01>
                    <img src="/img/Close.png" onClick={handleCloseModal} />
                </Party04_Icon01>
                <Party04_Icon02>
                    <img src="/img/photo_chat05.png" />
                    <ul>
                        <li className="Profile">&lt;앗챠차&gt;</li>
                        <li className="name">&#40;gogoate828&#41;</li>
                        <li><span>팔로우 : 10명</span><span>팔로워 12명</span></li>
                    </ul>
                </Party04_Icon02>
                <Party04_Icon03>
                    <ul>
                        <li><img src="/img/Unavailable.png" /></li>
                        <li><img src="/img/Error.png" /></li>
                        <li><img src="/img/Kicking.png" /></li>
                    </ul>
                </Party04_Icon03>
            </Party04MainWrap>
        </Party04Wrap>
    )
}

export default Party04;

const Party04Wrap = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;
`

const Party04MainWrap = styled.div`
    position: relative;
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

const Party04Main = styled.div`    
    img{
        width: 100%;
        height: auto;
    }
`

const Party04_Icon01 = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;

    img{
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`

const Party04_Icon02 = styled.div`
    position: absolute;
    top: 35px;
    left: 30px;
    display: flex;

    img{
        width: 65px;
        height: 65px;
        margin-right: 30px;
        cursor: pointer;
    }

    span{
        margin-right: 20px;
    }
`

const Party04_Icon03 = styled.div`
    position: absolute;
    top: 120px;
    left: 100px;

    ul{
        display: flex;
    }

    li{
        margin-right: 30px;
        cursor: pointer;
    }
`
