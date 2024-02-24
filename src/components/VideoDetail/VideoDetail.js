import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';
import './VideoDetail.scss';

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

function VideoDetail({ data }) {
    return (
        <div className='video-detail'>
            <h1 className="video-detail__title">Tech Trends: {data.title}</h1>
            <div className="video-detail__tile">
                <div className="video-detail__tile-item">
                    <h3 className='video-detail__channel'>By {data.channel}</h3>
                    <div className="video-detail__date">{formatDate(data.timestamp)}</div>
                </div>
                <div className="video-detail__tile-item">
                    <div><img src={viewsIcon} /> {data.views}</div>
                    <div><img src={likesIcon} /> {data.likes}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;