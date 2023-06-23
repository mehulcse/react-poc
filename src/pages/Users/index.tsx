import {Box, Link} from '@mui/material';
import {useQuery} from "react-query";
import {fetchUsers} from "../../services/getUsers";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Link as RouterLink} from "react-router-dom";

const columns: GridColDef[] = [
	{
		field: 'id', headerName: 'ID', width: 90, flex: 1,
		renderCell: (params) => (
			<Link component={RouterLink} to={`/user/${params.value}`} sx={{
				fontSize: '0.9rem',
				fontWeight: 600,
				color: 'cornflowerblue'
			}}>
				{params.value}
			</Link>
		)
	},
	{
		field: 'name',
		headerName: 'Name',
		flex: 1,
		renderCell: (params) => (
			<Link component={RouterLink} to={`/user/${params.row.id}`} sx={{
				fontSize: '0.9rem',
				fontWeight: 600,
				color: 'cornflowerblue'
			}}>
				{params.value}
			</Link>
		)
	},
	{
		field: 'age',
		headerName: 'Age',
		flex: 1,
	},
	{
		field: 'email',
		headerName: 'Email',
		flex: 1,
	},
	{
		field: 'city',
		headerName: 'City',
		sortable: false,
		flex: 1,
	},
];


export default function Users() {
	const {data: users} = useQuery('get-users', fetchUsers);

	return (
		<Box sx={{
			padding: '6rem',
			minHeight: '100vh',
			flex: 1,
		}}>
			<Box sx={{height: 400}}>
				<DataGrid
					rows={users || []}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 5,
							},
						},
					}}
					pageSizeOptions={[5]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</Box>
		</Box>
	)
}
