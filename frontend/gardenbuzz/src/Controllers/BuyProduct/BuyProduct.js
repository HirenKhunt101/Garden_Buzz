import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BuyProduct.css";

function BuyProduct() {
  const [imageMap, setImageMap] = useState({});
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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
              imageUrls: Object.keys(imageMap),
            }),
          }
        );
        const data = await response.json();
        setProductData(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
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
        console.log(CartData.data);
        setCartItems(CartData.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
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
    console.log(response);
    if (response.ok) {
      alert("Product added successfully!");
    }
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item._id === productId);
  };

  const removeFromCart = async (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
    console.log(123);
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
    console.log(response);
    if (response.ok) {
      alert("Product Removed successfully!");
    }
  };

  // console.log("productData" + JSON.stringify(productData));

  return (
    <>
      <div className="productContainer">
        <div className="imageContainer">
          {Array.isArray(productData) ? (
            productData.map((product) => (
              <div key={product._id} className="productCard">
                <img
                  src={product.ImageURL}
                  alt={product.Name}
                  className="productImage"
                  onError={() => handleImageError(product.ImageURL)}
                />
                <div className="productDetails">
                  <h3>Name: {product.Name}</h3>
                  <p>Price: ${product.Price}</p>
                  <p>Quantity: {product.ProductQuantity}</p>
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
    </>
  );
}

export default BuyProduct;
