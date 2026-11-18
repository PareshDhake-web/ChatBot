import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { useMemo } from 'react';
import { Toaster } from "react-hot-toast";

// mui for style
import { themeSettings } from "./theme"
import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from "@mui/material";

// import file
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Paragraph from './pages/Paragraph';
import Summary from './pages/Summary';
import Chatbot from './pages/Chatbot';
import JsConverter from './pages/js-converter';
import GrammarCorrector from "./pages/GrammarCorrector";
import EmailWriter from "./pages/EmailWriter";
import BlogGenerator from "./pages/BlogGenerator";
import PoemGenerator from "./pages/PoemGenerator";
import Translator from "./pages/Translate";
import InterviewQA from "./pages/Interview";
import ProgrammingTool from './pages/ProgrammingTool';
import Gemini from './pages/Gemini';



function App() {

  const theme = useMemo(() => createTheme(themeSettings(), []))

  return (
    <>
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/summary' element={<Summary />}></Route>
          <Route path='/paragraph' element={<Paragraph />}></Route>
          <Route path='/chatbot' element={<Chatbot />}></Route>
          <Route path='/js-converter' element={<JsConverter />}></Route>
          <Route path="/grammar-corrector" element={<GrammarCorrector />} ></Route>
          <Route path="/email-writer" element={<EmailWriter />} ></Route>
          <Route path="/blog-generator" element={<BlogGenerator />} ></Route>
          <Route path="/poem-generator" element={<PoemGenerator />} ></Route>
          <Route path="/translator" element={<Translator />} ></Route>
          <Route path="/interview-qa" element={<InterviewQA />} ></Route>
          <Route path="/programming-converter" element={<ProgrammingTool />} ></Route>
          <Route path="/gemini" element={<Gemini />} ></Route>

        </Routes>
      </ThemeProvider>


    </>
  )
}

export default App
