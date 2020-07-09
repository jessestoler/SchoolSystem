import { createStore } from 'redux';

const initialState = {
    user: null,
    username: '',
    user_array: [],
    newStudent: {fullname:'', username:'', password:'', address:'', role:'', grades:[], absences:-1, grade_level: '', age:-1},
    newTeacher: {fullname:'', username:'', password:'', address:'', role:''},
    newAdmin: {fullname:'', username:'', password:'', address:'', role:''}

};

function schoolReducer(state = initialState, action) {
    console.log(state);
    switch(action.type) {
        case 'login':
            return Object.assign({}, state, {username: ''}, {user: action.user})
        case 'logout':
            return Object.assign({}, state, {username: ''}, {user: action.user})
        case 'handleUsername':
            return Object.assign({}, state, {username: action.username})
        case 'remove':
            return Object.assign({}, state)
        case 'getUsers':
            return Object.assign({}, state, {user_array: action.user_array})
        case 'addStudent':
            return Object.assign({}, state, {newStudent: action.user})

        default:
            return state;
    }
}

const store = createStore(schoolReducer);

export default store