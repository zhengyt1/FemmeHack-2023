import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Detail.css';
import Comment from './Comment';
import { useEffect, useState } from 'react';

export default function Detail() {
	const [comments, setComments] = useState([]);
	// const [eventTime, setventTime] = useState("");
	const comments_ = [
		{
			"createdAt": "2023-02-11T13:21:16.015Z",
			"pic": "",
			"event": "event 1",
			"text": "Tempora delectus optio.",
			"id": "1"
		},
		{
			"createdAt": "2023-02-11T08:25:49.116Z",
			"pic": "",
			"event": "event 2",
			"text": "Rem cum cumque voluptatibus deserunt libero cum atque.",
			"id": "2"
		},];
	useEffect(() => {

		if (comments_ !== undefined) {
			setComments(comments_);
		}
	}, [])


	return (
		<div>
			<Link to='/'>
				<ArrowBackIcon />
			</Link>
			<div className='detail-container'>
				<div className='detail-left'>
					xixi
					<div>
						{
							comments.map((comment, k) => (
								<Comment comment={comment} />
							))
						}
					</div>

				</div>
				<div className='detail-right'>
					mao
				</div>
			</div>
		</div>
	)
}