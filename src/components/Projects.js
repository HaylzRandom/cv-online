// Data
import { projects } from '../cv-data';

const Projects = () => {
	const projectsList = projects.map((project) => (
		<div className='project' key={project.title}>
			<h3>
				<a href={project.url}>{project.title}</a>
			</h3>

			<div className='tech-stack'>
				{project.techStack.map((tech) => (
					<span className='tech' key={tech}>
						{tech}
					</span>
				))}
			</div>

			<p>{project.description}</p>
		</div>
	));

	return (
		<section aria-labelledby='projects'>
			<h2>Side Projects</h2>
			{projectsList}
		</section>
	);
};
export default Projects;
