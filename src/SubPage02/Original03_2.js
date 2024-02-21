import './Original03_1.css'
import { useState, useEffect } from "react"
import axios from "../api/axios";
import { truncate } from "../utill/truncate";
import { useNavigate } from 'react-router-dom';

const Original03_2 = ({ title, fetchUrl }) => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([])

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results.slice(0, 15));
    };

    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData]);
    // console.log(movies)
    return (
        <div className="Recommend2">
            <div className="recmovie">
                {movies.map((movie) => (
                    <div key={movie.id} className="rImgCard">
                        <div className="rposter">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                onClick={()=>{navigate(`/sub/${movie.id}`)}}
                            />
                        </div>
                        <p className="title">
                            {
                                truncate(movie.title || movie.name)
                            }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Original03_2