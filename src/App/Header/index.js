import "./style.css";
import headerImage from "../../Images/LOGO.png";

const Header = ({ isMenuButtonClicked, setMenuButtonStatus }) => {
    return (
        <header className="header">
            <img src={headerImage} alt="logo strony internetowej" className="header__image" />
            <h1 className="header__heading">Currency Calc</h1>
            <nav className="header__nav">
                <button
                    className={`nav__button ${isMenuButtonClicked ? " nav__button--active" : ""}`}
                    onClick={() => {
                        setMenuButtonStatus((status) => (status = !status));
                    }}
                >
                    <div className={`button__element${isMenuButtonClicked ? " button__element--firstActive" : ""}`}></div>
                    <div className={`button__element ${isMenuButtonClicked ? " button__element--secoundActive" : ""}`}></div>
                </button>
            </nav>
        </header>
    );
};

export default Header;
