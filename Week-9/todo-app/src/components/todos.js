import React from 'react';
import Todo from './todo';
import data from '../data.json';

const Todos = () => {
  return (
    <ul>
      {data?.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default Todos;
