// Data
import { projects } from '../cv-data';

const Projects = () => {
	if (!projects) return;
	const projectsList = projects.map((project) => (
		<div className='project' key={project.title}>
			<h3>
				<a href={project.url} className='link' target='_blank' rel='noopener'>
					{project.title}
				</a>
			</h3>

			<div className='tech__stack'>
				{project.techStack.map((tech) => (
					<span className='tech' key={tech}>
						{tech}
					</span>
				))}
			</div>
			<p className='project__description'>{project.description}</p>
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
