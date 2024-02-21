import React, { useState } from 'react';
import './SubPage01.css';
import ReviewModal from './ReviewModal'

const DetailPage3 = ({closeModal, showModal, isModal}) => {

    

    const [reviews, setReviews] = useState([
        {
            img: '/img/profile3.png',
            id: 2,
            name: '전문리뷰어1',
            content: '"이 영화는 근래 만들어진 한국 영화 중에서 수작으로 꼽을 만하다. 인물들의 찰떡같은 연기력 그리고 긴장감을 놓을 수 없게 만드는 연출은 영화의 완성도를 더 높여준다.”',
            star: 5,
        },
        {
            img: '/img/profile2.png',
            id: 1,
            name: '일번',
            content: '재미있는 영화',
            star: 3,
        },
        {
            img: '/img/profile1.png',
            id: 0,
            name: '두부 멘탈',
            content: '재밌게 보고 갑니다',
            star: 4,
        },
    ]);

    const addReview = (newReview) => {
        setReviews([newReview, ...reviews]);
    };


    return (
        <div className='DetailPage3'>
            <div className='title1'>
                <h1>영화리뷰란</h1>
                <p onClick={showModal}>리뷰쓰기</p>
            </div>
            {reviews.map((review) => (
                <div className='review' key={review.id}>
                    <div className='reviewer'>
                        <p className='rename'><img src={review.img}/>{review.name}</p>
                        <p className='review_t'>평점: {review.star}점</p>
                    </div>
                    <p className='review_b'>{review.content}</p>
                </div>
            ))}

            <div className={isModal ? 'modal show' : 'modal'}>
                <ReviewModal addReview={addReview} closeModal={closeModal} />
            </div>
        </div>
    );
};



export default DetailPage3;