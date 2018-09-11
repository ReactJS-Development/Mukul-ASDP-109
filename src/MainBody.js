import React, { Component } from 'react';

const MainBody = ({firstName, lastName, city}) => {
	return (
		<div>
			<h2>This is MainBody</h2>
			<h3>{firstName} {lastName} works in {city}</h3>
		</div>
	);
}
export default MainBody;