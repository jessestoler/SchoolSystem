const axios = require('axios');

class TeacherService {
    constructor(){
        this.URI = 'http://localhost:5000/teachers';
    }



    getTeachers() {
        return axios.get(this.URI)
    }

    // old code to get specific students of a teach.
    // saving just in case
    ////
    // teacher_get_student(teacher) {
    //     console.log(teacher.username)
    //     return axios.get(this.URI + '/' + teacher.username)
    // }


}

export default TeacherService;