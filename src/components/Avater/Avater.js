import './Avater.scss';

function Avater({ image = null }) {
    if (image) {
        return <img className="profile-image" src={image} alt="Profile" />
    }
    return <div className='profile-image'></div>
}

export default Avater;