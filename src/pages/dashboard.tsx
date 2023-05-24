import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar } from '../components/Navbar.tsx'
import { TabelaDevices } from '../components/TabelaDevices.tsx'
import { Status } from '../components/Status.tsx'
// import './styles/global.css'


const Dashboard= () => {
//     const main= {
//         display: 'flex';
//         flex
//     }

    return (
        <>
        <React.StrictMode>
            {/* <div>/</div> */}
            <Navbar />
            <TabelaDevices />
            <Status />
            
        </React.StrictMode>
        </>

    )
}

export default Dashboard