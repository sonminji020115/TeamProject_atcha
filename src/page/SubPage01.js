import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "../api/axios.js";
import requests from '../api/requests.js';
import Sub01 from "../SubPage01/Sub01.js";
import Sub02 from "../SubPage01/Sub02.js";
import DetailPage3 from "../SubPage01/DetailPage3.js";
import DetailPage4 from "../SubPage01/DetailPage4.js";
import Leftutill from "../utill/Left.js";
import RecHeader from "../Recommend/RecHeader.js";
import styled from "styled-components";

const SubPage01 = () => {

    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    }
    const closeModal = () => {
        setIsModal(false);
    }
    let { movieId } = useParams();

    useEffect(()=>{

    }, [movieId]);
    
    return(
        <Sub01Wrap>
            <Sub01Logo>
                <Leftutill/>    
            <RecHeader />
            </Sub01Logo>
            <Sub01 showModal={showModal} closeModal={closeModal} isModal={isModal} />
            <Sub02 />
            <DetailPage3 showModal={showModal} closeModal={closeModal} isModal={isModal} />
            <DetailPage4 title='비슷한 콘텐츠' id='SC' fetchUrl={requests.fetchNowPlaying} />
        </Sub01Wrap>
    )
};

export default SubPage01;

const Sub01Wrap = styled.div``;

const Sub01Logo = styled.div`
    @media screen and (min-width: 768px) {
    padding-left: 240px; 
    }
`;
