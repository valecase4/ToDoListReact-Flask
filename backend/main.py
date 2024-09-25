from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from datetime import datetime

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

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
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)


