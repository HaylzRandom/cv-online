// Data
import { skills } from '../cv-data';

const Skills = () => {
	const skillsList = skills.map((skill) => (
		<li className='skill' key={skill}>
			{skill}
		</li>
	));

	return (
		<section className='skills' aria-labelledby='skills'>
			<h2 id='skills'>Skills</h2>
			<ul>{skillsList}</ul>
		</section>
	);
};
export default Skills;
