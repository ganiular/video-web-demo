import { useState } from "react";
import CommentForm from "../Form/Form";
import { VideoComment } from "./VideoComment";
import './VideoComments.scss';
import axios from "axios";

function VideoComments(props) {
    const [comments, setComments] = useState(props.comments);

    const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';
    const apiKey = '51352841-4603-45f1-bd56-9f0fd6dd9391'

    const postComment = async (comment) => {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const res = await axios.post(`${baseUrl}videos/${props.videoId}/comments?api_key=${apiKey}`, comment, { headers });
            setComments(prev => [res.data, ...prev])
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="comments">
            <h2>{comments.length} Comments</h2>
            <CommentForm postComment={postComment} />
            <div className="divider"></div>
            {comments.map(comment => <VideoComment comment={comment} key={comment.id} />)}
        </div>
    )
}

export default VideoComments;