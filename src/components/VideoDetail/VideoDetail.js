import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';
import './VideoDetail.scss';
import { formatDateAgo } from '../../utils/time';

function VideoDetail({ data }) {
    return (
        <div className='video-detail'>
            <h1 className="video-detail__title">Tech Trends: {data.title}</h1>
            <div className='divider mobile'></div>
            <div className="video-detail__tile">
                <div className="video-detail__tile-item">
                    <h3 className='video-detail__channel'>By {data.channel}</h3>
                    <div className="video-detail__date">{formatDateAgo(data.timestamp)}</div>
                </div>
                <div className="video-detail__tile-item">
                    <div><img src={viewsIcon} alt='Views' /> {data.views}</div>
                    <div><img src={likesIcon} alt='Likes' /> {data.likes}</div>
                </div>
            </div>
            <div className='divider'></div>
            <p className="video-detail__description">{data.description}</p>
        </div>
    )
}

export default VideoDetail;