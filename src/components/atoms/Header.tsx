import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 w-full border-b border-grayLight bg-white p-4">
      {/*Start of header content */}
      <div className=" mx-auto w-8xl">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/assets/imgs/logotipo.png"}
            alt="logotipo"
            width={50}
            height={50}
          />
          <h1 className="mt-2 text-xl font-semibold">Todo.List</h1>
        </Link>
      </div>
      {/* End of header content */}
    </header>
  );
};

export default Header;
