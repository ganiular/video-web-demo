import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../../components/Video/Video';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import VideoComments from '../../components/VideoComments/VideoComments';
import VideoList from '../../components/VideoList/VideoList';
import videoDetails from '../../data/video-details.json';
import videos from '../../data/videos.json';

function HomePage() {
    const params = useParams();

    // Get videoId from params if exists otherwise use first video in the list as default
    const videoId = params.videoId || videoDetails[0].id;

    const [currentSelectedVideo, setCurrentSelectedVideo] = useState(videoId);

    const selectedVideoData = videoDetails.find(video => {
        return video.id === currentSelectedVideo;
    });

    const nextVideos = videos.filter(video => {
        return video.id !== currentSelectedVideo;
    })

    // Update selectedVideo anytime videoId changes
    // That is when user click on a video on the list
    useEffect(() => {
        setCurrentSelectedVideo(videoId);
    }, [videoId])

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