import styled from "styled-components";

const Sub01ModalDot = () => {
    return(
        <Sub01ModalWrap>
            <ul>
                <li>공유하기</li>
                <li>앗챠피디아에서 더 자세히 보기</li>
            </ul>
        </Sub01ModalWrap>
    )
};

export default Sub01ModalDot;

const Sub01ModalWrap = styled.div`

    color: #fff;
        ul{
            display: inline-block;
            padding: 10px 10px;
            border-radius: 4px;
            background-color: #28292a;
                li{
                    line-height: 2.8;
                }
        }
`;

