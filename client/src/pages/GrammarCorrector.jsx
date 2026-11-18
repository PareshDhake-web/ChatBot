import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Converter from '../components/Converter';

const Grammar = () => {
    const [grammar, setGrammar] = useState("");

    return (
        <Converter
            outputState={grammar}
            setOutputState={setGrammar}
            title="Grammar Corrector"
            buttonName="Correct"
            outputDesc="Corrected Text"
            outputData={<Typography p={2}>{grammar}</Typography>}
            route="grammar-corrector"
            inputLabel="Enter text to correct grammar"

        />
    );
};

export default Grammar;
