import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Detail.css';
import { getEvent } from '../mockAPI/mockAPI';
import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Detail() {
	const iniEvtState = {
		"createdAt": "2023-02-10T21:12:34.573Z",
		"eventTime": "2041-08-09T02:12:03.148Z",
		"Location": "Location 1",
		"eventName": "eventName 1",
		"comments": [],
		"id": "122"
	}
	const [eventDetail, setEventDetail] = useState(iniEvtState);
	const eventID = "1";

	useEffect(() => {
		async function fetchData() {
			const eventDetail_ = await getEvent(eventID);
			console.log(eventDetail_);

			if (eventDetail_ !== undefined){
				setEventDetail(eventDetail=>({
					...eventDetail,
					...eventDetail_
				}));
				
				
			}
			
		}
		fetchData();
		
	}
	,[])
	const time = eventDetail.eventTime;
	const loc = eventDetail.Location;
	const name = eventDetail.eventName;
	console.log(name);
	const com = eventDetail.comments;
	const description = eventDetail.eventDescription;
	return (
		<div>
			<Link to='/'>
				<ArrowBackIcon />
			</Link>
			<div className='detail-container'>
				<div className='detail-left'>
					<div className='detail-title'>{name}</div>
					<div className='detail-desc'>{description}</div>
				</div>
				<div className='detail-right'>
					mao
				</div>
			</div>
		</div>

	)
}