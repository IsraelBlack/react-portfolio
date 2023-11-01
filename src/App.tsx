import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import MoreAbout from './components/MoreAbout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Nav />
			<About />
			<MoreAbout />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
