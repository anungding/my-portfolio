"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({
  href,
  text,
  isActive = false,
}: {
  href: string;
  text: string;
  isActive?: boolean;
}) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        className={clsx(
          "px-4 py-2 text-zinc-900 hover:bg-zinc-300 rounded font-bold",
          pathName == href && "bg-zinc-200"
        )}
        href={href}
      >
        {text}
      </Link>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-col w-[220px] gap-6">
        <Image
          className="mx-2"
          alt="Logo"
          src={"/favicon.ico"}
          width={60}
          height={60}
        />
        <LinkItem href="/" text="Home" />
        <LinkItem href="/about" text="About" />
        <LinkItem href="/work" text="Work" />
        <LinkItem href="/gallery" text="Gallery" />
      </div>
    </div>
  );
}
