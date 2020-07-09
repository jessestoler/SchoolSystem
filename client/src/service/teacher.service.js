const axios = require('axios');

class TeacherService {
    constructor(){
        this.URI = 'http://localhost:5000/teachers';
    }



    getTeachers() {
        return axios.get(this.URI)
    }


}

export default TeacherService;