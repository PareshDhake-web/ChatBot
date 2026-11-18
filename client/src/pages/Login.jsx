import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Box, Typography, useTheme, useMediaQuery, TextField, Button, Alert, Collapse, boxClasses } from "@mui/material";


const Login = () => {
    const theme = useTheme();
    const navigate = useNavigate(); // for redirecting
    // media
    const isNotMobile = useMediaQuery("(min-width: 100px)");
    //states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //register ctrl
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:8080/api/v1/auth/login", {
                email,
                password
            });

            toast.success("Login Successfully");
            localStorage.setItem("authToken", true)
            navigate("/")

        } catch (err) {
            console.log(err);
            if (err.response.data.error) {
                setError(err.message);
            }
            else if (err.message) {
                setError(err.message)
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }


    return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor={theme.palette.background.default}
        >
            <Box width={isNotMobile ? "40%" : "80%"} p={"2rem"} m={"2rem, auto"} borderRadius={5} sx={{ boxShadow: 5 }} backgroundColor={theme.palette.background.alt}>
                <Collapse in={Boolean(error)} timeout="auto" unmountOnExit>
                    <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
                </Collapse>

                <form onSubmit={handleSubmit}>
                    <Typography variant='h3'>Sign in</Typography>
                    <TextField label="email" required margin='normal' fullWidth value={email} onChange={(e) => { setEmail(e.target.value) }}></TextField>
                    <TextField label="password" type='password' required margin='normal' fullWidth value={password} onChange={(e) => { setPassword(e.target.value) }}></TextField>
                    <Button type='submit' fullWidth variant='contained' size='large' sx={{ color: "white", mt: 2 }}>Sign in</Button>
                    <Typography mt={2}>don't have an account ? <Link to="/register">Please Register</Link></Typography>
                </form>
            </Box>
        </Box>
    )
}


export default Login