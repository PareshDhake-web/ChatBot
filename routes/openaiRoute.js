const express = require("express");
const {
    summaryController,
    paragraphController,
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
} = require("../controller/openaiController.js");

const router = express.Router();

// routes
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsCodeConverterController);
router.post("/grammar-corrector", grammarController);
router.post("/email-writer", emailController);
router.post("/blog-generator", blogController);
router.post("/poem-generator", poemController);
router.post("/translator", translateController);
router.post("/interview-qa", interviewController);
router.post("/programming-tool", programmingToolController);
router.post("/gemini", geminiController);

module.exports = router;
