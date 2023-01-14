//imporation react
import { BrowserRouter as Router } from 'react-router-dom'
//importation des composants
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//importation des routes
import Routes from './routes'

export default () => {
	return (
		<Router>
			<Navbar />
			<Routes />
			<Footer />
		</Router>
	)
}
