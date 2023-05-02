import "./style.css";

const Result = ({ result, combinedData, isDarkModeOn }) => {
    return (
        <article className="calculator__result">
            <p className={`result__paragraph${isDarkModeOn ? " result__paragraph--darkModeOn" : ""}`}>
                Po przeliczeniu{" "}
                <b className="paragraph--result">
                    {combinedData.amountValue} {combinedData.fromCurrencyElement.short}
                </b>{" "}
                otrzymasz{" "}
                <b className="paragraph--result">
                    {result.toFixed(2)} {combinedData.toCurrencyElement.short}
                </b>
            </p>
            <p className={`result__paragraph result__paragraph--special${isDarkModeOn ? " result__paragraph--darkModeOn" : ""}`}>
                <b className="paragraph--result">
                    {combinedData.amountValue}&nbsp;{combinedData.fromCurrencyElement.short}
                </b>
                &nbsp; ={" "}
                <b className="paragraph--result">
                    {result.toFixed(2)}&nbsp;{combinedData.toCurrencyElement.short}
                </b>
            </p>
        </article>
    );
};

export default Result;
