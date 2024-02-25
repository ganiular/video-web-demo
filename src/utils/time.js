export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const formatDateAgo = (timestamp) => {
    const currentDate = new Date();
    const providedDate = new Date(timestamp);

    const timeDifference = currentDate - providedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 1) {
        return `${days} days ago`;
    } else if (hours > 1) {
        return `${hours} hours ago`;
    } else if (minutes > 1) {
        return `${minutes} minutes ago`;
    } else {
        return `${seconds} seconds ago`;
    }
}
