import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import './src/styles/Status.css'

export function Status (){
    const style_main = { 
        width: "30%", 
        height: "40%", 
        backgroundColor: "black" };


    
    return(
        <div style={style_main} className='main'>
            Olá
        </div>
    )
}