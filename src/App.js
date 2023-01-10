// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert"
 import{BrowserRouter as Router,
 Routes, 
 Route} from "react-router-dom";

function App() {
      const[mode , setMode]= useState('light');
      // const removeBodyClasses=()=>{
      //   document.body.classList.remove('bg-light')
      // document.body.classList.remove('bg-dark')
      //   document.body.classList.remove('bg-primary')
      //   document.body.classList.remove('bg-danger')
      //   document.body.classList.remove('bg-success')
      //   document.body.classList.remove('bg-warning')
      
      // }
      
      const toggleMode=()=>{
        // removeBodyClasses();
        //   document.body.classList.add('bg-'+cls)
          if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor='rgb(1,25,45)'
            document.body.style.color='white'
            showAlert("Dark mode has been activated","success : ")
            //[{document.title="TextUtils - HOME(Dark mode)"

            // setInterval(() => {
            //   document.title="Install TextUtils Now"
            // }, 2000);
            // setInterval(() => {
            //   document.title="TextUtils is amazing "
            // }, 1500);
            //Changes the title dynamically}]
          }else{
            setMode('light');
                    document.body.style.backgroundColor='white'
                    document.body.style.color='black'
                    showAlert("Light mode has been activated","success : ")
          }
        }


      const[alert,setAlert]=useState(null);
      const showAlert=(message,type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        },1500);

        }



     return (
    //This is JSX : 95% to 98% html
    // class=className,for=htmlFor etc.
    //use this tag for adding multiple items:
    //<> </>
    //'return' only returns one tag
    //That's why parenthesis after 'return' is important

    <>
   
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <TextForm heading="Enter the text to analyze below" mode={mode}/> */}
            <Routes>
              <Route exact path="/home" element={ <TextForm heading="Enter the text to analyze below" mode={mode}/> }/>
              <Route exact path="/about" element={<About/>}/>
            </Routes>
    </div>
    </Router>
    
     
    </>
  );
}

export default App;
