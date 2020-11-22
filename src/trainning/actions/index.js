import * as types from '../constants/ActionTypes'

export const status = () => {
	return {
		type: types.TOOGLE_STATUS
	}
}

export const sort = (sort) => {
	return {
		type: types.SORT,
		sort
	}
}