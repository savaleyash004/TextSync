// import logo from "./logo.svg";
import "./App1.css";
import Navbar from "./ccomponents/Navbar";
import FormMy from "./ccomponents/FormMy";
// import Routes from "react-router-dom/Routes";
import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

import Mvesaage from "./ccomponents/Mvesaage";
// import About from "./ccomponents/About"
function App() {
  const [mode, setmode] = useState("light");
  const [Alert, setAlert] = useState(null);
  const showalert=(message,type)=>{
    setAlert({mess:message,
      typ:type
    })}
    setTimeout(()=>{  
      setAlert(null);
    },1000)
  const toggglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#080b19";
      showalert("Dark Mode is Enabled ","success")
    document.title=('Dark')
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode iS Enabled","success")
      document.title=('LIGHT')
    }
  };
  return (
    // <Router>
    <div className="page">
      <Navbar Navname="TextSync" mode={mode} toggglemode={toggglemode} />
      <Mvesaage Alert={Alert} />
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about"{
            < />
              exactpath :-4
              users/:component1
              /usera/a:compent2
          }
            </Route> */}
          {/* <Route exact path="/"
          element={ */}
            <FormMy
          showalert={showalert}
          head="ENTER TEXT TO ANALYSE"
          mode={mode}
          toggglemode={toggglemode}/>
          {/* }/> */}
           {/* <Route exact path="/about"
          element={
            <About/> */}
          {/* }/> */}
          
        {/* </Routes> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;
