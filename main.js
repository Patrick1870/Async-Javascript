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


// Promise.all
const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json()); 

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));

async function init() {
	await createPost({ title: 'post three', body: 'this is post three'});
	getPosts();
}

init();

// Async / Await / Fetch
async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	console.log(data);
}

fetchUsers();








