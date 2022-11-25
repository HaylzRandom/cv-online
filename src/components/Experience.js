// Data
import { experience } from '../cv-data';

const Experience = () => {
	const experienceList = experience.map((exp) => (
		<div className='experience' key={exp.company}>
			<h3>{exp.company}</h3>
			<div className='exp'>
				<span className='exp__info'>{exp.position}</span>
				<span className='line' aria-hidden='true'>
					|
				</span>
				<span className='exp__info date'>
					{exp.start} - {exp.end}
				</span>
			</div>

			<ul className='exp__details'>
				{exp.responsibilities.map((resp) => (
					<li className='detail' key={resp}>
						{resp}
					</li>
				))}
			</ul>
		</div>
	));

	return (
		<section className='workExperience'>
			<h2>Work Experience</h2>
			{experienceList}
		</section>
	);
};
export default Experience;
