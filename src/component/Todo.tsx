import React, { FC } from "react";
import { AddTodoProps } from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
export interface TodoProps extends AddTodoProps {
  id: number;
  title: string;
  desc: string;
}
const Todo: FC<TodoProps> = ({ id, title, desc, mutate }) => {
  return (
    <li>
      {/* {todo.id} - {todo.title} - {todo.desc} */}
      {id} - {title} - {desc}
      <DeleteTodo id={id} mutate={mutate} />
      <UpdateTodo id={id} title={title} desc={desc} mutate={mutate} />
    </li>
  );
};

export default Todo;
