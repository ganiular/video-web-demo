import { VideoItem } from './VideoItem';
import './VideoList.scss';

function VideoList({ videos }) {
    return (
        <div className="videos">
            <h2 className='videos__head'>NEXT VIDEOS</h2>
            <div>
                {videos.map(video => <VideoItem key={video.id} video={video} />)}
            </div>
        </div>
    )
}

export default VideoList;