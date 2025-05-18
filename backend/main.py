from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Create FastAPI app instance
app = FastAPI()

# Enable CORS so frontend (on a different port) can access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],       # Allow all origins (for development)
    allow_methods=["*"],       # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],       # Allow all headers (like Content-Type)
)

# Configure Gemini API with your API key from .env
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


# Create a Gemini model instance
model = genai.GenerativeModel("models/gemini-1.5-pro")

# Define a GET API endpoint to welcome the user
@app.get("/")
def welcome():
    return {"message": "Welcome to the Fortune API!"}


# Define a POST API endpoint to generate a funny fortune
@app.post("/fortune")
async def generate_fortune(
    name: str = Form(...),
    number: str = Form(...),
    card: str = Form(...)
):
    # Create the prompt using user input
    prompt = f"""
    Give a funny, creative fortune for someone named {name} whose favorite number is {number} 
    and who picked the card "{card}". Be magical, surprising, and humorous!
    """

    # Send prompt to Gemini and get the response
    response = model.generate_content(prompt)

    # Return the generated fortune as JSON
    return {"fortune": response.text}
