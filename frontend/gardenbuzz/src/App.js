import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Controllers/Navbar/navbar";
import Navbar from "./Controllers/Navbar/Navbar";

function App() {


  return (
    // <div>
    //   <h1>Register</h1>
    //   <form onSubmit={registerUser}>
    //     <input
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       type="text"
    //       placeholder="first name"
    //     />
    //     <br />
    //     <input
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       type="email"
    //       placeholder="Email"
    //     />
    //     <br />
    //     <input
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       type="password"
    //       placeholder="password"
    //     />
    //     <br />
    //     <input type="submit" value="Register" />
    //   </form>
    // </div>
    <div className="home">
      <Navbar />
      <hr />
      <section className="hero">
        <h1>Welcome to our eCommerce store!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          efficitur, quam ut laoreet elementum, justo ipsum semper orci, ac
          tincidunt libero magna nec odio.
        </p>
        {/* <Link to="/shop" className="btn">
          Shop Now
        </Link> */}
      </section>

      <section className="featured">
        <h2>Featured Products</h2>

        <div className="product-list">
          <div className="product">
            <img
              src="data:image/jpeg;base64,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"
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$9.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5DVSWR80oLdjLgjFiOInp5yhjBr2c_9K9w&usqp=CAU"
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$19.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZm5iINjW5L8d36_hr922A5VhBEI5jKzWvrg&usqp=CAU"
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$29.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFBZKAi42b6Vb1oxJGlFR7vZPLXyYKbPnGg&usqp=CAU  "
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$29.99</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="product-list">
          <div className="product">
            <img
              src="data:image/jpeg;base64,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"
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$9.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5DVSWR80oLdjLgjFiOInp5yhjBr2c_9K9w&usqp=CAU"
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$19.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZm5iINjW5L8d36_hr922A5VhBEI5jKzWvrg&usqp=CAU"
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$29.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFBZKAi42b6Vb1oxJGlFR7vZPLXyYKbPnGg&usqp=CAU  "
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$29.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
      <hr />

      <footer>
        <p>© 2023, eCommerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
