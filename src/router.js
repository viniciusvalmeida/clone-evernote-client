import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import Register from "./screens/auth/register";
import Login from "./screens/auth/login";
import NotesIndex from "./screens/notes/index";
import UserEdit from "./screens/users/edit";
import PrivateRoute from "./components/auth/private_route";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    exact path="/"
                    element={<HomeScreen />}
                />
                <Route
                    exact path="/register"
                    element={<Register />}
                />
                <Route
                    exact path="/login"
                    element={<Login />}
                />
                <Route
                    exact path="/notes"
                    element={<PrivateRoute component={NotesIndex} />}
                />
                <Route
                    exact path="/users/edit"
                    element={<PrivateRoute component={UserEdit} />}
                />
            </Routes>
        </BrowserRouter>
    )
}
