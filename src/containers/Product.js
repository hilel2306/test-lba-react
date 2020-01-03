import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductToUpdate from "../components/ProductToUpdate";
import UpdateForm from "../components/UpdateForm";
import Axios from "axios";

const Product = ({
  handleChange,
  handleChangeForm,
  input,
  updated,
  setUpdated
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(); // State to store the result from fetchData function
  const [isLoading, setIsLoading] = useState(true); // Loading state to drive the Home page's render

  // Get the product selected
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await Axios.get("http://localhost:3000/product/" + id);

      setProduct(response.data);
      setIsLoading(false);
    } catch (e) {
      alert("An error occurred");
    }
  };

  // To send the product to update to the database
  const updateProduct = async () => {
    try {
      setIsLoading(true);
      await Axios.post(`http://localhost:3000/update?id=${product._id}`, input);

      setIsLoading(false);
      setUpdated(!updated);
    } catch (e) {
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, [updated]);

  return (
    <div className="container">
      {isLoading ? (
        <p>Chargement ... </p>
      ) : (
        <div>
          <h1>{product.name}</h1>

          <ProductToUpdate product={product} />

          <UpdateForm
            handleChangeForm={handleChangeForm}
            handleChange={handleChange}
            input={input}
            updateProduct={updateProduct}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
