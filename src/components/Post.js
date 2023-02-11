import './Post.css';
import React from 'react'

export default function Post(props) {
	const {
		eventName,
	} = props.event;
	const eventTime = props.time;
	return (
		<div className="post-container">
			<img className="post-pic" alt="pic" src="/logo192.png" />
			<div className="post-description">
				<div className="title">{eventTime}</div>
				<div className="title">{eventName}</div>
			</div>
		</div>
	)
}