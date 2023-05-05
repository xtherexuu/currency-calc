import "./style.css";
import React, { useEffect, useState } from "react";
import sunIcon from "../../Images/sunicon.png";
import moonIcon from "../../Images/moonicon.png";

const KebabMenu = ({
    isDarkModeOn,
    setDarkMode,
    isMenuButtonClicked,
    isMenuOpened,
    setPanelButtonStatus,
    currencies,
    setCurrencies,
}) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate((date) => (date = new Date()));
        }, 1000);
    }, []);

    return (
        <div
            className={`kebabMenu${isDarkModeOn ? " kebabMenu--darkModeOn" : ""}${
                isMenuButtonClicked ? " kebabMenu--showed" : ""
            }${isMenuOpened ? " kebabMenu--opened" : ""}`}
        >
            <header className="kebabMenu__header">
                <h2
                    className={`kebabMenu__heading${
                        isDarkModeOn ? " kebabMenu__header--darkModeOn" : ""
                    }`}
                >
                    Menu
                </h2>
                <div className="header__buttons">
                    <button
                        className={`header__button${
                            isDarkModeOn ? " header__button--darkModeOn" : ""
                        }`}
                        onClick={() => {
                            setPanelButtonStatus((status) => (status = true));
                        }}
                    >
                        Dodaj walutę
                    </button>
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
                    <h2
                        className={`currencies__heading${
                            isDarkModeOn ? " currencies__heading--darkModeOn" : ""
                        }`}
                    >
                        Twoje waluty
                    </h2>
                </header>
                <div className="currencies__container">
                    {currencies.map((element) => (
                        <div key={element.short} className="currencies__currency">
                            <h3
                                className={`currency__heading currency__heading--name${
                                    isDarkModeOn ? " currency__heading--darkModeOn" : ""
                                }`}
                            >
                                <span className="name__heading">Nazwa waluty</span>
                                <span className="name__name">{element.name}</span>
                            </h3>
                            <h3
                                className={`currency__heading currency__heading--short${
                                    isDarkModeOn ? " currency__heading--darkModeOn" : ""
                                }`}
                            >
                                <span className="short__heading">Skrót</span>
                                <span className="short__short">{element.short}</span>
                            </h3>
                            <h3
                                className={`currency__heading currency__heading--rate${
                                    isDarkModeOn ? " currency__heading--darkModeOn" : ""
                                }`}
                            >
                                <span className="rate__heading">{"Stawka (na PLN)"}</span>
                                <span className="rate__rate">&times;{element.rate}</span>
                            </h3>
                            <button
                                className="currency__button"
                                onClick={() => {
                                    setCurrencies(
                                        (currencies) =>
                                            (currencies = currencies.filter(
                                                (currency) => currency.short !== element.short
                                            ))
                                    );
                                }}
                            >
                                🗑️ Usuń walutę
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="kebabMenu__footer">
                <p
                    className={`footer__paragraph${
                        isDarkModeOn ? " footer__paragraph--darkModeOn" : ""
                    }`}
                >
                    Ostatnia aktualizacja kursu: 04.05.2023r
                </p>
                <p
                    className={`footer__paragraph${
                        isDarkModeOn ? " footer__paragraph--darkModeOn" : ""
                    }`}
                >
                    Aktualna data:{" "}
                    {date.toLocaleString("pl-PL", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    })}
                    &nbsp;{date.toLocaleTimeString("pl-PL")}
                </p>
                <p
                    className={`footer__paragraph${
                        isDarkModeOn ? " footer__paragraph--darkModeOn" : ""
                    }`}
                >
                    &copy; Wszystkie prawa zastrzeżone
                </p>
            </footer>
        </div>
    );
};

export default KebabMenu;
