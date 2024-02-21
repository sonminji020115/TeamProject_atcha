import './Partymodal1.css'
const Partymodal1 = ({ closeModal }) => {
    return (
        <div className='Partymodalsize'>
            <div className="Partymodal1">
                <p>파티를 시작하거나 예약하고 싶다면?<br />
                    각 콘텐츠 페이지에 왓챠파티 버튼을<br />
                    눌러보세요!
                </p>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}
export default Partymodal1