import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../styles/status_equipe.css'

export function Status_Equipe (){    
    return(
        <div className='main-equipe'>
            <h1 className='status-equipe'>Status por Setor</h1>
            <div className='main-elements-equipe'>
                <div className='status-1-equipe'>
                    <div className='status-frame-equipe'></div>
                    <p className='status-text-equipe'>Bambury</p>
                </div>
                <div className='status-1-equipe'>
                    <div className='status-frame'></div>
                    <p className='status-text-equipe'>Vulcanização</p>
                </div>
                <div className='status-1-equipe'>
                    <div className='status-frame-equipe'></div>
                    <p className='status-text-equipe'>Qualidade</p>
                </div>
           
            </div>
        </div>
    )
}