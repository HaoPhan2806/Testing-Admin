import "./productList.css";
import TableChartIcon from '@mui/icons-material/TableChart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListImg">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "Stock", headerName: "Stock", width: 200, 
    renderCell: (params) => {
      return (
        <div className="productListImg">
          {params.row.stock}
        </div>
      );
    }, },
    {
      field: "Status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productListImg">
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "Price",
      headerName: "Price",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productListImg">
            {params.row.price}
          </div>
        );
      },
    },
    {
      field: "",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <TableChartIcon
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
