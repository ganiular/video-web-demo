import { useEffect, useState } from "react";
import CommentForm from "../Form/Form";
import { VideoComment } from "./VideoComment";
import './VideoComments.scss';
import axios from "axios";

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
            <div className="divider"></div>
            {comments.map(comment => <VideoComment comment={comment} key={comment.id} deleteComment={deleteComment} />)}
        </div>
    )
}

export default VideoComments;