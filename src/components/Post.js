import './Post.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function Post(props) {
	const {
		createdAt,
		eventTime,
		Status,
		eventName,
		Location,

	} = props.post;
	function formatTime(date) {
		var d = new Date(date);

		var h, m;
		if (d.getHours() < 10) {
			h = d.getHours().toString();
			h = "0" + h;
		}
		else {
			h = d.getHours().toString();
		}
		if (d.getMinutes() < 10) {
			m = "0" + d.getMinutes().toString();
		}
		else {
			m = d.getMinutes().toString();
		}
		return h + ":" + m;
	}
	const timeStr = formatTime(eventTime);
	var locs = require('../data/locations.json');

	locs = locs.filter(loc => loc.name.includes(Location));
	const pic = locs.length > 0 ? locs[0].imgSrc : "https://source.unsplash.com/random?Architecture";
	// const pic = 
	const statusClass = Status === "Opening" ? "post-status-open" : "post-status-closed";
	return (
		<div className="post-container" >
			<img className="post-pic" alt="pic" src={pic} />
			<div className="post-description">

				<div className="post-status">
					<div className={`status ${statusClass}`} >{Status}</div>
				</div>
				<div className="post-location">
					<div className="Location">{eventName}</div>
				</div>
				<div className="post-location">
					<div className="Location">{Location}</div>
				</div>
				<div className="post-time">
					<div className="eventTime">{timeStr}</div>
				</div>

			</div>
			<div className="post-arrow">
				<FontAwesomeIcon icon={faLocationArrow} />
			</div>
		</div>
	)
}