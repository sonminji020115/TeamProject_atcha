import styled from 'styled-components';
import './evaluation_modal.css'

const EvalutionModal = () => {
    return (
        <EvalutionModalModal className='EvalutionModal'>
            <Modal_wrap>
                <wrap>
                    <h5>소식함</h5>
                    <ul>
                        <li><img src='./img/boom.png' /></li>
                        <li>
                            <p className='top'>앗챠에 '선물하기' 기능이 생겼어요 🎉</p>
                            <p className='bottom'>3시간 전</p>
                        </li>
                    </ul>
                    <ul>
                        <li><img src='./img/letter.png' /></li>
                        <li>
                            <p className='top'>앗챠 오리지널 &lt;미나씨, 또 프사 바뀌었네요&gt; 독점 공개!</p>
                            <p className='bottom'>툭하면 프사와 남친이 바뀌는 그녀의 하이퍼 리얼리즘 로맨스💔</p>
                            <p className='bottom'>21시간 전</p>
                        </li>
                    </ul>
                    <ul>
                        <li><img src='./img/boom.png' /></li>
                        <li>
                            <p className='top'>앵콜! &lt;서울의 봄&gt; 1212캐시 증정!</p>
                            <p className='bottom'>이번 설 연휴에는 웹툰 보고 캐시도 받아 가세요🎁</p>
                            <p className='bottom'>2일 전</p>
                        </li>
                    </ul>

                    <ul>
                        <li><img src='./img/boom.png' /></li>
                        <li>
                            <p className='top'>앗챠 콘텐츠를 공유해 큐레이터 링크를 써보세요!🤩</p>
                            <p className='bottom'>8일 전</p>
                        </li>
                    </ul>
                    <ul>
                        <li><img src='./img/boom.png' /></li>
                        <li>
                            <p className='top'>앗챠 콘텐츠를 공유할 때 큐레이터 링크를 써보세요🎈</p>
                            <p className='bottom'>9일 전</p>
                        </li>
                    </ul>
                    <ul>
                        <li><img src='./img/boom.png' /></li>
                        <li>
                            <p className='top'>&lt;노량: 죽음의 바다&gt; 구매 시 1,000캐시 증정</p>
                            <p className='bottom'>10일 전</p>
                        </li>
                    </ul>
                </wrap>
            </Modal_wrap>
        </EvalutionModalModal>
    )
};

export default EvalutionModal;
const EvalutionModalModal = styled.div`
    position: absolute;
    top: 33px;
    right: -15px;
    width: 220px;
    height: 300px;
    z-index: 999;
    // z-index: 999999;
    
    @media screen and (min-width: 768px) {
        width: 320px;
        height: 400px;
    }

    @media screen and (min-width: 1024px) {
        height: 500px;
    }

    @media screen and (min-width: 1920px) {
    }


`

const Modal_wrap = styled.div`
    width: 100%;
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #28292a;
    overflow: auto;
    overscroll-behavior: contain;

    @media screen and (min-width: 375px) {
        max-height: 300px;

        img{
            width: 40px;
            height: 40px;
        }

        h5{
            font-size: 20px;
        }

        p{
            font-size: 13px;
        }
    }
    @media screen and (min-width: 768px) {
        padding-top: 15px;
        padding-left: 20px;
        padding-right: 30px;
    }

    @media screen and (min-width: 1024px) {
    }

    @media screen and (min-width: 1920px) {
    }


`;
