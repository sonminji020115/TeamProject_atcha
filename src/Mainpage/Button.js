const Button = ({type, onClick}) => {
    return(
        <p className="Button">
            <button className={`btn ${type}`} onClick={onClick}></button>
        </p>
    )
};

Button.defaultProps = {
    type : 'default'
}

export default Button; 