import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const loggedIn = JSON.parse(localStorage.getItem("authToken"));

    // handle logout
    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8080/api/v1/auth/logout"); // backend URL
            localStorage.removeItem("authToken");
            toast.success("Logout Successfully");
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box
            width={"100%"}
            backgroundColor={theme.palette.background.alt}
            p={"1rem 6%"}
            textAlign={"center"}
            sx={{ boxShadow: 3, mb: 2 }}
        >
            <Typography variant='h1' color={"primary"} fontWeight="bold">
                AI GPT3 Clone
            </Typography>

            {loggedIn ? (
                <>
                    <NavLink to="/" style={{ padding: "0.5rem" }}>
                        Home
                    </NavLink>
                    <NavLink to="/login" onClick={handleLogout} style={{ padding: "0.5rem" }}>
                        Log out
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/register" style={{ padding: "0.5rem" }}>Sign Up</NavLink>
                    <NavLink to="/login" style={{ padding: "0.5rem" }}>Sign in</NavLink>
                </>
            )}
        </Box>
    );
};

export default Navbar;
