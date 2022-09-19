const Home = () => {
	const url = 'https://jsonplaceholder.typicode.com/users';
	fetch(url) // fetch the data from the url
		.then((response) => response.json()) // convert the response to json
		.then((data) => console.log(data)); // log the data to the console

	function handleClick() {
		console.log('The button was clicked.');
	}

	return (
		<div>
			<h1>Api request</h1>
			<p>To display the users click the button</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
};

export default Home;
