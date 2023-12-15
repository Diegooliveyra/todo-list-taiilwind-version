"use client";
import { StatusEnum } from "@prisma/client";
import Button from "../atoms/Button";
import useFormControl from "@/hooks/useForm";
import Loading from "../atoms/Loading";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

type FormTaskProps = {
  id?: string;
};
const FormTask = ({ id }: FormTaskProps) => {
  const { handleSubmit, submit, sending, register, errors, loading, removeTask } =
    useFormControl(id);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form className="mt-10 flex flex-col gap-2" onSubmit={handleSubmit(submit)}>
          <label htmlFor="description" className="text-base font-semibold">
            Description
          </label>
          <textarea
            {...register("description")}
            name="description"
            id="description"
            placeholder="Description"
            className=" w-full resize-none rounded-lg border border-grayLight p-2 outline-none focus:border-green focus:ring-green"
            rows={4}
          />

          {errors?.description?.message && (
            <caption className="text-left text-xs text-red">
              {errors?.description?.message.toString()}
            </caption>
          )}

          <label htmlFor="status" className="mt-4 text-base font-semibold">
            Status
          </label>
          <select
            {...register("status")}
            name="status"
            id="status"
            className="w-full appearance-none rounded-lg border border-grayLight p-4 outline-none focus:border-green focus:ring-green"
          >
            <option value={""} selected disabled hidden>
              What is the current status of the task?
            </option>
            <option value={StatusEnum.NotStarted}>Not started</option>
            <option value={StatusEnum.InProgress}>In progress</option>
            <option value={StatusEnum.Closed}>Closed</option>
          </select>
          {errors?.status?.message && (
            <caption className="text-left text-xs text-red">
              {errors?.status?.message.toString()}
            </caption>
          )}

          <div className="mt-8 flex justify-end gap-4">
            {id ? (
              <Button type="button" onClick={removeTask} theme="danger">
                <TrashIcon className="h-5 w-5 text-white" />
                {sending.delete ? "Deleting..." : "Delete"}
              </Button>
            ) : null}
            <Button>
              <CheckCircleIcon className="h-5 w-5 text-white" />
              {id
                ? sending.create
                  ? "Updating..."
                  : "Update"
                : sending.create
                  ? "Creating..."
                  : "Create"}
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default FormTask;
