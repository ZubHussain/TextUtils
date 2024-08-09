import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);

  const changeMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0a2340'
      document.getElementById('head').style.color='white'
      document.getElementById('summary').style.color='white'
      document.getElementById('words').style.color='white'
      document.getElementById('prev').style.color='white'
      document.getElementById('output').style.color='white'
      showAlert("Dark Mode has been enabled","success")
      
    }
    
    else{
      setMode('light')
      document.body.style.backgroundColor = '#f0f0f0'
      document.getElementById('head').style.color='black'
      document.getElementById('summary').style.color='black'
      document.getElementById('words').style.color='black'
      document.getElementById('prev').style.color='black'
      document.getElementById('output').style.color='black'
      showAlert("Light Mode has been enabled","success")       
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null) 
    },2000)
  }

  return (
    <>

{/* <Router> */}

  <Navbar title="TextUtils" mode={mode} changeMode={changeMode}/>
  <Alert alert={alert}/>
  <div className="container">
    {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze"/>}>  */}
            {/* </Route> */}
    {/* </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter the Text to analyze"/>
  </div>

{/* </Router> */}

    </>
  );
}

export default App;
