import alfie from "@/images/alfie.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="flex justify-center mb-8">
        <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src={alfie}
            alt="Alfie Lamerton"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-indigo-600">
          Hi! I'm Alfie
        </h1>
        <p className="text-xl text-gray-600 max-width-2xl mx-auto">
          I'm an individual living in London, UK, working on building career
          capital in technical AI safety and entrepreneurship. I plan to be a
          computer scientist in the future.
        </p>
      </section>
    </main>
  );
}
