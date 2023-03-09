import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSignup } from '../hooks/useSignup';
import { ToastContainer } from 'react-toastify';


export const RegisterPage = () => {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const { signup } = useSignup();

    const Register = async (e) => {
        e.preventDefault();
        await signup(username, email, password, selectedCountry)
    }


    return (
        <section className='bg-[#FBF8EE] w-screen h-screen flex justify-center items-center'>
            <div className='flex flex-col bg-[#E1D7C6] min-w-[400px] p-7 rounded-md font-inter space-y-2 shadow-signup'>
                <h1 className='text-2xl mb-10 mx-auto tracking-wider'>SIGN UP</h1>
                <Box onSubmit={Register} component="form" sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
                    <TextField type='text' label="Username" variant="outlined" value={username} onChange={(e) => setusername(e.target.value)} />
                    <TextField type='email' label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField type='password' label="Password" variant="outlined" value={password} onChange={(e) => setpassword(e.target.value)} />
                    <FormControl>
                        <InputLabel id="country">Choose a country</InputLabel>
                        <Select
                            labelId="country"
                            label="Choose a country"
                            id="demo-simple-select"
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                            {countries.map((country) => (
                                <MenuItem key={country.code} value={country.name}>
                                    {country.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <button className='bg-[#DFC298] py-3 rounded-md tracking-wider hover:bg-[#c4a980]'>Sign Up</button>
                    <p className='text-sm'>Already have an account? <Link to="/auth/login" className='underline'>Login</Link></p>
                </Box>
            </div>
            <ToastContainer autoClose={2000} />
        </section>
    )
}

const countries = [
    {
        code: "ID",
        name: "Indonesia",
    },
    {
        code: "SGP",
        name: "Singapore",
    },
    {
        code: "MYA",
        name: "Malaysia",
    },
    {
        code: "UK",
        name: "United Kingdom",
    },
    {
        code: "USA",
        name: "United States America",
    },
];