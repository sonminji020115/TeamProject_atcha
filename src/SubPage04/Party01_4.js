import './Party.css'
import axios from '../api/axios'
import { useState, useEffect } from 'react'
import Party4slick from 'react-slick'

const Party4 = ({title, fetchUrl}) => {
        const [movies, setMovies] = useState([])
    
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
    

    return(
        <div className="Party4">
            <div className='Party4_d'>
                <p>내일 (1월 10일)</p>
                <Party4slick {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} className="partycard">
                        <div className='partytime'>오전  09:30</div>
                        <div className="partyposter">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            />
                        </div>
                        <div className='partyres'>
                            <p className='partyst'> 내일 9시 30분</p>
                            <div className='partypro'>
                                <img src='./img/profile4.png' />
                                <p>닉네임 | 0명 참가중</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Party4slick>
            </div>
        </div>
    )
}
export default Party4