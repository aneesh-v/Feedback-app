import { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
function FeedbackForm({ handleAdd }) {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');
	// Real time text validation
	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 8) {
			setBtnDisabled(true);
			setMessage('Text must be atleast 10 charactor');
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}

		setText(e.target.value);
	};
	// Form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 0) {
			const newFeedBack = {
				text,
				rating,
			};
			handleAdd(newFeedBack);
		}
		setText('');
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would your rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
