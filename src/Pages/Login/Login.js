import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {

    const navigate = useNavigate();

    const initialState = {
        email: "",
        password: ""
    }

    const [state, setState] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/user/").then((resp) => {
            return resp.json();
        }).then((resp) => {
            
                for (let i = 0; i < resp.length; i++) {
                    if (resp[i].password === state.password
                        && resp[i].email === state.email) {
                        { <p>Success</p> }
                        navigate("/");
                    } else if (resp[i].email === "" || resp[i].email === null
                        || resp[i].email === "" || resp[i].email === null) {
                        console.log("Login fallito")
                    } else {
                        console.log("Login fallito")
                    }
                }
            
        }).catch((error) => {
            toast.error("Login fallito");
        })

    }

    return (
        <div className="login-div">
            <h1>Brainbooster Courses</h1>
            <h3>Log in</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"><strong>email</strong></label>
                <input
                    type="text"
                    defaultValue={state.email}
                    onChange={(event) =>
                        setState((prevState) => ({
                            ...prevState,
                            email: event.target.value,
                        }))}
                    required
                />
                <label htmlFor="password"><strong>password</strong></label>
                <input
                    type="password"
                    defaultValue={state.password}
                    onChange={(event) =>
                        setState((prevState) => ({
                            ...prevState,
                            password: event.target.value
                        }))}
                    required />
                <button type="submit"><strong>Log in</strong></button>
            </form>
            {/* {handleSubmit && <p>Login fallito. Riprova o registrati</p>} */}
            <p className="noAccount">
                Non hai ancora un account? Registrati
                <Link to="/register1"><strong> qui.</strong></Link>
            </p>

        </div>
    );
}

export default Login;