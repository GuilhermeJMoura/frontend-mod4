import {
    BrowserRouter as Router, 
    Route,
    Routes
    }  from "react-router-dom";
import Dashboard from "./pages/dashboard";


export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}>
                </Route>
            </Routes>          
        </Router>
    )
}