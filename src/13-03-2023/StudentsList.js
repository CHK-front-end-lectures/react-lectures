import { useState } from 'react';

let nextId = 0;
const StudentsList = () => {
  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);

  const handleClickAdd = () => {
    setStudents([{ id: nextId++, name: name }, ...students]);
  };

  const handleClickDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <>
      <h1>Add new student</h1>
      <div>
        <input value={name} onChange={(evt) => setName(evt.target.value)} />
        <button onClick={handleClickAdd}>Add</button>
      </div>
      {students.map((student) => (
        <div className="flex">
          <li key={student.id}>{student.name}</li>
          <button onClick={() => handleClickDelete(student.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default StudentsList;
