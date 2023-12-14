import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/atoms/Header";
import { TodoContextProvider } from "@/provider/todo.provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Todo.List ",
  description: "Create with Tailwind CSS and Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TodoContextProvider>
          <Header />
          {children}
        </TodoContextProvider>
      </body>
    </html>
  );
}
