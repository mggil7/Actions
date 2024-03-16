
import "./App.css";
import { useState } from "react";

function App() {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor =  buttonColor === "red" ? "blue" : "red" 
  const className = isButtonDisabled ? "gray" : buttonColor      
  


  const handleChange = () => {
    isButtonDisabled ? (
    setButtonDisabled(false) ) : (
      setButtonDisabled(true) 
      
    )
   setButtonColor(newButtonColor)
  }

  return (
    <div>
      <button
        className={className}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isButtonDisabled}

      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={handleChange}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
