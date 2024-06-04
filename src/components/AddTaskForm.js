import React, {useState} from 'react';
import {Form, Button, FloatingLabel} from 'react-bootstrap';

const AddTaskForm = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({title, description});
        setTitle('');
        setDescription('');

    };

    return (
        <Form onSubmit={handleSubmit} className='mb-4'>
            <FloatingLabel controlId="floatingTitle" label="Title" className="mb-3">
                <Form.Control 
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingDescription" label="Description">
                <Form.Control 
                    as="textarea"
                    placeholder="Enter task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{height: '100px' }}
                />
            </FloatingLabel>
            <Button variant="primary" type="submit" className="mt-3">
        Add Task
      </Button>
        </Form>
    );
};

export default AddTaskForm