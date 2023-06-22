import axios from "axios";
import React, { useEffect, useState } from "react";
import Apiservice from "../../Services/Apiservice";

const SingleGetRequest = () => {
  const [getDataVariable, setgetDataVariable] = useState("");
  const [ID, setID] = useState("15");
  const TODO = "todos";
  //   const ID = "15";
  console.log("ID", ID);

  useEffect(() => {
    Apiservice.get(`/todos/1/`)
      .then((response) => {
        setgetDataVariable(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [ID, TODO]);

  //   console.log("getDataVariable", getDataVariable);

  const APIone = `https://jsonplaceholder.typicode.com/todos/`;
  const APItwo = `https://jsonplaceholder.typicode.com/todos/1/`;

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input type="number" onChange={(e) => setID(e.target.value)} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <h1>ID == </h1>
        <p>{getDataVariable.id}</p>
      </div>

      <div>
        <h1>Title</h1>
        <p>{getDataVariable.title}</p>
      </div>
    </div>
  );
};

export default SingleGetRequest;
