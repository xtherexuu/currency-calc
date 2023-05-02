import React, { useState, useEffect } from "react";
import Header from "./Header";
import Calculator from "./Calculator";
import KebabMenu from "./KebabMenu";

function App() {
    const [isMenuButtonClicked, setMenuButtonStatus] = useState(false);
    const [isDarkModeOn, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        
        if (isDarkModeOn === true) {
            body.style.setProperty("background-color", "var(--dark-main-color)")
        } else {
            body.style.setProperty("background-color", "var(--light-main-color)")
        }
        
    }, [isDarkModeOn])

    return (
        <div className="wrapper">
            <Header
                isMenuButtonClicked={isMenuButtonClicked}
                setMenuButtonStatus={setMenuButtonStatus}
            />
            <Calculator isDarkModeOn={isDarkModeOn} />
            <KebabMenu isDarkModeOn={isDarkModeOn} setDarkMode={setDarkMode} />
        </div>
    );
}

export default App;
