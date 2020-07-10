const axios = require('axios');

class UserService {
    constructor(){
        this.URI = 'http://localhost:5000/users';
    }
    newAdmin(username, password, fullname, address) {
        return axios.put(this.URI, {'username': username, 'password': password, 'fullname': fullname, 'address': address, 'role': 'admin'})

    }

    newStudent(username, password, fullname, address, age, grade) {
        return axios.put(this.URI, {'username': username, 'password': password, 'fullname': fullname, 'address': address, 'role': 'student', 'age': age, 'grade': grade})

    }

    newTeacher(username, password, fullname, address) {
        return axios.put(this.URI, {'username': username, 'password': password, 'fullname': fullname, 'address': address, 'role': 'teacher'})

    }
    
    login(username) {
        return axios.post(this.URI, {'username': username})
    }

    logout() {
        return axios.delete(this.URI)
    }
}

export default UserService;