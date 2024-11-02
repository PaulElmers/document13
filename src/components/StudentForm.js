import React, { useState } from 'react';

function StudentForm() {
    const [students, setStudents] = useState([{ id: 1, name: "Alice", grade: 90 }]);
    const [newStudent, setNewStudent] = useState({ name: "", grade: "" });

    const addStudent = () => {
        setStudents([...students, { id: Date.now(), ...newStudent }]);
        setNewStudent({ name: "", grade: "" });
    };

    const handleGradeChange = (id, grade) => {
        setStudents(students.map(student => 
            student.id === id ? { ...student, grade: Number(grade) } : student
        ));
    };

    const averageGrade = (students.reduce((sum, student) => sum + student.grade, 0) / students.length).toFixed(2);

    return (
        <div>
            <input 
                value={newStudent.name} 
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} 
                placeholder="Student Name" 
            />
            <input 
                value={newStudent.grade} 
                onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })} 
                placeholder="Grade" 
            />
            <button onClick={addStudent}>Add Student</button>

            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name}: 
                        <input 
                            type="number" 
                            value={student.grade} 
                            onChange={(e) => handleGradeChange(student.id, e.target.value)} 
                        />
                    </li>
                ))}
            </ul>
            <p>Average Grade: {averageGrade}</p>
        </div>
    );
}
