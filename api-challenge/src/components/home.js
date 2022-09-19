const Home = () => {
	const url = 'https://jsonplaceholder.typicode.com/users';

	const getData = () => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	const handleClick = () => {
		getData();
	};

	return (
		<div>
			<h1>Api request</h1>
			<p>To display the users click the button</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
};

export default Home;
