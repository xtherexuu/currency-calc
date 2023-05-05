import "./style.css";
import React, { useState } from "react";

const AddCurrencyPanel = ({
    isDarkModeOn,
    setPanelButtonStatus,
    isPanelButtonClicked,
    isPanelOpened,
    setCurrencies,
    currencies,
}) => {
    const [name, setName] = useState("");
    const [short, setShort] = useState("");
    const [rate, setRate] = useState("");
    const [isShortErrorVisible, setShortErrorVisibilityStatus] = useState(false);
    const [isNameErrorVisible, setNameErrorVisibilityStatus] = useState(false);

    return (
        <div
            className={`addCurrencyPanel${isDarkModeOn ? " addCurrencyPanel--darkModeOn" : ""}${
                isPanelButtonClicked ? " addCurrencyPanel--showed" : ""
            }${isPanelOpened ? " addCurrencyPanel--opened" : ""}`}
        >
            <header className="addCurrencyPanel__header">
                <h2
                    className={`headerPanel__heading${
                        isDarkModeOn ? " headerPanel__heading--darkModeOn" : ""
                    }`}
                >
                    Witaj w panelu dodawania własnej waluty
                </h2>
                <button
                    className="header__button header__button--panel"
                    onClick={() => {
                        setPanelButtonStatus((status) => (status = false));
                    }}
                >
                    ❌
                </button>
            </header>
            <div className="addCurrencyPanel__panel">
                <form
                    className="panel__form"
                    onSubmit={(event) => {
                        event.preventDefault();
                        if (
                            currencies.find((currency) => currency.name === name) === undefined &&
                            currencies.find((currency) => currency.short === short) === undefined
                        ) {
                            setCurrencies(
                                (currencies) =>
                                    (currencies = [
                                        ...currencies,
                                        { name: name, short: short, rate: rate },
                                    ])
                            );
                            setShortErrorVisibilityStatus((status) => (status = false));
                            setNameErrorVisibilityStatus((status) => (status = false));
                            setName((name) => (name = ""));
                            setShort((short) => (short = ""));
                            setRate((rate) => (rate = ""));
                        } else if (
                            currencies.find((currency) => currency.name === name) !== undefined
                        ) {
                            setNameErrorVisibilityStatus((status) => (status = true));
                            setShortErrorVisibilityStatus((status) => (status = false));
                        } else if (
                            currencies.find((currency) => currency.short === short) !== undefined
                        ) {
                            setShortErrorVisibilityStatus((status) => (status = true));
                            setNameErrorVisibilityStatus((status) => (status = false));
                        } else {
                            console.error("ERROR");
                        }
                    }}
                >
                    <label
                        className={`form__label form__label--name${
                            isDarkModeOn ? " form__label--darkModeOn" : ""
                        }`}
                    >
                        Nazwa waluty:
                        <input
                            value={name}
                            onChange={({ target }) => {
                                setName((name) => (name = target.value));
                            }}
                            placeholder="Wpisz nazwę waluty"
                            className={`form__input${
                                isDarkModeOn ? " form__input--darkModeOn" : ""
                            }`}
                            required={true}
                            minLength={4}
                            maxLength={30}
                            pattern="[A-Za-z\u0080-\u024F]{1,}( ?[A-Za-z\u0080-\u024F]{1,}){0,2}(-?[A-Za-z\u0080-\u024F]{1,}){0,3}"
                            title="Możesz wpisać wyłącznie litery, dwie spacje i trzy '-' "
                        />
                    </label>
                    <label
                        className={`form__label form__label--short${
                            isDarkModeOn ? " form__label--darkModeOn" : ""
                        }`}
                    >
                        Skrót:
                        <input
                            value={short}
                            onChange={({ target }) => {
                                setShort((short) => (short = target.value));
                            }}
                            placeholder="Wpisz skrót waluty [ABC]"
                            className={`form__input${
                                isDarkModeOn ? " form__input--darkModeOn" : ""
                            }`}
                            required={true}
                            pattern="[A-Z]{3}"
                        />
                    </label>
                    <label
                        className={`form__label form__label--rate${
                            isDarkModeOn ? " form__label--darkModeOn" : ""
                        }`}
                    >
                        Stawka (na PLN):
                        <input
                            value={rate}
                            onChange={({ target }) => {
                                setRate((rate) => (rate = target.value));
                            }}
                            placeholder="Wpisz stawkę"
                            className={`form__input${
                                isDarkModeOn ? " form__input--darkModeOn" : ""
                            }`}
                            required={true}
                            type="number"
                            min={0.0001}
                            max={1000000}
                            step={0.0001}
                        />
                    </label>
                    <button
                        className={`form__button${isDarkModeOn ? " form__button--darkModeOn" : ""}`}
                    >
                        Dodaj walutę
                    </button>
                </form>
            </div>
            <div className="errorPanel">
                <p
                    className={`error__paragraph${
                        isDarkModeOn ? " error__paragraph--darkModeOn" : ""
                    }${isNameErrorVisible ? " error__paragraph--visible" : ""}`}
                >
                    ❗ Waluta o takiej nazwie już istnieje
                </p>
                <p
                    className={`error__paragraph${
                        isDarkModeOn ? " error__paragraph--darkModeOn" : ""
                    }${isShortErrorVisible ? " error__paragraph--visible" : ""}`}
                >
                    ❗ Waluta z takim skrótem już istnieje
                </p>
            </div>
        </div>
    );
};

export default AddCurrencyPanel;
