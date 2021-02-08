import './Footer.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = ({}) =>
{
	return (
		<footer id="footer">
			<span>
				<Link to="/about">About</Link>
			</span>
		</footer>
	);
}

export default Footer;