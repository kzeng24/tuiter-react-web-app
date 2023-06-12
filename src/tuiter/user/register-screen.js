import React, {useState} from'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../services/auth-thunks';

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        try {
            await dispatch(registerUserThunk({ username, password })).unwrap();
            navigate("/tuiter/profile");
        } catch (e) {
            alert("Unable to register user: " + e.message);
        }
    };

    return (
      <>
        <h1>Register Screen</h1>
        <div className="mt-2">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <button className="btn btn-primary mt-2" onClick={handleRegister}>
          Register
        </button>
      </>
    );
}

export default RegisterScreen;