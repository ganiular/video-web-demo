export function VideoItem({ video, setCurrentSelectedVideo }) {
    return (
        <div className="video-item" onClick={() => setCurrentSelectedVideo(video.id)}>
            <img className="video-item__image" src={video.image} alt={video.title} />
            <div className='video-item__context'>
                <h3 className="video-item__title">{video.title}</h3>
                <div className="video-item__author">{video.channel}</div>
            </div>
        </div>
    );
}
