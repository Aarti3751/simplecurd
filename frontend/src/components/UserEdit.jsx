import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const UserEdit = ({ user, show, handleClose, fetchUsers }) => {
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [status, setStatus] = useState(user.status);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:4000/update/${user.id}`, { name, age, status });
        fetchUsers();
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control value={age} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control value={status} onChange={(e) => setStatus(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UserEdit;
