type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="w-fell max-w-8xl mx-auto mt-36 px-4">{children}</main>
  );
};

export default Layout;
