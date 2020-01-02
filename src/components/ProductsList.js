import React from "react";
import { useHistory } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const ProductsList = ({ products, deleteOne }) => {
  const history = useHistory();

  return (
    <List component="nav" aria-label="main mailbox folders">
      {products.map((product, index) => {
        return (
          <div>
            <ListItem button key={product._id}>
              <ListItemText primary={product.name} className="item-text" />

              <ListItemText primary={product.type} className="item-text" />

              <ListItemText
                primary={product.price + " €"}
                className="item-text"
              />

              <ListItemText
                primary={
                  product.available === false ? "rupture de stock" : "en stock"
                }
                className="item-text"
              />

              <ListItemText
                primary={"garanti " + product.warranty_years + " an(s)"}
                className="item-text"
              />
              <div className="buttons">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    history.push(`/product/${product._id}`);
                  }}
                >
                  Modifier
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    deleteOne(product._id);
                  }}
                >
                  Supprimer
                </Button>
              </div>
            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );
};

export default ProductsList;
