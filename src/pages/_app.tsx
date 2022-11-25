import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStore } from 'src/components/store/index'
import 'src/styles/globals.css'

const App = ({ Component, pageProps }) => {
	return (
		<GlobalStore>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</GlobalStore>
	)
}

export default App
