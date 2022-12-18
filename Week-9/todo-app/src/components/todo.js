import { useState } from 'react';

const Todo = ({ id, task, complete }) => {
  const [isChecked, setIsChecked] = useState(complete);

  return (
    <li>
      <input
        type='checkbox'
        name={id}
        id={id}
        checked={isChecked}
        onChange={() => setIsChecked((isChecked) => !isChecked)}
      />
      <label
        htmlFor={id}
        style={{ textDecoration: isChecked ? 'line-through' : undefined }}
      >
        {task}
      </label>
    </li>
  );
};

export default Todo;
