import React,{useState} from 'react';

export default function Navbar(props) {

  const changeMode = ()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0a2340'
      document.getElementById('head').style.color='white'
      document.getElementById('summary').style.color='white'
      document.getElementById('words').style.color='white'
      document.getElementById('prev').style.color='white'
      document.getElementById('output').style.color='white'
      
    }else{
      setMode('light')
      document.body.style.backgroundColor = '#f0f0f0'
      document.getElementById('head').style.color='black'
      document.getElementById('summary').style.color='black'
      document.getElementById('words').style.color='black'
      document.getElementById('prev').style.color='black'
      document.getElementById('output').style.color='black'
   
      
      
        
    }
  }

  const [mode, setMode] = useState('light');
  return(
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form className="d-flex">
        <div className="form-check form-switch">
        <input className="form-check-input mx-2" type="checkbox" onClick={changeMode} id="flexSwitchCheckDefault"/>
        </div>
      </form>
    </div>
  </div>
    </nav>
  )
};


 