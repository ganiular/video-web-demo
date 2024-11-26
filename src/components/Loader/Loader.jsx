import './Loader.scss';

function Loader({ verticalSpace }) {
    return <div className="loader" style={{ '--vertical-space': verticalSpace }}>
        <div className="loader-spinner" aria-label="Content loading..."></div>
    </div>
}

export default Loader;