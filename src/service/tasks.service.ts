import objectToParams from "@/ultis/ObjectToParams";
import {
  GetTaskProps,
  IPageTaskDTO,
  ITaskDTO,
  ITaskForm,
} from "./tasks.interface";

const baseUrl = process.env.NEXT_PUBLIC_API || "";

export async function getTask(props: GetTaskProps): Promise<IPageTaskDTO> {
  const params = objectToParams(props);
  try {
    const response = await fetch(`${baseUrl}/tasks?${params}`, {
      cache: "no-store",
    });

    return await response.json();
  } catch (error: any) {
    throw new Error("error", error);
  }
}

export async function getTaskById(id: string): Promise<ITaskDTO> {
  const response = await fetch(`${baseUrl}/tasks/${id}`);
  return response.json();
}

export async function createTask(task: ITaskForm): Promise<ITaskDTO> {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

export async function updateTask(
  id: string,
  updatedTask: ITaskForm,
): Promise<ITaskDTO> {
  const response = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
  return response.json();
}

export async function deleteTask(id: string): Promise<Response> {
  const response = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });

  return response.json();
}
