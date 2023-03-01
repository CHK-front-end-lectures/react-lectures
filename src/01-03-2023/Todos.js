const todos = [
  {
    id: 1,
    title: 'Buy something',
    completed: false,
    importance: 8
  },
  {
    id: 2,
    title: 'Create something',
    completed: true,
    importance: 0
  },
  {
    id: 3,
    title: 'Do something else',
    completed: true,
    importance: 5
  },
];

const Todos = () => {
  return (
    <>
      <h3>Completed</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              name={todo.title}
              isCompleted={todo.completed}
              importance={todo.importance}
            />
          );
        })}
      </ul>
    </>
  );
};

const Item = ({ name, isCompleted, importance }) => {
  // if (isCompleted) { // early return
  //   return <li>{name} ✓</li>
  // }

  // return <li>{isCompleted ? name + '✓' : name}</li>;

  // return <li>{isCompleted ? `${name} ✓` : name}</li>;

  // if (!isCompleted) { // => false
  //   return null;
  // }

  // return (
  //   <li>
  //     {isCompleted ? <del>{name} ✓</del> : <div>{name} (inside div)</div>}
  //   </li>
  // );

  // return (
  //   <li>
  //     {name} {isCompleted && '✓'}
  //   </li>
  // )

  // return <li>{isCompleted ? name + '✓' : name + ' X'}</li>;

  // if(!(importance > 0)) {
  //   return null
  // }

  return (
    <li>
      {name}
      {importance > 0 ? (
        ' Importance:' + importance
      ) : null}
    </li>
  )
};

// Duke shfrytezuar ternary operator (? :) dhe te dhenat 'todos'
// vendosni nje X per ate element qe nuk eshte completed, njesoj sikur tick symboli
// ndryshimet duhet te behen ne komponenten/funksionin Item

export default Todos;

// void functions - return ()
// Conditions: ternary operator (? :), logical and operator (&&)

// logical operators:
// =, nje variabel i vendoset nje vlere e caktume
// ==, a eshte e barabarte nje variable me nje vlere te caktume ('8' nuk eshte e barabarte me numrin 8 ===)
// >, <, >=, <=
