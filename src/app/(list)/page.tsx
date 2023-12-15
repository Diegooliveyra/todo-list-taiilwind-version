import HeaderAction from "@/components/molecules/HeaderAction";
import Layout from "@/components/atoms/Layout";
import { PlusIcon } from "@heroicons/react/24/outline";
import NavTabs from "@/components/atoms/NavTab";
import ListTasks from "@/components/molecules/ListTasks";
import { StatusEnum } from "@prisma/client";

export default async function PageList() {
  const tabs = [
    {
      label: "All tasks",
      component: <ListTasks />,
    },
    {
      label: "Not started",
      component: <ListTasks status={StatusEnum.NotStarted} />,
    },
    {
      label: "In progress",
      component: <ListTasks status={StatusEnum.InProgress} />,
    },
    {
      label: "Closed",
      component: <ListTasks status={StatusEnum.Closed} />,
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
