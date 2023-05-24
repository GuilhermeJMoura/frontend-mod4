import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar } from '../components/Navbar.tsx'
import { TabelaDevices } from '../components/TabelaDevices.tsx'
// import './styles/global.css'


const Dashboard= () => {
    return (
        <>
        <React.StrictMode>
            <Navbar />
            <TabelaDevices />
        </React.StrictMode>
        </>

    )
}

export default Dashboard