import React, { useState } from 'react';
import Todo from '../todo';
import data from '../../data.json';
import AddTodo from '..//add-todo';

const Todos = () => {
  const [allTodos, setAllTodos] = useState([...data]);
  return (
    <>
      <AddTodo allTodos={allTodos} setAllTodos={setAllTodos} />

      <ul className='todos__container'>
        {allTodos?.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
