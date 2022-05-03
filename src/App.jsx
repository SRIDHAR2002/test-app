import React from "react";
import Form from "./files/form";
import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";
import Res from "./files/res";
function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Sapp />} ></Route>
       <Route path="/res/:fincome/:collegename/:caste/:inper" element={<Res />} ></Route>
      
   
    </Routes>
 </Router>
   
  );
}

function Sapp(){
  return(
    <div className="App">
    <Form />
    </div>
  );
}

export default App;
