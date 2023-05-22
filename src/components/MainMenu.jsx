import axios from "axios";
import { useEffect, useState } from "react";
import { Carrito } from "./Carrito";

export function MainMenu(props) {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  function insertNewProd() {
    setProducts([
      ...products,
      {
        thumbnail: "",
        title: "Sample Product",
        rating: 3,
        description: "This is a description",
        price: 7,
      },
    ]);
  }
  
  // Fetching the products from the API using useEffect
  useEffect(() => {
    const productsAxios = axios
      //.get("https://dummyjson.com/products")
      //.get("http://localhost:5000/products")   // Different test bases
      //.get("mongodb://localhost/products")
      //.get("./products")
      //.get("D:/XAMPP/htdocs/products")
      .get("https://localhost/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      });
  }, []);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title display-12 text-dark">Buy your products here!</h5>
          <div className="row">
            <button onClick={insertNewProd}> Add Product</button>
          </div>
          <div className="products d-flex flex-wrap">
            {products &&
              products.map((product, index) => (
                <div class="card" style={{ width: "25%", height: "30vw" }}>
                  <img src={product.thumbnail} class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <button
                      type="button"
                      class="btn btn-info"
                      onClick={() => addToCart(product)}
                    >
                      {product.price}€
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Carrito cartItems={cartItems} />
    </>
  );
}
