import { useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({
    name: 'Egzon',
    lastName: 'Murati',
    email: 'egzon@gmail.com',
  });

  const handleNameChange = (evt) => {
    setPerson({
      ...person,
      name: evt.target.value,
    });
  };

  const handleLastNameChange = (evt) => {
    setPerson({
      ...person,
      lastName: evt.target.value,
    });
  };

  const handleEmailChange = (evt) => {
    setPerson({
      ...person,
      email: evt.target.value,
    });
  };

  return (
    <>
      <label>Name</label>
      <input value={person.name} onChange={handleNameChange} />

      <label>Last name</label>
      <input value={person.lastName} onChange={handleLastNameChange} />

      <label>Email</label>
      <input value={person.email} onChange={handleEmailChange} />

      <p>{person.name}</p>
      <p>{person.lastName}</p>
      <p>{person.email}</p>
    </>
  );
};

export default Form;
