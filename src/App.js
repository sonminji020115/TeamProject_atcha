import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import SubPage01 from './page/SubPage01';
import SubPage02 from './page/SubPage02'
import Menu01 from './SubPageEtc/Menu01';
import Menu02 from './SubPageEtc/Menu02';
import Mypage01 from './page/Mypage01'
import Mypage02 from './SubPage03/Mypage02'
import Mypage03 from './SubPage03/Mypage03.js';
import Mypage04 from './SubPage03/Mypage04';
import Layout from '../src/component/Layout/Layout.js'
import Recommend from './Recommend/Recommend.js'
import M4listmore from './M4listMore/M4listmore.js';
import Original03 from './SubPage02/Origin_more.js';
import Original05 from './SubPage02/Original05.js';
import Original06 from './SubPage02/Original06.js';
import Original07 from './SubPage02/Original07.js';
import Party from './SubPage04/Party.js';
import Party03 from './SubPage04/Party03.js';
import Click from './SubPage01/Click01.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu01 />} />
                <Route path='/sub/:movieId' element={<SubPage01 />} />
                <Route path='/sub/play' element={<Click/>} />
                <Route path='/sub02' element={<SubPage02 />} />
                <Route path='/disney' element={<Original05 />} />
                <Route path='/tving' element={<Original06 />} />
                <Route path='/wavve' element={<Original07 />} />
                <Route path='/menu' element={<Menu01 />} />
                <Route path='/search' element={<Menu02 />} />
                <Route path='/mypage' element={<Mypage01 />} />
                <Route path='/coupon' element={<Mypage02 />} />
                <Route path='/myreview' element={<Mypage03 />} />
                <Route path='/otherpage' element={<Mypage04 />} /> 
                <Route path='/recom' element={<Recommend/>}/>
                <Route path='/list04more' element={<M4listmore />} />
                <Route path='/original03' element={<Original03/>}/>
                <Route path='/party' element={<Party/>}/>
                <Route path='/party_play/:movieId' element={<Party03 />} />
          </Routes>
        <Layout/>
      </div>
    </BrowserRouter>
  );
}

export default App;
