import React from 'react';

export default function({ type, children }) {
	const wrapClass = type === 'dark' ? 'bg-dark' : 'bg-light';
	const titleClass = type === 'dark' ? 'text-white' : '';
	return (
		<div className={`${wrapClass} p-5`}>
			<h1 className={titleClass}>Normal Wrapper:</h1>
			{children}
		</div>
	);
}
