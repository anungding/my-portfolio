import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

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
        <div>
          <Navbar />
          <div className="flex mx-auto max-w-5xl px-4 mt-[50px]">
            <Sidebar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
