import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Single = () => {
	return (
		<HelmetProvider>
			<div>
				<Helmet>
					<title>Single page</title>
				</Helmet>
				Single!!!
			</div>
		</HelmetProvider>
	);
};

export default Single;