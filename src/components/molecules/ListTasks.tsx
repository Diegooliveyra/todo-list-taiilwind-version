"use client";
import { IPageTaskDTO } from "@/service/tasks.interface";

import CardTask from "../atoms/CardTask";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "@/provider/todo.provider";
import Pagination, { PaginationProps } from "../atoms/Pagination";
import { IPagination, PaginationHelper } from "@/ultis/pagination-helper";
import UseList from "@/hooks/useList";
import { StatusEnum } from "@prisma/client";
import Loading from "../atoms/Loading";
import Image from "next/image";

type Props = {
  status?: StatusEnum;
};

const ListTasks = ({ status }: Props) => {
  const { pagination, tasks, loading } = UseList(status);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {tasks?.length ? (
            <>
              <div className="flex flex-col gap-2">
                {tasks?.map((task) => <CardTask key={task.id} data={task} />)}
              </div>
              <Pagination
                actualPage={pagination?.paginaAtual!}
                setNumberPage={pagination?.setNumberPage!}
                totalPage={pagination?.totalPaginas!}
              />
            </>
          ) : (
            <div className="flex h-96 flex-col items-center justify-center">
              <Image src={"/assets/imgs/not-found.svg"} alt="not found" width={300} height={150} />
              <p className="mt-4 text-base">No tasks found</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ListTasks;
