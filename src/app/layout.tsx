import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anung Ramadhan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-[1000px] mx-auto mt-[50px]">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
