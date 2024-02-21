import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios.js";
import { truncate } from '../utill/truncate.js';
import styled from "styled-components";
import './ReviewModal.css';

const ReviewModal = ({ addReview, closeModal, showModalFromStar }) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [star, setStar] = useState(1);
    const [hoveredStar, setHoveredStar] = useState(null);


    let { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/movie/${movieId}`);
            // console.log(response);
            setMovieInfo(response.data);
        }
        fetchData();
    }, [movieId])

    const handleClose = () => {
        closeModal();
    }

    const reviewClose = () => {
        if (name !== '' && content !== ''){
            closeModal()
        }
    }

    const handleStarClick = (clickedStar) => {
        setStar(clickedStar);
    }

    const handleStarHover = (hoveredStar) => {
        setHoveredStar(hoveredStar);
    }

    const handleStarLeave = () => {
        setHoveredStar(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            id: Date.now(),
            name,
            content,
            star,
            img: '../img/profile4.png'
        };

        addReview(newReview);

        setName('');
        setContent('');
        setStar(1);

    };



    const Moda = styled.div`
    background-image: url(http://image.tmdb.org/t/p/original/${movieInfo.backdrop_path});
    background-size: cover;
    background-position: center;
    position: relative;
    background-repeat: no-repeat;
    padding-top : 50px;
    padding-left : 15px;
    padding-right : 15px;
    padding-bottom : 30px;

    `;


    return (
        <div className="ReviewModal">
            <form onSubmit={handleSubmit}>
                <Moda className="modaltop">
                    <div className="reviewtitle">
                        <h2 className="title2">리뷰 작성</h2>
                        <p>
                            <button className="closebtn" onClick={handleClose}>Ｘ</button>
                        </p>
                    </div>
                    <div className="modalbottom">
                            <p className="modaltitle">{movieInfo.title}</p>
                            <p>{movieInfo.tagline}</p>
                    </div>
                </Moda>
                <p>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력해주세요" required />
                </p>
                <p>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="리뷰내용을 작성해주세요" required />
                </p>
                <p className="score">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <span
                            key={index}
                            className={`star ${index <= (hoveredStar !== null ? hoveredStar : star) ? 'filled' : ''}`}
                            onClick={() => handleStarClick(index)}
                            onMouseEnter={() => handleStarHover(index)}
                            onMouseLeave={handleStarLeave}
                        >
                            ★
                        </span>
                    ))}
                </p>
                <button className="reviewbtn" type="submit" onClick={reviewClose}>작성하기</button>
            </form>
        </div>
    );
};

export default ReviewModal;