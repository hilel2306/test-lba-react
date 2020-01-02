import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 1100,
    backgroundColor: theme.palette.background.paper
  }
}));

const ProductToUpdate = ({ product }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button key={product._id}>
          <ListItemText primary={product.name} className="item-text" />

          <ListItemText primary={product.type} className="item-text" />

          <ListItemText primary={product.price + " €"} className="item-text" />

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
        </ListItem>
      </List>
    </div>
  );
};

export default ProductToUpdate;
