import { useNavigate } from "react-router-dom";

const Bottom = () => {
    const navigate = useNavigate();

    return(
        <div className="Bottom">
            <div className="bar">
                <ul>
                    <li onClick={()=>{navigate('/')}} className='home'>홈</li>
                    <li onClick={()=>{navigate('/menu')}} className='cate'>카테고리</li>
                    <li onClick={()=>{navigate('/search')}} className='sc'>검색</li>
                    <li onClick={()=>{navigate('/mypage')}} className='mp'>MY</li>
                </ul>
            </div>
        </div>
    )
}

export default Bottom;