# 🧠 Mental Health Support Chatbot

This project builds an AI-based mental health chatbot using the BlenderBot 400M model fine-tuned on a synthetic emotional support dataset.
The chatbot can understand user inputs and provide empathetic, context-aware responses. It is deployed as a Flask web application with a simple UI.

# ✨ Features

Fine-tuned BlenderBot 400M for emotional conversation.

Custom PyTorch Dataset for training.

Deployed as a Flask Web App.

Real-time chat interface (HTML, CSS, JavaScript).

Handles padding, tokenization, and label masking properly during training.

# 📁 Project Structure

├── app.py               # Flask backend
├── templates/
│   └── index.html        # Frontend HTML
├── static/
│   ├── style.css         # Frontend CSS
│   └── script.js         # Frontend JavaScript
├── chatbot_model/        # Trained model files
├── Synthetic_Data_10K.csv # Dataset
├── README.md             # Project description


# 🛠️ Tech Stack

Python

Hugging Face Transformers

PyTorch

Flask

HTML/CSS/JavaScript

# 📈 Future Work

Improve chatbot's long-term memory.

Add multilingual support.

Deploy on cloud (AWS, Azure, or Hugging Face Spaces).

Add a feedback mechanism from users.
