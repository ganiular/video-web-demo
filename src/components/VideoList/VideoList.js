import './VideoList.scss';

function VideoItem({ video, setCurrentSelectedVideo }) {
    return (
        <div className="video-item" onClick={() => setCurrentSelectedVideo(video.id)}>
            <img className="video-item__image" src={video.image} alt={video.title} />
            <div className='video-item__context'>
                <h3 className="video-item__title">{video.title}</h3>
                <div className="video-item__author">{video.channel}</div>
            </div>
        </div>
    )
}

function VideoList({ videos, setCurrentSelectedVideo }) {
    return (
        <div className="videos">
            <h2 className='videos__head'>NEXT VIDEOS</h2>
            <div>
                {videos.map(video => <VideoItem key={video.id} video={video} setCurrentSelectedVideo={setCurrentSelectedVideo} />)}
            </div>
        </div>
    )
}

export default VideoList;