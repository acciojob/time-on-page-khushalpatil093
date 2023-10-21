
import React from "react";
import './../styles/App.css';
import { useState, useEffect } from "react";
const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((seconds) => seconds + 1)
    },1000);
    
    return () => clearInterval(timer);
  }, [])

  return (
    <div>
        {/* Do not remove the main div */}
        {
          <p>You've been on this page for {count} seconds.</p>
        }
    </div>
  )
}

export default App
