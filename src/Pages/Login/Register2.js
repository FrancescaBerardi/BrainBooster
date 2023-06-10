import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Login/AuthContext";

const Register2 = () => {

    const { userId, login, logout } = useContext(AuthContext);

    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();

    const initialState = {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        birthday: "",
        street: "",
        country: "",
        postalCode: "",
        gender: "",
        cart: []
    }

    const [state, setState] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate){
            fetch("http://localhost:8000/user/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state)
        }).then(() => {
            console.log("new user added");
        }).then(() => {
            navigate("/");
        })
        }
    }

    const [compile, setCompile] = useState("");

    const validate = () => {
        debugger
        if (state.birthday !== null && state.birthday !== ""
            && state.country !== null && state.country !== ""
            && state.email !== null && state.email !== "") {
            setCompile("")
        } else {
            setCompile("Compila tutti i campi");
        }
    }

    return (
        <div className="App-content">
            <div className="register-div">
                <h1>Brainbooster Courses</h1>
                <h3>Registrazione</h3>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="birthday"><strong>data di nascita</strong></label>
                    <input
                        placeholder="birthday"
                        type="date"
                        value={state.birthday}
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            birthday: event.target.value,
                        }))}
                        required
                    />
                    <label htmlFor="street"><strong>via</strong></label>
                    <input
                        placeholder="street"
                        type="text"
                        value={state.street}
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            street: event.target.value,
                        }))}
                        required
                    />
                    <label htmlFor="country"><strong>paese</strong></label>
                    <input
                        placeholder="country"
                        type="text"
                        value={state.country}
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            country: event.target.value,
                        }))}
                        required
                    />
                    <label htmlFor="postalCode"><strong>CAP</strong></label>
                    <input
                        placeholder="postalCode"
                        type="text"
                        value={state.postalCode}
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            postalCode: event.target.value,
                        }))}
                        required />
                    <label htmlFor="gender"><strong>sesso</strong></label>
                    <input
                        className="gender"
                        type="radio"
                        value="yes"
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            gender: event.target.value,
                        }))}
                        required />
                    <label htmlFor="yes">si</label>
                    <input
                        className="gender"
                        type="radio"
                        value="no"
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            gender: event.target.value,
                        }))}
                        required />
                    <label htmlFor="yes">no</label>

                    <button type="submit"><strong>Registrati</strong></button>
                </form>
                <p>{compile}</p>
                <p><Link to="/register1">Indietro</Link></p>
            </div>
        </div>
    );
}

export default Register2;