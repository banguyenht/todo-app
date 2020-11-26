import * as types from '../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('tasks'))
var initializeState = [1,2,3]
var id = () => {
	Math.floor(Math.random() * Math.floor(3));
}

var myReduder = (state = initializeState, action) => {
	switch(action.type) {
		case 'LIST_TYPE':
			return state
		case types.ADD_TASK:
			var newTask = {
				id: id,
				name: action.task.name,
				status: action.task.status
			}
			state.push(newTask)
			localStorage.setItem('tasks', JSON.stringify(state))
			return [...state]
		default:
			return ['a', 'b', 'c']
	}
}

export default myReduder