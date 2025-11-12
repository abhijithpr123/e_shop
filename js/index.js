const data=``;
async function fetchProducts() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

    let str=``
    data.products.forEach(product => {
      str += `
    
        <div class="card">
            <a href="">
                <img src="${product.thumbnail}" alt="">
                <h3>${product.title}</h3>
                <p>${product.rating}</p>
                <p class="price">Price: $${product.price}</p>
            </a>
        </div>
      `;

    });
    document.getElementById("cards").innerHTML=str;

  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();