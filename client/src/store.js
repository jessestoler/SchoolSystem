import { createStore } from 'redux';

const initialState = {
    user: null,
    username: '',
    user_array: [],
    student_array: [],
    teacher_array: [],
    new_admin: {},
    new_student: {},
    new_teacher: {}
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
        case 'getStudents':
            return Object.assign({}, state, {student_array: action.student_array})
        case 'getTeachers':
            return Object.assign({}, state, {teacher_array: action.teacher_array})
        default:
            return state;
    }
}

const store = createStore(schoolReducer);

export default store