import { v4 as uuidV4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'This is feedback 1',
			rating: 7,
		},
		{
			id: 2,
			text: 'This is feedback 2',
			rating: 8,
		},
		{
			id: 3,
			text: 'This is feedback 3',
			rating: 8,
		},
	]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});
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
	// Set feedback for edit
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};
	// update the feedback
	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
	};
	return (
		<FeedbackContext.Provider
			value={{ feedback, deleteFeedback, addFeedBack, editFeedback, feedbackEdit, updateFeedback }}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
