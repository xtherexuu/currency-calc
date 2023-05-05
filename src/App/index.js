import React, { useState, useEffect } from "react";
import Header from "./Header";
import Calculator from "./Calculator";
import KebabMenu from "./KebabMenu";
import AddCurrencyPanel from "./AddCurrencyPanel";
import initialCurrencies from "./currencies";

function App() {
    const [isMenuButtonClicked, setMenuButtonStatus] = useState(false);
    const [isMenuOpened, setMenuOpenedStatus] = useState(false);
    const [isPanelButtonClicked, setPanelButtonStatus] = useState(false);
    const [isPanelOpened, setPanelOpenedStatus] = useState(false);
    const [isDarkModeOn, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("isDarkModeOn")) || false
    );
    const [currencies, setCurrencies] = useState(
        !localStorage.getItem("currencies") ||
            JSON.parse(localStorage.getItem("currencies")).length === 0
            ? initialCurrencies
            : JSON.parse(localStorage.getItem("currencies"))
    );

    useEffect(() => {
        localStorage.setItem("currencies", JSON.stringify(currencies));
    }, [currencies]);

    useEffect(() => {
        localStorage.setItem("isDarkModeOn", JSON.stringify(!!isDarkModeOn));
    }, [isDarkModeOn]);

    useEffect(() => {
        const body = document.body;

        if (isDarkModeOn) {
            body.style.setProperty("background-color", "var(--dark-main-color)");
        } else {
            body.style.setProperty("background-color", "var(--light-main-color)");
        }
    }, [isDarkModeOn]);

    useEffect(() => {
        if (isMenuButtonClicked) {
            setMenuOpenedStatus((status) => (status = true));
        } else {
            setMenuOpenedStatus((status) => (status = false));
        }
    }, [isMenuButtonClicked]);

    useEffect(() => {
        if (isPanelButtonClicked) {
            setPanelOpenedStatus((status) => (status = true));
        } else {
            setPanelOpenedStatus((status) => (status = false));
        }
    }, [isPanelButtonClicked]);

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;
        if (isPanelButtonClicked || isMenuButtonClicked) {
            body.style.setProperty("overflow-y", "hidden");
            html.style.setProperty("overflow-y", "hidden");
        }
        if (!isPanelButtonClicked && !isMenuButtonClicked) {
            body.style.setProperty("overflow-y", "auto");
            html.style.setProperty("overflow-y", "auto");
        }
    }, [isPanelButtonClicked, isMenuButtonClicked]);

    return (
        <div className="wrapper">
            <Header
                isMenuButtonClicked={isMenuButtonClicked}
                setMenuButtonStatus={setMenuButtonStatus}
            />
            <Calculator isDarkModeOn={isDarkModeOn} currencies={currencies} />
            <KebabMenu
                isDarkModeOn={isDarkModeOn}
                setDarkMode={setDarkMode}
                isMenuButtonClicked={isMenuButtonClicked}
                isMenuOpened={isMenuOpened}
                setPanelButtonStatus={setPanelButtonStatus}
                currencies={currencies}
                setCurrencies={setCurrencies}
            />
            <AddCurrencyPanel
                isDarkModeOn={isDarkModeOn}
                setPanelButtonStatus={setPanelButtonStatus}
                isPanelButtonClicked={isPanelButtonClicked}
                isPanelOpened={isPanelOpened}
                currencies={currencies}
                setCurrencies={setCurrencies}
            />
        </div>
    );
}

export default App;
