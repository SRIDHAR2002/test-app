import React, { useEffect } from "react";
import { useState } from "react";
import Cdata from './content.json';
import { useNavigate } from "react-router";
import axios from 'axios';
import img from './images/logo1.png'



function Form()
{
  const [collegename, setcollegename] = useState('s');
  const [caste, setcaste] = useState('');
  const [fincome, setfincome] = useState(0);
  const [inper, setinper] = useState(0);
  const [des, setdes] = useState([]);
  const [bo, setbo] = useState();


let l =useNavigate();


const submition=()=>{
  l(`/res/${fincome}/${collegename}/${caste}/${inper}`)
 

}
 
    return(
        <div>
            
      <div class="regform">
        <table>
          <tr>
            <th>
              <img src="./logo1.png"  alt=" " width="1200px" />
              <img src={img} alt="logo" class="logo"></img>
            </th>
            <th>
              <font size="7" id="ram"
                >College Shortlist Webpage Application</font>
            </th>
          </tr>
        </table>
      </div>
      <div class="mane">
         <form id="as2" action="get" >
          <div class="mane2">
            <div class="mane3">
              <table align="center">
                <tr>
                  <th >
                    <font size="5" color="white" id="sri"
                      >College Name&nbsp;&nbsp;&nbsp;:</font
                    >
                    <br /><br />
                  </th>
                  <td class="rew">
                    <select required="required" onChange={(event)=>{setcollegename(event.target.value)}} id="college" >
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="" selected="selected" disabled="disabled">
                        select college
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}}  value="Aditya Engineering College">
                      Aditya Engineering College
                      </option>
                      <option
                    onChange={(event)=>{setcollegename(event.target.value)}} value="Aditya Institute Of Technology And Management"
                      >
                       Aditya Institute Of Technology And Management
                      </option>
                      <option
                       onChange={(event)=>{setcollegename(event.target.value)}} value="Amrita Sai Institute of Science and Technology"
                      >
                        Amrita Sai Institute of Science and Technology
                      </option>
                      <option  onChange={(event)=>{setcollegename(event.target.value)}} value="Andhra Loyla College">
                        Andhra Loyla College
                      </option>
                      <option
                         onChange={(event)=>{setcollegename(event.target.value)}} value="Anil Neerukonda Institute Of Technology & Sciences"
                      >
                        Anil Neerukonda Institute Of Technology & Sciences
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="AUDISANKARA COLLEGE OF ENGINEERING & TECHNOLOGY"
                      >
                        Audisankara College Of Engineering & Technology
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="AVANTHI INSTITUTE OF ENGINEERING & TECHNOLOGY"
                      >
                        Avanthi Institute Of Engineering & Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="BAPATLA ENGINEERING COLLEGE">
                        Bapatla Engineering College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="BONAM VENKATA CHALAMAYYA ENGINEERING COLLEGE"
                      >
                        Bonam Venkata Chalamayya Engineering College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Chalapathi Institute of Engineering & Technology"
                      >
                        Chalapathi Institute of Engineering & Technology
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Devineni Venkata Ramana & Dr.Hima Sekhar MIC College of Technology"
                      >
                        Devineni Venkata Ramana & Dr.Hima Sekhar MIC College of
                        Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="GMR INSTITUTE OF TECHNOLOGY">
                        G.M.R. Institute of Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="G.PULLA REDDY ENGINEERING COLLEGE">
                        G.Pulla Reddy Engineering College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="GAYATRI VIDYA PARISHAD COLLEGE OF ENGINEERING"
                      >
                        Gayatri Vidya Parishad College Of Engineering
                      </option>
                      <option
                       onChange={(event)=>{setcollegename(event.target.value)}} value="Godavari Institute of Engineering & Technology"
                      >
                        Godavari Institute of Engineering & Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Govt. College for Women">
                        Govt. College for Women
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Gudlavalleru Engneering College">
                        Gudlavalleru Engneering College
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="J.M.J. College of Women">
                        J.M.J. College of Women
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Jagarlamudi Kuppuswamy Choudary College">
                        Jagarlamudi Kuppuswamy Choudary College
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="JNTUA COLLEGE OF ENGINEERING">
                        JNTUA College Of Engneering
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Kakaraparti Bhavanarayana College">
                        Kakaraparti Bhavanarayana College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Lakireddy Bali Reddy College of Engineering"
                      >
                        Lakireddy Bali Reddy College of Engineering
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Lendi Institute of Engineering and Technology"
                      >
                        Lendi Institute of Engineering and Technology
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="MADANAPALLE INSTITUTE OF TECHNOLOGY & SCIENCE"
                      >
                        Madanapalle Institute Of Technology & Science
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Maharaj Vijayaram Gajapathi Raj College of Engineering"
                      >
                        Maharaj Vijayaram Gajapathi Raj College of Engineering
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Montessori Mahila Kalasala Punnammathota">
                        Montessori Mahila Kalasala Punnammathota
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="N.B.K.R.INSTITUTE OF SCIENCE & TECHNOLOGY">
                        N.B.K.R.Institute Of Technology & Science
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="NARASARAOPETA ENGINEERING COLLEGE">
                        Narasaraopeta Engineering College
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="NRI Institute of Technology">
                        NRI Institute of Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="PACE Institute of Technology & Sciences">
                        PACE Institute of Technology & Sciences
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Pragati Engineering College">
                        Pragati Engineering College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Prasad V. Potluri Siddhartha Institute of Technology"
                      >
                        Prasad V. Potluri Siddhartha Institute of Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="QIS COLLEGE OF ENGINEERING & TECHNOLOGY">
                        QIS College Of Engineering & Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="R.V.R & J.C.COLLEGE OF ENGINEERING">
                        R.V.R & J.C College Of Engineering
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Raghu Engineering College">
                        Raghu Engineering College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="RAJEEV GANDHI MEMORIAL COLLEGE OF ENGINEERING & TECHNOLOGY"
                      >
                        Rajeev Gandhi Memorial College Of Engineering &
                        Technology
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="SAGI RAMAKRISHNAM RAJU ENGINEERING COLLEGE"
                      >
                        Sagi Ramakrishnam Raju Engineering College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Sasi Institute of Technology & Engineering"
                      >
                        Sasi Institute of Technology & Engineering
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Shri Vishnu Engineering College for Women">
                        Shri Vishnu Engineering College for Women
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="SIDDHARTH INSTITUTE OF ENGINEERING & TECHNOLOGY"
                      >
                        Siddharth Institute Of Engineering & Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="SREE VIDYANIKETHAN ENGINEERING COLLEG">
                        Sree Vidyanikethan Engineering College
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="SRI SIVANI COLLEGE OF ENGINEERING">
                        Sri Sivani College Of Engineering
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Sri Vasavi Engineering College">
                        Sri Vasavi Engineering College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Sri Velagapudi Ramakrishna Memorial College"
                      >
                        Sri Velagapudi Ramakrishna Memorial College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="SRI VENKATESA PERUMAL COLLEGE OF ENGINEERING & TECHNOLOGY"
                      >
                        Sri Venkatesa Perumal College Of Engineering &
                        Technology
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="ST. ANN'S COLLEGE OF ENGINEERING & TECHNOLOGY"
                      >
                        St. Ann's College Of Engineering & Technology
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="St. Joseph’s College of Education for Women"
                      >
                        St. Joseph’s College of Education for Women
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Swarnandhra College of Engineering & Technology"
                      >
                        Swarnandhra College of Engineering & Technology
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Usha Rama College of Engineering and Technology"
                      >
                        Usha Rama College of Engineering and Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="V.S.R & N.V.R. College">
                        V.S.R & N.V.R. College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Vasireddy Venkatadri Institute of Technology"
                      >
                        Vasireddy Venkatadri Institute of Technology
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="VELAGAPUDI RAMAKRISHNA SIDDHARTHA ENGINEERING COLLEGE"
                      >
                        Velagapudi Ramakrishna Siddhartha Engineering College
                      </option>
                      <option
                        onChange={(event)=>{setcollegename(event.target.value)}} value="Vignan’s Institute of Information Technology"
                      >
                        Vignan’s Institute of Information Technology
                      </option>
                      <option onChange={(event)=>{setcollegename(event.target.value)}} value="Vishnu Institute of Technology">
                        Vishnu Institute of Technology
                      </option>
                    </select>
                    <br /><br />
                  </td>
                </tr>
                <tr>
                  <th>
                    <font size="5" color="white" id="sri"
                      >Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</font
                    >&nbsp; <br /><br />
                  </th>
                  <td className="rew">
                    <select onChange={(event)=>{setcaste(event.target.value)}} id="caste" required="true">
                      <option onChange={(event)=>{setcaste(event.target.value)}} value="" selected="selected" disabled="disabled">
                        choose category
                      </option>
                      <option onChange={(event)=>{setcaste(event.target.value)}} value="GEN">GEN</option>
                      <option onChange={(event)=>{setcaste(event.target.value)}} value="OBC">OBC</option>
                      <option onChange={(event)=>{setcaste(event.target.value)}} value="SC">SC</option>
                      <option onChange={(event)=>{setcaste(event.target.value)}} value="ST">ST</option></select
                    ><br /><br />
                  </td>
                </tr>
                <tr>
                  <th>
                    <font size="5" color="white" id="sri"
                      >Family Income&nbsp;&nbsp;:</font
                    >
                    <br /><br />
                  </th>
                  <td class="rew">
                    <input 
                    onChange={(event)=>{setfincome(event.target.value)}}
                      required="required"
                      type="text" 
                      placeholder="Enter Your Family Income"
                      id="income"
                    /><br /><br />
                  </td>
                </tr>
                <tr>
                  <th>
                    &nbsp;<font size="5" color="white" id="sri"
                      >12<sup>th</sup>Percentage&nbsp;:</font
                    >
                  </th>
                  <td class="rew">
                    <input
                    onChange={(event)=>{setinper(event.target.value)}}
                      required="required"
                      type="text"
                      placeholder="Enter Your 12th Percentage"
                      id="inter_marks"
                      
                    /></td>
                </tr>
                <tr>
                  <th></th>
                  <td><button type='submit' class="btn btn-dark btn-sm"  onClick={submition} >
              SUBMIT</button>
            </td>
                </tr>
              </table>
            </div>

            
          </div>
        </form>
       
      </div>
      <div class="mane4">
        <font size="3" align="center" color="white" id="sri"
            >&copy; are reserved for 2021,GANGAVARAM,523225 </font
        >
      </div>
     

      

        </div>
        
    );
}

export default Form;
