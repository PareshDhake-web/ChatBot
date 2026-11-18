import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Converter from "../components/Converter"

const Gemini = () => {
    const [gemini, setGemini] = useState("");

    return (

        <Converter
            outputState={gemini}
            setOutputState={setGemini}
            title="AI Assistant"
            buttonName="Get Answer"
            outputDesc="AI Response"
            outputData={<Typography p={2}>{gemini}</Typography>}
            route="gemini"
        />
    );
};

export default Gemini;
