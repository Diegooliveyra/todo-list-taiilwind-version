"use client";
import { IPageTaskDTO } from "@/service/tasks.interface";

import CardTask from "../atoms/CardTask";
import { useContext, useEffect } from "react";
import { TodoContext } from "@/provider/todo.provider";

type Props = {
  data: IPageTaskDTO;
};

const ListTasks = ({ data }: Props) => {
  const { setTodos } = useContext(TodoContext);

  useEffect(() => {
    setTodos(data?.content);
  }, [data, setTodos]);

  return (
    <div className="flex flex-col gap-3">
      {data?.content.map((task) => <CardTask key={task.id} data={task} />)}
    </div>
  );
};

export default ListTasks;
