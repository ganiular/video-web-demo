import './Message.scss';

function Message({ message, type }) {
    return (
        <div className="error-block">
            <div className={`error-block__message ${type}`}>{message}</div>
        </div>
    )
}

export default Message;