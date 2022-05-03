import React, { useEffect } from "react";
import './res.css';
import {useParams} from 'react-router';
import { useState } from "react";
import Cdata from './content.json';
import img from './images/logo1.png'

function Res(){
const [K, setK] = useState(1)
  var {fincome,collegename,caste,inper}=useParams();
   
    return(
        <div>
    <div class="title-container">
        <img src={img} alt="logo" class="logo"></img>
        <div class="title"><font size="7" id="ram">College short list web Application</font></div>
    </div>
{K!=0?
<div>
    <div class="section">
        <br></br>
        <br></br>
        <h2 class="text">Congratulation....!</h2>
        <h3 class="text">Available courses in the college for you...! according to your filter.</h3>
        </div>
	

    <div class="man"><div >
        <table style={{width:"90%",marginLeft:'auto',marginRight:'auto',border:'2px solid black',backgroundColor:'#0F0E0E'}}>
            <thead>
                         <tr >
                             <th style={{width:"30%",border:'1px solid black',color:"white",fontSize:"18px" }}>Course Name</th>
                             <th style={{width:"30%",border:'1px solid black',color:"white",fontSize:"18px"}}>Eligible for Scholarship</th>
                             <th style={{width:"30%",border:'1px solid black',color:"white",fontSize:"18px"}}>Scholarship Amount</th>
                         </tr>
                         
                         </thead>
    
    </table>
   
        { Cdata.map((value,index)=>{
        
        if(collegename===value.College_Name && caste===value.Caste){
             if(fincome>=(value.Annual_Fee-value.Scholarship_Amount) && inper>=value.Scholorship_Marks)
             { 
                
        return <div>
<table style={
    {width:'90%',color:'black',backgroundColor:"rgb(0, 0, 0, 0.6)",marginLeft:'auto',marginRight:'auto',border:'1px solid black'}
} >
               <tr >
               <td style={{width:"30%",border:'1px solid black',color:"white",fontStyle:"normal"}}>{value.Courses}</td>
               
               <td style={{width:"30%",border:'1px solid black',color:"white",backgroundColor:"rgb(0, 0, 0, 0)"}}>{value.Scholarship_Amount===0?'NO':'YES'}</td>
               <td style={{width:'30%',border:'1px solid black',color:"white"}}> {value.Scholarship_Amount===0?'NA':value.Scholarship_Amount}</td>
           </tr>
           </table>

           </div>
          
             }
             else{
                setK(0)
             }
      }
      
    
       })}
    

    </div>
    </div></div>
:<div class="section">
<h2 class="text" style={{color:'white',fontSize:"40px",fontStyle:"italic",fontFamily:"bold italic" }}>Sorry....!</h2>
<h3 class="text" style={{color:'white'}}>There is no available courses</h3>
</div>}
<div class="man"></div>
<div class="man2">
        <font size="3" align="center" color="white" id="sri"
            >&copy; are reserved for 2022,GANGAVARAM,523225 </font
        >
      </div>
        </div>
    
    );
    
}

export default Res;