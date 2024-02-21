import styled from "styled-components";
import'./Main01.css';
import { useNavigate } from "react-router-dom";
import RecHeader from "../Recommend/RecHeader";

const Main01 = () => {
    const navigate = useNavigate();

    return(
    <div className="main01">
        <Main01Wrap>
            <RecHeader />
        </Main01Wrap>
        <div className="main01_2">
            <h1>홈</h1>
            <div className="main01_2_img0"><img src="img/main01_baner_0.jpg"/></div>
            <img className="main01_2_img1" src="img/main01_baner.png"/>
            <img className="main01_2_img2" src="img/main01_baner2.png" onClick={()=>{navigate('/party')}}/>
            <h2>오리지널 콘텐츠 모아보기</h2>
            <ul>
                <li><img src="img/netflix.png" onClick={()=>{navigate('/sub02')}}/></li>
                <li><img src="img/disney.png" onClick={()=>{navigate('/disney')}}/></li>
                <li><img src="img/tving.png" onClick={()=>{navigate('/tving')}}/></li>
                <li><img src="img/wavve.png" onClick={()=>{navigate('/wavve')}}/></li>
            </ul>
        </div>
    </div>
    )
}

export default Main01;

const Main01Wrap = styled.div`
    background-color: #141517;
    padding-left: 20px;
    padding-right: 20px;
    height: 46px;
    top: 0px;
    left: 0;
`;