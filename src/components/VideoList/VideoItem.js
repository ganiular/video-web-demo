import { Link } from 'react-router-dom';

export function VideoItem({ video }) {
    return (
        <Link to={`/videos/${video.id}`} className="video-item"
            aria-label={`Watch video titled "${video.title}" by ${video.channel}`}>
            <img className="video-item__image" src={video.image} alt='' />
            <div className='video-item__context'>
                <h3 className="video-item__title">{video.title}</h3>
                <div className="video-item__author">{video.channel}</div>
            </div>
        </Link>
    );
}
