import { useState } from 'react'
import './App.css'
function App() {
 const [height ,setHeight ] = useState("");
 const [weight ,setWeight ] = useState("");
 const [bmi , setBmi]= useState(null);
 const[bmistatus ,setBmiStatus] = useState("");
 const [errormessage , setErrorMessage] = useState("");
 

const calculateBmi = ()=> {
  const isValidHeight = /^\d+$/.test(height);
  const isValidWeight = /^\d+$/.test(weight);

if (isValidHeight && isValidWeight){
const heightInMeters = height / 100;
const bmiValue = weight / (heightInMeters * heightInMeters);

setBmi(bmiValue.toFixed(2)); 
if (bmiValue <18.5){
  setBmiStatus("underweight");
}
 else if (bmiValue >= 18.5 && bmiValue <24.9)
  {
  setBmiStatus("normal weight");
   } 
  else if (bmiValue >= 25 && bmiValue <29.9)
  {
  setBmiStatus("Overweight");
  } 
  else {
  setBmiStatus("obese");
 }
   setErrorMessage("");
} 
else{ 
   setBmiStatus("");
  setBmi(null); 
  setErrorMessage("Please enter valid numeric values for height and weight...");
 }
};

  return (
    <>
     <div className="bmi-calculator">
      <div className="box"></div>
      <div className="data">
        <h1>bmi calculator</h1>
      
        {errormessage && <p className="error">{errormessage }</p>}
        
        
        <div className="input-container">
          <label htmlFor='height'>Height (cm):</label>
          <input type="text" value= {height} id="height" onChange={(e)=>setHeight(e.target.value)} />
        </div>
         <div className="input-container">
          <label htmlFor='height'> Weight (Kg):</label>
          <input type="text" value={weight} id="weight"onChange={(e)=>setWeight(e.target.value)}  />
        </div>
       
        <button className="calculate-button" onClick={calculateBmi}>Calculate  BMI</button> 
      
         { bmi !== null && ( 
          <div className="result">
          <p>your bmi is : {bmi}</p>
          <p>status :{bmistatus}</p>
        </div>
         )}
        </div>
         </div>
    
      
      
     
    </>
  )
};

export default App;
