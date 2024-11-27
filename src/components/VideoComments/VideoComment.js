import { formatDateAgo } from "../../utils/time";
import Avater from "../Avater/Avater";
import Divider from "../Divider/Divier";

export function VideoComment({ comment, deleteComment }) {
    return (
        <>
            <l1 className="comment">
                <Avater />
                <div className="comment__context">
                    <header className="comment__head">
                        <h3 className="comment__author">{comment.name}</h3>
                        <div className="comment__date">{formatDateAgo(comment.timestamp)}</div>
                    </header>
                    <p className="comment__body">{comment.comment}</p>
                    <footer className="comment__actions">
                        <button className="comment__button" onClick={() => deleteComment(comment.id)}
                            aria-label={`Delete comment by ${comment.name}`}>DELETE</button>
                    </footer>
                </div>
            </l1>
            <Divider />
        </>
    );
}
