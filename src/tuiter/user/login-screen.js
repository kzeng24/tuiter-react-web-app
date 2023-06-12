import React, {useState} from "react";
import {useNavigate} from "react-router"; // to navigate to profile after login
import { useDispatch } from "react-redux"; // to invoke thunks
import { loginThunk } from "../services/auth-thunks"; // to send login HTTP request to server

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
          // send credentials to login controller
          // createAsyncThunk always handles all thrown errors internally -> need to "unwrap" the returned promise to catch error
          await dispatch(loginThunk({ username, password })).unwrap();
          // if successful, navigate to profile
          navigate("/tuiter/profile");
        } catch (e){
            alert("Unable to login: " + e.message);
        }
    }

    return (<>
    <h1>Login Screen</h1>
    <div className="mt-2">
        <label>Username</label>
        <input className="form-control" type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
    </div>
    <div className="mt-2">
        <label>Password</label>
        <input className="form-control" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
    </div>
    <button className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
    </>);
}

export default LoginScreen;