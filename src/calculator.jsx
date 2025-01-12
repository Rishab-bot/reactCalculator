import React, { useState } from "react";

export function Display() {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');

    const handleButtonClick = (buttonValue) => {
        setValue((prevValue) => prevValue + buttonValue);
    };

    const handleClearButton = () => {
        setValue('');
        setResult('');
    };

    const handleCalculation = () => {
        if (value.trim() === "") {
            setResult("Error");
            return;
        }
        try {
            const calculatedResult = eval(value);

            if (calculatedResult === Infinity || calculatedResult === -Infinity) {
                setResult('Infinity');
                return;
            }

            if (Number.isNaN(calculatedResult)) {
                setResult('NaN');
                return;
            }

            setResult(calculatedResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                <input type = "text" value={value} readOnly />
                <br />
                <div>{result}</div> {/* Result is displayed here */}
            </div>
            <div className="calculator-buttons">
                <button type="button" onClick={() => handleButtonClick("7")}>7</button>
                <button type="button" onClick={() => handleButtonClick("8")}>8</button>
                <button  type="button" onClick={() => handleButtonClick("9")}>9</button>
                <button  type="button" onClick={() => handleButtonClick("+")}>+</button>
                <button  type="button" onClick={() => handleButtonClick("4")}>4</button>
                <button type="button" onClick={() => handleButtonClick("5")}>5</button>
                <button type="button" onClick={() => handleButtonClick("6")}>6</button>
                <button type="button" onClick={() => handleButtonClick("-")}>-</button>
                <button type="button" onClick={() => handleButtonClick("1")}>1</button>
                <button type="button" onClick={() => handleButtonClick("2")}>2</button>
                <button type="button" onClick={() => handleButtonClick("3")}>3</button>
                <button type="button" onClick={() => handleButtonClick("*")}>*</button>
                <button type="button" className="clear-button" onClick={handleClearButton}>C</button>
                <button type="button" onClick={() => handleButtonClick("0")}>0</button>
                <button type="button" onClick={handleCalculation}>=</button>
                <button type="button" onClick={() => handleButtonClick("/")}>/</button>
            </div>
        </div>
    );
}