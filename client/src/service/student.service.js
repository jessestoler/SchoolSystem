const axios = require('axios');

class StudentService {
    constructor(){
        this.URI = 'http://localhost:5000/students';
    }

    assign(name, teacherName) {
        return axios.put(this.URI + '/' + name, {'teacher': teacherName})

    }

    getStudents() {
        return axios.get(this.URI)
    }

    updateProfile(name, profileUpdate) {
        return axios.put(this.URI + '/' + name, profileUpdate)
    }

    submitProfileUpdate(name, profileUpdate) {
        return axios.post(this.URI + '/' + name, profileUpdate)
    }

}

export default StudentService;