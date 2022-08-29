import React from 'react';
import { useState } from "react"
import {Sell} from './Sell';
import { Buy} from './Buy';


export function Change(){
    const[modallsOpen, setModallsOpen] = useState(false);

    function ChangeSell(){
        setModallsOpen(true);
    }

    function ChangeBuy(){
        setModallsOpen(false);
    }

    return(
        <div>
            <button className='sell' onClick={ChangeSell}>Sell</button>
            <button className='buy' onClick={ChangeBuy}> buy</button>
            {modallsOpen? <Sell/>:<Buy/>}
        </div>
    );
}

