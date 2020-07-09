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



}

export default StudentService;