# AI ChatBot – AI-Powered Productivity Assistant

An AI-powered chatbot and productivity assistant designed to help users perform multiple tasks through a single web application. The platform integrates Google Gemini AI to provide intelligent responses, generate content, summarize text, correct grammar, translate languages, and assist with programming and interview preparation.

## 📌 Project Overview

AI ChatBot is a full-stack web application developed using React.js, Node.js, Express.js, MongoDB, and Google Gemini AI.

The application provides multiple AI-powered tools in one platform, helping users save time and improve productivity.

Users can interact with the chatbot, generate paragraphs, summarize content, correct grammatical errors, write professional emails, generate blogs and poems, translate text, prepare for interviews, and get programming assistance.

The project combines frontend and backend technologies with AI integration to create an interactive and user-friendly experience.

## ✨ Key Features

### 🤖 AI Chatbot
- Interact with an AI-powered chatbot.
- Ask questions and receive AI-generated responses.
- Get assistance with different topics.
- Generate responses using Google Gemini AI.

### 📝 Text Summarization
- Summarize lengthy text into shorter content.
- Generate easy-to-understand summaries.
- Save time when reading large amounts of information.

### 📄 Paragraph Generator
- Generate detailed paragraphs based on user input.
- Create meaningful and relevant content.

### 💻 JavaScript Code Generator
- Generate JavaScript code from problem descriptions.
- Get programming solutions with AI assistance.

### ✍️ Grammar Corrector
- Correct grammatical errors.
- Improve spelling and sentence structure.
- Generate grammatically improved content.

### 📧 Email Writer
- Generate professional emails.
- Create email content based on user requirements.
- Improve professional communication.

### 📰 Blog Generator
- Generate blog posts and essays.
- Create content based on user-provided topics.

### 📖 Poem and Story Generator
- Generate creative poems and short stories.
- Create content based on user prompts.

### 🌐 Language Translator
- Translate text into different languages.
- Generate translated content using AI.

### 🎯 Interview Preparation
- Generate interview questions and answers.
- Prepare questions based on a selected job role.
- Support interview preparation through AI-generated content.

### 👨‍💻 Programming Assistant
- Get programming-related explanations.
- Identify potential code errors.
- Receive corrected code and explanations.
- Understand expected program output.

### 🔐 User Authentication
- User registration.
- User login and logout.
- Password hashing using bcryptjs.
- JWT-based authentication.
- User data management using MongoDB.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| HTML5 | Webpage structure |
| CSS3 | Styling and layout |
| JavaScript | Application functionality |
| Material UI | User interface components |
| Node.js | Backend runtime environment |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | Database modeling |
| Google Gemini AI | AI-powered responses and content generation |
| Axios | Frontend API requests |
| React Router DOM | Frontend routing |
| React Hot Toast | Notifications |
| JWT | Authentication |
| bcryptjs | Password hashing |
| dotenv | Environment variable management |
| Git & GitHub | Version control |

## 🏗️ Project Architecture

The project follows a client-server architecture.

### Frontend
Developed using React.js and Vite.

Responsibilities:
- User interface and interaction.
- Collecting user inputs.
- Sending requests to backend APIs.
- Displaying AI-generated responses.
- Managing frontend navigation.

### Backend
Developed using Node.js and Express.js.

Responsibilities:
- Handling API requests.
- Managing user authentication.
- Connecting with MongoDB.
- Processing AI-related requests.
- Communicating with Google Gemini AI.
- Returning generated responses to the frontend.

### AI Integration
Google Gemini AI is integrated into the backend to process user prompts and generate intelligent responses for different productivity tools.

## 📂 Project Structure

```text
ChatBot/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── controller/
│   ├── authController.js
│   └── openaiController.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   ├── authRoute.js
│   └── openaiRoute.js
│
├── utils/
│
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Prerequisites

Before running this project, make sure you have installed:

- Node.js
- npm (Node Package Manager)
- MongoDB
- Google Gemini API Key
- VS Code (Recommended)
- A modern web browser

## 🚀 Installation and Setup

Follow these steps to run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/PareshDhake-web/ChatBot.git
```

### 2. Navigate to the Project Folder

```bash
cd ChatBot
```

### 3. Install Backend Dependencies

```bash
npm install
```

### 4. Install Frontend Dependencies

```bash
cd client
npm install
```

After installation, return to the root project directory:

```bash
cd ..
```

### 5. Configure Environment Variables

