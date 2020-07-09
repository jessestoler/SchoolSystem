const axios = require('axios');

class AdminService {
    constructor(){
        this.URI = 'http://localhost:5000/admin';
    }

    getUsers() {
        return axios.get(this.URI)
    }

    remove(name) {
        return axios.delete(this.URI + '/' + name)
    }
    // login(username) {
    //     return axios.post(this.URI, {'username': username})
    // }

    // logout() {
    //     return axios.delete(this.URI)
    // }
}

export default AdminService;