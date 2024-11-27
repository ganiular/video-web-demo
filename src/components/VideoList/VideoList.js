import { VideoItem } from './VideoItem';
import './VideoList.scss';

function VideoList({ videos }) {
    return (
        <div className="videos">
            <h2 className='videos__head'>NEXT VIDEOS</h2>
            <ul className='video-list'>
                {videos.map(video => (<li key={video.id}>
                    <VideoItem video={video} />
                </li>))}
            </ul>
        </div>
    )
}

export default VideoList;