import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setQuery, fetchRepos } from './github.actions';

const GitHub = () => {
	const dispatch = useDispatch();
	const { userName, query, repos, loading, error } = useSelector(state => state.github);

	const handleUserChange = e => {
		dispatch(setUserName(e.target.value));
	};

	const handleQueryChange = e => {
		dispatch(setQuery(e.target.value));
	};

	const handleSearch = () => {
		if (userName) dispatch(fetchRepos(userName));
	};

	const filteredRepos = repos.filter(repo => {
		return repo.name.toLowerCase().includes(query.toLowerCase());
	});

	return (
		<section>
			<div>
				<label>
					User:
					<input value={userName} onChange={handleUserChange} />
				</label>
			</div>
			<div>
				<label>
					Filter:
					<input value={query} onChange={handleQueryChange} />
				</label>
			</div>
			<button onClick={handleSearch}>Szukaj</button>

			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}

			<ul>
				{filteredRepos.map(repo => {
					return <li key={repo.id}>{repo.name}</li>;
				})}
			</ul>
		</section>
	);
};

export default GitHub;
