import styled from "styled-components";
import React, { useState } from "react";
import './SubPage04.css';

const Party02 = ({ closeModal }) => {

    return (
        <Pmodal>
            <Party02main>
                <Party02Wrap>
                    <Close onClick={closeModal}>
                        <img src="/img/Close.png"
                        />
                    </Close>
                    <PartyName>
                        <p>파티이름 :</p>
                        <input placeholder="파티이름을 작성해주세요." />
                    </PartyName>
                    <PartySetting>
                        <p className="Setting01">파티설정</p>
                        <p className="Setting02">파티 공개 설정</p>
                    </PartySetting>
                    <PublicParty>
                        <label class="radio_box">
                            <input type="radio" id="party1" name="party" value="공개파티로 설정" />
                            <span class="on"></span>공개파티로 설정</label>
                        <br />
                        <label class="radio_box">
                            <input type="radio" id="party2" name="party" value="나만의 파티로 설정" />
                            <span class="on"></span>나만의 파티로 설정</label>
                    </PublicParty>
                    <PartyHostSettings>
                        <h3>파티 호스트 설정</h3>
                        <OnlyHost>
                            <ul>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1"></label>
                                <p>호스트만 영상 조절하기</p>
                            </ul>
                        </OnlyHost>
                        <ViewingSettings>
                            <ul>
                                <div className="viewset">
                                    <input type="checkbox" id="cb2" />
                                    <label for="cb2"></label>
                                    <p>관람등급 설정</p>
                                </div>
                                <li><img src="/img/Viewing_all.png" /><p>전체관람가</p></li>
                                <li><img src="/img/Viewing_12.png" /><p>12세 관람가</p></li>
                                <li><img src="/img/Viewing_15.png" /><p>15세 관람가</p></li>
                                <li><img src="/img/Viewing_teenager.png" /><p>19세 관람가</p></li>
                            </ul>
                        </ViewingSettings>
                    </PartyHostSettings>
                    <Episode>
                        <Choice>
                            <p>에피소드 선택</p>
                        </Choice>
                        <Drama>
                            <select name="DramaEpisode" id="" class="">
                                <option value="DramaEpisode1" selected>드라마 에피소드 ①</option>
                                <option value="DramaEpisode2">드라마 에피소드 ②</option>
                                <option value="DramaEpisode3">드라마 에피소드 ③</option>
                                <option value="DramaEpisode4">드라마 에피소드 ④</option>
                                <option value="DramaEpisode5">드라마 에피소드 ⑤</option>
                            </select>
                        </Drama>
                    </Episode>
                    <SettimeWrap>
                        <Settime>
                            <Date>
                                <p>날짜</p>
                                <select name="Date" id="" class="">
                                    <option value="Date1" selected>24-01-26</option>
                                    <option value="Date2">24-01-27</option>
                                    <option value="Date3">24-01-28</option>
                                    <option value="Date4">24-01-29</option>
                                    <option value="Date5">24-01-30</option>
                                </select>
                            </Date>
                            <Time>
                                <p>시간</p>
                                <select name="Time" id="" class="">
                                    <option value="Time1" selected>18:15</option>
                                    <option value="Time2">18:16</option>
                                    <option value="Time3">18:17</option>
                                    <option value="Time4">18:18</option>
                                    <option value="Time5">18:19</option>
                                </select>
                            </Time>
                            <People>
                                <p>인원수</p>
                                <select name="People" id="" class="">
                                    <option value="People1" selected>최대인원수 11명</option>
                                    <option value="People2">1명</option>
                                    <option value="People2">2명</option>
                                    <option value="People3">3명</option>
                                    <option value="People4">4명</option>
                                    <option value="People5">5명</option>
                                </select>
                            </People>
                        </Settime>
                    </SettimeWrap>
                    <SetStart>
                        <SetStart_Start>
                            <buttom><p>시작하기</p></buttom>
                        </SetStart_Start>
                        <SetStart_Time>
                            <buttom><p>설정한 시각에 시작하기</p></buttom>
                        </SetStart_Time>
                    </SetStart>
                </Party02Wrap>
            </Party02main>
        </Pmodal>
    )
}
const Pmodal = styled.div`
    background-color: rgba(255,255,255,0.7);
    position: fixed;
    z-index: 998;
    top:0;
    left:0;
    right:0;
    bottom:0
`

