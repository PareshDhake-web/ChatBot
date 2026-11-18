import React from 'react'
import { Box } from "@mui/material";

// HomePage boxes
import HomePageBoxComp from '../components/HomePageBoxComp';

// import icons
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import SpellcheckRounded from "@mui/icons-material/SpellcheckRounded";
import EmailRounded from "@mui/icons-material/EmailRounded";
import ArticleRounded from "@mui/icons-material/ArticleRounded";
import CreateRounded from "@mui/icons-material/CreateRounded";
import TranslateRounded from "@mui/icons-material/TranslateRounded";
import QuestionAnswerRounded from "@mui/icons-material/QuestionAnswerRounded";

const HomePage = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <HomePageBoxComp title={" Text Generation"} boxInsideTitle={"Text Summary"} desc={"Summarize long text into short sentences"} icon={<DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/summary"} />
                <HomePageBoxComp title={" Paragraph Generation"} boxInsideTitle={"Paragraph"} desc={"Generate paragraph in word"} icon={<FormatAlignLeftOutlined sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/paragraph"} />
                <HomePageBoxComp title={" Ai ChatBot"} boxInsideTitle={"Chatbot"} desc={"Chat with Ai Chatbot"} icon={<ChatRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/chatbot"} />
                <HomePageBoxComp title={" JavaScript Converter"} boxInsideTitle={"JS CONVERTER"} desc={"Translate english to js code"} icon={<ChatRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/js-converter"} />
                <HomePageBoxComp title={" AI SCIFI Images"} boxInsideTitle={"Scifi Image"} desc={"Generate scifi images"} icon={<DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/scifi-image"} />
                <HomePageBoxComp title={" Grammar Improvement"} boxInsideTitle={"Grammar Corrector"} desc={"Fix grammar mistakes in text"} icon={<SpellcheckRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/grammar-corrector"} />
                <HomePageBoxComp title={" Smart Writing"} boxInsideTitle={"Email Writer"} desc={"Write professional emails"} icon={<EmailRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/email-writer"} />
                <HomePageBoxComp title={" Blog Helper"} boxInsideTitle={"Blog Generator"} desc={"Generate blogs quickly"} icon={<ArticleRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/blog-generator"} />
                <HomePageBoxComp title={" Creative Writing"} boxInsideTitle={"Poem Generator"} desc={"Generate poems & verses"} icon={<CreateRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/poem-generator"} />
                <HomePageBoxComp title={" Language Tool"} boxInsideTitle={"Translator"} desc={"Translate text between languages"} icon={<TranslateRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/translator"} />
                <HomePageBoxComp title={" Interview Prep"} boxInsideTitle={"Interview Q&A"} desc={"Practice interview questions"} icon={<QuestionAnswerRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />} route={"/interview-qa"} />
                <HomePageBoxComp
                    title={" Programming Helper"}
                    boxInsideTitle={"Code Converter"}
                    desc={"Check errors or get output of code"}
                    icon={<DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />}
                    route={"/programming-converter"}
                />
                <HomePageBoxComp
                    title={" Gemini"}
                    boxInsideTitle={"Gemini"}
                    desc={"get your answer"}
                    icon={<DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />}
                    route={"/gemini"}
                />

            </Box>
        </>
    )
}

export default HomePage
