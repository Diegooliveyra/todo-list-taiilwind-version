"use client";
import { useRouter } from "next/navigation";
import Button from "../atoms/Button";

type HeaderActionProps = {
  title: string;
  actionName: string;
  actionRoutePath: string;
  actionIcon?: React.ReactNode;
};

const HeaderAction = ({ actionName, actionIcon, title, actionRoutePath }: HeaderActionProps) => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between ">
      {/* Start Title element */}
      <h1 className="before:content[''] relative pl-6 text-3xl font-semibold before:absolute before:-top-0.5 before:left-0 before:block before:h-10 before:w-3 before:rounded-lg before:bg-green">
        {title}
      </h1>
      {/* End TItle element */}

      {/* Start Button component */}
      <Button onClick={() => router.push(actionRoutePath)}>
        {actionIcon}
        {actionName}
      </Button>
      {/* End Button component */}
    </header>
  );
};
export default HeaderAction;
