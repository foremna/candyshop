import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const GoBack = () => {
  const hist = useHistory();
  return (
    <button className="btn btn-outline-primary" onClick={() => hist.goBack()}>
      Back
    </button>
  );
};

export default GoBack;
