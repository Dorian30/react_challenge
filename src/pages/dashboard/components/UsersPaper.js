import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import useUsers from "../../../hooks/useUsers";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Username", width: 130 },
  { field: "website", headerName: "Website", width: 130 },
  {
    field: "company",
    headerName: "Catchphrase",
    width: 130,
    valueGetter: row => row.data.company?.catchPhrase || "N/A",
  },
];

const UsersPaper = () => {
  const { data: users = [] } = useUsers();

  return (
    <DataGrid
      rows={users}
      columns={columns}
      pageSize={10}
      checkboxSelection
    />
  );
};

export default UsersPaper;
