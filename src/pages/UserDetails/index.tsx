import Box from '@mui/material/Box';
import {useQuery} from "react-query";
import {fetchUsers} from "../../services/getUsers";
import {useMemo} from "react";
import {Card, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {useParams} from "react-router-dom";

const StyledTitle = styled(Typography)(() => ({
	color: "primary",
	fontSize: "2rem",
}));

export default function UserDetails() {
	const params = useParams()
	const {data: users} = useQuery('get-users', fetchUsers);

	const user = useMemo(() => {
		return users?.find((user: any) => user.id === Number(params?.id));
	}, [params?.id, users])

	return (
		<>
			<Box sx={{height: 400, width: '100%', textAlign: 'left'}}>
				<StyledTitle color="primary" variant="h3" gutterBottom>
					User Details
				</StyledTitle>
				<Card sx={{p: 4, display: 'grid', gridTemplateColumns: "300px 1fr"}}>
					<Box>
						<img
							src={user?.image}
							width={200}
							height={200}
							alt="Picture of the author"
						/>
					</Box>
					<Box>
						<Typography variant="h5" gutterBottom>
							Name: {user?.name}
						</Typography>
						<Typography variant="h5" gutterBottom>
							Age: {user?.age}
						</Typography>
						<Typography variant="h5" gutterBottom>
							Email: {user?.email}
						</Typography>
						<Typography variant="h5" gutterBottom>
							City: {user?.city}
						</Typography>
					</Box>
				</Card>
			</Box>
		</>
	)
}
