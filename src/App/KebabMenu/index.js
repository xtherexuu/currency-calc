import "./style.css";
import sunIcon from "../../Images/sunicon.png";
import moonIcon from "../../Images/moonicon.png";
import currencies from "../currencies";

const KebabMenu = ({ isDarkModeOn, setDarkMode }) => {
    return (
        <div className={`kebabMenu${isDarkModeOn ? " kebabMenu--darkModeOn" : ""}`}>
            <header className="kebabMenu__header">
                <h2 className={`kebabMenu__heading${isDarkModeOn ? " kebabMenu__header--darkModeOn" : ""}`}>Menu</h2>
                <div className="header__buttons">
                    <button className={`header__button${isDarkModeOn ? " header__button--darkModeOn" : ""}`}>Dodaj walutę</button>
                    <button
                        className="kebabMenu__button"
                        onClick={() => {
                            setDarkMode((mode) => (mode = !mode));
                        }}
                    >
                        <img
                            src={sunIcon}
                            alt="sun icon"
                            className={`button__image${
                                isDarkModeOn ? " button__image--darkModeOn" : ""
                            }`}
                        ></img>
                        <img
                            src={moonIcon}
                            alt="moon icon"
                            className={`button__image${
                                isDarkModeOn ? " button__image--darkModeOn" : ""
                            }`}
                        ></img>
                    </button>
                </div>
            </header>
            <section className="kebabMenu__currencies">
                <header className="currencies__header">
                    <h2 className={`currencies__heading${isDarkModeOn ? " currencies__heading--darkModeOn" : ""}`}>Twoje waluty</h2>
                </header>
                {/* <div className="currencies__container">
                    <table className="currencies__table">
                        <thead>
                            <tr className="table__row">
                                <th className="table__heading">Nazwa waluty</th>
                                <th className="table__heading">Skrót</th>
                                <th className="table__heading">Stawka</th>
                                <th className="table__heading">Ususń walutę</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currencies.map((element) => (
                                <tr className="table__row">
                                    <td className="table__data">{element.name}</td>
                                    <td className="table__data">{element.short}</td>
                                    <td className="table__data">{element.rate.toFixed(2)}</td>
                                    <td className="table__data table__data--textCenter">
                                        <button className="table__button">❌</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}
                {/* <ul className="container__list">
                    <li className="list__item list__item--heading">
                        <h3 className="item__heading">Skrót</h3>
                        <h3 className="item__heading">Nazwa Waluty</h3>
                        <h3 className="item__heading">Usuń</h3>
                    </li>
                    {currencies.map((element) => (
                        <li className="list__item">
                            <p className="item__paragraph">{element.short}</p>
                            <p className="item__paragraph">{element.name}</p>
                            <button className="item__button">🗑️</button>
                        </li>
                    ))}
                </ul> */}
                <div className="currencies__container">
                    {currencies.map((element) => (
                        <div key={element.short} className="currencies__currency">
                            <h3 className={`currency__heading currency__heading--name${isDarkModeOn ? " currency__heading--darkModeOn" : ""}`}>
                                <span className="name__heading">Nazwa waluty</span>
                                <span className="name__name">{element.name}</span>
                            </h3>
                            <h3 className={`currency__heading currency__heading--short${isDarkModeOn ? " currency__heading--darkModeOn" : ""}`}>
                                <span className="short__heading">Skrót</span>
                                <span className="short__short">{element.short}</span>
                            </h3>
                            <h3 className={`currency__heading currency__heading--rate${isDarkModeOn ? " currency__heading--darkModeOn" : ""}`}>
                                <span className="rate__heading">{"Stawka (na PLN)"}</span>
                                <span className="rate__rate">&times;{element.rate}</span>
                            </h3>
                            <button className="currency__button">🗑️ Usuń walutę</button>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="kebabMenu__footer">
                <p className={`footer__paragraph${isDarkModeOn ? " footer__paragraph--darkModeOn" : ""}`}>Ostatnia aktualizacja kursu: 00.00.000r 00:00</p>
                <p className={`footer__paragraph${isDarkModeOn ? " footer__paragraph--darkModeOn" : ""}`}>Aktualna data: 00.00.000r 00:00:00</p>
                <p className={`footer__paragraph${isDarkModeOn ? " footer__paragraph--darkModeOn" : ""}`}>&copy; Wszystkie prawa zastrzeżone</p>
            </footer>
        </div>
    );
};

export default KebabMenu;
