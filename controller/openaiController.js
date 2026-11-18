require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Gemini init
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ------------------ Paragraph Controller ------------------
const paragraphController = async (req, res) => {
    try {
        const { text } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(`Write a detailed paragraph on: ${text}`);
        const output = result.response.text();
        res.json({ paragraph: output });
    } catch (err) {
        console.error("Paragraph Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// ------------------ Summary Controller ------------------
const summaryController = async (req, res) => {
    try {
        const { text } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(`Summarize this text in 3-4 lines: ${text}`);
        const output = result.response.text();
        res.json({ summary: output });
    } catch (err) {
        console.error("Summary Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// ------------------ Chatbot Controller ------------------
const chatbotController = async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(`You are a helpful chatbot. Answer this: ${message}`);
        const output = result.response.text();
        res.json({ reply: output });
    } catch (err) {
        console.error("Chatbot Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// ------------------ JS Code Converter Controller ------------------
const jsCodeConverterController = async (req, res) => {
    try {
        const { text } = req.body;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Prompt Gemini: convert question → JavaScript code
        const result = await model.generateContent(
            `Write clean and efficient JavaScript code for the following problem:\n\n${text}`
        );

        const output = result.response.text();

        res.json({ jsCode: output });
    } catch (err) {
        console.error("JS Code Generator Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Grammar Corrector
const grammarController = async (req, res) => {
    try {
        const { text } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(`Correct the grammar and spelling of the following text:\n\n${text}`);
        const output = result.response.text();

        res.json({ grammar: output });
    } catch (err) {
        console.error("Grammar Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Email Writer
const emailController = async (req, res) => {
    try {
        const { text } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(`Write a professional email based on this request:\n\n${text}`);
        const output = result.response.text();

        res.json({ email: output });
    } catch (err) {
        console.error("Email Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Blog / Essay Generator
const blogController = async (req, res) => {
    try {
        const { text } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(`Write a blog post about:\n\n${text}`);
        const output = result.response.text();

        res.json({ blog: output });
    } catch (err) {
        console.error("Blog Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Poem / Story Generator
const poemController = async (req, res) => {
    try {
        const { text } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(`Write a short poem or story about:\n\n${text}`);
        const output = result.response.text();

        res.json({ poem: output });
    } catch (err) {
        console.error("Poem Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Translation Tool
const translateController = async (req, res) => {
    try {
        const { text, language } = req.body;

        if (!text || !language) {
            return res.status(400).json({ error: "Text and target language are required." });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(`Translate the following text into ${language}:\n\n${text}`);
        const output = result.response.text();

        res.json({ translation: output });
    } catch (err) {
        console.error("Translate Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Interview Q&A Generator
const interviewController = async (req, res) => {
    try {
        const { text } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(`Generate interview questions and answers for the role of: ${text}`);
        const output = result.response.text();

        res.json({ interview: output });
    } catch (err) {
        console.error("Interview Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// code converter
const programmingToolController = async (req, res) => {
    try {
        const { code, language } = req.body;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Prompt Gemini: check code for errors OR answer
        const prompt = `
You are a programming assistant. 
Language: ${language}
Code or Question: 
${code}

👉 Please return either:
1. If code has errors → show corrected code + explanation.
2. If code is valid → run logically in mind and return expected output.
3. If it's just a question → return clear explanation / answer.
        `;

        const result = await model.generateContent(prompt);
        const output = result.response.text();

        res.json({ output });
    } catch (err) {
        console.error("Programming Tool Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Gemini
const geminiController = async (req, res) => {
    try {
        const { text, message } = req.body;
        const userInput = text || message;

        if (!userInput) {
            return res.status(400).json({ error: "Please provide input" });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(userInput);

        const output = result.response.text();
        res.json({ reply: output });
    } catch (error) {
        console.error("Gemini Error ===>", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};


module.exports = {
    paragraphController,
    summaryController,
    chatbotController,
    jsCodeConverterController,
    grammarController,
    emailController,
    blogController,
    poemController,
    translateController,
    interviewController,
    programmingToolController,
    geminiController
};
