import './App.css';
import './index.css'
import React ,{useState} from "react" ;

function App() {
//making state of our application

const [weight,setWeight] = useState(0);
const [height,setHeight] = useState(0);
const [bmi,setBmi] = useState(' ');
const [message,setMessage] = useState(' ');

//Logic
let calcBmi =(event) => {
 
  event.preventDefault();

  if(weight===0 || height===0)
  {
    alert('Please enter a valid weight and height')
  }
  else{
    // Convert height from cm to meters
    const heightInMeters = height / 100;

    //calculate bmi
    let bmi = (weight/(heightInMeters * heightInMeters)) ;
    setBmi(bmi.toFixed(1)) ;

    if (bmi < 18.5) {
      setMessage('You are underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('You are a healthy weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setMessage('You are overweight');
    } else {
      setMessage('You are obese');
    }
}
};
//reload
let reload = () => {
  window.location.reload()
}



  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input type="text" placeholder="Enter Weight Value" value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input type="text" placeholder="Enter Height Value" value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App ;