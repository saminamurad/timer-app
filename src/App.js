
import './App.css';
import {useState} from 'react';
 
function App() {
  let timer= new Date().toLocaleTimeString();
  const [currentTime, setcurrentTime] = useState(timer);
  const updateTime =()=>{
    let timer= new Date().toLocaleTimeString()
    setcurrentTime(timer)

  }
setInterval(updateTime,1000)
  return (
    <div>
      <h1>Current Time Set{timer} </h1>

    </div>
  );
}

export default App;
