import RecHeader from './RecHeader'
import Recommend1 from './Recommend1'
import Recommend2 from './Recommend2'
import requests from '../api/requests'
import Left from '../utill/Left'
import './Recommend.css'

const Recommend = () => {
    return(
        <div className="Recommend">
            <Left/>
            <RecHeader/>
            <Recommend1/>
            <Recommend2 title='애니메이션 골라보기' id='RM' fetchUrl={requests.fetchAnimation}/>
        </div>
    )
}
export default Recommend