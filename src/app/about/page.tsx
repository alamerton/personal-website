import Image from "next/image";
import alfie from "@/images/alfie.jpeg";
export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src={alfie}
            alt="Alfie Lamerton"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            I&apos;m an individual living in London, UK. I grew up in Cornwall,
            UK, and have spent some time living in Bristol, UK.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Professionally
          </h2>
          <p className="text-gray-700 mb-4">
            I&apos;m generally excited about the future of technology and
            innovation and how it can transform the world. Specifically,
            I&apos;m enthusiastic about computer science and entrepreneurship.
            To that end, I&apos; currently focusing my energy on building skills
            in organisation building and technical AI safety research.
          </p>
          <p className="text-gray-700 mb-4">
            Generally, I&apos;m on a mission to serve humanity by creating
            beautiful and useful things. Specifically, I plan to be a computer
            scientist working on impactful problems, starting with global
            catastrophic risks such AI alignment.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Not Professionally
          </h2>
          <p className="text-gray-700">
            In the past I have been an avid fly fisherman, downhill
            skateboarder, and surfer. I&apos;m currently enthusiastic about
            ultra-distance running, rationality, and statistics.
          </p>
        </div>
      </div>
    </main>
  );
}
