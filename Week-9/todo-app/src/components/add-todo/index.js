import { useState } from 'react';

const AddTodo = ({ allTodos, setAllTodos }) => {
  const [todo, setTodo] = useState('');
  const id = Math.random();

  const addNewTodo = (e) => {
    e.preventDefault();
    if (todo) {
      setAllTodos([...allTodos, { id, todo, complete: false }]);
      setTodo('');
    } else {
      alert("Todo item can't be empty!");
    }
  };

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <input
          type='text'
          placeholder='Add todo'
          className='addTodo__Input'
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
        />
      </form>
    </div>
  );
};

export default AddTodo;
