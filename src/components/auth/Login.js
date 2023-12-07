import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import "./Auth.css"


export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("lu_token", res.token)
                    navigate("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <img className="logo-wordmark" src="/logo.svg" />
                    <h2>Schedule your next gaming event</h2>

                    <input ref={username} type="username" placeholder="Username" id="username" className="form-control" required autoFocus />
                    <input ref={password} type="password" id="password" placeholder="Password" className="form-control"  required />

                    <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Create an account</Link>
            </section>
        </main>
    )
}
