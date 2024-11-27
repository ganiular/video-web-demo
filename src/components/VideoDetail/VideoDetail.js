import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';
import './VideoDetail.scss';
import { formatDateAgo } from '../../utils/time';
import axios from 'axios';
import { useEffect, useState } from 'react';

function VideoDetail({ data }) {
    const [likes, setLikes] = useState(data.likes);
    const [isLiking, setIsLiking] = useState(false);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    async function handleLike() {
        if (isLiking) return;
        setIsLiking(true);

        try {
            const res = await axios.put(`${baseUrl}videos/${data.id}/likes`);
            console.log(res.data);
            setLikes(res.data.likes);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLiking(false);
        }
    }

    useEffect(() => {
        setLikes(data.likes);
    }, [data.likes])

    return (
        <div className='video-detail'>
            <h1 id='video-title' className="video-detail__title">Tech Trends: {data.title}</h1>
            <div className='divider mobile'></div>
            <div className="video-detail__tile">
                <div className="video-detail__tile-item">
                    <h3 className='video-detail__channel'>By {data.channel}</h3>
                    <div className="video-detail__date">{formatDateAgo(data.timestamp)}</div>
                </div>
                <div className="video-detail__tile-item">
                    <div><img src={viewsIcon} alt='Views' /> {data.views}</div>
                    <button className='video-detail__likes' onClick={handleLike} disabled={isLiking} aria-label={isLiking ? 'Updating likes...' : 'Like video'}>
                        <img src={likesIcon} alt='' />
                        <div aria-label='Number of likes'>{likes}</div>
                    </button>
                </div>
            </div>
            <div className='divider'></div>
            <p className="video-detail__description">{data.description}</p>
        </div>
    )
}

export default VideoDetail;
