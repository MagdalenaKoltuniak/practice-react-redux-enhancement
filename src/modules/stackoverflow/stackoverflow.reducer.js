import { SET_SO_QUERY, SET_SO_SORT, FETCH_SO_REQUEST, FETCH_SO_SUCCESS, FETCH_SO_FAILURE } from './stackoverflow.types';

const initialState = {
	query: '',
	questions: [],
	sortBy: 'date',
	loading: false,
	error: null,
};

const stackoverflowReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SO_QUERY:
			return { ...state, query: action.payload };

		case SET_SO_SORT:
			return { ...state, sortBy: action.payload };

		case FETCH_SO_REQUEST:
			return { ...state, loading: true, error: null };

		case FETCH_SO_SUCCESS:
			return { ...state, loading: false, questions: action.payload };

		case FETCH_SO_FAILURE:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

export default stackoverflowReducer;
