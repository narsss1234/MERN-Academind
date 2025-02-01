import React, { useState } from "react";
import './NewGoal.css';

const NewGoal = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredGoal
        };

        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
        setEnteredGoal(event.target.value);
    };

    return (<div className="new-goal"><form onSubmit={addGoalHandler}>
        <input type="text" onChange={textChangeHandler}/>
        <button type="submit">Add Goal</button>
    </form></div>);
};


export default NewGoal;