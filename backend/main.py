from flask import Flask
from flask_cors import CORS
from flask import jsonify
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET", "POST"])
def index():
    """
    Homepage
    """

    return "<h1>Homepage</h1>"

@app.route("/get_current_date", methods=["GET", "POST"])
def get_current_date() -> str:
    """
    Get current date

    :return: Current date in %m %d, %Y format
    """

    current_date = datetime.now().strftime("%B %d, %Y")
    return jsonify({"current_date": current_date})

if __name__ == '__main__':
    app.run(debug=True)


