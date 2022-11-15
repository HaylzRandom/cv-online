// Data
import { experience } from '../cv-data';

const Experience = () => {
	const experienceList = experience.map((exp) => (
		<div className='experience' key={exp.name}>
			<h3>{exp.name}</h3>
			<div className='exp'>
				<span className='exp-info'>{exp.position}</span>
				<span className='line' aria-hidden='true'>
					|
				</span>
				<span className='exp-info date'>
					{exp.start} - {exp.end}
				</span>
			</div>

			<ul className='exp-details'>
				{exp.responsibilities.map((resp) => (
					<li className='detail' key={resp}>
						{resp}
					</li>
				))}
			</ul>
		</div>
	));

	return (
		<section className='work-experience'>
			<h2>Work Experience</h2>
			{experienceList}
		</section>
	);
};
export default Experience;
