import './Left.css'
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

const Left = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');

    React.useEffect(() => {
        setActiveItem(location.pathname);
    }, [location.pathname]);

    const handleItemClick = (path) => {
        navigate(path);
        setActiveItem(path);
    };
    return (
        <div className="Left">
            <div className='logo1'>
                <img src="../img/atcha_logo.png" onClick={() => { navigate('/') }} />
            </div>
            <div className='lefttop'>
                <div className={`home1 ${activeItem === '/' ? 'active1' : ''}`}
                    onClick={() => handleItemClick('/')}>
                    <img src='../img/home.png' />
                    <p>홈</p>
                </div>
                <div className={`movies1 ${activeItem === '/recom' ? 'active1' : ''}`}
                    onClick={() => handleItemClick('/recom')}>
                    <img src='../img/movie.png' />
                    <p>개봉관</p>
                </div>
            </div>
            <div className={`party1 ${activeItem === '/party' ? 'active1' : ''}`}
                    onClick={() => handleItemClick('/party')}>
                <img src='../img/party.png' />
                <p>파티</p>
                <p className='partynew'>New</p>
            </div>
            <div className={`search1 ${activeItem === '/search' ? 'active1' : ''}`}
                onClick={()=>handleItemClick('/search')}>
                <img src='../img/search.png' />
                <p >찾기</p>
            </div>
            <div className='review1'>
                <img src='../img/review.png' />
                <p>평가</p>
            </div>
            <div className={`box1 ${activeItem === '/mypage' ? 'active1' : ''}`}
                    onClick={() => handleItemClick('/mypage')}>
                <img src='../img/box.png' />
                <p>보관함</p>
            </div>
        </div>
    )
}
export default Left;