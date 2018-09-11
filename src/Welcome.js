import React, { Component } from 'react';

const Welcome = ({newNameHandler, onNameChangeHnadler, value, increamentHandler, resetHandler, userNames, newNameValue}) => {
	return (
		<div>
			<hr/>
			<h2>This is Welcome Component</h2>
			<h2>{value}</h2>
			<button onClick={increamentHandler}>Increament</button>
			<button onClick={resetHandler}>Reset</button><br/><br/>
			<input type="text" value={newNameValue} onChange={onNameChangeHnadler}></input>
			<button onClick={newNameHandler}>Add New Name</button>
			{
				userNames.map((name, index) => (
        			<p>{index +1} {name}!</p>)
        		)
        	}
			<hr/>
		</div>
	)
}
export default Welcome;