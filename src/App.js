import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todoText) {
    setTodos([...todos, { text: todoText }]);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

const Form = props => {
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.addTodo(todoText);
        setTodoText("");
      }}
    >
      <input
        type="text"
        value={todoText}
        placeholder="Add Todo...."
        className="textBox"
        onChange={object => setTodoText(object.target.value)}
      />
    </form>
  );
};

const TodoList = props => {
  return (
    <div>
      {props.todos.map((item, index) => {
        return (
          <Todo text={item.text} index={index} deleteTodo={props.deleteTodo} />
        );
      })}
    </div>
  );
};

const Todo = props => {
  return (
    <div className="todo">
      <a>{props.text}</a>
      <a onClick={() => props.deleteTodo(props.index)}>
        <img
          className="trashIcon"
          src="https://img.icons8.com/ios/50/000000/circled-x.png"
        />
      </a>
    </div>
  );
};
