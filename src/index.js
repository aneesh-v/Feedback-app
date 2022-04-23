import React from 'react';
// ReactDom no longer supported from react 18.
// use createRoot.
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
	// React strict mode do some additional checks for errors.
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
