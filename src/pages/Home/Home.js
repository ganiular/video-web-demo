import { useState } from 'react';
import Video from '../../components/Video/Video';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import VideoComments from '../../components/VideoComments/VideoComments';
import VideoList from '../../components/VideoList/VideoList';
import videoDetails from '../../data/video-details.json';
import videos from '../../data/videos.json';

function HomePage() {
    const [currentSelectedVideo, setCurrentSelectedVideo] = useState(videoDetails[0].id);

    const selectedVideoData = videoDetails.find(video => {
        return video.id === currentSelectedVideo;
    });

    const nextVideos = videos.filter(video => {
        return video.id !== currentSelectedVideo;
    })
    return (
        <>
            <Video data={selectedVideoData} />
            <main>
                <article>
                    <VideoDetail data={selectedVideoData} />
                    <VideoComments comments={selectedVideoData.comments} />
                </article>
                <aside>
                    <VideoList videos={nextVideos} setCurrentSelectedVideo={setCurrentSelectedVideo} />
                </aside>
            </main>
        </>
    )
}

export default HomePage;