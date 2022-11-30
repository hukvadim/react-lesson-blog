import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contacts = () => {
	return (
		<HelmetProvider>
			<div>
				<Helmet>
					<title>Contacts page</title>
				</Helmet>
				Contacts!!!
			</div>
		</HelmetProvider>
	);
};

export default Contacts;