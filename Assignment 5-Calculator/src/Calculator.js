import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        setResult(Number(num1) + Number(num2));
    };

    const handleSubtraction = () => {
        setResult(Number(num1) - Number(num2));
    };

    const handleMultiplication = () => {
        setResult(Number(num1) * Number(num2));
    };

    const handleDivision = () => {
        setResult(Number(num1) / Number(num2));
    };

    return (
        <div className="calculator">
            <h2>Calculator</h2>
            <input
                type="number"
                placeholder="Enter number 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter number 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div>
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleMultiplication}>*</button>
                <button onClick={handleDivision}>/</button>
            </div>
            <div className="result">
                <h2>Output:</h2>
                <p>{result}</p>
            </div>
        </div>
    );
};

export default Calculator;
