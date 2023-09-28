import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter); //dùng useSelector để gọi data về
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  }
  const decrement = () => {
    dispatch(actions.decrement());
  }
  const addBy = () => {
    dispatch(actions.addBy(10));
  }

  return (
    <div>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value 10</button>
    </div>
  );
}

export default App;
  //basic
  // const increment = () => {
  //   dispatch({ type: 'INC' });
  // }
  // const decrement = () => {
  //   dispatch({ type: 'DEC' });
  // }
  // const addBy = () => {
  //   dispatch({ type: 'ADD', payload: 10 });
  // }