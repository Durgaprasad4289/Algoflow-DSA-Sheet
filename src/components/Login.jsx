import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./all_css_codes/Login.css"
import algoflow from "../assets/algoflow_icon.png"
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const localStorageKey = "user_info";
    const [inputname, setInputName] = useState("");
    const [inputemail, setInputEmail] = useState("");
    const [user, setUser] = useState({
        name: null,
        email: null,
        isAuthenticated: false
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (user.name && user.email) {
            localStorage.setItem(localStorageKey, JSON.stringify(user));
        }
        console.log("User Data from Local Storage", JSON.parse(localStorage.getItem(localStorageKey)));
    }, [user]);

    function handleSubmit(e) {
        e.preventDefault();
        if (inputname === "" || inputemail === "") {
            setInputEmail("")
            setInputName("")
            return toast.error("Please Enter Valid Details")
        }

        const updatedUser = {
            name: inputname,
            email: inputemail,
            isAuthenticated: true
        };
        setUser(updatedUser);

        setInputEmail("")
        setInputName("")
        toast.success("User Details Saved Successfully")
        if (updatedUser.isAuthenticated) {
            setTimeout(() => {
                navigate("/", { replace: true });
            }, 500);
            return
        }
    }
    return (
        <form className="authentication">
            <ToastContainer autoClose={2000} pauseOnHover={false} />
            <h1>Login Page</h1>
            <img src={algoflow} alt="AlgoFlow Logo" />
            <p>Welcome to AlgoFlow</p>
            <label htmlFor="name" id='name-label'>Name :</label>
            <input type="text"
                id="name"
                placeholder='User Name'
                value={inputname}
                onChange={(e) => setInputName(e.target.value.trim().toLowerCase())}
                required
            />
            <label htmlFor="email" id='email-label'>Email :</label>
            <input type="email"
                id="email"
                value={inputemail}
                placeholder='User@gmail.com'
                onChange={(e) => setInputEmail(e.target.value.trim().toLowerCase())}
                required
            />
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    )
}
