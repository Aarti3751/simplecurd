import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const UserForm = ({ fetchUsers }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/add', { name, age, status });
        setName('');
        setAge('');
        setStatus('');
        fetchUsers();
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Control value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter status" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add User
            </Button>
        </Form>
    );
};

export default UserForm;
