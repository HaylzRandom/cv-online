// Components
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Introduction />

				<Skills />
				<Projects />
				<Education />
				<Certifications />

				<Experience />
			</main>
		</>
	);
};
export default App;
