import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    exact path="/"
                    element={<HomeScreen />}
                />
            </Routes>
        </BrowserRouter>
    )
}
