import {
	SET_USER_NAME,
	SET_QUERY,
	FETCH_REPOS_REQUEST,
	FETCH_REPOS_SUCCESS,
	FETCH_REPOS_FAILURE,
} from './github.types';

import GitHubAPI from './github.api';

const api = new GitHubAPI();

export const setUserName = userName => ({
	type: SET_USER_NAME,
	payload: userName,
});

export const setQuery = query => ({
	type: SET_QUERY,
	payload: query,
});

export const fetchRepos = userName => dispatch => {
	dispatch({ type: FETCH_REPOS_REQUEST });

	api
		.getRepos(userName)
		.then(repos => {
			dispatch({
				type: FETCH_REPOS_SUCCESS,
				payload: repos,
			});
		})
		.catch(error => {
			dispatch({
				type: FETCH_REPOS_FAILURE,
				payload: error.message || 'Error fetching repos',
			});
		});
};
