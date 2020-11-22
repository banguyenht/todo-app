var initializeState = false

var myReducer = (state = initializeState, action) => {
	if(action === 'TOOGLE_STATUS') {
		state = !state
	}
	return state
}