import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {
	return (
		<HelmetProvider>
			<div>
				<Helmet>
					<title>About page</title>
				</Helmet>
				About!!!
			</div>
		</HelmetProvider>
	);
};

export default About;