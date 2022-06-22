import React, { useState } from 'react';

interface TodoFromProps {
  onAdd(title: string): void;
}

const TodoFrom: React.FC<TodoFromProps> = (props) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onKeyHandle = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(input);
      setInput('')
    }
  };

  return (
    <>
      <div className="input-field mt2">
        <input
          value={input}
          onChange={handleChange}
          onKeyPress={onKeyHandle}
          type="text"
          id="title"
          placeholder="new Task..."
        />
        <label htmlFor="title" className="active">
          new Task...
        </label>
      </div>
    </>
  );
};

export default TodoFrom;
