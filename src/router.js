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
                <PrivateRoute
                    exact path="/notes"
                    element={<NotesIndex />}
                />
                <PrivateRoute
                    exact path="/users/edit"
                    element={<UserEdit />}
                />
            </Routes>
        </BrowserRouter>
    )
}
