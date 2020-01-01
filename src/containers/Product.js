import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const obj = useParams();

  return <h1>{obj.id}</h1>;
};

export default Product;
