import { useState } from "react";
import styled from "styled-components";
import List from "../list";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = event => {
    event.preventDefault();
    // check string value https://stackoverflow.com/questions/154059/how-to-check-empty-undefined-null-string-in-javascript
    if (newTodo.replace(/(^s*)|(s*$)/g, "").length === 0 || !newTodo.trim()) {
      alert("你没有记录任何事项");
      return;
    }
    setTodos([...todos, { todo: newTodo.trim(), isDone: false }]);
  };

  const deleteTodo = event => {
    let { id } = event.target.parentElement;
    todos.splice(id, 1);
    setTodos([...todos]);
  };

  const deleteDoneTodo = event => {
    let { id } = event.target.parentElement;
    doneTodos.splice(id, 1);
    setDoneTodos([...doneTodos]);
  };

  const markTodo = event => {
    // List 组件的 index 传入了其子组件的 ID，此 ID 与 State 数组中的 index 一致
    // 因此可以通过此 ID 设置 isDone 的值
    let { id } = event.target.parentElement;
    let { checked } = event.target;
    // use checkbox value `checked` to judged
    if (checked) {
      if (todos.length > 0) {
        todos[id].isDone = !todos[id].isDone;
        let unDone = todos.filter(tds => tds.isDone === false);
        let done = todos.filter(tds => tds.isDone === true);
        // 更改 State 中的值后，需要 setState 才能生效
        setTodos([...unDone]);
        setDoneTodos([...doneTodos, ...done]);
      }
    } else {
      if (doneTodos.length > 0) {
        doneTodos[id].isDone = !doneTodos[id].isDone;
        let unDone = doneTodos.filter(tds => tds.isDone === false);
        let done = doneTodos.filter(tds => tds.isDone === true);
        setDoneTodos([...done]);
        setTodos([...todos, ...unDone]);
      }
    }
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" onChange={e => setNewTodo(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </form>
      <List todoList={todos} changeItem={markTodo} delete={deleteTodo} />
      <List
        todoList={doneTodos}
        changeItem={markTodo}
        delete={deleteDoneTodo}
      />
    </div>
  );
};

export default Todo;
