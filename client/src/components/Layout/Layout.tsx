import React from 'react';

import './Layout.css'

import Footer from '../Footer/Footer'
import Board from '../Board/Board'

const Layout: React.FC = ({}) =>
{
	return (
		<>
			{/* temporary debug panel */}
			<div>
				<textarea className="textarea">

				</textarea>
			</div>
			<Board />
			<Footer />
		</>
	);
};

export default Layout;