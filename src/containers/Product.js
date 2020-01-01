import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 1100,
    backgroundColor: theme.palette.background.paper
  },
  margin: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const Product = () => {
  const classes = useStyles();
  const history = useHistory();

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
          <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button key={product._id}>
                <ListItemText primary={product.name} className="item-text" />

                <ListItemText primary={product.type} className="item-text" />

                <ListItemText
                  primary={product.price + " €"}
                  className="item-text"
                />

                <ListItemText
                  primary={
                    product.available === false
                      ? "rupture de stock"
                      : "en stock"
                  }
                  className="item-text"
                />

                <ListItemText
                  primary={"garanti " + product.warranty_years + " an(s)"}
                  className="item-text"
                />
              </ListItem>
            </List>
          </div>

          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item></Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="name"
                  value={name}
                  onChange={handleChangeName}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="type"
                  value={type}
                  onChange={handleChangeType}
                />
              </Grid>
              <Grid item>
                <TextField
                  type="number"
                  id="input-with-icon-grid"
                  label="price"
                  value={price}
                  onChange={handleChangePrice}
                />
              </Grid>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">available</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder="available"
                  value={available}
                  onChange={handleChangeAvailable}
                >
                  <MenuItem value="en stock">en stock</MenuItem>
                  <MenuItem value="rupture de stock">rupture de stock</MenuItem>
                </Select>
              </FormControl>

              <Grid item>
                <TextField
                  type="number"
                  id="input-with-icon-grid"
                  label="warranty"
                  value={warranty}
                  onChange={handleChangeWarranty}
                />
              </Grid>
              <Button
                variant="contained"
                onClick={event => {
                  event.preventDefault();
                  if (
                    name !== "" &&
                    type !== "" &&
                    price !== null &&
                    warranty !== null
                  ) {
                    updateProduct();
                    handleChangeForm();
                  } else {
                    alert(
                      "Vous devez renseigner tous les champs pour ajouter un produit."
                    );
                  }
                }}
              >
                Modifier
              </Button>

              <Button
                color="secondary"
                onClick={() => {
                  history.goBack();
                }}
              >
                Retour
              </Button>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
