import React, { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const onInputChange = (e) => {
    setTitle(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <form className="form-container" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add todo ..."
        className="input-text"
        value={title}
        onChange={onInputChange}
      />
      <button className="input-submit" value="submit">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
