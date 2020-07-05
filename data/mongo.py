'''Modularization of Mongo data access
    Define all of our CRUD (Create, Read, Update, and Delete)
    in this file  to separate those concerns'''

import os
import sys
import getpass
import pymongo

from SchoolSystem.users.model import User, Admin, Teacher, Student
from SchoolSystem.data.logger import get_logger
from bson.json_util import dumps

_log = get_logger(__name__)

try:
    _scl = pymongo.MongoClient(os.environ.get('TroyMongoURI')).project2
except:
    _log.exception('Could not connect to Mongo')
    raise

def login(username):
    '''A function that takes in a username and returns a user object'''
    _log.info('Attempting to retrieve user from database')
    query_dict = {'username': username}
    user_dict = _scl.users.find_one(query_dict)
    _log.debug(user_dict)
    return User.from_dict(user_dict) if user_dict else None

def _get_id():
    '''Retrieves the next id in the database and increments it'''
    return _scl.counter.find_one_and_update({'_id': 'UNIQUE_COUNT'},
                                            {'$inc': {'count': 1}},
                                            return_document=pymongo.ReturnDocument.AFTER)['count']

def get_students():
    dict_list = _scl.users.find({'role': 'student'})
    return [User.from_dict(user) for user in dict_list]

def get_teachers():
    dict_list = _scl.users.find({'role': 'teacher'})
    return [User.from_dict(user) for user in dict_list]


def update_student(username, newData):
    myquery = {"username": username}
    result = _scl.users.update_one(myquery, {'$set': newData})

  
if __name__ == '__main__':
    _log.info('Running Mongo script: dropping collections from project2 database')
    _log.info(_scl.list_collection_names())
    _scl.users.drop()
    _scl.counter.drop()

    _scl.counter.insert_one({'_id': 'UNIQUE_COUNT', 'count': 0})

    user_list = []
    user_list.append(User(_get_id(), 'mik', 'mm', '11', '123 main st', 'teacher').to_dict())
    user_list.append(User(_get_id(), 'john', 'dd', '22', '123 main st', 'admin').to_dict())
    user_list.append(User(_get_id(), 'mary', 'ff', '33', '123 main st', 'student').to_dict())

    _scl.users.insert_many(user_list)


