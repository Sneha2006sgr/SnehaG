from flask import Flask, send_file, request, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return send_file('index.html')

@app.route('/style.css')
def serve_css():
    return send_file('style.css', mimetype='text/css')

@app.route('/main.js')
def serve_js():
    return send_file('main.js', mimetype='application/javascript')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_file(os.path.join('static', filename))

@app.route('/send_message', methods=['POST'])
def send_message():
    # This is a placeholder for message handling logic
    # In a real application, you'd process the form data here
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)