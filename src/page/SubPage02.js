import styled from "styled-components";
import Original01 from "../SubPage02/Original01"
import Original02 from "../SubPage02/Original02.js"
import Original04 from "../SubPage02/Original04.js"
import requests from '../api/requests.js';
import Footer from "../component/Layout/Footer.js";
import { useState } from "react";
import Sub02FamilySite from "../SubPage02/Sub02FamilySite.js";

const SubPage02 = () => {
    const [isFamilySite, setIsFamilySite] = useState(false);
    const handleFamilySite = () => {
        setIsFamilySite(!isFamilySite)
    } ;
    return(
        <Sub02Wrap>
            <Original01 />
            <Sub02TopBtn onClick={handleFamilySite}>
                <h2>다른 사이트로 이동</h2>
                <p>
                    <img src='img/btn_drop-down.png'/>
                </p>
                <Sub02Modal>
                    {isFamilySite && <Sub02FamilySite /> }
                </Sub02Modal>
            </Sub02TopBtn>
            <Original02 />
        </Sub02Wrap>
    )
};

export default SubPage02;


const Sub02Wrap = styled.div`

`;

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
