from flask import Flask, render_template, request, jsonify
from transformers import pipeline, AutoTokenizer, AutoModelForSeq2SeqLM

app = Flask(__name__)

# Load model and tokenizer
model_path = "./mental_health_chatbot"  # Make sure this is your model path
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForSeq2SeqLM.from_pretrained(model_path)

# Create chatbot pipeline
chatbot = pipeline("text2text-generation", model=model, tokenizer=tokenizer)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("user_input")
    
    result = chatbot(user_input, max_length=64, clean_up_tokenization_spaces=True)[0]["generated_text"]
    return jsonify({"response": result})

if __name__ == "__main__":
    app.run(debug=True)
