const axios = require('axios');

class AssignmentService {
    constructor(){
        this.URI = 'http://localhost:5000/assignments';
    }



    getAssignments() {
        return axios.get(this.URI)
    }


}

export default AssignmentService;