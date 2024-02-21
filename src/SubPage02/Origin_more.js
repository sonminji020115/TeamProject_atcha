import PHeader from '../SubPage04/PHeader'
import Original03_1 from './Original03_1'
import Original03_2 from './Original03_2'
import requests from '../api/requests'
import Bottom from '../component/Layout/Bottom'

const origin_more = () => {
    return(
        <div className="Recommend">
            <PHeader/>
            <Original03_1 title='어드벤쳐' id='AM' fetchUrl={requests.fetchAdventureMovies}/>
            <Original03_2 title='어드벤쳐' id='AM' fetchUrl={requests.fetchAdventureMovies}/>
            <Bottom/>
        </div>
    )
}
export default origin_more