import { Link } from 'react-router-dom';

export function VideoItem({ video, setCurrentSelectedVideo }) {
    return (
        <Link to={`/videos/${video.id}`} className="video-item">
            <img className="video-item__image" src={video.image} alt={video.title} />
            <div className='video-item__context'>
                <h3 className="video-item__title">{video.title}</h3>
                <div className="video-item__author">{video.channel}</div>
            </div>
        </Link>
    );
}
