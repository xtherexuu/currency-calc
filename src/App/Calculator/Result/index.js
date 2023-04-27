import "./style.css";

const Result = ({ result, combinedData }) => {
    return (
        <article className="calculator__result">
            <p className="result__paragraph">
                Po przeliczeniu{" "}
                <b className="paragraph--result">
                    {combinedData.amountValue} {combinedData.fromCurrencyElement.short}
                </b>{" "}
                otrzymasz{" "}
                <b className="paragraph--result">
                    {result} {combinedData.toCurrencyElement.short}
                </b>
            </p>
            <p className="result__paragraph result__paragraph--special">
                <b className="paragraph--result">
                    {combinedData.amountValue}&nbsp;{combinedData.fromCurrencyElement.short}
                </b>
                &nbsp; ={" "}
                <b className="paragraph--result">
                    {result}&nbsp;{combinedData.toCurrencyElement.short}
                </b>
            </p>
        </article>
    );
};

export default Result;
