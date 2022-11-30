import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
	return (
		<HelmetProvider>
			<div>
				<Helmet>
					<title>Home page</title>
				</Helmet>
				Home!!!
			</div>
		</HelmetProvider>
	);
};

export default Home;