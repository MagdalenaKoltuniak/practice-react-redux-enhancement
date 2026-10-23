import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSoQuery, setSoSort, fetchStackOverflow } from './stackoverflow.actions';

const options = {
	date: (a, b) => b.creation_date - a.creation_date,
	score: (a, b) => b.owner.reputation - a.owner.reputation,
};

const Stackoverflow = () => {
	const dispatch = useDispatch();
	const { query, questions, sortBy, loading, error } = useSelector(state => state.stackoverflow);

	const handleQueryChange = e => {
		dispatch(setSoQuery(e.target.value));
	};

	const handleSortChange = e => {
		dispatch(setSoSort(e.target.value));
	};

	const handleSearch = () => {
		if (!query.trim()) return;
		dispatch(fetchStackOverflow(query, sortBy));
	};

	const sortedQuestions = [...questions].sort(options[sortBy]);

	return (
		<section>
			<div>
				<label>
					Query:
					<input type='text' value={query} onChange={handleQueryChange} placeholder='react hooks...' />
				</label>
			</div>

			<div>
				<label>
					Sort by:
					<select value={sortBy} onChange={handleSortChange}>
						<option value='date'>Date</option>
						<option value='score'>User reputation</option>
					</select>
				</label>
			</div>

			<button onClick={handleSearch}>Search</button>

			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}

			<ul>
				{sortedQuestions.map(question => (
					<li key={question.question_id}>
						<a href={question.link} target='_blank' rel='noreferrer'>
							{question.title}
						</a>
						<div>
							<small>
								Date: {new Date(question.creation_date * 1000).toLocaleString()} | Reputation:{' '}
								{question.owner?.reputation ?? 0}
							</small>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Stackoverflow;
