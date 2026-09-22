import {
	SET_USER_NAME,
	SET_QUERY,
	FETCH_REPOS_REQUEST,
	FETCH_REPOS_SUCCESS,
	FETCH_REPOS_FAILURE,
} from './github.types';

const initialState = {
	userName: '',
	query: '',
	repos: [],
	loading: false,
	error: null,
};

const githubReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_NAME:
			return { ...state, userName: action.payload };

		case SET_QUERY:
			return { ...state, query: action.payload };

		case FETCH_REPOS_REQUEST:
			return { ...state, loading: true, error: null };

		case FETCH_REPOS_SUCCESS:
			return { ...state, loading: false, repos: action.payload };

		case FETCH_REPOS_FAILURE:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

export default githubReducer;
