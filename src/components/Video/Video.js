import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import fullscreenIcon from '../../assets/icons/fullscreen.svg';
import fullscreenCloseIcon from '../../assets/icons/close_fullscreen.svg';
import volumeUpIcon from '../../assets/icons/volume_up.svg';
import volumeOffIcon from '../../assets/icons/volume_off.svg';
import './Video.scss';
import { useEffect, useRef, useState } from 'react';

function Video({ video, image }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isFull, setIsFull] = useState(false);
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

    function handleFullScreen() {
        setIsFull(!isFull);
    }

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(videoElement.currentTime / 100);
            setProgress(videoElement.currentTime / videoElement.duration * 100)
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
            <div className='video__content'>
                <video ref={videoRef} className="video__player" src={video} poster={image} />
                <div className='control'>
                    <button className='control__button' onClick={handlePlay}><img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} /></button>
                    <div className='control__bar'>
                        <div className='control__seek'>
                            <div className='control__progress' style={{ width: `${progress}%` }}></div>
                        </div>
                        <div className='control__time'>{currentTime.toFixed(2)} / {duration.toFixed(2)}</div>
                    </div>
                    <div className='control__actions'>
                        <button className='control__button' onClick={handleFullScreen}><img src={isFull ? fullscreenCloseIcon : fullscreenIcon} alt={isFull ? 'Minimize' : 'Maximazie'} /></button>
                        <button className='control__button' onClick={handleMute}><img src={isMuted ? volumeUpIcon : volumeOffIcon} alt={isMuted ? 'On sound' : 'Off sound'} /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video;