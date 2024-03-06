import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../../components/Video/Video';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import VideoComments from '../../components/VideoComments/VideoComments';
import VideoList from '../../components/VideoList/VideoList';
import axios from 'axios';

function HomePage() {
    const params = useParams();
    const [videos, setVideos] = useState([])
    const [currentSelectedVideo, setCurrentSelectedVideo] = useState();
    const [videoId, setVideoId] = useState(params.videoId);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    // Get Videos 
    useEffect(() => {
        const getVideos = async () => {
            try {
                const res = await axios.get(`${baseUrl}videos`)
                setVideos(res.data);

                // if video id is not set, select the first video as default
                if (!videoId && res.data.length > 0) {
                    setVideoId(res.data[0].id);
                }
            } catch (error) {
                console.error(error);
            }
        }

        getVideos()
        // eslint-disable-next-line
    }, [])

    // Get video details by vidoe id
    useEffect(() => {
        const getVideoById = async () => {
            try {
                const res = await axios.get(`${baseUrl}videos/${videoId}`)
                setCurrentSelectedVideo(res.data)
            } catch (error) {
                console.error(error);
            }
        }

        if (videoId) {
            getVideoById();
        }
    }, [videoId, baseUrl])

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
                    <VideoComments comments={currentSelectedVideo.comments} videoId={videoId} />
                </article>
                <aside>
                    <VideoList videos={nextVideos} />
                </aside>
            </main>
        </>
    )
}

export default HomePage;