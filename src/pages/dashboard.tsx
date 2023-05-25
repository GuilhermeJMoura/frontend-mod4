import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar } from '../components/Navbar.tsx'
import { TabelaDevices } from '../components/TabelaDevices.tsx'
import { Status } from '../components/Status.tsx'
import { Status_Equipe } from '../components/StatusEquipe.tsx'
// import './styles/global.css'


const Dashboard= () => {
    const main= {
        display: 'flex',
        flexDirection: 'column' as const,
    }
    const container_central= {
        rowGap: '500px',
        display: 'flex',
        flex: '1',
        paddingLeft: '4%', 
        paddingRight: '4%',
        paddingTop: '1.5%'


    }
     

    return (
    
  
            <div style={main}>
                <Navbar />
                <div style={container_central}>
                    <div style={{ display: 'flex', flexDirection:'column', flex: 1, rowGap: '10px' }}>
                        <Status />
                        <Status_Equipe />
                    </div>
                    <div style={{ flex: 1 }}>
                        <TabelaDevices />
                    </div>
                </div>
            </div>
            
        

    )
}

export default Dashboard