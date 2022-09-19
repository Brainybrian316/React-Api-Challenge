const Home = () => {
	const url = 'https://jsonplaceholder.typicode.com/users';
	fetch(url) // fetch the data from the url
		.then((response) => response.json()) // convert the response to json
		.then((data) => console.log(data)); // log the data to the console

	return (
		<div>
			<h1>Api request</h1>
		</div>
	);
};

export default Home;
