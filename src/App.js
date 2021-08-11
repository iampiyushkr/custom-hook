
import { useState } from 'react';
import './App.css';
import {useTimeout} from "./components/customHook1"

function App() {
  const [data,setData]=useState()
  const isready = useTimeout(5000)
  
  return (
    <div className="App">
       { isready?<h1>true</h1>:<h1>false</h1>}
    </div>
  );
}

export default App;
