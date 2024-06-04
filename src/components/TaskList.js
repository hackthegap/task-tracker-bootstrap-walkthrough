import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks, removeTask}) => {
    return (
        <div className="list-group">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} removeTask={removeTask}/>
            ))}
        </div>
    );
};

export default TaskList;