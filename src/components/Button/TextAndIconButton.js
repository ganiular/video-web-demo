import './Button.scss';

function TextAndIconButton({ icon, text }) {
    return (
        <button className='primary-button'>
            <img src={icon} alt='icon' />
            <div>{text}</div>
        </button>
    )
}

export default TextAndIconButton;