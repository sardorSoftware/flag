
import './App.css';
import About from './components/about/About'
import Header from './components/header/Header';
import Home from './components/home/Home';
About
const App = () => {
	return (
		<>
			<Header />

			<main className='main'>
				<Home />
				<About />
			</main>
		</>
	)
}
export default App
