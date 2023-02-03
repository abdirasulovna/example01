import { useReducer } from "react";
import Button from "./UI/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        result: state.result + Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} + ${state.input} = ${state.result + +state.input}`,
        ],
      };
    case "DECREMENT":
      return {
        ...state,
        result: state.result - Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} - ${state.input} = ${state.result - +state.input}`,
        ],
      };
    case "MULTIPLY":
      return {
        ...state,
        result: state.result * Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} * ${state.input} = ${state.result * +state.input}`,
        ],
      };
    case "DIVISION":
      return {
        ...state,
        result: state.result / Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} / ${state.input} = ${state.result / +state.input}`,
        ],
      };
    case "changeInput":
      return { ...state, input: action.input };
    default:
      return state;
  }
};

const initialState = {
  result: 0,
  input: "",
  history: [],
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "changeInput", input: e.target.value });
  };

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const multiply= () => {
    dispatch({ type: "MULTIPLY" });
  };
  const division = () => {
    dispatch({ type: "DIVISION" });
  };

  console.log(state);

  return (
    <div>
      <input type="number" value={state.input} onChange={handleInputChange} />
      Result: {state.result}
     
        {state.history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
      <Button onClick={multiply}>*</Button>
      <Button onClick={division} >/</Button>
    </div>
  );
};

export default Counter;
