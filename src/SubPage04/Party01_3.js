import './Party.css'
import axios from '../api/axios'
import { useState, useEffect } from 'react'
import Party3slick from 'react-slick'


const Party3 = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([])
    const [isnotice, setisnotice] = useState(false)

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results.slice(0, 15));
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData]);

    return (
        <div className="Party3">
            <div className='party3name'><h1>다가오는 파티</h1></div>
            <p className='partynow'>오늘(1월 9일)</p>
            <Party3slick {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} className="partycard">
                        <div className='partytime'>오후  21:00</div>
                        <div className="partyposter">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            />
                        </div>
                        <div className='partyres'>
                            <p className='partyst'>21시 영화 시작</p>
                            <div className='partypro'>
                                <img src='./img/profile3.png' />
                                <p>닉네임 | 2명 참가중</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Party3slick>
        </div>
    )
}
export default Party3 