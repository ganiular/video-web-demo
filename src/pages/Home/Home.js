import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../../components/Video/Video';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import VideoComments from '../../components/VideoComments/VideoComments';
import VideoList from '../../components/VideoList/VideoList';
import siteApi from '../../BrainFlixApi';

function HomePage() {
    const params = useParams();
    const [videos, setVideos] = useState([])
    const [currentSelectedVideo, setCurrentSelectedVideo] = useState();
    const [videoId, setVideoId] = useState(params.videoId);

    // Get Videos
    useEffect(() => {
        const getVideos = async () => {
            try {
                const data = await siteApi.getVideos()
                setVideos(data);

                // if video id is not set, select the first video as default
                if (!videoId && data.length > 0) {
                    setVideoId(data[0].id);
                }
            } catch (error) {
                console.error(error);
            }
        }

        getVideos()
    }, [])

    // Get video details by vidoe id
    useEffect(() => {
        const getVideoById = async () => {
            try {
                const data = await siteApi.getVideoById(videoId)
                setCurrentSelectedVideo(data)
            } catch (error) {
                console.error(error);
            }
        }

        if (videoId) {
            getVideoById();
        }
    }, [videoId])

    // Update videoId for every params.videoId change 
    useEffect(() => {
        setVideoId(params.videoId)
    }, [params.videoId])

    // Filter out selected video from list of next vidoes
    const nextVideos = videos.filter(video => {
        return video.id !== videoId;
    })

    if (!currentSelectedVideo) {
        return <div className='loading'>Loading...</div>;
    }

    return (
        <>
            <Video video={currentSelectedVideo.video} image={currentSelectedVideo.image} />
            <main>
                <article>
                    <VideoDetail data={currentSelectedVideo} />
                    <VideoComments comments={currentSelectedVideo.comments} />
                </article>
                <aside>
                    <VideoList videos={nextVideos} />
                </aside>
            </main>
        </>
    )
}

export default HomePage;