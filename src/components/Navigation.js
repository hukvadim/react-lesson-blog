import React from 'react';
import { Link } from 'react-router-dom'

const navLinks = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Blog',
		path: '/blog'
	},
	{
		title: 'Single',
		path: '/single'
	},
	{
		title: 'About',
		path: '/about'
	},
	{
		title: 'Contacts',
		path: '/contacts'
	}
]



export default function Navigation () {
	return (
		<nav className='nav'>
			<h1>My blog</h1>
			<ul className='list-unstyled'>
				{
					navLinks.map((link, index) => (
						<li key={index}>
							<Link to={link.path}>{link.title}</Link>
						</li>
					))
				}
			</ul>
		</nav>
	);
};
