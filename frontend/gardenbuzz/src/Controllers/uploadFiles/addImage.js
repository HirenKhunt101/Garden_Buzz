import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function AddImage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [potColor, setPotColor] = useState("white");
  const [careInstructions, setCareInstructions] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);

  const uploadFile = async (event) => {
    event.preventDefault();
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    await uploadBytes(imageRef, imageUpload);

    const url = await getDownloadURL(imageRef);
    const response = await fetch("http://localhost:4200/gardenbuzz/add_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Price: price,
        Description: description,
        PotColor: potColor,
        CareInstructions: careInstructions,
        ProductQuantity: productQuantity,
        ImageURL: url,
      }),
    });
    const data = await response.json();
    alert("Product Uploaded Successfully!");
    window.location.href = "/Upload";
  };

  return (
    <>
      <form onSubmit={uploadFile}>
        <label htmlFor="product-name">Name:</label>
        <input type="text" id="product-name" value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          step="1"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="pots-color">Pot Color:</label>
        <select
          id="pots-color"
          name="pots-color"
          value={potColor}
          onChange={(e) => setPotColor(e.target.value)}
        >
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        <label htmlFor="care-instructions">Care Instructions:</label>
        <textarea
          id="care-instructions"
          name="care-instructions"
          rows="1"
          value={careInstructions}
          onChange={(e) => setCareInstructions(e.target.value)}
        ></textarea>

        <label htmlFor="product-quantity">Product Quantity:</label>
        <input
          type="number"
          id="product-quantity"
          name="product-quantity"
          min="0"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          required
        ></input>

        <input type="file"
          onChange={(event) => setImageUpload(event.target.files[0])}
          required
        />
        <input type="submit" name="submit" value="Submit" />

        {/* <button onClick={uploadFile}>Upload Image</button> */}
      </form>
    </>
  );
}

export default AddImage;
