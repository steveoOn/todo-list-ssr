import styled from "styled-components";
import TodoItem from "./todoItem";

const Lists = props => (
  <ul>
    {/* 为了 toggle 当前点击的 list 需要 index 参数*/}
    {props.todoList.map((td, index) => {
      return (
        <TodoItem
          key={index}
          id={index}
          item={td.todo}
          isDone={td.isDone}
          changeItem={props.changeItem}
          delete={props.delete}
        />
      );
    })}
  </ul>
);

export default Lists;
