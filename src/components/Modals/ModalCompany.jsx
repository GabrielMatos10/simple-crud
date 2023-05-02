import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	Box,
	Button,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useState } from "react";


const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
	const [email, setEmail] = useState(dataEdit.email || "");
	const [name, setName] = useState(dataEdit.name || "");
	const [cnpj, setCnpj] = useState(dataEdit.cnpj || "");
	const [cep, setCep] = useState(dataEdit.cep || "");

	const handleSave = () => {
		if (!email || !name || !cnpj || !cep) return;

		if (emailAlreadyExists()) {
			return alert("E-mail já cadastrado!");
		}

		if (Object.keys(dataEdit).length) {
			data[dataEdit.index] = { name, email, cnpj, cep };
		}

		const newDataArray = !Object.keys(dataEdit).length
			? [...(data ? data : []), { name, email, cnpj, cep }]
			: [...(data ? data : [])];

		localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

		setData(newDataArray);

		onClose();
	};

	const emailAlreadyExists = () => {
		if (dataEdit.email !== email && data?.length) {
			return data.find((item) => item.email === email);
		}

		return false;
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Cadastre-se</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl display="flex" flexDir="column" gap={4}>
							<Box>
								<FormLabel>Nome</FormLabel>
								<Input
									type="text"
									placeholder="Digite seu Nome"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Box>
							<Box>
								<FormLabel>E-mail</FormLabel>
								<Input
									type="email"
									placeholder="exemplo@gmail.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Box>
							<Box>
								<FormLabel>CNPJ</FormLabel>
								<Input
									as={InputMask}
									mask="99.999.999/9999-99"
									placeholder="00.000.000/0000-00"
									maskChar={null}
									value={cnpj}
									onChange={(e) => setCnpj(e.target.value)}
								/>
							</Box>
							<Box>
								<FormLabel>CEP</FormLabel>
								<Input
									as={InputMask}
									mask="99999-999"
									placeholder="00000-000" 
									maskChar={null}
									value={cep}
									onChange={(e) => setCep(e.target.value)}
								/>
							</Box>
						</FormControl>
					</ModalBody>
					<ModalFooter justifyContent="start">
						<Button colorScheme="green" mr={3} onClick={handleSave}>
							SALVAR
						</Button>
						<Button colorScheme="red" mr={3} onClick={onClose}>
							CANCELAR
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalComp;
