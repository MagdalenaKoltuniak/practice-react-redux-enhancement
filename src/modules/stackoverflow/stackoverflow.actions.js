import { SET_SO_QUERY, SET_SO_SORT, FETCH_SO_REQUEST, FETCH_SO_SUCCESS, FETCH_SO_FAILURE } from './stackoverflow.types';
import StackOverflowAPI from './stackoverflow.api';

const api = new StackOverflowAPI();

export const setSoQuery = query => ({
	type: SET_SO_QUERY,
	payload: query,
});

export const setSoSort = sortBy => ({
	type: SET_SO_SORT,
	payload: sortBy,
});

export const fetchStackOverflow = (query, sortBy) => dispatch => {
	dispatch({ type: FETCH_SO_REQUEST });

	api
		.getQuestions(query, sortBy)
		.then(questions => {
			dispatch({
				type: FETCH_SO_SUCCESS,
				payload: questions,
			});
		})
		.catch(error => {
			dispatch({
				type: FETCH_SO_FAILURE,
				payload: error.message || 'Error fetching questions',
			});
		});
};
