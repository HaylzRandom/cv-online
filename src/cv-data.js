const header = {
	cvFile: 'files/HAYLEY_MCC_CV.pdf',
};

const introdution = {
	name: 'Hayley McCafferty',
	position: 'Enthusiastic Frontend Developer',
	location: 'Basingstoke, England',
	email: 'hayley.mcc@gmail.com',
	website: 'haylzrandom.co.uk',
	linkedIn: 'hayleymcc',
	github: 'haylzrandom',
	/* about:
		'Self-motivated frontend developer equipped with strong problem solving skills gained from completing various programming projects as part of Complete React Developer in 2023 Bootcamp and Front-End Engineer courses. Adept at working well in a team while maintaining focus in own self-development.', */
	about:
		'Organised and hard-working employee looking to be a web developer. Looking to take advantage of the web development skills I have learned such since my redunancy. I am always eager to learn something new especially new technologies',
};

const skills = [
	'HTML5',
	'CSS3',
	'JavaScript',
	'React',
	'Redux',
	'Git',
	'Github',
	'T-SQL',
	'Visual Studio Code',
	'Bitbucket',
	'JIRA',
];

const certifications = [
	{
		name: 'Front-End Engineer',
		description:
			'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you the technologies you need to do just that.',
		school: 'CodeAcademy',
		/* date: 'January 2022', */
	},
	{
		name: 'Responsive Web Design',
		description:
			'HTML, HTML5, CSS3, Visual Design, Accessibility, Responsive Web Design Principles, CSS Grid, CSS Flexbox',
		school: 'FreeCodeCamp',
		/* date: 'January 2022', */
	},
	{
		name: 'JavaScript Algorithms and Data Structures',
		description:
			'Fundamentals of JavaScript including variables, arrays, objects, loops and functions. Knolwdge to create algorithms to manipulate strings, factorialize numbers and learn two important programming paradigms OOP and FP.',
		school: 'FreeCodeCamp',
		/* date: 'January 2022', */
	},
	{
		name: 'Front End Development Libraries',
		description:
			'Learn how to style site quickly with Bootstrap, add logic to CSS styles and extend them with SASS. Also learn to create SPAs with React and Redux.',
		school: 'FreeCodeCamp',
		/* date: 'January 2022', */
	},
	{
		name: 'Complete Web Developer in 2023: Zero to Mastery',
		/* description:
			'Bootcamp style course covering topics ranging from HTML5, CSS3, JavaScript, React, Redux, Git, Node.js, Express.js and more! All the skills needed to be a Web Developer!', */
		description:
			'Learn to code from scratch and get hired as a Web Developer in 2023. This full-stack coding bootcamp will teach you HTML, CSS, JavaScript, React, Node.js, Machine Learning & more.',
		school: 'ZeroToMastery',
		/* date: 'January 2022', */
	},
	{
		name: 'Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL): Zero to Mastery',
		description:
			'Learn from React.js experts. This is the only React JS tutorial + projects course you need to learn React, build advanced large-scale applications from scratch and get hired as a React Developer in 2023.',
		school: 'ZeroToMastery',
		/* date: 'January 2022', */
	},
];

const projects = [
	{
		title: 'REST Countries API with Colour Theme Picker',
		url: 'https://github.com/HaylzRandom/rest-countries-api',
		techStack: [
			'React',
			'HTML5',
			'CSS3',
			'JavaScript',
			'Axios',
			'React Router',
			'API',
		],
		description:
			'React project that pulls data from REST Countries API and display on website. Users can also search for specific countries by name or by region',
	},
	{
		title: 'MERN Stack - Angeltech Helpdesk System',
		url: 'https://github.com/HaylzRandom/angeltech-frontend',
		techStack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express.js'],
		description:
			'React project that pulls data from REST Countries API and display on website. Users can also search for specific countries by name or by region',
	},
	{
		title: 'Space Tourism Multipage Website',
		url: 'https://github.com/HaylzRandom/space-tourism-multipage-website',
		techStack: ['HTML5', 'CSS3', 'JavaScript'],
		description:
			'Project to build a multipage Space Tourism website utilising different navigation styles, hover states and responsive designs',
	},
];

const education = {
	name: 'University of Stirling',
	course: 'Computing Science BsC',
};

const experience = [
	{
		company: 'Dr Foster (Telstra Health UK)',
		position: 'Operations Engineer',
		start: '2016',
		end: '2022',
		responsibilities: [
			'Created and maintained appropriate levels of process documentation, production data schedules and also relayed internal communcations about data processing activity to upper management.',
			'Maintained in-depth knowledge of data, processes and transformations with an emphasis on providing support, guidance and onboarding to customers.',
			'Maintained ownership of the configuration management process for data processing while actively contributing to the evolution of standards and processes.',
			'Maintained data asset register and affliated maintenance routines to comply with ISO 27001 certification.',
		],
	},
	{
		company: 'StoreFeeder',
		position: 'Web Developer - 2nd Line Support',
		start: '2016',
		end: '2016',
		responsibilities: [
			'Improved eCommerce web application with mentorship from senior developers.',
			'Diagnosed, resolved and performed RCA on issues relating to web applications and attached database systems.',
		],
	},
	{
		company: 'Boots UK (Walgreens Boots Alliance)',
		position: 'Technical Analyst',
		start: '2013',
		end: '2015',
		responsibilities: [
			'Developed solutions for customers using SharePoint Online 2013 platform.',
			'Maintained company wide SharePoint Hybrid platform and provided on-call support for serious issues.',
			'Perfomed and co-ordinated RCA with team based in India. ',
			'Main point of contact for co-ordination of work on support and projects between Nottingham and India.',
			'Provided mentorship for junior apprentice on the team.',
		],
	},
];

export {
	header,
	introdution,
	skills,
	certifications,
	projects,
	education,
	experience,
};
