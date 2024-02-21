import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Sub02FamilySite = () => {
    const navigate = useNavigate()
    return(
        <FamilySiteWrap>
            <ul>
                <li onClick={()=>{navigate('/sub02')}} >넷플릭스</li>
                <li onClick={()=>{navigate('/tving')}}>티빙</li>
                <li onClick={()=>{navigate('/wavve')}}>웨이브</li>
                <li onClick={()=>{navigate('/disney')}}>디즈니플러스</li> 
            </ul>
        </FamilySiteWrap>
    )
};

export default Sub02FamilySite;

const FamilySiteWrap = styled.div`
    padding: 0px 23px 2px 0px;
    color: #fff;
    background-color: #000;
        ul{
            li{
                font-size: 14px;
                font-weight: 500;
                line-height: 30px;
            }
        }
`;