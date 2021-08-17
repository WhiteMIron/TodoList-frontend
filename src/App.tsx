import React, { FC } from "react";
import DeleteTodo from "./component/DeleteTodo";
// import AddTodo from "./component/AddTodo";
import TodoList from "./component/Todolist";
const App: FC = () => {
  return (
    <>
      <TodoList></TodoList>
      {/* <AddTodo></AddTodo> */}
    </>
  );
};

export default App;
