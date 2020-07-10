const axios = require('axios');

class SubmissionService {
    constructor(){
        this.URI = 'http://localhost:5000/submissions';
    }
    newSubmission(student, assignment, content) {
        return axios.post(this.URI, {'student': student, 'assignment': assignment, 'teacher': "this teacher", 'grade': '', 'content': content})

    }


    

}

export default SubmissionService;