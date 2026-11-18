import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Converter from '../components/Converter';

const JsConverter = () => {
    const [jsCode, setJsCode] = useState("");

    return (
        <Converter
            outputState={jsCode}
            setOutputState={setJsCode}
            title="Convert English to JS Code"
            buttonName="Convert"
            outputDesc="Your JS Code will appear here"
            outputData={
                <pre>
                    <Typography p={2}><pre>
                        <code>{jsCode}</code>
                    </pre></Typography>
                    {console.log(jsCode)}
                </pre>
            }
            route="js-converter"
            inputLabel="Enter text to convert into JS Code" // इथे user-friendly label
        />
    )
}

export default JsConverter;
