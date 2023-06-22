import axios from "axios";
import React, { useEffect, useState } from "react";

const ListGetRequest = () => {
  const [GetData, setGetData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/`)
      .then((response) => {
        setGetData(response.data);
      });
  }, []);

  console.log("GetData", GetData);

  return (
    <div style={{ padding: "50px" }}>
      {GetData &&
        GetData?.map((index) => (
          <div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <label>ID : - </label>
              <h2>{index.id}</h2>
            </div>

            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <label>Title : - </label>
              <h2>{index.title}</h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListGetRequest;
