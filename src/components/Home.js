import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from './Post';
import Report from './Report';
import './Home.css';

export default function Home() {
	const [data, setData] = useState([]);
	useEffect(() => {
		
		const tmp = [
			{
				"time": "Feb 6th",
				"posts": [
					{
						"id": "0",
						"time": "12 PM, Feb 6th",
						"title": "miao",
						"description": "miaomiaomiao",
					},
				],
			},
			{
				"time": "Feb 6th",
				"posts": [
					{
						"id": "1",
						"time": "12 PM, Feb 6th",
						"title": "miao",
						"description": "miaomiaomiao",
					},
				],
			},
			{
				"time": "Feb 7th",
				"posts": [
					{
						"id": "2",
						"time": "12 PM, Feb 7th",
						"title": "miao",
						"description": "miaomiaomiao",
					},
				],
			},
		]
		setData(tmp);
	}, [])
	return (
		<div className="home-container">
			<div className="home-left">
				<div className='home-title'>Food</div>
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
			<div className="home-right">
				<Report />
			</div>
		</div>
	)
}