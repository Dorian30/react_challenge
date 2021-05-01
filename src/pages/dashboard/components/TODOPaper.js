import React from "react";
import {DataGrid} from '@material-ui/data-grid';

import useTodosList from '../../../hooks/useTodosList';

const columns = [
	{field: 'id', headerName: 'ID', width: 70},
	{field: 'title', headerName: 'Title', width: 130},
	{field: 'completed', headerName: 'Completed', width: 130},
];

const TODOPaper = () => {
  const { data: todos = [] } = useTodosList();

	return <DataGrid rows={todos} columns={columns} pageSize={10} checkboxSelection
					 onSelectionChange={(selection) => {

					 }
	}/>
}

export default TODOPaper