Create a new file named `.env` in the root project directory.

Add your Google Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=8080
```

Replace `your_gemini_api_key` with your actual Gemini API key.

You can obtain an API key from:

https://aistudio.google.com/apikey

**Important:**
- Never upload your actual `.env` file to GitHub.
- The `.env` file is excluded using `.gitignore`.
- Keep your API key private.
- The backend currently connects to a local MongoDB database.

### 6. Start MongoDB

Make sure MongoDB is installed and running.

The current application uses the following database connection:

```text
mongodb://127.0.0.1:27017/chatBot
```

Database name: `chatBot`

### 7. Run the Application

From the root project directory, execute:

```bash
npm run dev
```

This command starts both:
- Backend server using Nodemon.
- Frontend development server using Vite.

### Alternative: Run Frontend and Backend Separately

**Terminal 1 – Start Backend**

```bash
npm run server
```

Backend server:

```text
http://localhost:8080
```

**Terminal 2 – Start Frontend**

```bash
npm run client
```

Frontend development server:

```text
http://localhost:5173
```

### 8. Open the Application

Open your browser and visit:

```text
http://localhost:5173
```

The AI ChatBot application will be available on your local machine.

## 🔄 Application Workflow

1. Open the ChatBot application.
2. Register a new account or log in.
3. Select the required AI-powered tool.
4. Enter your question, text, code, or topic.
5. The frontend sends the request to the backend API.
6. The backend processes the request.
7. Google Gemini AI generates the required response.
8. The backend sends the response to the frontend.
9. The generated result is displayed to the user.

## 🔌 Backend API Endpoints

### Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | User login |
| POST | `/api/v1/auth/logout` | User logout |

### AI Tool APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/openai/chatbot` | AI chatbot |
| POST | `/api/v1/openai/summary` | Text summarization |
| POST | `/api/v1/openai/paragraph` | Paragraph generation |
| POST | `/api/v1/openai/js-converter` | JavaScript code generation |
| POST | `/api/v1/openai/grammar-corrector` | Grammar correction |
| POST | `/api/v1/openai/email-writer` | Email generation |
| POST | `/api/v1/openai/blog-generator` | Blog generation |
| POST | `/api/v1/openai/poem-generator` | Poem and story generation |
| POST | `/api/v1/openai/translator` | Language translation |
| POST | `/api/v1/openai/interview-qa` | Interview questions and answers |
| POST | `/api/v1/openai/programming-tool` | Programming assistance |
| POST | `/api/v1/openai/gemini` | Gemini AI interaction |

Note: The `/openai/` route name is retained from the existing backend implementation. The active AI controller uses Google Gemini.

## 🎯 Project Objectives

- Develop an AI-powered productivity assistant.
- Integrate generative AI into a full-stack web application.
- Provide multiple AI tools through a single platform.
- Simplify content creation and text processing.
- Assist users with programming and interview preparation.
- Understand frontend and backend integration.
- Implement API-based communication with an AI model.
- Develop practical knowledge of authentication and database management.

## 🔮 Future Enhancements

- Add real-time streaming AI responses.
- Implement chat history and conversation management.
- Add voice input and voice output.
- Support additional AI models.
- Introduce file upload and document summarization.
- Improve AI response formatting.
- Add dark mode and customizable themes.
- Deploy the application on a cloud platform.

## 📦 Important Notes

- The `node_modules` folders are not included in the GitHub repository.
- Run `npm install` in the root directory to install backend dependencies.
- Run `npm install` inside the `client` directory to install frontend dependencies.
- The `.env` file is not included in the repository.
- A valid Google Gemini API key is required for AI functionality.
- MongoDB must be running locally.
- The root `package.json` includes the OpenAI SDK, but the current AI controller uses Google Gemini.

## 🔒 Security Notes

- Keep API keys and database credentials private.
- Do not commit `.env` files.
- Use secure authentication and token handling.
- Validate user inputs on the backend.
- Configure secure CORS and session/token settings before production deployment.
- Review API error handling and rate limits before public deployment.

## 👨‍💻 Developer

**Paresh Khushal Dhake**

MCA Student | Full Stack Developer

- GitHub: [PareshDhake-web](https://github.com/PareshDhake-web)
- Project Repository: [ChatBot](https://github.com/PareshDhake-web/ChatBot)

---

⭐ If you find this project useful, consider giving it a star!

**Thank you for visiting my project!**
