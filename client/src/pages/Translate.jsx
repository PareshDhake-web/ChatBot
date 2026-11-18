import React, { useState } from "react";
import { Typography, TextField, Box, Autocomplete } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import Converter from "../components/Converter";

const languages = [
    { label: "English", code: "GB" },
    { label: "Marathi", code: "IN" },
    { label: "Hindi", code: "IN" },
    { label: "Spanish", code: "ES" },
    { label: "French", code: "FR" },
    { label: "German", code: "DE" },
    { label: "Italian", code: "IT" },
    { label: "Portuguese", code: "PT" },
    { label: "Russian", code: "RU" },
    { label: "Chinese (Simplified)", code: "CN" },
    { label: "Chinese (Traditional)", code: "TW" },
    { label: "Japanese", code: "JP" },
    { label: "Korean", code: "KR" },
    { label: "Arabic", code: "SA" },
    { label: "Turkish", code: "TR" },
    { label: "Greek", code: "GR" },
    { label: "Hebrew", code: "IL" },
    { label: "Thai", code: "TH" },
    { label: "Vietnamese", code: "VN" },
    { label: "Indonesian", code: "ID" },
    { label: "Malay", code: "MY" },
    { label: "Bengali", code: "BD" },
    { label: "Urdu", code: "PK" },
    { label: "Tamil", code: "IN" },
    { label: "Telugu", code: "IN" },
    { label: "Kannada", code: "IN" },
    { label: "Gujarati", code: "IN" },
    { label: "Punjabi", code: "IN" },
    { label: "Dutch", code: "NL" },
    { label: "Swedish", code: "SE" },
];

const Translate = () => {
    const [translation, setTranslation] = useState("");
    const [lang, setLang] = useState("");

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                mb: 3,
            }}
        >
            {/* Title */}
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
                Select a Language
            </Typography>

            {/* Autocomplete */}
            <Autocomplete
                freeSolo
                options={languages.map((l) => l.label)}
                value={lang}
                onChange={(event, newValue) => setLang(newValue || "")}
                onInputChange={(event, newInputValue) => setLang(newInputValue)}
                sx={{ width: 280, mb: 2 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Select a language"
                        variant="outlined"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "10px",
                                backgroundColor: "#fafafa",
                            },
                        }}
                    />
                )}
                renderOption={(props, option) => {
                    const { key, ...optionProps } = props;  // key वेगळं काढलं
                    const langObj = languages.find((l) => l.label === option);

                    return (
                        <Box
                            component="li"
                            key={key}                 // इथे direct दिलं
                            {...optionProps}          // बाकीचं spread
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                px: 1,
                                py: 0.5,
                                borderRadius: "8px",
                                "&:hover": {
                                    backgroundColor: "#f0f7ff",
                                },
                            }}
                        >
                            {langObj && (
                                <ReactCountryFlag
                                    countryCode={langObj.code}
                                    svg
                                    style={{
                                        width: "1.3em",
                                        height: "1.3em",
                                        borderRadius: "50%",
                                    }}
                                />
                            )}
                            <Typography>{option}</Typography>
                        </Box>
                    );
                }}

            />

            {/* Converter Section */}
            <Converter
                outputState={translation}
                setOutputState={setTranslation}
                title="Translation Tool"
                buttonName="Translate"
                outputDesc={`Translated Text in ${lang}`}
                outputData={<Typography p={2}>{translation}</Typography>}
                route="translator"
                inputLabel={`Enter text to translate into ${lang}`}
                lang={lang}
            />
        </Box>
    );
};

export default Translate;
