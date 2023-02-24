const person = {
  name: 'John Doe',
  age: 45,
  gender: 'Female',
  todos: [
    
  ]
};

const Profile = () => {
  const imageSrc = 'https://i.imgur.com/MK3eW3Am.jpg';
  const imageAlt = 'Katherine Johnson';

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div style={{ backgroundColor: 'white', width: '300px' }} onClick={handleClick}>
      <img src={imageSrc} alt={imageAlt} />
      <div>Name: {person.name}</div>
      <div>Age: {person.age}</div>
      <div>Gender: {person.gender}</div>
      <div>{person.name}'s age is: {person.age}</div>
    </div>
  );
};

export default Profile;
