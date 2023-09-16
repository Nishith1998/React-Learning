import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice"
import classes from "./Counter.module.css";

const Counter = () => {
  const [counter, show] = useSelector((state) => {
    console.log("state: ", state)
    return [
    state.counter.counter,
    state.counter.showCounter,
  ]}); // subscribing the counter key's value from state
  // const showCounter = useSelector((state) => )
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggleCounter" });
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());

  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(5)); // {type: UNIQUE_IDENTIFIER, payload: 5}
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && 
      <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
