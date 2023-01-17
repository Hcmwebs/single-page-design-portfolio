import React from 'react'
import { Header, MainContent, Footer } from './Components'
import { GlobalStyles } from './Styles'
const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

export default App
