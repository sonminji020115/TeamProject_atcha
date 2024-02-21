import styled from 'styled-components';
import requests from '../api/requests';

import Main01 from '../Mainpage/Main01';
import Main02List01 from '../Mainpage/Main02List01';
import Main02List02 from '../Mainpage/Main02List02';
import Main03List01 from '../Mainpage/Main03LIst01';
import Main03List02 from '../Mainpage/Main03List02';
import Main03List03 from '../Mainpage/Main03List03';
import M4list01 from '../Mainpage/M4list01';
import M4list02 from '../Mainpage/M4list02';
import Left from '../utill/Left'

const Home = () => {
    return(
        <div className='Home'>
            <Wrapper>
                <Left/>
                <Main01 />
                <Main02List01 title='Top10' id='TN' fetchUrl={requests.fetchTopRated} />
                <Main02List02 title='만쥬님을 위한 컨텐츠 추천' id='TR' fetchUrl={requests.fetchTrending} />
                <Main03List01 title='시청중인 콘텐츠' id='TR' fetchUrl={requests.fetchThrillerMovies} />
                <Main03List02 title='다시보기 추천 리스트' id='TR' fetchUrl={requests.fetchAdventureMovies} />
                <Main03List03 title='앗챠 파티' id='TR' fetchUrl={requests.fetchFantasyMovies} />
                <M4list01 id='TR' fetchUrl={requests.fetchFantasy} />
                <M4list02 title='공포&호러 장르 콘텐츠 추천' id='HR' fetchUrl={requests.fetchHorrorMovies} />
                <M4list02 title='애니메이션 골라보기' id='RM' fetchUrl={requests.fetchAnimation} />
            </Wrapper>
        </div>
    )
}

export default Home;

const Wrapper = styled.div`
  background-color: #000;
  width:100%;
  @media screen and (min-width: 768px) {
    padding-left:240px 
  }
`;