import { Link } from 'react-router-dom';
import Card from '../shared/Card';
function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>About</h1>
				<p>This is a React app to leave feedback. </p>
				<Link to='/'>Back to Home</Link>
			</div>
		</Card>
	);
}

export default AboutPage;
