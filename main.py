from flask import Flask, request, make_response, jsonify, render_template
from flask_cors import CORS

from SchoolSystem.data.logger import get_logger
from SchoolSystem.users.model import User, UserEncoder
from SchoolSystem.assignments.model import Assignment, AssignmentEncoder
from SchoolSystem.submissions.model import Submission, SubmissionEncoder
import SchoolSystem.data.mongo as db
import json

_log = get_logger(__name__)

app = Flask(__name__)
_log.debug(app)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
# app.json_encoder = UserEncoder


@app.route('/assignments', methods=['GET'])
def assignments():
    users = db.get_assignments()
    value = bytes(json.dumps(users, cls=AssignmentEncoder), 'utf-8')
    return value, 200

@app.route('/teachers', methods=['GET'])
def teachers():
    users = db.get_teachers()
    value = bytes(json.dumps(users, cls=UserEncoder), 'utf-8')
    return value, 200

@app.route('/students', methods=['GET'])
def students():
    users = db.get_students()
    value = bytes(json.dumps(users, cls=UserEncoder), 'utf-8')
    return value, 200

@app.route('/students/<username>', methods=['PUT'])
def student_update(username):
    _log.info(username)
    user = db.update_student(username, request.json)
    return {}

@app.route('/submissions/<homework>', methods=['PUT'])
def grade(homework):
    _log.info(type(homework))
    _log.info(request.json)
    user = db.grade_homework(int(homework), request.json)
    return {}

@app.route('/submissions', methods=['POST'])
def submit():
    submission = db.add_submission(request.json)
    return {}

@app.route('/submissions/<username>', methods=['GET'])
def assignments_by_teacher(username):
    users = db.get_submissions(username)
    value = bytes(json.dumps(users, cls=SubmissionEncoder), 'utf-8')
    return value, 200

'''
@app.route('/submissions', methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        submission = db.add_submission(request.json)
        return {}
    elif request.method == 'GET':
        users = db.get_submissions()
        value = bytes(json.dumps(users, cls=SubmissionEncoder), 'utf-8')
        return value, 200
    else:
        empty = make_response({})
        return empty, 204
'''


@app.route('/users', methods={'GET', 'POST', 'DELETE', 'PUT'})
def login():
    if request.method == 'POST':
        _log.debug("In POST")
        # getting the user information from the form and getting the information from the db
        _log.debug(request.json['username'])
        temp = request.json['username']
        _log.debug(temp)
        user = db.login(temp)
        _log.debug(user)
        if user:
        #     # Generate our token
        #     auth_token = user.encode_auth_token()
        #     _log.debug(dir(auth_token))
            # response = make_response(jsonify(user))
            # response.set_cookie('authorization', auth_token.decode())
            return user.to_dict(), 200
        return {}, 401
    elif request.method == 'PUT':
        user = db.add_user(request.json)
        return {}
    # elif request.method == 'GET':
    #     # auth_token = request.cookies.get('authorization')
    #     if auth_token:
    #         _log.debug(auth_token)
    #         _log.debug(User.decode_auth_token(auth_token))
    #         return jsonify(db.get_user_by_id(User.decode_auth_token(auth_token))), 200
    #     else:
    #         return {}, 401
    else:
        empty = make_response({})
        return empty, 204

@app.route('/admin', methods={'GET', 'POST', 'PUT', 'DELETE'})
def getUsers():
    if request.method == 'GET':
        users = db.get_users()
        value = bytes(json.dumps(users, cls=UserEncoder), 'utf-8')
        return value, 200

@app.route('/admin/<fullname>', methods=['DELETE'])
def user_remove(fullname):
    _log.info(request.json)
    user = db.remove_user(fullname)
    return {}, 200
