import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../styles/status.css'

export function Status (){    

    return(
        <div className='main'>
            <h1 className='status'>Status</h1>
            <div className='main-elements'>
                <div className='status-1'>
                    <div className='status-frame'></div>
                    <p className='status-text'>Carregando</p>
                </div>
                <div className='status-1'>
                    <div className='status-frame'></div>
                    <p className='status-text'>Manutenção</p>
                </div>
                <div className='status-1'>
                    <div className='status-frame'></div>
                    <p className='status-text'>Em Uso</p>
                </div>
                <div className='status-1'>
                    <div className='status-frame'></div>
                    <p className='status-text'>Disponível</p>
                </div>
            </div>
        </div>
    )
}