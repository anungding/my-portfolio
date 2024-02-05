import Link from "next/link";
export default function Home() {
  return (
    <div className="mx-4">
      <h1 className="text-4xl font-bold mb-3">Anung Ramadhan</h1>
      <p>
        Hallo, saya seorang
        <span className="font-bold"> Software Development</span>
      </p>
      <div>
        <Link href={""}><h3 className="font-bold">Linked In</h3></Link>
      </div>
    </div>
  );
}
