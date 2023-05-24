import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar } from '../components/Navbar.tsx'
import { TabelaDevices } from '../components/TabelaDevices.tsx'
import { Status } from '../components/Status.tsx'
// import './styles/global.css'


const Dashboard= () => {
    const main= {
        display: 'flex',
        flexDirection: 'column' as const,
        height: '100vh'
    }
    const container_table= {
        display: 'flex',
        flex: '1'
    }
     

    return (
        <>
        <React.StrictMode>
            <div style={main}>
                <Navbar />
                <div style={container_table}>
                    <div style={{ flex: 1 }}>
                        <Status />
                    </div>
                    <div style={{ flex: 1 }}>
                        <TabelaDevices />
                    </div>
                </div>
            </div>
            
            
        </React.StrictMode>
        </>

    )
}

export default Dashboard