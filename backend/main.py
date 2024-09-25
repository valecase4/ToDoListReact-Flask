from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime

from extension import db
from models import Task

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

@app.route("/", methods=["GET", "POST"])
def index():
    """
    Homepage
    """

    return "<h1>Homepage</h1>"

@app.route("/get_current_date", methods=["GET", "POST"])
def get_current_date():
    """
    Get current date

    :return: Current date in %m %d, %Y format
    """

    current_date = datetime.now().strftime("%B %d, %Y")
    return jsonify({"current_date": current_date})


@app.route("/add_task", methods=["POST"])
def add_task():
    """
    Add a new task to the database
    """

    current_date = datetime.now()
    content = request.json.get("taskContent")

    new_task = Task(date=current_date, content=content)

    db.session.add(new_task)
    db.session.commit()

    return {"message": "Task added"}, 201

@app.route("/get_all_tasks", methods=["GET", "POST"])
def get_all_tasks():
    """
    Get all tasks from database
    """

    tasks = Task.query.all()
    json_tasks = []
    
    for task in tasks:
        json_task = {
            "id": task.id,
            "date": task.date.strftime("%m/%d/%Y"),
            "content": task.content
        }
        json_tasks.append(json_task)

    return jsonify({"tasks": json_tasks})

@app.route("/delete_task/<int:task_id>", methods=["GET", "DELETE"])
def delete_task(task_id):
    task = Task.query.get(task_id)
    print(task)

    db.session.delete(task)
    db.session.commit()

    return {"message": "Task deleted"}, 200


if __name__ == '__main__':

    with app.app_context():
        db.create_all()
    
    app.run(debug=True)


