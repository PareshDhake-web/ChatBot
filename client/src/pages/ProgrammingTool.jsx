import React, { useState } from "react";
import {
    Typography,
    TextField,
    Box,
    Autocomplete,
} from "@mui/material";
import Converter from "../components/Converter";

const languages = [
    { code: "javascript", label: "JavaScript" },
    { code: "python", label: "Python" },
    { code: "java", label: "Java" },
    { code: "cpp", label: "C++" },
    { code: "c", label: "C" },
    { code: "csharp", label: "C#" },
    { code: "php", label: "PHP" },
    { code: "ruby", label: "Ruby" },
    { code: "go", label: "Go" },
    { code: "rust", label: "Rust" },
    { code: "typescript", label: "TypeScript" },
    { code: "kotlin", label: "Kotlin" },
    { code: "swift", label: "Swift" },
];

const ProgrammingTool = () => {
    const [output, setOutput] = useState("");
    const [lang, setLang] = useState("");

    return (
        <>
            <Box textAlign="center" sx={{ my: 2 }}>

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        color: "#5f6160ff",
                        textAlign: "center",
                        mb: 2,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                    }}
                >
                    Select a Programming Language
                </Typography>

                <Autocomplete
                    freeSolo
                    options={languages.map((l) => l.label)}
                    value={lang}
                    onChange={(event, newValue) => setLang(newValue || "")}
                    onInputChange={(event, newInputValue) => setLang(newInputValue)}
                    sx={{ width: 280, mb: 2, mx: "auto" }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Select a programming language"
                            variant="outlined"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "10px",
                                    backgroundColor: "#fafafa",
                                    "& fieldset": {
                                        borderColor: "#60bf70",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#60bf70",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#60bf70",
                                        borderWidth: "2px",
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    fontWeight: 500,
                                    color: "#5f6160ff",
                                },
                            }}
                        />
                    )}
                />
            </Box>

            <Converter
                outputState={output}
                setOutputState={setOutput}
                title="Programming Helper"
                buttonName="Check / Run"
                outputDesc={`Output / Errors in ${lang}`}
                outputData={<Typography p={2}>{output}</Typography>}
                route="programming-tool"
                inputLabel={`Enter question or ${lang} code`}
                lang={lang}
            />
        </>
    );
};

export default ProgrammingTool;
