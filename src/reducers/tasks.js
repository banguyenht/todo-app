import * as types from '../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('tasks'))
var initializeState = data ? data : []
var createId = () => {
	return Math.floor(Math.random() * Math.floor(3));
}

var myReduder = (state = initializeState, action) => {
	switch(action.type) {
		case 'LIST_TYPE':
			return state
		case types.ADD_TASK:
			var newTask = {
				id: createId,
				name: action.task.name,
				status: action.task.status
			}
			state.push(newTask)
			localStorage.setItem('tasks', JSON.stringify(state))
			return [...state]
		case types.UPDATE_STATUS:
			return [...state]
		default:
			return state
	}
}

export default myReduder