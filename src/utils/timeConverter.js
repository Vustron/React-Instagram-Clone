export const timeConverter = (timestamp) => {
	const now = Date.now();
	const secondsAgo = Math.floor((now - timestamp) / 1000);

	let result;

	switch (true) {
		case secondsAgo < 60:
			result = `${secondsAgo}s ago`;
			break;
		case secondsAgo < 3600:
			const minutesAgo = Math.floor(secondsAgo / 60);
			result = `${minutesAgo}m ago`;
			break;
		case secondsAgo < 86400:
			const hoursAgo = Math.floor(secondsAgo / 3600);
			result = `${hoursAgo}h ago`;
			break;
		case secondsAgo < 604800:
			const daysAgo = Math.floor(secondsAgo / 86400);
			result = `${daysAgo}d ago`;
			break;
		case secondsAgo < 2419200: // 4 weeks in seconds
			const weeksAgo = Math.floor(secondsAgo / 604800);
			result = `${weeksAgo}w ago`;
			break;
		default:
			const yearsAgo = Math.floor(secondsAgo / 31536000);
			result = `${yearsAgo}y ago`;
			break;
	}

	return result;
};
