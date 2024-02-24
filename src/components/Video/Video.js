import './Video.scss';

function Video({ data }) {
    return (
        <section className="video">
            <video className="video__player" controls src={data.video} poster={data.image} />
        </section>
    )
}

export default Video;