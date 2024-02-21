import requests from '../api/requests.js';
import './Original02.css'
import Original02List from "./Original02List.js";

const Original02 = () => {
    return(
        <div className="Original02">
            <Original02List title='영화' id='TR' fetchUrl={requests.fetchAdventureMovies} />
            <Original02List title='역사' id='HT' fetchUrl={requests.fetchHistoryMovies} />
            <Original02List title='외국' id='TR' fetchUrl={requests.fetchAdventureMovies} />
            <Original02List title='로맨스' id='RM' fetchUrl={requests.fetchRomanceMovies} />
            <Original02List title='드라마' id='TR' fetchUrl={requests.fetchAdventureMovies} />
            <Original02List title='키즈' id='AM' fetchUrl={requests.fetchAnimation} />
            <Original02List title='공포' id='HR' fetchUrl={requests.fetchHorrorMovies} />
            <Original02List title='액션' id='AT' fetchUrl={requests.fetchActionMovies} />
        </div>
    )
};

export default Original02;
