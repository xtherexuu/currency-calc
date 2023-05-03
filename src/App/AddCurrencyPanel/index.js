import "./style.css";

const AddCurrencyPanel = ({isDarkModeOn, setPanelButtonStatus, isPanelButtonClicked, isPanelOpened}) => {
    return (
        <div className={`addCurrencyPanel${isDarkModeOn ? " addCurrencyPanel--darkModeOn" : ""}${isPanelButtonClicked ? " addCurrencyPanel--showed" : ""}${isPanelOpened ? " addCurrencyPanel--opened" : ""}`}>
            <header className="addCurrencyPanel__header">
                <h2 className={`headerPanel__heading${isDarkModeOn ? " headerPanel__heading--darkModeOn" : ""}`}>Witaj w panelu dodawania własnej waluty</h2>
                <button className="header__button header__button--panel" onClick={() => {
                    setPanelButtonStatus(status => status = false)
                }}>❌</button>
            </header>
            <div className="addCurrencyPanel__panel">
                <form className="panel__form">
                    <label className={`form__label form__label--name${isDarkModeOn ? " form__label--darkModeOn" : ""}`}>
                        Nazwa waluty:
                        <input placeholder="Wpisz nazwę waluty" className={`form__input${isDarkModeOn ? " form__input--darkModeOn" : ""}`} required={true} min={4} max={30} />
                    </label>
                    <label className={`form__label form__label--short${isDarkModeOn ? " form__label--darkModeOn" : ""}`}>
                        Skrót:
                        <input placeholder="Wpisz skrót waluty [ABC]" className={`form__input${isDarkModeOn ? " form__input--darkModeOn" : ""}`} required={true} pattern="[A-Z]{3}" />
                    </label>
                    <label className={`form__label form__label--rate${isDarkModeOn ? " form__label--darkModeOn" : ""}`}>
                        Stawka (na PLN):
                        <input placeholder="Wpisz stawkę" className={`form__input${isDarkModeOn ? " form__input--darkModeOn" : ""}`} required={true} type="number" min={0.0001} max={1000000} step={0.0001} />
                    </label>
                    <button className={`form__button${isDarkModeOn ? " form__button--darkModeOn" : ""}`}>Dodaj walutę</button>
                </form>
            </div>
        </div>
    );
};

export default AddCurrencyPanel;
