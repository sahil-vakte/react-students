import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const PostData = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setRowData(data));
  }, []);

  const columnDefs = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Title" },
    { field: "price", headerName: "Price" },
    { field: "description", headerName: "Description" },
  ];

  const defaultColDef = useMemo(()=>({
    sortable:true,
    filter:"agTextColumnFilter",
    resizable:true
  }))

  // const filterTable = useCallback(()=>{
  //   gridRef.current.api.setQuickFilter(
  //     document.getElementById("filter-text-box").value
  //   )
  // },[])

  return (
    <div>
  <div>

<input
  type="text"
/>

  </div>
    
    <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
      <AgGridReact 
      rowData={rowData} 
      columnDefs={columnDefs} 
      defaultColDef={defaultColDef}

      />


      </div>
    </div>
  );
};

export default PostData;
