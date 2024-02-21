import '../SubPage03/Mypage01.css';
import Left from '../utill/Left';
import RecHeader from "../Recommend/RecHeader";

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Mypage04 = () => {
    const [follow, setFollow] = useState(true);
    const navigate = useNavigate();

    const handleNow = () => {
        setFollow(!follow);
    };
    
    return(
        <div className="Mypage04">
            <RecHeader />
            <Left />
            <div className='mp_all'>
                <div className='mp_in'>
                    <div className='mp_bg'>
                        <p className='mp_01'><img src='img/mypage_bg2.png' /></p>
                        <div className='bg_icon'>
                            <div className='mp_02'><p><img src='img/pv_b.png' onClick={()=>{navigate(-1)}} /></p></div>
                        </div>
                    </div>
                    <div className='mp_pro'>
                        <div className='img'>
                            <img src='img/Ellipse4.png' />
                        </div>
                        <div className='text'>
                            <p className='txt01'>앗챠 개발자</p>
                            <p className='txt02'>언제나 집에 가고싶은 사람들의 모임</p>
                            <p className='txt03'>팔로워 : 5002명 <span className='txt04'>팔로잉 : 2명</span></p>
                            <button className='txt05' onClick={handleNow}>{ follow ? '팔로우' : '언팔로우' }</button>
                        </div>
                    </div>
                </div>
                <div className='my_02'>
                    <div className='m2_in'>
                        <div>
                            <p>1005</p>
                            <p>평가</p>
                        </div>
                        <div>
                            <p>700</p>
                            <p>리뷰</p>
                        </div>
                        <div>
                            <p>32</p>
                            <p>리스트</p>
                        </div>
                    </div>
                </div>
                <div className='my_03'>
                    <h1>앗챠 개발자 님의 공개 리스트</h1>
                    <div className='m3_in'>
                        <div className='m3a'>
                            <p className='m3_img'><img src='img/list03.jpg' /></p>
                            <p className='m3_txt'>앗챠에서 일해? 요즘 볼 거 뭐있어?</p>
                        </div>
                        <div className='m3a'>
                            <p className='m3_img'><img src='img/list04.jpg' /></p>
                            <p className='m3_txt'>그 시절 투니버스 다시보기</p>
                        </div>
                        <div className='m3pc'>
                            <p className='m3_img'><img src='img/list06.jpg' /></p>
                            <p className='m3_txt'>독점 연프 몰아보기</p>
                        </div>
                    </div>
                </div>
                <div className='my_04'>
                    <h1>리뷰 목록</h1>
                    <div className='m4_in'>
                        <p className='m4_photo'><img src='img/mp_review2.jpg' /></p>
                        <div className='m4_text'>
                            <p className='m4t_01'>고양이를 빌려드립니다</p>
                            <p className='m4t_02'>평점 : <span>★★★☆☆</span></p>
                            <p className='m4t_03'> 자극적인 영화만 봤다면 때로 이런 영화도 보며 기분좋게 웃는 것도 좋다~ <br /> 이래서 영화는 다양하게 봐야 한다. <br />사람에게 상처 받은걸 때론, 아니 자주 동물에게 치료를 받을 수 있는게 고맙기도 하고 씁쓸하기도 하다.</p>
                        </div>
                    </div>
                    <p className='m4_more'>더보기</p>
                </div>
            </div>
        </div>
    )
}

export default Mypage04;