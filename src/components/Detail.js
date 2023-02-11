import { Link, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Detail.css';
import Comment from './Comment';
import { getEvent, updateEvent } from '../mockAPI/mockAPI';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import DetailLocation from './DetailLocation';

export default function Detail() {
	const iniEvtState = {
		"createdAt": "",
		"eventTime": "",
		"Location": "",
		"eventName": "",
		"comments": [],
		"id": "1"
	}

	const [eventDetail, setEventDetail] = useState(iniEvtState);
	const [image, setImage] = useState("");
	const [comments, setComments] = useState([]);
	// read event id from url
	const location = useLocation();
	const eventID = location.pathname.split("/")[2];

	function formatDate(date) {
		var d = new Date(date),
			month = d.toLocaleString('default', { month: 'short' }),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2)
			month = '0' + month;
		if (day.length < 2)
			day = '0' + day;

		return [month, day, year].join(' ');
	}
	function formatTime(date) {
		var d = new Date(date);
		return d.toLocaleTimeString();
	}
	const handleClick = async () => {
		const text = document.getElementById("newComment").value;
		const newComment = {
			"createdAt": new Date(),
			"pic": "/" + image,
			text,
		}
		console.log(newComment);
		const newComments = [newComment, ...comments];
		// console.log(newComments);
		await updateEvent(eventID, { "comments": newComments });
		setComments(newComments);
		setImage("");
	}
	useEffect(() => {
		async function fetchData() {
			const eventDetail_ = await getEvent(eventID);
			if (eventDetail_ !== undefined) {
				// setEventDetail(eventDetail => ({
				// 	...eventDetail,
				// 	...eventDetail_
				// }));
				setEventDetail(eventDetail_);
				setComments(eventDetail_.comments);
			}

		}
		fetchData();
	}, [])
	// const time = eventDetail.eventTime;
	// const loc = eventDetail.Location;
	// const name = eventDetail.eventName;
	// const comments = eventDetail.comments;
	// const description = eventDetail.eventDescription;

	return (
		<div>
			<Link to='/'>
				<ArrowBackIcon />
			</Link>
			<div className='detail-container'>
				<div className='detail-left'>
					<div className='detail-details'>{"Details"}</div>

					<div className='detail-date'>{"Date: "}</div>
					<div className='detail-time'>{formatDate(eventDetail.eventTime)}</div>

					<div className='detail-date'>{"Start Time: "}</div>
					<div className='detail-time'>{formatTime(eventDetail.eventTime)}</div>

					<div className='detail-date'>{"Event Categories: "}</div>
					<div className='detail-title'>{eventDetail.eventName}</div>
					<div className='detail-desc'>{eventDetail.eventDescription}</div>

					<div className='detail-details'>{"Venue"}</div>
					<div className='detail-desc'>{loc}</div>



					<hr class="hr-edge-weak" />
					<div>
						<div>
							<div className='detail-details'>{"Comment"}</div>
						</div>
						{
							comments.map((comment, k) => (
								<Comment key={k} comment={comment} />
							))
						}
					</div>
				</div>
				<div className='detail-right'>
					<div className='detail-location'>{eventDetail.Location}</div>
					<div className='upload'>
						<FormControl id="newComment" onSubmit={handleClick}>
							<FormLabel>Your comment</FormLabel>
							<Textarea
								placeholder="Type something here…"
								minRows={3}
								endDecorator={
									<Box type="submit"
										sx={{
											display: 'flex',
											gap: 'var(--Textarea-paddingBlock)',
											pt: 'var(--Textarea-paddingBlock)',
											borderTop: '1px solid',
											borderColor: 'divider',
											flex: 'auto',
										}}
									>
										<input
											// style={{ display: 'none' }}
											type="file"
											id="file"
											accept=".png,.jpeg,.jpg"
											onChange={(e) => setImage(e.target.files[0].name)}
										/>
										<Button sx={{ ml: 'auto' }} onClick={handleClick}>Send</Button>
									</Box>
								}
								sx={{
									minWidth: 300,
								}}
							/>

						</FormControl>
					</div>
					<DetailLocation loc={eventDetail.Location} />
					<div className='detail-location'>{eventDetail.Location}</div>
				</div>
			</div>
		</div>

	)
}