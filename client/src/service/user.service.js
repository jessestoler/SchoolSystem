const axios = require('axios');

class UserService {
    constructor(){
        this.URI = 'http://localhost:5000/users';
    }

    
    login(username) {
        return axios.post(this.URI, {'username': username})
    }

    logout() {
        return axios.delete(this.URI)
    }
}

export default UserService;