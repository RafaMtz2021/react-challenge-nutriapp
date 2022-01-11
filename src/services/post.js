const getPosts = async () => {
	const response = await fetch('http://localhost:8080/post', {
		method: "GET",
	});
	return await response.json();
};

// const getPostById = async () => {
// 	const response = await fetch('http://localhost:8080/post/:', {
// 		method: "GET",
// 	});

// }

export { getPosts };