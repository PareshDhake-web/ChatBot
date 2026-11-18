import React, { useState } from "react";
import { Typography } from "@mui/material";
import Converter from "../components/Converter";

const Interview = () => {
    const [interview, setInterview] = useState("");

    return (
        <Converter
            outputState={interview}
            setOutputState={setInterview}
            title="Interview Q&A Generator"
            buttonName="Generate"
            outputDesc="Interview Questions & Answers"
            outputData={<Typography p={2}>{interview}</Typography>}
            route="interview-qa"
            inputLabel="Add your topic or job role"
        />
    );
};

export default Interview;
