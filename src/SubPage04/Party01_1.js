import './Party.css'
import Main03Slide03Wrap from 'react-slick';
import { useState, useEffect } from 'react';
import Partymodal1 from './Partymodal1';
import { useNavigate } from 'react-router-dom';
import Party02 from './Party02'
import axios from '../api/axios';

const Party1 = ({ title, id, fetchUrl }) => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isParty02Visible, setIsParty02Visible] = useState(false);

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        // console.log(response);
        setMovies(response.data.results);
    };

    const openParty02Modal = () => {
        setIsParty02Visible(true);
      };
    
      const closeParty02Modal = () => {
        setIsParty02Visible(false);
      };
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData]);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const CloseModal = () => {
        setIsModalVisible(false);
    };

    // console.log(movies);

    return (
        <div className="Main03List03">
            <div className='party1img'>
                <div className='partyback' onClick={openParty02Modal} ><img src='./img/Party1.png' /></div>
                <div onClick={openModal} className='partychat'><img src='/img/chat.png' /></div>
                {isModalVisible && <Partymodal1 closeModal={CloseModal} />}
                {isParty02Visible && <Party02 closeModal={closeParty02Modal} />}
            </div>
            <h1>열린파티</h1>
            <Main03Slide03Wrap {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} className="sImgCard">
                        <div className='partyphoto'>
                            <p>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    onClick={() => { navigate(`/party_play/${movie.id}`) }}
                                />
                            </p>
                            <p className="party_box">{movie.title}</p>
                        </div>
                        <div className='partyde'>
                            <div className='pd1'>
                                <p>제목1</p>
                                <img src='./img/icon_watch_info.png' />
                            </div>
                            <div className='pd2'>
                                <img src='./img/profile1.png' />
                                <p>이름 | 0명 참가중</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Main03Slide03Wrap>
        </div>
    )
};

export default Party1