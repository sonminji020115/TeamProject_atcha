import './Menu.css';
import Left from '../utill/Left.js';

import { useEffect, useState } from 'react';
import axios from '../api/axios.js';
import requests from '../api/requests.js';

const Menu02 = () => {
    const [movie, setMovie] = useState([]);
    const [movie2, setMovie2] = useState([]);
    const [movie3, setMovie3] = useState([]);
    const [movie4, setMovie4] = useState([]);

    useEffect(()=>{
        fetchData();
        fetchData02();
        fetchData03();
        fetchData04();
    }, [])

    const fetchData = async () => {
        const response = await axios.get(requests.fetchThrillerMovies);
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id;
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {

            params: { append_to_response: 'videos' }
        });
        setMovie(movieDetail);
    // console.log(response, 111);
    // console.log(movieDetail, 111);
    }
    const fetchData02 = async () => {
        const response = await axios.get(requests.fetchAdventureMovies);
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id;
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: 'videos' }
        });
        setMovie2(movieDetail);
    // console.log(response, 222)
    // console.log(movieDetail, 222);
    }
    const fetchData03 = async () => {
        const response = await axios.get(requests.fetchThrillerMovies);
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id;
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: 'videos' }
        });
        setMovie3(movieDetail);
    // console.log(response, 333)
    // console.log(movieDetail, 333);
    }
    const fetchData04 = async () => {
        const response = await axios.get(requests.fetchFantasyMovies);
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id;
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: 'videos' }
        });
        setMovie4(movieDetail);
    // console.log(response, 444)
    // console.log(movieDetail, 444);
    }
    

    return(
        <div className="Menu02">
            <Left />
            <div className='m2_in'>
                <div>
                    <input
                        type="text"
                        placeholder="제목, 장르, 배우로 찾아보세요!"
                    />
                </div>
                <div className='sc_bn'>
                    <div className='sc_title'>
                        <h1>이번 주 인기 영화</h1>
                    </div>
                    <div className='sc_in'>
                        <div className='sc_img'>
                            <img src={
                                movie.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                                : '/img/noImg.jpg'
                            }
                            />
                        </div>
                        <div className='sc_name'>{movie.title || movie.name || movie.original_name}                        </div>
                    </div>
                    <div className='sc_in'>
                        <div className='sc_img'>
                            <img src={
                                movie2.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${movie2.backdrop_path}`
                                : '/img/noImg.jpg'
                            } />
                        </div>
                        <div className='sc_name'>
                            {
                            <p>{movie2.title || movie2.name || movie2.original_name}</p>
                            }
                        </div>
                    </div>
                    <div className='sc_in'>
                        <div className='sc_img'>
                            <img src={
                                movie3.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${movie3.backdrop_path}`
                                : '/img/noImg.jpg'
                            } />
                        </div>
                        <div className='sc_name'>
                            {movie3.title || movie3.name || movie3.original_name}
                        </div>
                    </div>
                    <div className='sc_in'>
                        <div className='sc_img'>
                            <img src={
                                movie4.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${movie4.backdrop_path}`
                                : '/img/noImg.jpg'
                            } />
                        </div>
                        <div className='sc_name'>
                            {movie4.title || movie4.name || movie4.original_name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu02;