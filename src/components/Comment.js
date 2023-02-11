import './Comment.css';
export default function Comment(props) {
    const {
        pic,
        text,
        createdAt
    } = props.comment;
    const createdTime = new Date(createdAt);
    function formatCommentTime(unformattedDateTime) {
        var date = new Date(unformattedDateTime);
        var dateStr =
            ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
            ("00" + date.getDate()).slice(-2) + "/" +
            date.getFullYear() + " " +
            ("00" + date.getHours()).slice(-2) + ":" +
            ("00" + date.getMinutes()).slice(-2) + ":" +
            ("00" + date.getSeconds()).slice(-2);
        return dateStr;
    }
    return (
        <div className="comment-container">
            {pic !== "" && (
                <img className="comment-pic" src={pic} alt="comment-pic" />
            )}
            <div className="comment-text">
                {text}
            </div>
            <div>
                {formatCommentTime(createdTime)}
            </div>
        </div>
    )
}