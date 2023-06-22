import React, { useState } from "react";

const ComponentTwo = ({ onData }) => {
  const [data, setdata] = useState("Sahil Vakte");
  onData(data);

  return (
    <div>
      ComponentTwo
      <input
        placeholder="handle data in child Component"
        onChange={(e) => setdata(e.target.value)}
      />
    </div>
  );
};

export default ComponentTwo;
