import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const navigate = useNavigate();

    const login = async (email, password) => {
        setError(null);

        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
            toast.error(json.error);
        }

        if (response.ok) {
            // const username = jwtDecode(json);

            //save the user to local storage
            localStorage.setItem('user', json.token);

            //update the auth context
            dispatch({ type: 'LOGIN', payload: json })
            // console.log(json)

            navigate('/dashboard')
            // setTimeout(() => {
            //     toast(`Welcome ${username.name}`, { icon: "🚀" });
            // }, 100);

        }
    }
    return { login, error }
}