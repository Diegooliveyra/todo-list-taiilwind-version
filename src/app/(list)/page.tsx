import HeaderAction from "@/components/molecules/HeaderAction";
import Layout from "@/components/atoms/Layout";
import { PlusIcon } from "@heroicons/react/24/outline";
import NavTabs from "@/components/atoms/NavTab";
import ListTasks from "@/components/molecules/ListTasks";
import { Suspense } from "react";
import { IPageTaskDTO } from "@/service/tasks.interface";
import { StatusEnum } from "@prisma/client";
import { getTask } from "@/service/tasks.service";

const getTasks = async (status?: StatusEnum): Promise<IPageTaskDTO> => {
  return await getTask({ status, page: 1, size: 5 });
};

export default async function PageList() {
  const tabs = [
    {
      label: "All tasks",
      component: (
        <Suspense fallback={<div>Loading...</div>}>
          <ListTasks data={await getTasks()} />{" "}
        </Suspense>
      ),
    },
    {
      label: "Not started",
      component: (
        <Suspense fallback={<div>Loading...</div>}>
          <ListTasks data={await getTasks(StatusEnum.NotStarted)} />
        </Suspense>
      ),
    },
    {
      label: "In progress",
      component: <ListTasks data={await getTasks(StatusEnum.InProgress)} />,
    },
    {
      label: "Closed",
      component: <ListTasks data={await getTasks(StatusEnum.Closed)} />,
    },
  ];
  return (
    <Layout>
      <HeaderAction
        title="My Tasks"
        actionName="Create new"
        actionIcon={<PlusIcon className="h-6 w-6 text-white" />}
        actionRoutePath={"/form"}
      />
      <NavTabs tabs={tabs} />
    </Layout>
  );
}
