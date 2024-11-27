import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import fullscreenIcon from '../../assets/icons/fullscreen.svg';
import fullscreenCloseIcon from '../../assets/icons/close_fullscreen.svg';
import volumeUpIcon from '../../assets/icons/volume_up.svg';
import volumeOffIcon from '../../assets/icons/volume_off.svg';
import './Video.scss';
import { useEffect, useRef, useState, forwardRef } from 'react';

const Video = forwardRef(({ video, image }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isFull, setIsFull] = useState(false);
    const videoRef = useRef();

    // Expose the videoRef to the parent through the forwarded ref
    useEffect(() => {
        if (ref) {
            ref.current = videoRef.current;
        }
    }, [ref]);

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

    function handleFullScreen(event) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            videoRef.current.parentElement.requestFullscreen();
        }
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

        const handleFullScreenChange = () => {
            setIsFull(value => !value);
        }

        videoElement.addEventListener('timeupdate', handleTimeUpdate);
        videoElement.addEventListener('durationchange', handleDurationChange);
        videoElement.parentElement.addEventListener('fullscreenchange', handleFullScreenChange);

        return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            videoElement.removeEventListener('durationchange', handleDurationChange);
            videoElement.parentElement.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, [])

    return (
        <section className="video" aria-label='Video player'>
            <div className='video__content'>
                <video ref={videoRef} tabIndex={-1} className="video__player" src={video} poster={image}>
                    <track kind="captions" srcLang="en" src="captions.vtt" label="English captions" />
                </video>

                <div className='control'>
                    <button className='control__button' onClick={handlePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
                        <img src={isPlaying ? pauseIcon : playIcon} alt='' />
                    </button>
                    <div className='control__bar'>

                        <progress className='control__progress' value={progress} max="100"></progress>

                        <div className='control__time' aria-live="polite">{currentTime.toFixed(2)} / {duration.toFixed(2)}</div>
                    </div>
                    <div className='control__actions'>
                        <button className='control__button' onClick={handleFullScreen} aria-label={isFull ? 'Exit fullscreen' : 'Enter fullscreen'}><img src={isFull ? fullscreenCloseIcon : fullscreenIcon} alt='' /></button>
                        <button className='control__button' onClick={handleMute} aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}><img src={isMuted ? volumeUpIcon : volumeOffIcon} alt='' /></button>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Video;