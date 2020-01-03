import React, { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList"; // Import component ProductsList
import AddForm from "../components/AddForm"; // Import component AddForm
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";

// Style from Material ui
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 1100,
    backgroundColor: theme.palette.background.paper
  }
}));

const Home = ({
  handleChange,
  handleChangeForm,
  input,
  isLoading,
  setIsLoading,
  updated,
  setUpdated
}) => {
  const [products, setProducts] = useState([]); // State to store the result from fetchData function

  // To use style defined is useStyles from Material UI
  const classes = useStyles();

  // Function to add a product to database
  const addProduct = async () => {
    try {
      setIsLoading(true);
      await Axios.post(`http://localhost:3000/post`, input);

      setIsLoading(false);
      setUpdated(!updated);
    } catch (e) {
      alert("An error occurred");
    }
  };

  // Function to delete a product
  const deleteOne = async product => {
    try {
      setIsLoading(true);
      await Axios.post(`http://localhost:3000/delete/${product}`);

      setIsLoading(false);
      setUpdated(!updated);
    } catch (e) {
      alert("An error occurred");
    }
  };

  // To get the database render
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get("http://localhost:3000");
        setIsLoading(false);
        setProducts(response.data);
      } catch (e) {
        alert("An error occurred");
      }
    };
    fetchData();
  }, [updated]);

  return (
    <div className="container">
      <h1>Products</h1>
      {/* DATA PRODUCTS LIST */}
      <div className={classes.root}>
        {isLoading ? (
          <p>Chargement ...</p>
        ) : (
          <ProductsList deleteOne={deleteOne} products={products} />
        )}
      </div>

      {/* ADD A PRODUCT FORM */}
      {isLoading ? null : (
        <AddForm
          handleChangeForm={handleChangeForm}
          handleChange={handleChange}
          input={input}
          addProduct={addProduct}
        />
      )}
    </div>
  );
};

export default Home;
