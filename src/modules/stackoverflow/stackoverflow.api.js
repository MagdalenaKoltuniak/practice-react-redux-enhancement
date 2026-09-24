class StackOverflowAPI {
	baseUrl = 'https://api.stackexchange.com/2.3';

	getQuestions(query, sortBy = 'date') {
		const sortParams = sortBy === 'score' ? 'votes' : 'creation';

		const url = `${this.baseUrl}/search?order=desc&sort=${sortParams}&intitle=${query}&site=stackoverflow`;

		return fetch(url)
			.then(this.handleErrors)
			.then(resp => resp.json())
			.then(data => data.items);
	}

	handleErrors(resp) {
		if (!resp.ok) {
			throw Error(resp.statusText);
		}

		return resp;
	}
}

export default StackOverflowAPI;
