import React, { useState } from "react";
import { Typography } from "@mui/material";
import Converter from "../components/Converter";

const Paragraph = () => {
  const [para, setPara] = useState("");

  return (
    <Converter
      outputState={para}
      setOutputState={setPara}
      title="Generate Paragraph"
      buttonName="Generate"
      outputDesc="Your Paragraph Will Appear Here"
      outputData={<Typography p={2}>{para}</Typography>}
      route="paragraph"
      inputLabel="Add your text"
    />
  );
};

export default Paragraph;
