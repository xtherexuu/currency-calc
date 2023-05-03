import React, { useState, useEffect } from "react";
import Header from "./Header";
import Calculator from "./Calculator";
import KebabMenu from "./KebabMenu";
import AddCurrencyPanel from "./AddCurrencyPanel";

function App() {
    const [isMenuButtonClicked, setMenuButtonStatus] = useState(false);
    const [isMenuOpened, setMenuOpenedStatus] = useState(false);
    const [isPanelButtonClicked, setPanelButtonStatus] = useState(false);
    const [isPanelOpened, setPanelOpenedStatus] = useState(false);
    const [isDarkModeOn, setDarkMode] = useState(false);

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
            <Calculator isDarkModeOn={isDarkModeOn} />
            <KebabMenu
                isDarkModeOn={isDarkModeOn}
                setDarkMode={setDarkMode}
                isMenuButtonClicked={isMenuButtonClicked}
                isMenuOpened={isMenuOpened}
                setPanelButtonStatus={setPanelButtonStatus}
            />
            <AddCurrencyPanel
                isDarkModeOn={isDarkModeOn}
                setPanelButtonStatus={setPanelButtonStatus}
                isPanelButtonClicked={isPanelButtonClicked}
                isPanelOpened={isPanelOpened}
            />
        </div>
    );
}

export default App;
