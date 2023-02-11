import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from './Post';
import Report from './Report';
import './Home.css';
import { getEvents } from '../mockAPI/mockAPI';
import React from 'react'

export default function Home() {
	const [data, setData] = useState([]);

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

	useEffect(() => {
		async function fetchData() {
			var eventsData = await getEvents();
			// One event be like: 
			// { 
			// 	"createdAt": "2023-02-10T21:12:34.573Z",
			// 	"eventTime": "2041-08-09T02:12:03.148Z",
			// 	"Location": "Location 1",
			// 	"eventName": "eventName 1",
			// 	"comments": [],
			// 	"id": "1"
			//   },

			// Transfer array to dictionary
			const eventsdict = eventsData.reduce((eventsdict, event) => {
				const eventDate = formatDate(event.eventTime);
				if (eventsdict[eventDate] !== undefined)
					eventsdict[eventDate] += event;
				else {
					eventsdict[eventDate] = [event];
				}
				return eventsdict;
			}, {});

			// Transfer dictionary to array
			var dateEventsArray = [];
			for (const [key, value] of Object.entries(eventsdict)) {
				console.log(key, value);
				const dateEvents = {
					"time": key,
					"events": value
				}
				dateEventsArray.push(dateEvents);
			}
			console.log(dateEventsArray);

			if (dateEventsArray !== undefined) {
				dateEventsArray = dateEventsArray.sort(
					(a, b) => (a.events[0].eventTime > b.events[0].eventTime ? 1 : -1),
				);
				console.log(dateEventsArray);
				setData(dateEventsArray);
			}
		}

		fetchData();
		// const tmp = [
		// 	{
		// 		"time": "Feb 6th",
		// 		"posts": [
		// 			{
		// 				"id": "0",
		// 				"time": "12 PM, Feb 6th",
		// 				"title": "miao",
		// 				"description": "miaomiaomiao",
		// 			},
		// 		],
		// 	},
		// 	{
		// 		"time": "Feb 6th",
		// 		"posts": [
		// 			{
		// 				"id": "1",
		// 				"time": "12 PM, Feb 6th",
		// 				"title": "miao",
		// 				"description": "miaomiaomiao",
		// 			},
		// 		],
		// 	},
		// 	{
		// 		"time": "Feb 7th",
		// 		"posts": [
		// 			{
		// 				"id": "2",
		// 				"time": "12 PM, Feb 7th",
		// 				"title": "miao",
		// 				"description": "miaomiaomiao",
		// 			},
		// 		],
		// 	},
		// ]
		// setData(tmp);
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
								day.events.map((event, k1) => (
									<Link key={k1} to={`/detail/${event.id}`}>
										<Post post={event} time={day.time} imgSrc={event.imgSrc}></Post>
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