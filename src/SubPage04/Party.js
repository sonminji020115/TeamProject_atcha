import Party1 from './Party01_1'
import Party2 from './Party01_2'
import Party3 from './Party01_3'
import Party4 from './Party01_4'
import Bottom from '../component/Layout/Bottom'
import requests from '../api/requests' 
import Leftutill from '../utill/Left'
import RecHeader from '../Recommend/RecHeader'

const Party = () => {
    return(
        <div className="Party">
            <Leftutill/>
            <RecHeader/>
            <Party1 title='어드' id='RM' fetchUrl={requests.fetchAdventureMovies} />
            <Party2/>
            <Party3 title='' id='AM' fetchUrl={requests.fetchFantasy}/>
            <Party4 title='' id='AM' fetchUrl={requests.fetchThrillerMovies}/>
            <Bottom/>
        </div>
    )
}
export default Party