import { formatDateAgo } from "../../utils/time";
import Avater from "../Avater/Avater";

export function VideoComment({ comment }) {
    return (
        <>
            <div className="comment">
                <Avater />
                <div className="comment__context">
                    <div className="comment__head">
                        <h3 className="comment__author">{comment.name}</h3>
                        <div className="comment__date">{formatDateAgo(comment.timestamp)}</div>
                    </div>
                    <p className="comment__body">{comment.comment}</p>
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
}
