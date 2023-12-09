import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                {/* Add Routes here */}
            </Route>
            <Route path="/" element={<Login />} />
        </Routes>
    </>
}
