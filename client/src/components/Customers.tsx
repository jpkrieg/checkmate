import React from 'react';

export interface Customer{
	id: number,
	firstName: string,
	lastName: string
}

type CustomerProps = {
	customers: Customer[];
}

const Customers: React.FC<CustomerProps> = ({customers}) =>
{
	return (
		<ul>
			{customers.map(customer => (
				<li key={customer.id}>{customer.firstName} {customer.lastName}</li>
			))}
		</ul>
	);
};

export default Customers;