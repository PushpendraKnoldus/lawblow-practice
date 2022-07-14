import React from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const nextBtn = () => {
        navigate('/homepage')
    }

    return (
        <div>
            <h1>First Page of the web</h1>
            <button onClick={() => nextBtn()}>next</button>
        </div>
    )
}

export default Login