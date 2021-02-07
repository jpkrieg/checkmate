import { Link } from 'react-router-dom'

const Footer: React.FC = ({}) =>
{
	return (
		<footer>
			<p>Copyright &copy; 2021 John Paul Krieg</p>
			<Link to="/about">About</Link>
		</footer>
	);
}

export default Footer;