import { Link, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Detail.css';
import Comment from './Comment';
import { getEvent } from '../mockAPI/mockAPI';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Detail() {
	const iniEvtState = {
		"createdAt": "2023-02-10T21:12:34.573Z",
		"eventTime": "2000-08-09T02:12:03.148Z",
		"Location": "Location 1",
		"eventName": "eventName 1",
		"comments": [],
		"id": "122"
	}

	const [eventDetail, setEventDetail] = useState(iniEvtState);
	// read event id from url
	const location = useLocation();
	const eventID = location.pathname.split("/")[2];

	useEffect(() => {
		async function fetchData() {
			const eventDetail_ = await getEvent(eventID);
			console.log(eventDetail_);

			if (eventDetail_ !== undefined) {
				setEventDetail(eventDetail => ({
					...eventDetail,
					...eventDetail_
				}));
			}

		}
		fetchData();
	}, [])
	const time = eventDetail.eventTime;
	const loc = eventDetail.Location;
	const name = eventDetail.eventName;
	const comments = eventDetail.comments;
	const description = eventDetail.eventDescription;

	return (
		<div>
			<Link to='/'>
				<ArrowBackIcon />
			</Link>
			<div className='detail-container'>
				<div className='detail-left'>
					<div className='detail-title'>{name}</div>
					<div className='detail-time'>{time}</div>
					<div className='detail-desc'>{description}</div>
					<div>
						{
							comments.map((comment, k) => (
								<Comment comment={comment} />
							))
						}
					</div>
				</div>
				<div className='detail-right'>
					<div className='detail-location'>{loc}</div>
				</div>
			</div>
		</div>

	)
}