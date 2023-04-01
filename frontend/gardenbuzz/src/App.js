import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Controllers/Navbar/navbar";
import Navbar from "./Controllers/Navbar/Navbar";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    console.log("start");
    event.preventDefault();
    const response = await fetch("http://localhost:4200/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    let data = await response.JSON();
    console.log(data);
  }

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
              src="https://via.placeholder.com/150"
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$9.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p className="product-price">$19.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img
              src="https://via.placeholder.com/150"
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
