import { useState } from "react"

export default function SignupPage() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [nationalityInput, setNationalityInput] = useState("");
    const [emailError, setEmailError] = useState('Email is invalid');
    const [passwordError, setPasswordError] = useState('password is invalid');

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const emailHandler = (e) => {
        if (!isValidEmail(e.target.value)) {
            setEmailError('Email is invalid');
        } else {
            setEmailError(null);
        }
        setEmailInput(e.target.value);
    }

    const passwordHandler = (e) => {
        if(e.target.value.length < 6) {
            setPasswordError('password is invalid');
        }
        else {
            setPasswordError(null);
        }
        setPasswordInput(e.target.value);
    }

    const nationalityHandler = (e) => {
        setNationalityInput(e.target.value);
        console.log(e.target.value);
    }

    return(
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">Email</label>
                <input type="email" className="form-control" id="validationCustom01" onChange={emailHandler} value={emailInput}/>
                {emailError && <h2 style={{color: 'red'}}>{emailError}</h2>}
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" onChange={passwordHandler} value={passwordInput}/>
                {passwordError && <h2 style={{color: 'red'}}>{passwordError}</h2>}
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Nationality</label>
                <select id="inputState" className="form-select" onChange={nationalityHandler}>
                    <option value=''>Choose Nacionality...</option>
                    <option value='en'>en</option>
                    <option value='de'>de</option>
                    <option value='fr'>fr</option>
                </select>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
            {nationalityInput === 'en' && <p>Hello</p>}
            {nationalityInput === 'de' && <p>Hallo</p>}
            {nationalityInput === 'fr' && <p>Bonjour</p>}
            <p>Your email is: {emailInput}</p>
            {passwordError === null ? <p>Your email is correct</p> : <p>Your email is incorrect</p>}
            </form>
    )
}