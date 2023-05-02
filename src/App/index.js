import React, { useState, useEffect } from "react";
import Header from "./Header";
import Calculator from "./Calculator";
import KebabMenu from "./KebabMenu";

function App() {
    const [isMenuButtonClicked, setMenuButtonStatus] = useState(false);
    const [isMenuOpened, setMenuOpenedStatus] = useState(false);
    const [isDarkModeOn, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;

        if (isDarkModeOn === true) {
            body.style.setProperty("background-color", "var(--dark-main-color)");
        } else {
            body.style.setProperty("background-color", "var(--light-main-color)");
        }
    }, [isDarkModeOn]);

    useEffect(() => {
        const body = document.body;

        if (isMenuButtonClicked) {
            body.style.setProperty("overflow-y", "hidden");
            setMenuOpenedStatus(status => status = true);
        } else {
            body.style.setProperty("overflow-y", "auto");
            setMenuOpenedStatus(status => status = false);
        }
    }, [isMenuButtonClicked]);

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
            />
        </div>
    );
}

export default App;
