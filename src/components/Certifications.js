import { nanoid } from 'nanoid';

// Data
import { certifications } from '../cv-data';

const Certifications = () => {
	const certificationList = certifications.map((certification) => (
		<div className='certificate' key={nanoid()}>
			<h3>{certification.name}</h3>
			<div className='cert__detail'>
				<span className='cert__info'>{certification.school}</span>
				<div className='tech__stack'>
					{certification.techStack.map((tech) => (
						<span className='tech' key={tech}>
							{tech}
						</span>
					))}
				</div>
				{/* <span className='cert__desc'>{certification.description}</span> */}
			</div>
		</div>
	));

	return (
		<section className='certifications'>
			<h2>Certifications</h2>
			{certificationList}
		</section>
	);
};
export default Certifications;
