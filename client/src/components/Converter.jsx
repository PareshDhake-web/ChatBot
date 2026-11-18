import React, { useState } from "react";
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    TextField,
    Button,
    Alert,
    Collapse,
    Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Converter = ({
    outputState,
    setOutputState,
    title,
    buttonName,
    outputDesc,
    outputData,
    route,
    inputLabel = "Enter your text...",
    lang,
}) => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery("(min-width: 1000px)");
    const [error, setError] = useState("");
    const [inputText, setInputText] = useState("");

    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload =
                route === "chatbot"
                    ? { message: inputText }
                    : route === "gemini"
                        ? { text: inputText }
                        : route === "convert-code"
                            ? { text: inputText, language: lang }
                            : route === "js-converter"
                                ? { text: inputText, language: "javascript" }
                                : route === "programming-tool"
                                    ? { code: inputText, language: lang }
                                    : { text: inputText };

            const { data } = await axios.post(
                `http://localhost:8080/api/v1/openai/${route}`,
                payload
            );
            console.log("Response Data ===>", data);


            // set output
            if (route === "paragraph") setOutputState(data.paragraph || "NO RESPONSE");
            else if (route === "summary") setOutputState(data.summary || "NO RESPONSE");
            else if (route === "chatbot") setOutputState(data.reply || "NO RESPONSE");
            else if (route === "js-converter") setOutputState(data.jsCode || "NO RESPONSE");
            else if (route === "poem-generator") setOutputState(data.poem || "NO RESPONSE");
            else if (route === "blog-generator") setOutputState(data.blog || "NO RESPONSE");
            else if (route === "email-writer") setOutputState(data.email || "NO RESPONSE");
            else if (route === "grammar-corrector") setOutputState(data.grammar || "NO RESPONSE");
            else if (route === "translator") setOutputState(data.translation || "NO RESPONSE");
            else if (route === "interview-qa") setOutputState(data.interview || "NO RESPONSE");
            else if (route === "programming-tool") setOutputState(data.output || "NO RESPONSE");
            else if (route === "gemini") setOutputState(data.result || data.reply || response.data.reply || "NO RESPONSE");


        } catch (err) {
            if (err.response?.data?.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <Box
            width={isNotMobile ? "40%" : "80%"}
            p={"2rem"}
            m={"2rem auto"}
            borderRadius={5}
            sx={{ boxShadow: 5 }}
            backgroundColor={theme.palette.background.alt}
        >
            <Collapse in={error}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            </Collapse>

            <form onSubmit={handleSubmit}>
                <Typography variant="h3">{title}</Typography>

                <TextField
                    placeholder={inputLabel}
                    type="text"
                    multiline={true}
                    required
                    margin="normal"
                    fullWidth
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            inputText && (
                                <Button
                                    onClick={() => setInputText("")}
                                    sx={{ minWidth: "30px", color: "gray" }}
                                >
                                    ✕
                                </Button>
                            )
                        ),
                    }}
                />


                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ color: "white", mt: 2 }}
                >
                    {buttonName}
                </Button>

                <Typography mt={2}>
                    not this tool ? <Link to="/">GO BACK</Link>
                </Typography>
            </form>

            {outputState ? (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        minHeight: "200px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                        p: 2,
                    }}
                >
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                        {outputState}
                    </Typography>
                </Card>
            ) : (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        minHeight: "200px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography
                        variant="h5"
                        color="natural.main"
                        sx={{
                            textAlign: "center",
                            verticalAlign: "middle",
                            lineHeight: "200px",
                        }}
                    >
                        {outputDesc}
                    </Typography>
                </Card>
            )}

        </Box>
    );
};

export default Converter;
