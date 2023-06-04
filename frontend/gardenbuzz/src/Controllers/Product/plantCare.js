import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./plant.css";

function PlantCareProduct() {
  const [imageMap, setImageMap] = useState({});
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleImageError = (url) => {
    const newImageMap = { ...imageMap };
    delete newImageMap[url];
    setImageMap(newImageMap);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4200/gardenbuzz/get_seller_products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // imageUrls: Object.keys(imageMap),
              Category: "plantcare",
            }),
          }
        );
        const data = await response.json();
        setProductData(data.data);
        // console.log(data.data);
      } catch (error) {
        // console.error("Error fetching product data:", error);
      }
    };

    const fetchCartData = async () => {
      try {
        const response1 = await fetch(
          "http://localhost:4200/gardenbuzz/get_cart_details",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              UserId: "Static",
            }),
          }
        );
        const CartData = await response1.json();
        // console.log(CartData.data);
        setCartItems(CartData.data);
      } catch (error) {
        // console.error("Error in fetching product data:", error);
      }
    };

    fetchData();
    fetchCartData();
  }, [imageMap]);

  const addToCart = async (product) => {
    setCartItems([...cartItems, product]);

    const response = await fetch(
      "http://localhost:4200/gardenbuzz/add_product_in_cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: product,
        }),
      }
    );
    // console.log(response);
    if (response.ok) {
      alert("Product added successfully!");
    }
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item._id === productId);
  };

  const removeFromCart = async (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
    // console.log(123);
    let body = JSON.stringify({
      ProductId: productId,
    });
    const response = await fetch(
      "http://localhost:4200/gardenbuzz/remove_product_from_cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }
    );
    // console.log(response);
    if (response.ok) {
      alert("Product Removed successfully!");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = productData.filter((product) =>
    product.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortPriceHighToLow = function () {
    const sortedProducts = [...productData].sort((product1, product2) => {
      return product2.Price - product1.Price;
    });
    setProductData(sortedProducts);
  };
  const sortPriceLowToHigh = function () {
    const sortedProducts = [...productData].sort((product1, product2) => {
      return product1.Price - product2.Price;
    });
    setProductData(sortedProducts);
  };
  const sortByNewest = function () {
    const sortedProducts = [...productData].sort((product1, product2) => {
      // console.log(new Date(product2.CreatedAt), new Date(product1.CreatedAt));
      return new Date(product2.CreatedAt) - new Date(product1.CreatedAt);
    });
    setProductData(sortedProducts);
  };
  const sortByPopularity = function () {
    const sortedProducts = [...productData].sort((product1, product2) => {
      return new Date(product1.CreatedAt) - new Date(product2.CreatedAt);
    });
    setProductData(sortedProducts);
  };

  const getRandomNumber = function (Price) {
    return (Price % 39) + 10;
    return Math.floor(Math.random() * 50 + 1);
  };

  // // console.log("productData" + JSON.stringify(productData));

  return (
    <>
      <div className="productContant">
        <div className="filter-search">
          <div className="filterContainer">
            <h4>Sort By</h4>
            <button onClick={sortByPopularity}>Popularity</button>
            <button onClick={sortPriceLowToHigh}>Price -- Low to High</button>
            <button onClick={sortPriceHighToLow}>Price -- High to Low</button>
            <button onClick={sortByNewest}>Newest First</button>
          </div>
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search by product name"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="productContainer">
          <div className="imageContainer">
            {Array.isArray(filteredProducts) ? (
              filteredProducts.map((product) => (
                <div key={product._id} className="productCard">
                  <img
                    src={product.ImageURL}
                    alt={product.Name}
                    className="productImage"
                    onError={() => handleImageError(product.ImageURL)}
                  />
                  <div className="productDetails">
                    <h3>{product.Name}</h3>
                    <p style={{ color: "green" }}>
                      {getRandomNumber(product.Price)}% off
                    </p>
                    <p>Price: ₹{product.Price}</p>
                    {/* <p>Quantity: {product.ProductQuantity}</p> */}
                    <a href="#" class="moreInfo">
                      More Information
                    </a>
                    {product.Price >= 500 && <p>Free delivery </p>}
                    {!isProductInCart(product._id) && (
                      <button
                        className="addToCart"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    )}
                    {isProductInCart(product._id) && (
                      <button
                        className="removeFromCart"
                        onClick={() => removeFromCart(product._id)}
                      >
                        Remove From Cart
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlantCareProduct;
