const students = [
  {
    id: 1,
    name: 'Egzon',
    studies: 'engineering',
  },
  {
    id: 2,
    name: 'Ervis',
    studies: 'chemistry',
  },
  {
    id: 3,
    name: 'Agon',
    studies: 'math',
  },
  {
    id: 4,
    name: 'Gzim',
    studies: 'math',
  },
];

const List = () => {
  const mathStudents = students.filter((student) => student.studies === 'math');
  const otherStudents = students.filter((student) => student.studies !== 'math')

  return (
    <>
      <h3>Students</h3>
      <ul>
        {students.map((data) => {
          return (
            <li key={data.id}>
              <div>Name: {data.name}</div>
              <div>Studies: {data.studies}</div>
            </li>
          );
        })}
      </ul>

      <h3>Math students</h3>
      <ul>
        {mathStudents.map((data) => {
          return (
            <li key={data.id}>
              <div>Name: {data.name}</div>
              <div>Studies: {data.studies}</div>
            </li>
          );
        })}
      </ul>

      <h3>Other students</h3>
      <ul>
        {otherStudents.map((data) => {
          return (
            <li key={data.id}>
              <div>Name: {data.name}</div>
              <div>Studies: {data.studies}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
