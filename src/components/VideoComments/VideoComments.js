import { useEffect, useState } from "react";
import CommentForm from "../Form/CommentForm";
import { VideoComment } from "./VideoComment";
import './VideoComments.scss';
import axios from "axios";
import Divider from "../Divider/Divier";

function VideoComments(props) {
    const [comments, setComments] = useState(props.comments);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const postComment = async (comment) => {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const res = await axios.post(`${baseUrl}videos/${props.videoId}/comments`, comment, { headers });
            setComments(prev => [res.data, ...prev])
        } catch (error) {
            console.error(error);
        }
    }

    const deleteComment = async (commentId) => {
        try {
            await axios.delete(`${baseUrl}videos/${props.videoId}/comments/${commentId}`);
            setComments(prev => prev.filter(comment => comment.id !== commentId))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setComments(props.comments)
    }, [props.comments])

    return (
        <div className="comments">
            <h2>{comments.length} Comments</h2>
            <CommentForm postComment={postComment} />

            {/* Divider for visual separation */}
            <Divider />

            {/* Comments List */}
            {comments.length > 0 ? (
                <ul className="comments__list" aria-live="polite">
                    {comments.map(comment => (
                        <VideoComment
                            comment={comment}
                            key={comment.id}
                            deleteComment={deleteComment}
                        />
                    ))}
                </ul>
            ) : (
                <p className="comments__empty">No comments yet. Be the first to join the conversation!</p>
            )}
        </div>
    )
}

export default VideoComments;