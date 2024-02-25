import CommentForm from "../Form/Form";
import { VideoComment } from "./VideoComment";
import './VideoComments.scss';

function VideoComments({ comments }) {
    return (
        <div className="comments">
            <h2>{comments.length} Comments</h2>
            <CommentForm />
            <div className="divider"></div>
            {comments.map(comment => <VideoComment comment={comment} key={comment.id} />)}
        </div>
    )
}

export default VideoComments;