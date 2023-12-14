import Layout from "@/components/atoms/Layout";
import FormTask from "@/components/molecules/FormTask";
import HeaderAction from "@/components/molecules/HeaderAction";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const FormPage = () => {
  return (
    <Layout>
      <HeaderAction
        title={"Create new task"}
        actionName={"Back"}
        actionIcon={<ArrowLeftIcon className="h-6 w-6 text-white" />}
        actionRoutePath={`/`}
      />
      <FormTask />
    </Layout>
  );
};
export default FormPage;
