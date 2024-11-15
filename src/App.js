import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const client = new QueryClient();
console.log("🚀 ~ client:", client);

function App() {
  const dispatch = useDispatch();

  const storeState = useSelector((state) => state);

  // const counter = useSelector((state) => state.counter);
  const toggleState = useSelector((state) => state.showCounter);

  const increase = () => {
    const action = { type: "increase", payload: 2 };
    dispatch(action);
  };
  const decrease = () => {
    const action = { type: "decrease", payload: 3 };
    dispatch(action);
  };
  const changeToggle = () => {
    const action = { type: "toggle" };
    dispatch(action);
  };

  return (
    <QueryClientProvider client={client}>
      <button onClick={changeToggle}>toggle</button>

      <div className="App">
        <h1>hello Redux basics</h1>
        <div className="counter"> counter : {storeState.counter}</div>
        <div>
          <button onClick={increase}>increase</button>
          <button onClick={decrease}>decrease</button>
        </div>
        <div>
          <button>show counter number</button>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
