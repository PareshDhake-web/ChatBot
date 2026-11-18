import React, { useState } from "react";
import { Typography } from "@mui/material";
import Converter from "../components/Converter";

const Poem = () => {
    const [poem, setPoem] = useState("");

    return (
        <Converter
            outputState={poem}
            setOutputState={setPoem}
            title="Poem / Story Generator"
            buttonName="Generate"
            outputDesc="Poem / Story"
            outputData={<Typography p={2}>{poem}</Typography>}
            route="poem-generator"
            inputLabel="Add your topic"
        />
    );
};

export default Poem;
