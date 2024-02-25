import { formatDate } from "../../utils/time";
import Avater from "../Avater/Avater";
import CommentForm from "../Form/Form";
import './VideoComments.scss';

function VideoComment({ comment }) {
    return (
        <>
            <div className="comment">
                <Avater />
                <div className="comment__context">
                    <div className="comment__head">
                        <h3 className="comment__author">{comment.name}</h3>
                        <div className="comment__date">{formatDate(comment.timestamp)}</div>
                    </div>
                    <p className="comment__body">{comment.comment}</p>
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
}

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