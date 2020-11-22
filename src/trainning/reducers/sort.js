var initializeState = { by: 'name', value: 1 }

var myReducer = (state = initializeState, action) => {
	var result = {}
	if(action === 'SORT') {
		var { by, value } = action.sort
		var status = state.status
		return { 
			status: status,
			sort: {
				by: by,
				value: value
			}
		}
	}
	return state
}

export default myReducer