import VideoForm from '../../components/VideoForm/VideoForm';
import './VideoUpload.scss';

import { useEffect, useRef } from 'react';

function VideoUploadPage() {
    const headerRef = useRef();

    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.focus();
        }
    }, []);

    return (
        <main className="upload-page">
            <section className="upload-section" aria-labelledby="upload-video-header">
                <h1
                    id="upload-video-header"
                    className="upload-section__header"
                    tabIndex="-1" // Makes it focusable
                    ref={headerRef}
                >
                    Upload Video
                </h1>
                <VideoForm />
            </section>
        </main>
    );
}


export default VideoUploadPage;