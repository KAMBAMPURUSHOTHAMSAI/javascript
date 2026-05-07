const API_URL = "https://fakestoreapi.com/products";

const productContainer = document.getElementById("product-container");
const loading = document.getElementById("loading");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortPrice");

let allProducts = [];
//FUNCTIOAL REQURIEMENTS
//  FETCH PRODUCTS 
function fetchProducts() {
  loading.innerText = "Loading...";
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      loading.innerText = "";
      allProducts = data;
      displayProducts(data);
      loadCategories(data);
    })

    // ERROR HANDLING 
    .catch((error) => {
      loading.innerText = "Failed to load data";
      console.log(error);
    });

}

//  DISPLAY PRODUCTS 
function displayProducts(data) {
  productContainer.innerHTML = "";
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${product.image}" alt="product image">
      <h3>
        ${product.title.substring(0, 50)}
      </h3>
      <p><strong>₹ ${product.price}</strong></p>
      <p>
        ${product.description.substring(0, 60)}...
      </p>

      <!-- VIEW MORE BUTTON -->
      <button onclick="viewMore(
        '${product.title}',
        '${product.description}',
        '${product.price}'
      )">
        View More
      </button>

      <!-- ADD TO CART -->
      <button onclick="addToCart(${product.id})">
        Add To Cart
      </button>

    `;

    productContainer.appendChild(card);

  });

}

//  VIEW MORE 
function viewMore(title, description, price) {

  alert(
    `Title: ${title}\n\nPrice: ₹${price}\n\nDescription: ${description}`
  );

}

//  SEARCH FUNCTION 
searchInput.addEventListener("input", applyFilters);

// CATEGORY FILTER 
function loadCategories(products) {
  const categories = [...new Set(products.map(item => item.category))];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.innerText = category;
    categoryFilter.appendChild(option);

  });

}

// FILTER + SORT 
function applyFilters() {

  let filteredProducts = [...allProducts];

  // SEARCH FILTER
  const searchValue = searchInput.value.toLowerCase();

  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchValue)
  );

  // CATEGORY FILTER
  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );

  }

  // SORT FEATURE
  const sortValue = sortSelect.value;
  if (sortValue === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  else if (sortValue === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  displayProducts(filteredProducts);

}

// EVENT LISTENERS 
categoryFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

// ADD TO CART
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product Added To Cart");

}

// INITIAL FUNCTION CALL 
fetchProducts();