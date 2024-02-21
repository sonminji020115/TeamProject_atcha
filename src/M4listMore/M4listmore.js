import './M4listmore.css';
import requests from '../api/requests';

import M4listmore02 from './M4listmore02';
import RecHeader from "../Recommend/RecHeader";
import Left from "../utill/Left";

const M4listmore = () => {
    return(
        <div className="M4listmore">
            <RecHeader />
            <Left />
            <div className='m4l_in'>
                <img src='./img/m4list.jpg'/>
                <h1>앗챠에서 일해? 요즘 볼 거 뭐있어?</h1>
                <h2>앗챠 개발자's 님의 리스트 <span>15개의 콘텐츠</span></h2>
                <button>보고싶어요</button>
                <p className='m4l_etc'>앗챠에서 일하면 감상문 써야한다는데 진짜인가요? 💭</p>
            </div>
            <M4listmore02 id='TR' fetchUrl={requests.fetchFantasy} />
        </div>
    )
}

export default M4listmore;