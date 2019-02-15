const timeAgo = function timeAgo(timestamp) {
    let currentTime = new Date();
    let timeDifference = Math.abs(currentTime.getTime() - timestamp.getTime());

    if (timeDifference < 60000) {
        var ago = "Just now";
    }
    else if (60000 <= timeDifference && timeDifference < 120000) {
        var ago = `1 minute ago`;
    }
    else if (120000 <= timeDifference && timeDifference < 3600000) {
        let diffMinutes = Math.abs(Math.floor(timeDifference / (1000 * 60)));
        var ago = `${diffMinutes} minutes ago`;
    }
    else if (3600000 <= timeDifference && timeDifference < 7200000) {
        var ago = `1 hour ago`;
    }
    else if (7200000 <= timeDifference && timeDifference < 86400000) {
        let diffHours = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60)));
        var ago = `${diffHours} hours ago`;
    }
    else if (86400000 <= timeDifference && timeDifference < 172800000) {
        var ago = `1 day ago`;
    }
    else if (172800000 <= timeDifference && timeDifference < 2592000000) {
        let diffDays = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
        var ago = `${diffDays} days ago`;
    }
    else if (2592000000 <= timeDifference && timeDifference < 5184000000) {
        var ago = `1 month ago`;
    }
    else if (5184000000 <= timeDifference && timeDifference < 77760000000) {
        let diffMonths = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)));
        var ago = `${diffMonths} months ago`;
    }
    else if (77760000000 <= timeDifference && timeDifference < 155520000000) {
        var ago = `1 year ago`;
    }
    else if (155520000000 <= timeDifference) {
        let diffYears = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12)));
        var ago = `${diffYears} years ago`;
    }
    return ago;
};

module.exports = timeAgo;