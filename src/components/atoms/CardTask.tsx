"use client";

import { useRouter } from "next/navigation";
import { ITaskDTO } from "@/service/tasks.interface";
import { StatusEnumFormatted } from "@/ultis/enums/status.enum";
import { StatusEnum } from "@prisma/client";

const getStatusColor = (status: StatusEnum) => {
  const colorMap = {
    NotStarted: "border-l-green hover:border-green",
    InProgress: "border-l-yellow hover:border-yellow",
    Closed: "border-l-red hover:border-red",
  };
  return colorMap[status] || "";
};

const getBadgeColor = (status: StatusEnum) => {
  const badgeMap = {
    NotStarted: "bg-green",
    InProgress: "bg-yellow",
    Closed: "bg-red",
  };
  return badgeMap[status] || "";
};

type CardTaskProps = {
  data: ITaskDTO;
};

const CardTask = ({ data: { description, status, id } }: CardTaskProps) => {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/form/${id}`)}
      className={`flex h-20 w-full cursor-pointer items-center justify-between rounded-lg 
      border border-l-8 border-grayLight bg-zinc-50 p-4 transition duration-300 ${getStatusColor(
        status,
      )}`}
    >
      {description}
      <span
        className={`w-36 rounded py-1  text-center text-sm text-white ${getBadgeColor(status)}`}
      >
        {StatusEnumFormatted[status]}
      </span>
    </li>
  );
};

export default CardTask;
