import { useState } from 'react';

const Home = () => {
	const [data, setData] = useState(null);
	const url = 'https://jsonplaceholder.typicode.com/users';

	const getData = () => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	};

	// this is a higher order function because a function is being returned inside of a function
	const handleClick = () => {
		getData();
	};

	return (
		<>
			<h1>Api request</h1>
			<p>To display the users click the button</p>
			<button onClick={handleClick}>Display Data</button>
			{data &&
				data.map((user) => (
					<div key={user.id}>
						<ul>
							<li>{user.name}</li>
							<li>{user.username}</li>
						</ul>
					</div>
				))}
		</>
	);
};

export default Home;
