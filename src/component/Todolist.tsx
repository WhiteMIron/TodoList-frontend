import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export interface ITodo {
  id: number;
  created: Date;
  updated: Date;
  title: string;
  desc: string;
  isCompleted: boolean;
}

const TodoList: FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, error, mutate } = useSWR<ITodo[]>(
    `${process.env.REACT_APP_BACK_URL}/todo`,
    fetcher
  );

  // useEffect(() => {
  //   console.log(data);
  //   console.log(error);

  // const getTodos = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3010/todo");
  //     if (response.statusText == "OK") {
  //       setTodos(response.data);
  //     }
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getTodos();
  // }, [data, error]);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <AddTodo mutate={mutate} />
      {data.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            mutate={mutate}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
