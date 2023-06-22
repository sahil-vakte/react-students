import React, { useState } from "react";
import ComponentTwo from "./ComponentTwo";

const ComponentOne = () => {
  const [dataFromCP, setdataFromCP] = useState("");
  const handleData = (data) => {
    setdataFromCP(data);
    console.log(data);
  };
  return (
    <div>
      <div>
        ComponentOne
        <div>
          <h1>{dataFromCP}</h1>
        </div>
      </div>
      <div>
        <ComponentTwo onData={handleData} />
      </div>
    </div>
  );
};

export default ComponentOne;
