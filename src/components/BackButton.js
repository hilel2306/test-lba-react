import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();

  return (
    <Button
      color="secondary"
      onClick={() => {
        history.goBack();
      }}
    >
      Retour
    </Button>
  );
};

export default BackButton;
