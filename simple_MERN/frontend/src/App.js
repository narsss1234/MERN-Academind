import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import "./App.css";

import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        {id: 'cg1', text: 'Finish the Course'},
        {id: 'cg2', text: 'Learn Learn all about Course Main Topic'},
        {id: 'cg3', text: 'Help other students in the course Q&amp;A'}
    ]);

    const addNewGoalHandler = newGoal => {
        // setCourseGoals(courseGoals.concat(newGoal));
        setCourseGoals((prevCourseGoals) => {
            return prevCourseGoals.concat(newGoal);
        });
    };

    return (<div className="course-goals">
        <h2>Course Goals!</h2><br></br>
        < NewGoal onAddGoal={addNewGoalHandler} /><br></br>
        <GoalList goals={courseGoals} />
    </div>
    );
};

export default App;