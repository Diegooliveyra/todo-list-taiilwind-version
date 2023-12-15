"use client";

import CardTask from "../atoms/CardTask";
import Pagination from "../atoms/Pagination";

import UseList from "@/hooks/useList";
import { StatusEnum } from "@prisma/client";
import Loading from "../atoms/Loading";
import Image from "next/image";
import React from "react";

type Props = {
  status?: StatusEnum;
};

const ListTasks = ({ status }: Props) => {
  const { pagination, tasks, loading } = UseList(status);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          {tasks?.length ? (
            <React.Fragment>
              <ul className="flex flex-col gap-2">
                {tasks?.map((task) => <CardTask key={task.id} data={task} />)}
              </ul>
              <Pagination
                actualPage={pagination?.paginaAtual!}
                setNumberPage={pagination?.setNumberPage!}
                totalPage={pagination?.totalPaginas!}
              />
            </React.Fragment>
          ) : (
            <div className="flex h-96 flex-col items-center justify-center">
              <Image src={"/assets/imgs/not-found.svg"} alt="not found" width={300} height={150} />
              <p className="mt-4 text-base">No tasks found</p>
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ListTasks;
