import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Blog = () => {
	return (
		<HelmetProvider>
			<div>
				<Helmet>
					<title>Blog page</title>
				</Helmet>
				Blog!!!
			</div>
		</HelmetProvider>
	);
};

export default Blog;