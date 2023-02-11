import { Link } from 'react-router-dom';
import Post from './Post';
import './Display.css';

export default function Display(props) {
	const data = props.data;
	return (
		<div className="display-container">
			<header className= "bar-style">
				<img className="display-pic" alt="pic" src='freelunchlogo.png' />
				<h1 style={{ margin: 0, color: "#fff"}}>Welcome to Free Lunch!</h1>
			</header>
			{
				data.map((date, k) => (
					<div className='date-container' key={k}>
						<div className='date'>{date.time}</div>
						{
							date.events.map((event, k1) => (
								<Link key={k1} to={`/detail/${event.id}`} style={{ textDecoration: 'none' }}>
									<Post post={event} eventTime={date.time}></Post>
								</Link>
							))
						}
					</div>
				))
			}
		</div>
	)
}