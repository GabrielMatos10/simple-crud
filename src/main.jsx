import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuppList from './components/SuppList/SuppList'
import CompanyList from './components/CompanyList/CompanyList'
import App from './App'



const home = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
	},
	{
		path: '/supp-list',
		element: <SuppList/>
	},
	{
		path: '/company-list',
		element: <CompanyList/>
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={home} />
		</ChakraProvider>
	</React.StrictMode>
);
