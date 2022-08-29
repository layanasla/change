import React from 'react';
import './style.css';
import { useState,useEffect} from "react"


export function Sell(){
    // useState -  manages items states in React project
     const [value,setValue]=useState(1); //1 - מכניסים ערך דיפולטיבי
     const [select,SetSelect]=useState('usd'); // usd - בוחרים מטבע דיפולטיבי
     const [result,SetResult]=useState(0);// 0 - מחזירים תוצאה דיפולטיבית 
    function mul(){ 
        // מחשבים ערך המטבע הרצוי בהשוואה לשקל
        // קורא קובץ מחירי המטבעות מול השיקל מהאינטרנט 
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json',
        {method:'GET'}).then(res=>res.json().then(data=>{
            const ils=data.ils;
            for(var k in ils) { //עובר על כל המטבעות עד שמגיע למטבע הרצוי ואז מחשב את מחירו בשיקל
                if(select===k){
                    SetResult(value/ils[k]*0.99); 
                }
                   
            }
        
        }));
    }
    useEffect(()=>{mul()},[value,select]) // נבחור לשחרר את האפקטים רק כאשר נשנה המטבע הדיפולטיבי
    // useEffect -  והערך של המטבע הניתן ואז מפעיל הפונקציה mul מקבל הפונציה 
    return ( 
        //לעיצוב האפלוקציה  html קוד
        //title's name in sell file -32
        //store the selected currency as state and update the state when the value changes. -35
        //currencies options 37-38
         //store the selected value as state and update the state when the value changes.-42
         // toFixed()- formats a number using fixed-point notation(ex: 123.456 = 123.46) -45
      <div className='Sell'>
          <h1 className='title'>Sell</h1>  
             <form>
                <select name='' onChange={val=>SetSelect(val.target.value)} > 
                    <option>usd</option>
                    <option>eur</option>
                </select>
                <br></br>
                <input type='number' className='input' placeholder='changeValue' value={value} onChange={val=>setValue(val.target.value)} ></input>
                <br></br>
                <h3>{result.toFixed(2)}</h3>
             </form>
       </div>
       
    )
 };

