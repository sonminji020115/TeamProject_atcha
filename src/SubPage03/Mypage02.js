import './SubPage03.css';
import styled from "styled-components";
import Left from '../utill/Left';
import RecHeader from '../Recommend/RecHeader';
import { useNavigate } from 'react-router-dom';


const Mypage02 = () => {
    const navigate = useNavigate();

    return(
        <Mypage02Wrap>
            <RecHeader />
            <Left />
            <div className='mp_02'>
                <Mypage02_main01>
                    <Mypage02_main01_img>
                        <ul>
                            <li className='main01_icon01'><img src='./img/left_arrow_black.png' onClick={()=>{navigate('/mypage')}}/></li>
                            <li className='main01_icon02'><span>쿠리만쥬</span> 님의 이용권</li>
                        </ul>
                    </Mypage02_main01_img>
                </Mypage02_main01>
                <Mypage02_main02>
                    <Mypage02_txt01>
                        <Mypage02_main02_txt01>
                            <h1>앗챠 프리미엄</h1>
                            <Mypage02_main02_txt02>
                                <ul>
                                    <li className='main01_img01'><img src='/img/Magnetic Card.png'/></li>
                                    <li>월 15,500</li>
                                </ul>
                            </Mypage02_main02_txt02>
                            <Mypage02_main02_txt03>
                                <ul>
                                    <li className='main01_img02'><img src='/img/Calendar.png'/></li>
                                    <li>2월 9일에 갱신 예정</li>
                                </ul>
                            </Mypage02_main02_txt03>
                        </Mypage02_main02_txt01>
                    </Mypage02_txt01>
                    <Mypage02_txt02>
                        <Mypage02_Change>
                            <ul>
                                <li>이용권 변경</li>
                                <li>이용권 취소</li>
                            </ul>
                        </Mypage02_Change>
                    </Mypage02_txt02>
                </Mypage02_main02>
            </div>
        </Mypage02Wrap>
    )
}

export default Mypage02;

const Mypage02Wrap = styled.div`
    width: 100%;
    height: auto;
    .RecHeader{
        padding-bottom: 0px;
    }
`

const Mypage02_main01 = styled.div`
    padding-bottom: 120px;
    width: 100%;
    height: 61px;
    background-color: #000;
`

const Mypage02_main01_img = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    background: #D9D9D9;

    ul{
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }
    span{
        font-weight: 600;
    }

    li{
        font-size: 14px;
    }
    img{
        cursor: pointer;
    }
`

const Mypage02_main02 = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;
`

const Mypage02_txt01 = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    background-color: #000;
`

const Mypage02_main02_txt01 = styled.div`
    margin: 0 20px;
    padding: 30px 20px 0px 20px;
    border-radius: 10px;
    background-color: #D9D9D9;

    h1{
        font-size: 20px;
        color: #000;
        padding-bottom: 20px;
        border-bottom: 1px solid #000;
    }
`

const Mypage02_main02_txt02 = styled.p`
    padding-top: 20px;

    ul{
        display: flex;
    }

    li{
        font-weight: 500;
        margin-right: 15px;
        margin-bottom: 10px;
    }
`

const Mypage02_main02_txt03 = styled.p`
    padding-bottom: 20px;

    ul{
        display: flex;
    }

    li{
        font-weight: 500;
        margin-right: 15px;
    }
`

const Mypage02_txt02 = styled.div`
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

const Mypage02_Change = styled.p`
    margin-top: 20px;
    padding: 0 20px;

    ul{
        padding-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }

    li{
        font-size: 15px;
        font-weight: 500;
        background-color: #D9D9D9;
        border-radius: 10px;
        padding: 10px 43px;
        cursor: pointer;
    }
`