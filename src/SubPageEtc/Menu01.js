import './Menu.css';
import { useNavigate } from 'react-router-dom';

const Menu01 = () => {
    const navigate = useNavigate();
    
    return(
        <div className="Menu01">
            <div className='menu_in'>
                <div className='m01'>
                    <div>
                        <p onClick={()=>{navigate(-1)}} className='pvev'>
                            <img src="/img/pv.png" /></p>
                    </div>
                    <div className="icon">
                            <p className="icon01"><img src="img/icon_wifi.png"/></p>
                            <p className="icon02"><img src="img/icon_species.png"/></p>
                            <p className="icon03"><img src="img/icon_person.png" onClick={()=>{navigate('/mypage')}}/></p>
                    </div>
                </div>
                <div className='m02'>
                    <h1>추천 메뉴</h1>
                    <ul>
                        <li>ORIGINAL</li>
                        <li>드라마</li>
                        <li>예능</li>
                        <li>애니메이션</li>
                        <li>해외시리즈</li>
                        <li>영화</li>
                    </ul>
                </div>
                <div className='m03'>
                    <h1>영화</h1>
                    <ul>
                        <li>업데이트</li>
                        <li>드라마</li>
                        <li>로맨스</li>
                        <li>코미디</li>
                        <li>액션</li>
                        <li>SF/판타지</li>
                        <li>모험</li>
                        <li>범죄</li>
                    </ul>
                </div>
                <div className='m04'>
                    <h1>해외시리즈</h1>
                    <ul>
                        <li>미드</li>
                        <li>중드</li>
                        <li>일드</li>
                        <li>영드</li>
                        <li>대드</li>
                        <li>다큐</li>
                        <li>액션</li>
                        <li>미스터리</li>
                    </ul>
                </div>
                <div className='m05'>
                    <h1>방송</h1>
                    <ul>
                        <li>인기 드라마</li>
                        <li>인기 예능</li>
                        <li>애니메이션</li>
                        <li>키즈</li>
                        <li>스포츠</li>
                        <li>시사교양</li>
                        <li>크리에이터</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu01;