import React from "react";
import Button from "@material-ui/core/Button";

const UpdateButton = ({ submit }) => {
  return (
    <Button
      variant="contained"
      onClick={event => {
        event.preventDefault();
        submit();
      }}
    >
      Modifier
    </Button>
  );
};

export default UpdateButton;
