// Data
import { education } from '../cv-data';

const Education = () => {
	return (
		<section aria-labelledby='education'>
			<h2 id='education'>Education</h2>
			<div className='school'>
				<h3>{education.name}</h3>
				<div className='edu'>
					<span className='edu-info'>{education.course}</span>
				</div>
			</div>
		</section>
	);
};
export default Education;
