import './Post.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function Post(props) {
	const {
		time,
		Status,
		Location,
		imgSrc
	} = props.post;
	const statusClass = Status === "Opening" ? "post-status-open" : "post-status-closed";
	return (
		<div className="post-container">
			<img className="post-pic" alt="pic" src={imgSrc} />
			<div className="post-description">

				<div className="post-status">
				<div className={`status ${statusClass}`} >{Status}</div>
				</div>
				<div className="post-location">
					<div className="Location">{Location}</div>
				</div>
				<div className="post-time">
					<div className="time">{time}</div>
				</div>
				
			</div>
			<div className="post-arrow">
				<FontAwesomeIcon icon= {faLocationArrow} /> 
			</div>
		</div>
	)
}