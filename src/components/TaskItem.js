import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TaskItem = ({task, removeTask}) => {
    return(
        <Card className='mb-3 shadow-sm'>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Button variant='btn-outline-danger' onClick={() => removeTask(task.id)}>Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default TaskItem;