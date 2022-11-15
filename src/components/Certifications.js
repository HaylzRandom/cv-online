import { nanoid } from 'nanoid';

// Data
import { certifications } from '../cv-data';

const Certifications = () => {
	const certificationList = certifications.map((certification) => (
		<div className='certificate' key={nanoid()}>
			<h3>{certification.name}</h3>
			<div className='cert-detail'>
				<span className='cert-info'>{certification.school}</span>
				<span className='line' aria-hidden='true'>
					|
				</span>
				<span className='cert-info date'>{certification.date}</span>
				<span className='cert-desc'>{certification.description}</span>
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
