import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Mypage03.css';
import RecHeader from '../Recommend/RecHeader';
import Left from '../utill/Left'

const sortOptionList = [
    {value : 'latest', name : '최신순'},
    {value : 'oldest', name : '오래된 순'}
];

const ControlMenu = ({value, onChange, optionList}) => {
    return <select value={value} onChange={(e)=>{onChange(e.target.value)}}>
        {optionList.map((it) => (
            <option key={it.value} value={it.value}>
                {it.name}
            </option>
        ))}
    </select>
};

const Mypage03 = () => {
    const navigate = useNavigate();

    const [sortType, setSortType] = useState('latest');

    const [reviews, setReviews] = useState([
        {
            id : 3,
            profile: '/img/rw01.png',
            name: '쿠리만쥬',
            receive : '4.0',
            poster : 'img/mp_review.webp',
            moviename : '추억의 마니',
            moviedate : '영화 ˙ 2015',
            text : '어느정도 예상한 스토리였지만 눈물이 났다... 상처를 받는것도 나 자신. 치료하는 것도 결국 나 자신. 사랑하는 사람에게 내가 해 줄 수 있는 것이 무엇인지 느끼게 되는 영화',
            date: 1704326400000
        },
        {
            id : 2,
            profile: '/img/rw01.png',
            name: '쿠리만쥬',
            receive : '4.5',
            poster : 'img/mp_review02.webp',
            moviename : '괴물',
            moviedate : '영화 ˙ 2023',
            text : '“우린 새로 태어난걸까?” “원래대로야.” 감독이 전하고자하는 의미는 아이들을 통해 나에게 완전히 다가왔다. 맞아, 바뀌지 않아. 바뀌지 않아도 돼. 어떻게 이런 영화를...곱씹을수록 좋다.',
            date: 1704240000000
        },
        {
            id : 1,
            profile: '/img/rw01.png',
            name: '쿠리만쥬',
            receive : '3.0',
            poster : 'img/mp_review03.webp',
            moviename : '천박사 퇴마 연구소: 설경의 비밀',
            moviedate : '영화 ˙ 2023',
            text : '반쪽짜리 설경과 반쪽짜리 검이어도 강동원 손에 들어가면 얘기가 다르지.',
            date: 1704067200000
        },
        {
            id : 0,
            profile: '/img/rw01.png',
            name: '쿠리만쥬',
            receive : '4.0',
            poster : 'img/mp_review04.webp',
            moviename : '마법소녀 마도카☆마기카',
            moviedate : '애니메이션 ˙ 2011',
            text : '당연한 이야기겠다만 절망은 희망의 끝에서 오고 희망 역시 절망의 끝에서 오는 거니까.',
            date: 1700870400000
        }
    ]);

    const getProcessList = () => {
        const compare = (a, b) => {
            if(sortType === 'latest'){
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        };
        const copyList = JSON.parse(JSON.stringify(reviews));
        const sortList = copyList.sort(compare);
        return sortList;
    };

    
    return(
        <div className="Mypage03">
            <RecHeader />
            <Left />
            <div className='m3_in'>
                <div className='m3_01'>
                    <p className='m1_img'><img src='img/pv_b.png' onClick={()=>{navigate(-1)}} /></p>
                    <p className='m1_txt'><span>쿠리만쥬</span> 님의 리뷰목록</p>
                </div>
                <div className='lode'>
                    <ControlMenu 
                        value={sortType}
                        onChange={setSortType}
                        optionList={sortOptionList}
                    />
                </div>
                <div>
                    {getProcessList().map((review) => (
                        <div className='review' key={review.id}>
                            <div className='reviewer'>
                                <p className='rename'><img src={review.profile}/>{review.name}</p>
                                <p className='review_t'><img src='/img/review.svg' />{review.receive}</p>
                            </div>
                            <div className='m3_content'>
                                <div className='m3_post'>
                                    <img src={review.poster} />
                                </div>
                                <div className='m3_text'>
                                    <p className='m3i_01'>{review.moviename}</p>
                                    <p className='m3i_02'>{review.moviedate}</p>
                                    <p className='m3i_03'>{review.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Mypage03.defaultProps = {
    reviews : []
}

export default Mypage03;