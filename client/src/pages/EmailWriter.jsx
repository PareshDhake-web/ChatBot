import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Converter from '../components/Converter';

const Email = () => {
    const [email, setEmail] = useState("");

    return (
        <Converter
            outputState={email}
            setOutputState={setEmail}
            title="Email Writer"
            buttonName="Generate"
            outputDesc="Generated Email"
            outputData={<Typography p={2}>{email}</Typography>}
            route="email-writer"
            inputLabel="Enter details for email"
        />
    );
};

export default Email;
