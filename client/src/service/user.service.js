const axios = require('axios');

class UserService {
    constructor(){
        this.URI = 'http://localhost:5000/users';
    }

    assignTeacher(username, teacher) {
        return axios.put(this.URI + '/' + username, {'teacher': teacher})

    }

    newAdmin(username, password, fullname, address) {
        return axios.put(this.URI, {'username': username, 'password': password,
                                    'fullname': fullname, 'address': address,
                                    'role': 'admin'})

    }

    newStudent(username, password, fullname, address, age, grade, schedule) {
        return axios.put(this.URI, {'username': username, 'password': password,
                                    'fullname': fullname, 'address': address,
                                    'current_schedule': schedule,
                                    'role': 'student', 'age': age, 'grade': grade,
                                    'teacher': 'none', 'english': 0, 'math': 0, 'science': 0, 
                                    'social_studies': 0})

    }

    newTeacher(username, password, fullname, address) {
        return axios.put(this.URI, {'username': username, 'password': password,
                                    'fullname': fullname, 'address': address,
                                    'role': 'teacher'})

    }

    login(username) {
        return axios.post(this.URI, {'username': username})
    }

    logout() {
        return axios.delete(this.URI)
    }
}

export default UserService;