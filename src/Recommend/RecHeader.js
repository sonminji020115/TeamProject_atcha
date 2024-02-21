import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import './RecHeader.css'
import '../Mainpage/Main01.js'

import styled from "styled-components";
import EvalutionModal from '../evaluation_modal/EvalutionModal.js';

const RecHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="RecHeader">
            <Header1>
                <div className="main01_img">
                    <div className="logo">
                        <img
                            src='/img/atcha_logo.png'
                            alt="앗챠 로고"
                        />
                    </div>
                    <div className="icon">
                        <p className="icon01"><img src="/img/icon_wifi.png" /></p>
                        <p className="icon02">
                            {isOpen ? '' : <EvalutionModal />}
                            <img src="/img/icon_species.png" onClick={toggleModal} />
                        </p>
                        {isOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close" onClick={toggleModal}>
                                        &times;
                                    </span>
                                </div>
                            </div>
                        )}
                        <p className="icon03"><img src="/img/icon_person.png" onClick={() => { navigate('/mypage') }} /></p>
                    </div>
                </div>
            </Header1>
        </div>
    )
}
export default RecHeader;
const Header1 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 46px;
    z-index: 1000;
    background-color: #141517;
    padding-left: 20px;
    padding-right: 20px;
    
        img{
            cursor: pointer;
        }

    .icon02{
        position: relative;
    }
`;

