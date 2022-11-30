import React from 'react';
import { useParams } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';


const generatePage = page => {

	const component = () => require('./pages/'+page).default;

	try {
		return React.createElement(component());
	} catch (err) {
		return <PageNotFound />;
	}
}


const PageRender = () => {

    const { page } = useParams();

    return generatePage(page)
}

export default PageRender




// const PageRenderer = () => {
// 	const {
// 		params: { page }
// 	} = useMatch();

// 	// return generatePage(page);
// };

// export default PageRenderer;