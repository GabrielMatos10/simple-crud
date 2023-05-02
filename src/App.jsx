import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const App = () => {
	return (
		<Flex
			h="100vh"
			align="center"
			justify="center"
			fontSize="20px"
			fontFamily="poppins"
			backgroundColor='#444444'
		>
			<Box>
				<Button colorScheme="green" mr={10} color="black">
					<Link to='/company-list'>EMPRESAS</Link>
				</Button>
				<Button colorScheme="blue" mr={3} color="black">
				<Link to='/supp-list'>FORNECEDORES</Link>

				</Button>
			</Box>
		</Flex>
	);
};

export default App;