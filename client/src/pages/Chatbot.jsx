import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Converter from "../components/Converter"

const Chatbot = () => {
    const [chatbot, setChatbot] = useState("");

    return (
        <Converter
            outputState={chatbot}
            setOutputState={setChatbot}
            title="Ask with chatbot"
            buttonName="Chat"
            outputDesc="Chatbot Response"
            outputData={<Typography p={2}>{chatbot}</Typography>}
            route="chatbot"
        />
    )
}

export default Chatbot;
