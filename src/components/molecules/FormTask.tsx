"use client";
import { TodoContext } from "@/provider/todo.provider";
import { StatusEnum } from "@prisma/client";
import { useContext } from "react";

type FormTaskProps = {
  id?: string;
};
const FormTask = ({ id }: FormTaskProps) => {
  const { todos } = useContext(TodoContext);

  return (
    <form className="mt-10 flex flex-col gap-2">
      <label htmlFor="description" className="text-base font-semibold">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        className=" w-full resize-none rounded-lg border border-grayLight p-2 outline-none focus:border-green focus:ring-green"
        rows={4}
      />
      <label htmlFor="status" className="mt-4 text-base font-semibold">
        Status
      </label>
      <select
        name="status"
        id="status"
        className="w-full appearance-none rounded-lg border border-grayLight p-4 outline-none focus:border-green focus:ring-green"
      >
        <option value={StatusEnum.NotStarted}>Not started</option>
        <option value={StatusEnum.InProgress}>In progress</option>
        <option value={StatusEnum.Closed}>Closed</option>
      </select>
    </form>
  );
};

export default FormTask;
