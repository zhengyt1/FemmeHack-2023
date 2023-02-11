import { Link } from 'react-router-dom';
import Post from './Post';
import './Display.css';

export default function Display(props) {
	const data = props.data;
	return (
		<div className="display-container">
			<div className='display-title'>Food</div>
			{
				data.map((day, k) => (
					<div className='date-container' key={k}>
						<div className='date'>{day.time}</div>
						{
							day.posts.map((post, k1) => (
								<Link key={k1} to={`/detail/${post.id}`}>
									<Post post={post}></Post>
								</Link>
							))
						}
					</div>
				))
			}
		</div>
	)
}