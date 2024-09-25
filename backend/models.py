from .main import db

class Task(db.Model):
    """
    Task table in database
    """

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, unique=False, nullable=False)
    content = db.Column(db.String(80), unique=False, nullable=False)
    completed = db.Column(db.Boolean, unique=False, nullable=False)

    def __repr__(self) -> str:
        """
        Representing a task
        """

        return f"Task id: {self.id}, date: {self.date}, content: {self.content}, completed: {self.completed}"