const Party02main = styled.div`
    position: absolute;
    top: 50%;
    bottom: 0;
    right: 0;
    transform: translate(-50%, -50%);
    left: 50%;  
    width: 80%;
    height: 100%;
    max-width: 1200px;
    z-index: 999;
    background-color: #000;
`

const Party02Wrap = styled.div`
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

const Close = styled.p`
    padding-top: 15px;
    padding-right: 20px;
    padding-bottom: 10px;
    text-align: right;

    img{
        cursor: pointer;
    }
`

const PartyName = styled.p`
    margin-left: 30px;
    align-items: center;
    display: flex;
    color: #fff;

    p{
        font-size: 18px;
    }

    input{
        margin-left: 20px;
        padding-bottom: 5px;
        text-align: center;
        background-color: #000;
        border-width: 0;
        border-width: 0 0 1px;
        color: #fff;
        border-color: #fff;
    }
`

const PartySetting = styled.div`
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 10px;
    color: #fff;
`

const PublicParty = styled.div`
    margin-left: 30px;
    margin-bottom: 10px;
    color: #fff;

    ul{
        display: flex;
        align-items: center;
    }

    li{
        font-size:15px;
        margin-right: 10px;
    }
`

const PartyHostSettings = styled.div`
    margin-left: 30px;
    color: #fff;
    
    h3{
        color: #BEBEBE;
        font-size: 13px;
        font-weight: 300;
    }
`

const OnlyHost = styled.div`
    margin-top: 15px;

    ul{
        display: flex;
        padding-left : 0
        
    }

    p{
        margin-left: 10px;
        margin-bottom: 20px;
    }
`

const ViewingSettings = styled.div`
    display:block;
    
    .viewset{
        display:flex
        
    }
    ul{
        display:flex;
        padding-left : 0;
    }

    li{
        cursor: pointer;
        text-align: center;
        font-size: 9px;
    }

    p{
        margin-left: 10px;
        font-weight: 100;
    }

    img{
        margin-left: 10px;
    }

`
    
const Episode = styled.div`
    color: #fff;
    margin-left: 30px;
`

const Choice = styled.div`
    p{
        margin-bottom: 15px;
        color: rgb(190, 190, 190);
        font-size: 13px;
        font-weight: 300;
    }
`

const Drama = styled.div`
    padding-bottom: 23px;

    select{
        text-align: center;
        font-weight: 900;
        color: #000;
        background-color: #fff;
        font-size: 16px;
        border-radius: 5px;
        width: 315px;
        height: 50px;
    }
`
const SettimeWrap = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`

const Settime = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    color: #fff;
    color: rgb(190, 190, 190);
    font-size: 13px;
    font-weight: 300;
    text-align: center;
`

const Date = styled.div`
    select{
        margin-top: 10px;
        margin-right: 8px;
        margin-bottom: 30px;
        padding: 2px 10px;
        font-weight: 600;
        text-align: center;
        font-size: 12px;
        color: #000;
        background-color: #fff;
        border-radius: 3px;
    }
`

const Time = styled.div`
    margin-right: 8px;

    select{
        margin-top: 10px;
        padding: 2px 10px;
        font-weight: 600;
        text-align: center;
        font-size: 12px;
        color: #000;
        background-color: #fff;
        border-radius: 3px;
    }
`

const People = styled.div`
    select{
        margin-top: 10px;
        padding: 2px 10px;
        font-weight: 600;
        text-align: center;
        font-size: 12px;
        color: #000;
        background-color: #fff;
        border-radius: 3px;
        overflow: hidden;
    }
`

const SetStart = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
`

const SetStart_Start = styled.div`
    padding: 10px;
    width: 200px;
    height: 40px;
    font-weight: 600;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 20px;
    color: #000;
    background-color: #fff; 
    cursor: pointer;
`

const SetStart_Time = styled.div`
    padding: 10px;
    width: 200px;
    height: 40px;
    font-weight: 600;
    border-radius: 5px;
    text-align: center;
    color: #000;
    background-color: #fff; 
    cursor: pointer;
`

export default Party02;