import Link from "next/link";
export default function Home() {
  return (
    <div className="mx-4">
      <h1 className="text-4xl font-bold mb-3">Anung Ramadhan</h1>
      <p>
        Hallo, saya seorang
        <span className="font-bold"> Software Development</span>.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        cupiditate accusantium praesentium eveniet illum neque aliquam aut
        perferendis perspiciatis, minus illo laudantium quos libero dolorum
        voluptates tempora veritatis. Inventore, facilis repellendus. Iusto
        doloribus non magni voluptatem sit, debitis, fuga quis provident nulla
        pariatur ipsam incidunt distinctio voluptatibus eos nobis sapiente
        tempora. Ullam doloribus nemo aut sint explicabo veritatis quibusdam
        voluptas.
      </p>
      <div>
        <Link href={""}>
          <h3 className="font-bold">Linked In</h3>
        </Link>
      </div>
    </div>
  );
}
