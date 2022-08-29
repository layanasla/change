import React from 'react';
import './style.css';
import "./Sell";
import {useState,useEffect} from "react"


export function Buy(){
    const [value, setValue] = useState(1); 
    const [select, SetSelect] = useState('usd');
    const [result, SetResult] = useState(0);
     function mul(){
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json',
        {method:'GET'}).then(res=>res.json().then(data=>{
            const ils=data.ils;
            for(var k in ils) {
                if(select===k){
                    SetResult((value/(ils[k]))*1.01);
                }
                   
            }
        
        }));
    }
    useEffect(()=>{mul()},[value,select])
    return ( 
       <div className='Buy'>
          <h1 className='title'>Buy</h1>
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
}

