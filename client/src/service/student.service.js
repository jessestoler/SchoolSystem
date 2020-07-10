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

    updateProfile(name) {
        return axios.put(this.URI + '/' + name)
    }

    denyProfileUpdate(name) {
        return axios.delete(this.URI + '/' + name)
    }

    submitProfileUpdate(name, profileUpdate) {
        return axios.post(this.URI + '/' + name, profileUpdate)
    }

    updateSchedule(name) {
        return axios.put(this.URI + '/' + name + '/schedule')
    }

    denyScheduleUpdate(name) {
        return axios.delete(this.URI + '/' + name + '/schedule')
    }

    submitScheduleUpdate(name, scheduleUpdate) {
        return axios.post(this.URI + '/' + name + '/schedule', scheduleUpdate)
    }

}

export default StudentService;