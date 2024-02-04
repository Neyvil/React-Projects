import { useState } from "react"
import "./style.css"
import clickSound from "./tune.mp3"

const Counter = () => {
  const [count,setCount]=useState(0)
  const increment=()=>{
    setCount(count+1)
    playSound(clickSound)
  };
  const decrement=()=>{
    if(count<=0){
      setCount(0)
      alert("oops!!")
    }
    else{
      setCount(count-1);
      playSound(clickSound)
    }
  };

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (<>
  <h1 className="headtext">COUNTER</h1>
  <div className="content">
    <div className="container">
      <h1 className="number">{count}</h1>
    </div>
    <section className="button-container">
      <button onClick={increment} className="increment">+</button>
      <button onClick={decrement} className="decrement">-</button>
    </section>
    </div>
    </>
  )
}

export default Counter
