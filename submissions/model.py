'''Defines the model for users'''
import json
import jwt
import datetime

from SchoolSystem.data.logger import get_logger

_log = get_logger(__name__)
_secret_key = '101010101unique'

class Submission:
    '''A class that defines how Users should behave'''
    def __init__(self, db_id=-1, student='', assignment='', teacher='', grade='', content=''):
        self._id = db_id
        self.student = student
        self.assignment = assignment
        self.teacher = teacher
        self.grade = grade
        self.content = content


    def get_id(self):
        '''Returns the id of the user'''
        return self._id

    def set_id(self, _id):
        '''Sets the id of the user'''
        self._id = _id



    def __str__(self):
        '''String representation of the user'''
        string = "_id: " + str(self._id) + " name: " + self.student
        string += " Instance of: " + type(self).__name__
        return string

    def __repr__(self):
        '''Returns string representation of self'''
        return self.__str__()

    def to_dict(self):
        '''Returns the dictionary representation of itself'''
        return self.__dict__



    @classmethod
    def from_dict(cls, input_user):
        '''Creates an instance of the class from a dictionary'''
        submission = Submission()
        submission.__dict__.update(input_user)
        return submission

    # def encode_auth_token(self):
    #     ''' Generate an authentication token for this user '''
    #     try:
    #         payload = {
    #             'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
    #             'iat': datetime.datetime.utcnow(),
    #             'sub': self._id
    #         }
    #         _log.debug("payload set")
    #         return jwt.encode(payload, _secret_key, algorithm='HS256')
    #     except Exception as e:
    #         _log.exception('Encode failed.')
    #         return e

    # @staticmethod
    # def decode_auth_token(auth_token):
    #     ''' Decode the auth token to receive the id of user '''
    #     try:
    #         payload = jwt.decode(auth_token, _secret_key)
    #         return payload['sub']
    #     except jwt.ExpiredSignatureError:
    #         return 'Token expired. please login again.'
    #     except jwt.InvalidTokenError:
    #         return 'Token invalid. Please login.'




class SubmissionEncoder(json.JSONEncoder):
    ''' Allows us to serialize our objects as JSON '''
    def default(self, o):
        return o.to_dict()