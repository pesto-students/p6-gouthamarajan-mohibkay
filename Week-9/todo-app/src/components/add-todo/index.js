import { useState } from 'react';

const AddTodo = ({ allTodos, setAllTodos }) => {
  const [todo, setTodo] = useState('');
  const id = Math.random();

  const addNewTodo = (e) => {
    e.preventDefault();
    setAllTodos([...allTodos, { id, todo, complete: false }]);
    setTodo('');
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
