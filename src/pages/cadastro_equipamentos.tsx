import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar } from '../components/Navbar'
import { CadastrarEquipamentos } from '../components/CadastrarDevice'

const CadastroEquipamentos= () => {
    return(
        <div>
            <Navbar />
            <div>
                <CadastrarEquipamentos />
            </div>
        </div>
    )
}

export default CadastroEquipamentos