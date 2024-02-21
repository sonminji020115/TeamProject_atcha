import { useState } from "react";
import "./Mypage01.css";
import Leftutill from "../utill/Left"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";

const My04 = ({isSide, setIsSide}) => {
    const [isDataSaving, setIsDataSaving] = useState(false)
    const [isSkipVideo, setIsSkipVideo] = useState(false)
    const [isResumeEpi, setIsResumeEpi] = useState(false)

    const handleBtn1 = () => {
        setIsDataSaving(!isDataSaving)
    }
    const handleBtn2 = () => {
        setIsSkipVideo(!isSkipVideo)
    }
    const handleBtn3 = () => {
        setIsResumeEpi(!isResumeEpi)
    }

    const handleClose = () => {
        setIsSide(false)
    }

    return(
        <div className="My04">
            <Leftutill/>
            <div className={`my04wrap ${isSide ? 'show' : null}`}>
                <div className="my04top">
                    <p className="photo">
                        <img src="img/Ellipse1.png" />
                    </p>
                    <p className="btn_close">
                        <img 
                            src="img/btn_close.png" 
                            onClick={handleClose}
                        />
                    </p>
                </div>
                <div id="my04list">
                    <Accordion defaultActiveKey="0">
                        <AccordionItem eventKey="1">
                            <AccordionHeader>
                                <h2>재생</h2>
                            </AccordionHeader>
                            <AccordionBody>
                                <h3>데이터 절약 모드</h3>
                                <div 
                                    className={`toggleContainer ${isDataSaving ? 'active' : null}`}
                                    onClick={handleBtn1}
                                >토글틀
                                    <p className={isDataSaving ? 'active' : null}>버튼</p>
                                </div>
                                </AccordionBody>
                            <AccordionBody>
                                <h3>오프닝 영상 자동 건너뛰기</h3>
                                <div 
                                    
                                    className={`toggleContainer ${isSkipVideo ? 'active' : null}`}
                                    onClick={handleBtn2}
                                >토글틀
                                    <p className={isSkipVideo ? 'active' : null}>버튼</p>
                                </div>
                                </AccordionBody>
                            <AccordionBody>
                                <h3>에피소드 자동 이어보기</h3>
                                <div 
                                    className={`toggleContainer ${isResumeEpi ? 'active' : null}`}
                                    onClick={handleBtn3}
                                >토글틀
                                    <p className={isResumeEpi ? 'active' : null}>버튼</p>
                                </div>
                                </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="2">
                            <AccordionHeader>
                                <h2>비디오 다운로드</h2>
                            </AccordionHeader>
                            <AccordionBody></AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="3">
                            <AccordionHeader>
                                <h2>계정</h2>
                            </AccordionHeader>
                            <AccordionBody></AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="4">
                            <AccordionHeader>
                                <h2>설정</h2>
                            </AccordionHeader>
                            <AccordionBody className="theme">
                                <h3>테마색상</h3>
                                <form>
                                    <label><input type="radio" name="tone" checked /> 밝게</label>
                                    <label><input type="radio" name="tone" /> 어둡게</label>
                                </form>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                    <ul>
                        <li className="list_top"><h2>공지사항</h2></li>
                        <li className="list_top cs">
                            <h2>고객센터</h2>
                            <ul>
                                <li>
                                    <h3>1599-0000</h3>
                                    <h3>평일 09:00 ~ 18:00<br /> 점심시간 12:00 ~ 13:00 주말 및 공휴일 휴무</h3>
                                </li>
                                <li><button>전화걸기</button></li>
                            </ul>
                        </li>
                        <li className="list_top logout"><h2>로그아웃</h2></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default My04;