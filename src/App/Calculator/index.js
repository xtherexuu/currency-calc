import "./style.css";
import React, { useState } from "react";
import currencies from "../currencies";
import swapArrowsImage from "../../Images/swapArrowsImg.png";
import swapArrowsImageDark from "../../Images/swapArrowsImg-dark.png";
import Result from "./Result";

const Calculator = ({isDarkModeOn}) => {
    const [fromCurrencyValue, setFromCurrencyValue] = useState("PLN");
    const [toCurrencyValue, setToCurrencyValue] = useState("EUR");
    const [amountValue, setAmountValue] = useState("");
    const [combinedData, setCombinedData] = useState({});
    const [result, setResult] = useState();

    const calculateResult = (combinedData) => {
        setResult(
            (result) =>
                (result =
                    (combinedData.amountValue * combinedData.fromCurrencyElement.rate) /
                    combinedData.toCurrencyElement.rate)
        );
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const combinedData = {
            amountValue: +amountValue,
            fromCurrencyElement: currencies.find(
                (currency) => currency.short === fromCurrencyValue
            ),
            toCurrencyElement: currencies.find((currency) => currency.short === toCurrencyValue),
        };

        setCombinedData((data) => (data = combinedData));
        calculateResult(combinedData);
        setAmountValue(value => value = "");
    };

    return (
        <section className="calculator">
            <h2 className={`calculator__heading${isDarkModeOn ? " calculator__heading--darkModeOn" : ""}`}>Przelicz waluty</h2>
            <form className="calculator__form" onSubmit={onFormSubmit}>
                <input
                    value={amountValue}
                    onChange={({ target }) => {
                        setAmountValue((value) => (value = target.value));
                    }}
                    placeholder="Wpisz ile pieniędzy chciał/a-byś przeliczyć"
                    type="number"
                    max={999999999.99}
                    min={0.01}
                    step={0.01}
                    className={`form__input${isDarkModeOn ? " form__input--darkModeOn" : ""}`}
                ></input>
                <select
                    value={fromCurrencyValue}
                    onChange={({ target }) => {
                        setFromCurrencyValue((value) => (value = target.value));
                    }}
                    className={`form__select form__select--fromCurrency${isDarkModeOn ? " form__select--darkModeOn" : ""}`}
                >
                    {currencies.map((element) => (
                        <option key={element.short}>{element.short}</option>
                    ))}
                </select>
                <img
                    src={isDarkModeOn ? swapArrowsImageDark : swapArrowsImage}
                    alt="ikona dwuch zamiennych strzałek"
                    className="form__image"
                />
                <select
                    value={toCurrencyValue}
                    onChange={({ target }) => {
                        setToCurrencyValue((value) => (value = target.value));
                    }}
                    className={`form__select form__select--toCurrency${isDarkModeOn ? " form__select--darkModeOn" : ""}`}
                >
                    {currencies.map((element) => (
                        <option key={element.short}>{element.short}</option>
                    ))}
                </select>
                <button className={`form__button${isDarkModeOn ? " form__button--darkModeOn" : ""}`}>Przelicz</button>
            </form>
            {result ? <Result result={result} combinedData={combinedData} isDarkModeOn={isDarkModeOn} /> : null}
        </section>
    );
};

export default Calculator;
