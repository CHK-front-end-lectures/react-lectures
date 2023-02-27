const Person = ({ name, profession, age, isEngineer }) => {
  return (
    <>
      {isEngineer && (
        <section>
          <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Avatar" />
          <div>Name: {name}</div>
          <div>Profession: {profession}</div>
          <div>Age: {age}</div>
        </section>
      )}
    </>
  );
};

export default Person;
