import './Button.scss';

function TextAndIconButton({ icon, text, loading }) {
    return (
        <button className='primary-button' disabled={loading}>
            <img src={icon} alt='icon' />
            <div>{text}</div>
        </button>
    )
}

export default TextAndIconButton;