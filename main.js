const posts = [
	{ title: 'post one', body: 'this is post one'},	
	{ title: 'post two', body: 'this is post two'},	
];

function getPosts() {
	setTimeout(function() {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`
		});
		document.body.innerHTML = output;
	}, 2000);
}


function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			if(!error) {
				resolve();
			}
			else {
				reject('error, something went wrong');
			}
		}, 4000);
	});
};

createPost({ title: 'post three', body: 'this is post three'})
	.then(getPosts)
		.catch(err => alert(err));
