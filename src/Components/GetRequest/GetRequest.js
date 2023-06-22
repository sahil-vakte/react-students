import React, { useEffect, useState } from "react";
import axios from "axios";
import Apiservice from "../../Services/Apiservice";

const GetRequest = () => {
  const [GetData, setGetData] = useState("");
  const [GetDataNew, setGetDataNew] = useState("");

  useEffect(() => {
    Apiservice
      .get(`/todos/1/`)
      .then((response) => {
        setGetData(response.data[3]);
      });
  }, []);

  console.log("GetData", GetData);

  return (
    <div>
      <div style={{ padding: "100px" }}>
        <h3>3</h3>
        <h2>Id</h2>
        <p>{GetData.id}</p>

        <h2>Title</h2>
        <p>{GetData.title}</p>

        <h2>User Id</h2>
        <p>{GetData.userId}</p>
      </div>
      <div style={{ padding: "100px" }}>
        <h3>6</h3>
        <h2>Id</h2>
        <p>{GetDataNew.id}</p>

        <h2>Title</h2>
        <p>{GetDataNew.title}</p>

        <h2>User Id</h2>
        <p>{GetDataNew.userId}</p>
      </div>
    </div>
  );
};

export default GetRequest;
