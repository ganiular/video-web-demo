import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../../components/Video/Video';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import VideoComments from '../../components/VideoComments/VideoComments';
import VideoList from '../../components/VideoList/VideoList';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

function HomePage() {
    const params = useParams();
    const [videos, setVideos] = useState()
    const [currentSelectedVideo, setCurrentSelectedVideo] = useState();
    const [videoId, setVideoId] = useState(params.videoId);
    const [isVideoNotFound, setIsVideoNotFound] = useState(false);
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const videoRef = useRef(null);

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
                if (error.response.status === 404) {
                    setIsVideoNotFound(true);
                }
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

    // Focus on the video player when the selected video changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.focus();
        }
    }, [currentSelectedVideo]);

    if (isVideoNotFound) {
        return <div className="loading" tabIndex="-1" aria-live="polite">
            Video Not Found
        </div>;
    }

    if (!currentSelectedVideo || !videos) {
        return <Loader verticalSpace='40vh' />;
    }

    if (videos.length === 0) {
        return <div className='loading'>No video as been uploaded</div>;
    }

    // Filter out selected video from list of next vidoes
    const nextVideos = videos.filter(video => {
        return video.id !== videoId;
    })

    return (
        <>
            <Video ref={videoRef}
                video={currentSelectedVideo.video}
                image={currentSelectedVideo.image} />
            <main aria-labelledby="video-details-section">
                <article id="video-details-section" aria-labelledby="video-title">
                    <VideoDetail data={currentSelectedVideo} />
                    <VideoComments comments={currentSelectedVideo.comments} videoId={videoId} />
                </article>
                <aside aria-label="Next videos list">
                    <VideoList videos={nextVideos} />
                </aside>
            </main>
        </>
    )
}

export default HomePage;