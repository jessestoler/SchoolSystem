const axios = require('axios');

class SubmissionService {
    constructor(){
        this.URI = 'http://localhost:5000/submissions';
    }
    newSubmission(student, assignment, content) {
        return axios.post(this.URI, {'student': student, 'assignment': assignment, 'teacher': "this teacher", 'grade': '', 'content': content})

    }
    getSubmissions(username) {
        return axios.get(this.URI + '/' + username)
    }

    grade(id, letter) {
        return axios.put(this.URI + '/' + id, {'grade': letter})

    }


    

}

export default SubmissionService;