const axios = require('axios');

class UserService {
    constructor(){
        this.URI = 'http://localhost:5000/users';
    }

    assignTeacher(username, teacher) {
        return axios.put(this.URI + '/' + username, {'teacher': teacher}, {withCredentials: true})

    }

    newAdmin(username, password, fullname, address) {
        return axios.put(this.URI, {'username': username, 'password': password,
                                    'fullname': fullname, 'address': address,
                                    'role': 'admin'}, {withCredentials: true})

    }

    newStudent(username, password, fullname, address, age, grade, schedule) {
        return axios.put(this.URI, {'username': username, 'password': password,
                                    'fullname': fullname, 'address': address,
                                    'current_schedule': schedule,
                                    'role': 'student', 'age': age, 'grade': grade}, {withCredentials: true})

    }

    newTeacher(username, password, fullname, address) {
        return axios.put(this.URI, {'username': username, 'password': password,
                                    'fullname': fullname, 'address': address,
                                    'role': 'teacher'}, {withCredentials: true})

    }

    login(username) {
        return axios.post(this.URI, {'username': username}, {withCredentials: true})
    }

    logout() {
        return axios.delete(this.URI, {withCredentials: true})
    }
}

export default UserService;