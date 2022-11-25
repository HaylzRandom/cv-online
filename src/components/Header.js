import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Data
import { header } from '../cv-data';

const Header = () => {
	const { cvFile } = header;
	return (
		<header>
			<h1 className='visually-hidden'>Hayley McCafferty's CV</h1>
			<a
				className='download__btn'
				href={`/${cvFile}`}
				target='_blank'
				rel='noopener'>
				<FontAwesomeIcon className='download__logo' icon={faDownload} />
				Download CV
			</a>
		</header>
	);
};
export default Header;
