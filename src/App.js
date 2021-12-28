import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<Projects />
			<About />
		</div>
	)
}

export default App
