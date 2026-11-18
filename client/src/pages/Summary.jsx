import React, { useState } from "react";
import { Typography } from "@mui/material";
import Converter from "../components/Converter";

const Summary = () => {
    const [summary, setSummary] = useState("");

    return (
        <Converter
            outputState={summary}
            setOutputState={setSummary}
            title="Summarize Text"
            buttonName="Submit"
            outputDesc="Summary will Appear Here"
            outputData={<Typography p={2}>{summary}</Typography>}
            route="summary"
            inputLabel="Paste your text for summary..."
        />
    );
};

export default Summary;
