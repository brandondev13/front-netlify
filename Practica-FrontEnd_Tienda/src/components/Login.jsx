import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "14712001") {
            navigate("/add-product");
        } else {
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Usuario:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
};

export default Login;
