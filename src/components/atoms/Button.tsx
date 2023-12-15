type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  theme?: "primary" | "danger";
};

const Button = ({ children, theme = "primary", ...rest }: ButtonProps) => {
  const themeColors = {
    primary: "bg-green",
    danger: "bg-red",
  };

  return (
    <button
      className={`flex w-fit items-center gap-2 rounded-lg bg-green px-4 py-3 text-white transition duration-300 ease-in-out hover:brightness-110 ${themeColors[theme]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
