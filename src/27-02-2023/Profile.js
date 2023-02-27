const person = {
  name: 'John Doe',
  age: 45,
  gender: 'Female',
  todos: [],
};

const Profile = (props) => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div
      style={{ backgroundColor: 'white', width: '300px' }}
      onClick={handleClick}
    >
      {props.children}
      <Avatar
        imageSrc="https://i.imgur.com/MK3eW3Am.jpg"
        imageAlt="Katherine Johnson"
        width="7rem"
        height="7rem"
      />
      <Avatar
        imageSrc="https://i.imgur.com/MK3eW3Am.jpg"
        imageAlt="Katherine Johnson"
        width="5rem"
        height="5rem"
      />
      <Avatar
        imageSrc="https://i.imgur.com/MK3eW3Am.jpg"
        imageAlt="Katherine Johnson"
        height="2rem"
      />
      <div>Name: {person.name}</div>
      <div>Age: {person.age}</div>
      <div>Gender: {person.gender}</div>
      <div>
        {person.name}'s age is: {person.age}
      </div>
    </div>
  );
};

const Avatar = ({ imageSrc, imageAlt, width = '70px', height }) => {
  return (
    <img
      src={imageSrc}
      alt={imageAlt}
      style={{ width: width, height: height }}
    />
  );
};

export default Profile;
