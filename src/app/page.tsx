import alfie from "@/images/alfie.jpeg";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaFileAlt, FaComments } from "react-icons/fa";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="flex justify-center mb-8">
        <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
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
        <h1 className="text-5xl font-bold mb-4 text-indigo-700 font-merriweather">
          Hi! I&apos;m Alfie
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          I&apos;m an individual living in London, UK, currently building{" "}
          <a className="text-indigo-600" href="http://formationresearch.com/">
            Formation Research
          </a>
          . I plan to be a computer scientist in the future.
        </p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
          Hyperlinks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a
            href="https://www.linkedin.com/in/alfie-lamerton/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-blue-600 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaLinkedin className="text-2xl mr-3" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.lesswrong.com/users/alamerton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-green-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaComments className="text-2xl mr-3" />
            <span>LessWrong</span>
          </a>
          <a
            href="mailto:alfie.david.lamerton@gmail.com"
            className="flex items-center justify-center text-gray-800 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaEnvelope className="text-2xl mr-3" />
            <span>Email Me</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1Eezn5Onh6oLiNWA-MWcm0h3VqKjDSgwmUch--iXZssA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-indigo-600 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaFileAlt className="text-2xl mr-3" />
            <span>My CV</span>
          </a>
        </div>
      </section>
    </main>
  );
}
