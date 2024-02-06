"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LinkItem = ({
  href,
  text,
}: 
{
  href: string;
  text: string;
}) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        className={clsx(
          "px-4 py-2 text-zinc-900 hover:bg-zinc-300 rounded font-bold m-1",
          pathName == href && "bg-zinc-200"
        )}
        href={href}
      >
        {text}
      </Link>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="py-4 lg:hidden">
      <div className="container mx-auto flex justify-center">
        <LinkItem href="/" text="Home" />
        <LinkItem href="/about" text="About" />
        <LinkItem href="/work" text="Work" />
        <LinkItem href="/gallery" text="Gallery" />
      </div>
    </nav>
  );
}
