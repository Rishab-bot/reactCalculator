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
            setResult(calculatedResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator-container">
            <input className="calculator-display" value={value} readOnly />
            <p>{result}</p>
            <div className="calculator-buttons">
                <button onClick={() => handleButtonClick("7")}>7</button>
                <button onClick={() => handleButtonClick("8")}>8</button>
                <button onClick={() => handleButtonClick("9")}>9</button>
                <button onClick={() => handleButtonClick("+")}>+</button>
                <button onClick={() => handleButtonClick("4")}>4</button>
                <button onClick={() => handleButtonClick("5")}>5</button>
                <button onClick={() => handleButtonClick("6")}>6</button>
                <button onClick={() => handleButtonClick("-")}>-</button>
                <button onClick={() => handleButtonClick("1")}>1</button>
                <button onClick={() => handleButtonClick("2")}>2</button>
                <button onClick={() => handleButtonClick("3")}>3</button>
                <button onClick={() => handleButtonClick("*")}>*</button>
                <button className="clear-button" onClick={handleClearButton}>C</button>
                <button onClick={() => handleButtonClick("0")}>0</button>
                <button onClick={handleCalculation}>=</button>
                <button onClick={() => handleButtonClick("/")}>/</button>
            </div>
        </div>
    );
}