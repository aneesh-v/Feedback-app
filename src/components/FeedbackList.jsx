import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
function FeedbackList({ feedback, handleDelete }) {
	if (!feedback || feedback.length === 0) {
		return <div>No Feedback available.</div>;
	}

	// With fade animation
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div key={item.id}>{<FeedbackItem item={item} handleDelete={handleDelete} />}</div>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);

	// without fade animation
	// return (
	// 	<div>
	// 		{feedback.map((item) => (
	// 			<div key={item.id}>{<FeedbackItem item={item} handleDelete={handleDelete} />}</div>
	// 		))}
	// 	</div>
	// );
}
FeedbackList.propTypes = {
	feedback: PropTypes.array,
};

export default FeedbackList;
