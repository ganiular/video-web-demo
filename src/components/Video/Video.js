import './Video.scss';

function Video({ video, image }) {
    return (
        <section className="video">
            <video className="video__player" controls src={video} poster={image} />
        </section>
    )
}

export default Video;