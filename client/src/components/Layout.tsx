import React from 'react';

import Customers, { Customer } from './Customers'
import Footer from './Footer'

type LayoutProps = {
	customers: Customer[],
}

const Layout: React.FC<LayoutProps> = ({customers}) =>
{
	return (
		<>
			<Customers customers={customers} />
			<Footer />
		</>
	);
};

export default Layout;