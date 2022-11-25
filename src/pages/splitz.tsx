import React from 'react'
// import Header from '@/components/Header'
import Image from 'next/image'
import ConnectButton from '@/components/NewWallet/ConnectButton'
import Link from 'next/link'
import Modal from '@/components/Modals_Buttons/QuestionsModal'
import Arrow from 'images/Arrow.png'
import Addresses from '@/components/AddressList/Addresses'
import Layout from '@/components/NewWallet/Layout'
import Head from 'next/head'
import { useDisclosure } from '@chakra-ui/react'
import AccountModal from '@/components/NewWallet/AccountModal'

const Split = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const title = 'Ethereum dApps Next.js Boiletplate'
	return (
		<Layout>
			<Head>
				<title>{title}</title>
				<meta name="description" content={title} />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
			</Head>

			<main>
				<h1>
					Welcome to <a href="https://github.com/limcheekin/eth-dapps-nextjs-boiletplate">{title}</a>
				</h1>

				<p>A simple dApps to demo the integration of MetaMask, WalletConnect and Greeter smart contract.</p>

				{
					// Our connect button will only handle opening
				}
				<ConnectButton handleOpenModal={onOpen} />
				{
					// Our Account modal will handle open state & closing
				}
				<AccountModal isOpen={isOpen} onClose={onClose} />
			</main>

			<footer>
				Powered by{' '}
				{process.env.NEXT_PUBLIC_GITHUB_RUN_NUMBER && <div>b{process.env.NEXT_PUBLIC_GITHUB_RUN_NUMBER}</div>}
			</footer>
		</Layout>
	)
}

export default Split
