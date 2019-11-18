import { ADD, MINUS, CHANGEPAGE } from '../constants/counter';

const INITIAL_STATE = {
	num: 0,
	tabBar: 0
};

export default function counter(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD:
			return {
				...state,
				num: state.num + 1
			};
		case MINUS:
			return {
				...state,
				num: state.num - 1
			};
		case CHANGEPAGE:
			return {
				...state,
				tabBar: action.value
			};
		default:
			return state;
	}
}
