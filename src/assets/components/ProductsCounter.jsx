import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
const[step,setstep]=useState(1);
  function increment() {
    setCount(count + step);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - step);
    }
  }
function addthree(){

    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)

}
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "10px", borderRadius: "8px", width: "120px", textAlign: "center" }}>
      <p>العداد: {count}</p>
      <button onClick={increment} style={{ margin: "0 4px" }}>+</button>
      <button onClick={decrement} style={{ margin: "0 4px" }}>-</button>
      <button onClick={()=>setstep(5)}>  plus counter 5</button>
      <button onClick={addthree}>+3</button>
    </div>
  );
}

export default Counter;