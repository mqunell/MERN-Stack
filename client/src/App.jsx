import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [apiResponse, setApiResponse] = useState();

	useEffect(() => {
		axios
			.post('http://localhost:5000/api/user/')
			.then((response) => setApiResponse(response.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<p>{apiResponse}</p>
		</div>
	);
}

export default App;
