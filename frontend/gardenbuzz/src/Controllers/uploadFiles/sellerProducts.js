import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sellerProduct.css";

function Upload() {
  const [imageMap, setImageMap] = useState({});
  const [productData, setProductData] = useState([]);

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
            }),
          }
        );
        const data = await response.json();
        setProductData(data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [imageMap]);

  console.log("productData" + JSON.stringify(productData));

  return (
    <>
      <div className="buttoncontainer">
        <Link to="/addImage" className="addProduct">
          Add Product
        </Link>
      </div>
      <div className="productContainer">
        <div className="image-Container">
          {Array.isArray(productData) ? (
            productData.map((product) => (
              <div key={product.id} className="productCard">
                <img
                  src={product.ImageURL}
                  alt={product.Name}
                  className="productImage"
                  onError={() => handleImageError(product.ImageURL)}
                />
                {/* <div className="productDetails"> */}
                <h3>{product.Name}</h3>
                <p>Price: ${product.Price}</p>
                {/* <p>Description: {product.Description}</p>
                  <p>Pot Color: {product.PotColor}</p>
                  <p>Care Instructions: {product.CareInstructions}</p> */}
                <p>Product Quantity: {product.ProductQuantity}</p>
                {/* </div> */}
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

export default Upload;
