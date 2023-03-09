import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const useSignup = () => {
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const signup = async (name, email, password, country) => {
        setError(null);

        const response = await fetch('http://localhost:5000/api/user/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                country,
            })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
            setTimeout(() => {
                toast.error(json.error);
            }, 100);
        }

        if (response.ok) {
            navigate('/auth/login')
            setTimeout(() => {
                toast.success('Register Successfully');
            }, 100);
        }
    }
    return { signup, error }
}