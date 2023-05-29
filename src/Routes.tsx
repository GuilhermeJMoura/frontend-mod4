import {
    BrowserRouter as Router, 
    Route,
    Routes
    }  from "react-router-dom";
import Dashboard from "./pages/dashboard";
import CadastroEquipamentos from "./pages/cadastro_equipamentos";



export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}>
                    </Route>
                <Route path="/cadastrardev" element={<CadastroEquipamentos />}>
                    </Route>
            </Routes>   
        </Router>
    )
}