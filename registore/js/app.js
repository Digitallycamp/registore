const menuBtn = document.querySelector('.menu');
console.log(menuBtn);
const right_links = document.querySelector('.right-links');
console.log(right_links);

menuBtn.addEventListener('click', togglemenu);

function togglemenu() {
	right_links.classList.toggle('toggle');
	console.log('cliekd');
}

//fetch data

const product_list = document.querySelector('.product-list');

async function getProduct() {
	const response = await fetch('https://fakestoreapi.com/products');
	console.log(response);
	if (response.ok === !true) {
		product_list.textContent = 'Loading ....';
	}
	const products = await response.json();

	let elem = '';

	products.forEach((product) => {
		console.log(product);
		//BODAMS
		const actualprice = 0.7 * product.price + product.price;
		elem += `
		<div class="card">
						<a href="./details.html?id=${product.id}">
							<img src="${product.image}" alt="" />
							<h3>
								${product.title}
							</h3>
							<div class="meta-data">
								<span>$${product.price}</span>
								<del>$${Math.floor(actualprice)}</del>
								<span>Stock ${product.rating.count}</span>
							</div>
						</a>
		</div> 
		
		
		`;
		product_list.innerHTML = elem;
	});
}

getProduct();

// GET SINGLE PRODUCT
const product_list_details = document.querySelector('.product-list-details');
const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
async function getSingleProduct() {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = await response.json();

	let HTMLeLEM = '';
	HTMLeLEM += `
<div class="details_content">
						<div class="left">
							<img src="${product.image}" />
						</div>
						<div class="right">
							<h1>${product.title}</h1>
							<div class="price">
								<span>Pice: ${product.price}</span>
								<span>Category: ${product.category}</span>
							</div>
							<p>${product.description}</p>
						</div>
</div>


`;

	product_list_details.innerHTML = HTMLeLEM;
}

getSingleProduct();
