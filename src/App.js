import React, { useState } from "react";
import Hero from "./components/Hero";

function App(props) {
  const [count, setCount] = useState(0);
  //next video callback
  const handleHeroClick = () => {};
  return (
    <div>
      <h1>React hook</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="EZ FE" onClick={handleHeroClick} />
    </div>
  );
}

App.propTypes = {};

export default App;
