import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import fullscreenIcon from '../../assets/icons/fullscreen.svg';
import volumeUpIcon from '../../assets/icons/volume_up.svg';
import volumeOffIcon from '../../assets/icons/volume_off.svg';
import './Video.scss';
import { useEffect, useRef, useState } from 'react';

function Video({ video, image }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef();

    function handlePlay() {
        if (isPlaying) {
            // Pause
            setIsPlaying(false)
            videoRef.current.pause()
        } else {
            // Play
            setIsPlaying(true)
            videoRef.current.play()
        }
    }

    function handleMute() {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(videoElement.currentTime / 100);
        };

        const handleDurationChange = () => {
            setDuration(videoElement.duration / 100);
        };

        videoElement.addEventListener('timeupdate', handleTimeUpdate);
        videoElement.addEventListener('durationchange', handleDurationChange);

        return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            videoElement.removeEventListener('durationchange', handleDurationChange);
        };
    }, [])

    return (
        <section className="video">
            <video ref={videoRef} className="video__player" src={video} poster={image} />
            <div>
                <button onClick={handlePlay}><img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} /></button>
                <div>
                    <div></div>
                    <div>{currentTime.toFixed(2)}/{duration.toFixed(2)}</div>
                </div>
                <div>
                    <button><img src={fullscreenIcon} alt='Full screen' /></button>
                    <button onClick={handleMute}><img src={isMuted ? volumeUpIcon : volumeOffIcon} alt={isMuted ? 'On sound' : 'Off sound'} /></button>
                </div>
            </div>
        </section>
    )
}

export default Video;