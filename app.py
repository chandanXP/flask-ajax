import random
from time import time

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    text = request.args.get('button_text')
    center_value = request.args.get('center_text')
    if request.is_json:
        message = random.randint(0, 99)
        if text == "Start":
            return jsonify({"message": message})
        elif text == "Increase":
            return jsonify({"message": int(center_value) + 1})
        elif text == "Decrease":
            return jsonify({"message": int(center_value) - 1})
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True, port=5500)
