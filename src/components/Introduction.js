import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas, faHouse } from '@fortawesome/free-solid-svg-icons';

// Data
import { introdution } from '../cv-data';

const Introduction = () => {
	const { name, position, location, email, website, linkedIn, github, about } =
		introdution;
	return (
		<section aria-label='Introduction' className='introduction'>
			<div className='intro'>
				<h2 className='name'>{name}</h2>
				<p className='position'>{position}</p>
				<div className='intro__info'>
					<span className='info'>{location}</span>
					<span className='line' aria-hidden='true'>
						|
					</span>
					<FontAwesomeIcon className='icon' icon={faHouse} />
					<a
						href={`https://${website}`}
						target='_blank'
						rel='noopener'
						className='link'>
						{website}
					</a>
					<span className='line' aria-hidden='true'>
						|
					</span>
					<FontAwesomeIcon className='icon' icon={faLinkedin} />
					<a
						href={`https://linkedin.com/in/${linkedIn}`}
						target='_blank'
						rel='noopener'
						className='link'>
						{linkedIn}
					</a>
					<span className='line' aria-hidden='true'>
						|
					</span>
					<FontAwesomeIcon className='icon' icon={faEnvelope} />
					<a className='link' href={`mailto:${email}`} aria-label='email'>
						{email}
					</a>
				</div>
				<p className='intro__about'>{about}</p>
			</div>
		</section>
	);
};
export default Introduction;
