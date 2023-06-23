import './App.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import theme from "./theme";
import Users from "./pages/Users";
import {QueryClient, QueryClientProvider} from "react-query";
import UserDetails from "./pages/UserDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Users/>,
	},
	{
		path: "/user/:id",
		element: <UserDetails />,
	}
]);

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router}/>
				<CssBaseline/>
			</ThemeProvider>
		</QueryClientProvider>
	)
}

export default App
