import React from 'react'
import { Box, Typography, Card, Stack } from "@mui/material"
import { useNavigate } from 'react-router-dom'

const HomePageBoxComp = ({ title, boxInsideTitle, desc, icon, route }) => {
    const navigate = useNavigate();
    return (
        <Box p={2}>
            <Typography variant='h4' mb={2} fontWeight={"bold"}>
                {title}
            </Typography>
            <Card onClick={() => navigate(`${route}`)}
                sx={{ boxShadow: 2, borderRadius: 5, height: 190, width: 200, "&:hover": { border: 2, boxShadow: 0, borderColor: "primary.dark", cursor: "pointer" } }}
            >
                {icon}
                <Stack p={3} pt={0}>
                    <Typography fontWeight={"bold"} variant='h5'>{boxInsideTitle}</Typography>
                    <Typography fontWeight={"bold"} variant='h6'>{desc}</Typography>
                </Stack>
            </Card>
        </Box>
    )
}

export default HomePageBoxComp