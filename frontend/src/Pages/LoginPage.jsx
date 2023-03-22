import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { ToastContainer } from 'react-toastify';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';


export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useLogin();
    const [showPassword, setShowPassword] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const Login = async (e) => {
        e.preventDefault();
        await login(email, password)
    }

    return (
        <section className='bg-[#FBF8EE] w-screen h-screen flex justify-center items-center'>
            <div className='flex flex-col bg-[#E1D7C6] min-w-[400px] p-7 rounded-md font-inter space-y-2 shadow-signup'>
                <h1 className='text-2xl mb-10 mx-auto tracking-wider'>LOGIN</h1>
                <Box onSubmit={Login} component="form" sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
                    <TextField autoComplete='true' type='email' label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <FormControl>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <button className='bg-[#DFC298] py-3 rounded-md tracking-wider hover:bg-[#c4a980]'>Login</button>
                    <p className='text-sm'>Dont have an account? <Link to="/auth/signup" className='underline'>Sign Up</Link></p>
                </Box>
            </div>
            <ToastContainer autoClose={2000} limit={3} />
        </section>
    )
}
