import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserEdit from './components/UserEdit';

function App() {
    const [editingUser, setEditingUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleEdit = (user) => {
        setEditingUser(user);
        setShowEditModal(true);
    };

    const fetchUsers = async () => {
        // Placeholder for refetching users in UserList after edit or add
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">CRUD Application</h1>
            <UserForm fetchUsers={fetchUsers} />
            <UserList onEdit={handleEdit} />
            {editingUser && (
                <UserEdit
                    user={editingUser}
                    show={showEditModal}
                    handleClose={() => setShowEditModal(false)}
                    fetchUsers={fetchUsers}
                />
            )}
        </div>
    );
}

export default App;
