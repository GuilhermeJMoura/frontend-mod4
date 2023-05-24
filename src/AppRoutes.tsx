import {
    BrowserRouter as Router, 
    Route,
    Routes
    }  from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { Login } from "./pages/Login"


export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}>
                </Route>
                <Route path="/login" element={<Login />}>
                </Route>
            </Routes>   
        </Router>
    )
}