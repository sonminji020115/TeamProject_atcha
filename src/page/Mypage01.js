import '../SubPage03/Mypage01.css';
import My04 from '../../src/SubPage03/My04.js'
import Left from '../utill/Left.js'
import RecHeader from "../Recommend/RecHeader";

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Mypage01 = () => {
    const [isSide, setIsSide] = useState(false);

    const navigate = useNavigate();
    const handleSide = () => {
        setIsSide(true)
    };

    return(
        <div className="Mypage01">
            <RecHeader />
            <Left/>
            <div className='mp_all'>
                <div className='mp_in'>
                    <div className='mp_bg'>
                        <p className='mp_01'><img src='img/mypage_bg.png' /></p>
                        <div className='bg_icon'>
                            <div className='mp_02'><p><img src='img/pv_b.png' onClick={()=>{navigate(-1)}} /></p></div>
                            <div className='bg_in'>
                                <p className='mp_03'><img src='img/icon_myp01.png' /></p>
                                <p className='mp_04'><img src='img/icon_myp2.png' onClick={handleSide} /></p>
                            </div>
                        </div>
                    </div>
                    <div className='mp_pro'>
                        <div className='img'>
                            <img src='img/icon_myp_pro.png' />
                        </div>
                        <div className='text'>
                            <p className='txt01'>쿠리만쥬</p>
                            <p className='txt02'>바 : 바밤바 밤 : 맛이나는 바 : 만쥬</p>
                            <p className='txt03'>팔로워 : 1895명 <span className='txt04'>팔로잉 : 5명</span></p>
                        </div>
                    </div>
                </div>
                <div className='my_01'>
                    <div className='m1_in'>
                        <h1>나의 이용권</h1>
                        <div className='m1_text'>
                            <p className='m1t_01'>앗챠 프리미엄 <span className='m1t_02'>2024. 01. 24 ~ 2024. 02. 24</span></p>
                            <p className='m1t_03'>다음 결제일 2024. 02. 24</p>
                            <p className='m1t_04'><img src='img/icon_mypg_next.png' onClick={()=>{navigate('/coupon')}}/></p>
                        </div>
                    </div>
                </div>
                <div className='my_02'>
                    <div className='m2_in'>
                        <div>
                            <p>307</p>
                            <p>평가</p>
                        </div>
                        <div>
                            <p>15</p>
                            <p>리뷰</p>
                        </div>
                        <div>
                            <p>2</p>
                            <p>리스트</p>
                        </div>
                    </div>
                </div>
                <My04 isSide={isSide} setIsSide={setIsSide} />
                <div className='my_03'>
                    <h1>쿠리만쥬 님의 공개 리스트</h1>
                    <div className='m3_in'>
                        <div className='m3a'>
                            <p className='m3_img'><img src='img/list01.jpg' /></p>
                            <p className='m3_txt'>앗챠에서 이거 안 본 사람 있어?</p>
                        </div>
                        <div className='m3a'>
                            <p className='m3_img'><img src='img/list02.jpg' /></p>
                            <p className='m3_txt'>지브리의 감성에 빠질 시간</p>
                        </div>
                        <div className='m3pc'>
                            <p className='m3_img'><img src='img/list05.jpg' /></p>
                            <p className='m3_txt'>이구역 오리지널 컨텐츠 중독자</p>
                        </div>
                    </div>
                </div>
                <div className='my_04'>
                    <h1>리뷰 목록</h1>
                    <div className='m4_in'>
                        <p className='m4_mo'><img src='img/mp_review_mo.jpg' /></p>
                        <div className='m4_text'>
                            <p className='m4t_01'>추억의 마니</p>
                            <p className='m4t_02'>평점 : <span>★★★★☆</span></p>
                            <p className='m4t_03'> 어느정도 예상한 스토리였지만 눈물이 났다... 상처를 받는것도 나 자신. 치료하는 것도 결국 나 자신. <br/> 사랑하는 사람에게 내가 해 줄 수 있는 것이 무엇인지 느끼게 되는 영화</p>
                        </div>
                    </div>
                    <p className='m4_more' onClick={()=>{navigate('/myreview')}}>더보기</p>
                </div>
                <div className='my_05'>
                    <h1>쿠리만쥬 님의 저장 콘텐츠</h1>
                    <div className='m5_in'>
                        <div className='m5_content'>
                            <p><img src='/img/save02.jpg' onClick={()=>{navigate('/sub/play')}} /></p>
                            <p className='text'>남산의 부장들</p>
                            <p className='play'>재생</p>
                        </div>
                        <div className='m5_content'>
                            <p><img src='/img/save03.jpg' /></p>
                            <p className='text'>극장판 짱구는 못말려: 수수께끼! 꽃피는 천하떡잎학교</p>
                            <p className='play'>재생</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mypage01;