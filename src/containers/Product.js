import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductToUpdate from "../components/ProductToUpdate";
import UpdateForm from "../components/UpdateForm";
import Axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const [name, setName] = useState(""); // state of product's name
  const [type, setType] = useState(""); // state of product's type
  const [price, setPrice] = useState(null); // state of product's price
  const [available, setAvailable] = useState("en stock"); // state of available
  const [warranty, setWarranty] = useState(null); // state of product's warranty
  const [updated, setUpdated] = useState(false); // state of product's warranty

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3000/product/" + id);
      setIsLoading(true);
      setProduct(response.data);

      setIsLoading(false);
    } catch (e) {
      alert("An error occurred");
    }
  };

  const updateProduct = async () => {
    try {
      setIsLoading(true);
      await Axios.post(`http://localhost:3000/update?id=${product._id}`, {
        name,
        type,
        price,
        available,
        warranty
      });

      setIsLoading(false);
      setUpdated(!updated);
    } catch (e) {
      alert("An error occurred");
    }
  };

  const handleChangeForm = () => {
    setName("");
    setType("");
    setPrice(null);
    setAvailable("en stock");
    setWarranty(null);
  };

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeType = event => {
    setType(event.target.value);
  };
  const handleChangePrice = event => {
    setPrice(event.target.value);
  };
  const handleChangeAvailable = event => {
    setAvailable(event.target.value);
  };
  const handleChangeWarranty = event => {
    setWarranty(event.target.value);
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
            handleChangeName={handleChangeName}
            handleChangeAvailable={handleChangeAvailable}
            handleChangeForm={handleChangeForm}
            handleChangePrice={handleChangePrice}
            handleChangeType={handleChangeType}
            handleChangeWarranty={handleChangeWarranty}
            name={name}
            type={type}
            price={price}
            available={available}
            warranty={warranty}
            updateProduct={updateProduct}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
