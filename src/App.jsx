import React from 'react'
import { Header, MainContent, Footer } from './Components'
import { GlobalStyles } from './Styles'
const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<MainContent />
			<Footer />
		</>
	)
}

export default App
