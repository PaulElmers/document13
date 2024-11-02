import React, { useState } from 'react';

function EmployeeList() {
    const [employees, setEmployees] = useState([{ id: 1, name: "Alice", position: "Manager" }]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    const handleEdit = (id) => {
        const employee = employees.find(emp => emp.id === id);
        setEditingEmployee(employee);
    };

    const handleSave = () => {
        setEmployees(employees.map(emp => 
            emp.id === editingEmployee.id ? editingEmployee : emp
        ));
        setEditingEmployee(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingEmployee(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <ul>
                {employees.map(emp => (
                    <li key={emp.id}>
                        {emp.name} - {emp.position}
                        <button onClick={() => handleEdit(emp.id)}>Edit</button>
                    </li>
                ))}
            </ul>

            {editingEmployee && (
                <div>
                    <input name="name" value={editingEmployee.name} onChange={handleChange} />
                    <input name="position" value={editingEmployee.position} onChange={handleChange} />
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
}
