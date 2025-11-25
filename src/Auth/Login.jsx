import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { UserContext } from '../Context/UserContext';


const Login = () => {
const {setUser} = useContext(UserContext);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();


const handleLogin = (e) => {
e.preventDefault();
if (username.trim() && password.trim()) {
setUser(username);
navigate('/home');
} else {
alert('Please enter username & password');
}
};


return (
<div className="login-container">
<form className="login-box" onSubmit={handleLogin}>
<h2>Login</h2>
<input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
<input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<button type="submit">Sign In</button>
</form>
</div>
);
};
export default Login;