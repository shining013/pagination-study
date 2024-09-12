import React from "react";
import { useParams } from "react-router";

function ProductComp() {
  const { num } = useParams();
  return (
    <div>
      ProductComp
      <h3>{num}</h3>
    </div>
  );
}

export default ProductComp;
