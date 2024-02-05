import { useEffect, useState } from "react";

import "./index.css";

function Calc() {
  const [inputValue, setinputValue] = useState("");

  function display(value) {
    setinputValue(inputValue + value);
  }

  function calculate() {
    let answer = eval(inputValue);
    setinputValue(answer);
  }
  function clear() {
    setinputValue((e) => {
      return e.slice(0, -1);
    });
  }

  function clearAll() {
    setinputValue("");
  }

  return (
    <>
    
     <div className="headtext">
        <h1>CALCULATOR</h1>
     </div>
      <div>
        <form name="calc" className="calculator">
          <input type="text" className="value" value={inputValue} />
          <span className="num clear" onClick={() => clearAll()}>
            AC
          </span>
          <span onClick={() => clear()}>C</span>
          <span onClick={() => display("*")}>*</span>
          <span onClick={() => display("/")}>/</span>
          <span onClick={() => display("7")}>7</span>
          <span onClick={() => display("8")}>8</span>
          <span onClick={() => display("9")}>9</span>
          <span onClick={() => display("-")}>-</span>
          <span onClick={() => display("6")}>6</span>
          <span onClick={() => display("5")}>5</span>
          <span onClick={() => display("4")}>4</span>
          <span className="num plus" onClick={() => display("+")}>
            +
          </span>
          <span onClick={() => display("3")}>3</span>
          <span onClick={() => display("2")}>2</span>
          <span onClick={() => display("1")}>1</span>
          <span onClick={() => display("0")}>0</span>
          <span onClick={() => display("00")}>00</span>
          <span onClick={() => display(".")}>.</span>
          <span onClick={() => calculate()} className="num equal">
            =
          </span>
        </form>
      </div>
      
    </>
  );
}

export default Calc;
