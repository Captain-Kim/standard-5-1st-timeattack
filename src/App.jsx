// import Input from "./components/Input";
import { useState } from "react";
const [number, setNumber] = useState(0);
const [inputNumber, setInputNumber] = useState("");

const handleAdd = () => {
  setNumber(number + number(inputNumber));
};

const handleSubtract = () => {
  setNumber(number - number(inputNumber));
};

const handleInputChange = (e) => {
  setInputNumber(e.target.value);
};

return (
  <div>
    <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
    <div>
      <form onSubmit={addNumber}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        ></input>{" "}
        만큼을 <button onClick={handleAdd}>더할게요</button>{" "}
        <button onClick={handleSubtract}>뺄게요</button>
        <button>초기화</button>
      </form>
    </div>
    <hr />
    <div>
      <h3>결과</h3>
      <p>0</p>
    </div>
  </div>
);
