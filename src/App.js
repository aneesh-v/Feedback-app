import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
function App() {
	const [feedback, setFeedback] = useState(FeedbackData);
	// Delete a feedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};
	// Add a feedback
	const addFeedBack = (newFeedBack) => {
		newFeedBack.id = uuidV4();
		setFeedback([newFeedBack, ...feedback]);
	};
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm handleAdd={addFeedBack} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
