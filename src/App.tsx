import React from 'react';

export const App: React.FC = () => {
	return (
		<div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
			<h1>React Test Page</h1>
			<p>Welcome to your test application.</p>
			<button onClick={() => alert('Button clicked!')}>Click Me</button>
		</div>
	);
};

export default App;
