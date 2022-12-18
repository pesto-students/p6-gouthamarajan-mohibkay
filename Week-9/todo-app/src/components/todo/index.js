import { useState } from 'react';

const Todo = ({ id, todo, complete }) => {
  const [isChecked, setIsChecked] = useState(complete);

  return (
    <li className='todo_ListItem'>
      <input
        type='checkbox'
        name={id}
        id={id}
        checked={isChecked}
        onChange={() => setIsChecked((isChecked) => !isChecked)}
      />
      <label
        htmlFor={id}
        className='todo__label'
        style={{ textDecoration: isChecked ? 'line-through' : undefined }}
      >
        {todo}
      </label>
    </li>
  );
};

export default Todo;
