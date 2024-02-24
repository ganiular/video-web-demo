import './Avater.scss';

function Avater({ image }) {
    return <img className="profile-image" src={image} alt="Profile" />
}

export default Avater;