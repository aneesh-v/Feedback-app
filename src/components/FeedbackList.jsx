import FeedbackItem from './FeedbackItem';
function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		return <div>No Feedback available.</div>;
	}

	return (
		<div>
			{feedback.map((item) => (
				<div>{<FeedbackItem key={item.id} item={item} />}</div>
			))}
		</div>
	);
}

export default FeedbackList;
