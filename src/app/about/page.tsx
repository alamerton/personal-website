import Image from "next/image";
import alfie from "@/images/alfie.jpeg";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <Image
            src={alfie}
            alt="Alfie Lamerton"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md bg-opacity-25">
          <p className="text-gray-700 mb-4">
            I&apos;m an individual living in Falmouth, UK. I grew up here, and
            have spent some time living in Bristol and London.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Professionally
          </h2>
          <p className="text-gray-700 mb-4">
            I&apos;m generally excited about the future of technology and
            innovation and how it can transform the world. Specifically,
            I&apos;m enthusiastic about computer science and entrepreneurship.
            To that end, I&apos;m currently focusing my energy on building
            skills in entrepreneurship and technical AI safety research.
            I&apos;m also working part-time as a research assistant at
            King&apos;s College London to further build my research skills.
          </p>
          <p className="text-gray-700 mb-4">
            I aim to serve humanity by creating beautiful and useful things.
            Specifically, I plan to be a computer scientist working on impactful
            problems, starting with global catastrophic risks such AI alignment,
            and an entrepreneur who makes impactful things based on my research.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Not Professionally
          </h2>
          <p className="text-gray-700 mb-8">
            In the past I have been an avid fly fisherman, downhill
            skateboarder, and surfer. Beyond computer science, my interests
            include running, psychology, philosophy, and mathematics. I am
            currently studying mathematics and philosophy in my spare time.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            My Personality
          </h2>
          <p className="text-gray-700 mb-4">
            Here are my scores on the Big Five personality traits, where each
            number represents my percentile ranking compared to the general
            population according to the Big Five Aspects Scale.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <strong>Agreeableness:</strong> 32
            </li>
            <li>
              <strong>Extraversion:</strong> 57
            </li>
            <li>
              <strong>Conscientiousness:</strong> 93
            </li>
            <li>
              <strong>Openness to experience:</strong> 96
            </li>
            <li>
              <strong>Neuroticism:</strong> 3
            </li>
          </ul>
          <p className="text-gray-700 mb-8 mt-4">
            Generated using{" "}
            <a
              className="text-indigo-600"
              href="https://www.understandmyself.com/"
            >
              understandmyself.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
