import styled from "styled-components";
import { Fragment } from "react";

const TodoItem = props => {
  return (
    <li id={props.id}>
      <label id={props.id}>
        <input
          type="checkbox"
          checked={props.isDone}
          onChange={props.changeItem}
        />
        <span>{props.item}</span>
      </label>
      <button onClick={props.delete}>x</button>
    </li>
  );
};

export default TodoItem;
