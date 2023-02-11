import './Post.css';

export default function Post(props) {
	const {
		time,
		title,
	} = props.post;
	return (
		<div className="post-container">
			<img className="post-pic" alt="pic" src="/logo192.png" />
			<div className="post-description">
				<div className="title">{time}</div>
				<div className="title">{title}</div>
			</div>
		</div>
	)
}