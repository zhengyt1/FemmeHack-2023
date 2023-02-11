import './Post.css';

export default function Post(props) {
	const {
		eventName,
	} = props.event;
	const eventTime = props.eventTime;
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