import { useState } from 'react';

const Home = () => {
	// we use state to store the data we get from the API
	const [data, setData] = useState(null);
	// assign the endpoint to a variable called url
	const url = 'https://jsonplaceholder.typicode.com/users';

	const getData = () => {
		fetch(url)
			// convert the response to json
			.then((response) => response.json())
			// .then((data) => console.log(data))
			.then((data) => setData(data)) // set the data to state
			.catch((error) => console.log(error)); // catch any errors
	};

	// this is a higher order function because a function is being returned inside of a function
	const handleClick = () => {
		getData(); // this is a callback function because it is being passed into another function
	};

	/* on lines 26-27, we are using a ternary operator to check if data is truthy or falsy and then rendering the data accordingly
  if data is truthy, we will map over the data and return a list of the data.
  if data is falsy, we will return null
   */

	return (
		<>
			<h1>Api request</h1>
			<p>To display the data click the button</p>
			<button onClick={handleClick}>Display Data</button>
			{data &&
				data.map((user) => (
					<div key={user.id}>
						<ul>
							<li>Name: {user.name}</li>
							<li>Username: {user.name}</li>
							<li>Email:{user.email}</li>
						</ul>
					</div>
				))}
		</>
	);
};

export default Home;
