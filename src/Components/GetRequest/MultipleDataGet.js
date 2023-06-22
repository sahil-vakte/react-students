import axios from "axios";
import React, { useEffect, useState } from "react";

const MultipleDataGet = () => {
  const [multiDataGet, setmultiDataGet] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/`)
      .then((response) => {
        setmultiDataGet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("multiDataGet", multiDataGet);

  return (
    <div style={{ textAlign: "center" }}>
      {multiDataGet &&
        multiDataGet?.map((index) => (
          <div>
            <div>
              <h2>ID - {index.id}</h2>
            </div>
            <div>
              <h2>Title - {index.title}</h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MultipleDataGet;
