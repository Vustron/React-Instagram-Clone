// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// chakra-ui imports
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
// css
import './index.css';

// styles
const styles = {
	global: (props) => ({
		body: {
			bg: mode('gray.100', '#000')(props),
			color: mode('gray.800', 'whiteAlpha.900')(props),
		},
	}),
};

// dark or light theme
const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

// extend theme
const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);
