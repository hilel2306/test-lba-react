import React from "react";
import BackButton from "../components/BackButton";
import UpdateButton from "../components/UpdateButton";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const UpdateForm = ({
  handleChangeName,
  handleChangeType,
  handleChangePrice,
  handleChangeAvailable,
  handleChangeWarranty,
  updateProduct,
  handleChangeForm,
  name,
  type,
  price,
  available,
  warranty
}) => {
  const classes = useStyles();
  const submit = () => {
    if (name !== "" && type !== "" && price !== null && warranty !== null) {
      updateProduct();
      handleChangeForm();
    } else {
      alert("Vous devez renseigner tous les champs pour modifier le produit.");
    }
  };

  return (
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
        <UpdateButton submit={submit} />

        <BackButton />
      </Grid>
    </div>
  );
};

export default UpdateForm;
