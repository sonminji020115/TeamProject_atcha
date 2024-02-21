import { useState, useEffect } from "react"
import axios from "../api/axios";
import { truncate } from "../utill/truncate";
import './SubPage01.css';
import { useNavigate } from "react-router-dom";

const DetailPage4 = ({ title, id, fetchUrl }) => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        async function fetchMovieData() {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results.slice(0, 8));
        }  
        fetchMovieData();
    }, []);

    return (
        <div className="DetailPage4">
            <h1>{title}</h1>
                <div className="smovie">
                    {movies.map((movie) => (
                        <div key={movie.id} className="sImgCard3">
                            <div className="poster">
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    onClick={()=>{navigate(`/sub/${movie.id}`); scrollToTop()}}
                                />
                            </div>
                            <p className="title">
                                {
                                    truncate(movie.title || movie.name, 8)
                                }
                            </p>
                        </div>
                    ))}
                </div>
            </div>
    )
}
export default DetailPage4