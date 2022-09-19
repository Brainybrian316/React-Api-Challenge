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

	// function is being returned inside of a function aka higher order function
	const handleClick = () => {
		getData(); // this is a callback function that is being passed into the event handler
	};

	/* on lines 33-35, we are using a ternary operator to check if the data is null. If it is null, we will display a message. If it is not null, we will display the data. */

	/* on line 32 we  have a button that will call the handleClick function when clicked  
  to get the data from the API and set it to state
  */

	return (
		<>
			<h1>Api request</h1>
			<button onClick={handleClick}>Get Data</button>
			{data ? (
				<div>
					{data.map((user) => (
						<ul key={user.id}>
							<li>{user.name}</li>
							<li>{user.email}</li>
							<li>{user.website}</li>
						</ul>
					))}
				</div>
			) : (
				<p>Click the button to get the data</p>
			)}
		</>
	);
};

export default Home;
