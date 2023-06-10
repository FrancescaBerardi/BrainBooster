import { createContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RegisterData = createContext();

const Register1 = () => {

    const initialState = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        passVerify: ""
    }

    const [state, setState] = useState(initialState);

    const navigate = useNavigate();

    const [verify, setVerify] = useState("");
    const [compile, setCompile] = useState("");

    const handleClick = () => {
        if(state.passVerify === state.password){
            if (state.name !== "" && state.name !== null && state.email !== ""
            && state.email !== null && state.lastname !== "" && state.lastname !== null
            && state.password !== "" && state.password !== null) {
                navigate("/register2", {
                state: state
            });
        } else {
            setCompile("Compila tutti i campi")
        }
        } else {
            setVerify("Le due password non corrispondono")
        }
        
    }

    return (
        <div className="App-content">
            <div className="register-div">
                <h1>Brainbooster Courses</h1>
                <h3>Registrazione</h3>
                <form className="register-form">
                    <label htmlFor="name"><strong>nome</strong></label>
                    <input
                        placeholder="name"
                        type="text"
                        value={state.name}
                        onChange={(event) =>
                            setState((prevState) => ({ //initialstate
                                ...prevState, //prende tutti i campi
                                name: event.target.value,
                            }))}
                        required
                    />
                    <label htmlFor="lastname"><strong>cognome</strong></label>
                    <input
                        placeholder="lastname"
                        type="text"
                        value={state.lastname}
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            lastname: event.target.value,
                        }))}
                        required
                    />
                    <label htmlFor="email"><strong>email</strong></label>
                    <input
                        placeholder="email"
                        type="text"
                        value={state.email}
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            email: event.target.value
                        }))}
                        required
                    />
                    <label htmlFor="password"><strong>password</strong></label>
                    <input
                        placeholder="password"
                        type="password"
                        value={state.password}
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            password: event.target.value
                        }))}
                        required />
                    <label htmlFor="passVerify"><strong>verifica password</strong></label>
                    <input
                        placeholder="password"
                        type="password"
                        value={state.passVerify}
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            passVerify: event.target.value
                        }))}
                        required />
                    <button onClick={handleClick}><strong>Continua</strong></button>
                </form>
                <p><strong>{verify}</strong> </p>
                <p><strong>{compile}</strong> </p>
                <p className="haveAccount">
                    Hai già un account? Clicca
                    <Link to="/login"><strong> qui </strong></Link>
                    per accedere.
                </p>
            </div>

        </div>
    );
}
export default Register1;