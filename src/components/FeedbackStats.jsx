function FeedbackStats({ feedback }) {
	// Calculate the average rating
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;
	// Add one decimal place
	average = average.toFixed(1).replace(/[.,]0$/, '');
	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average review {average ? average : 0}</h4>
		</div>
	);
}

export default FeedbackStats;
