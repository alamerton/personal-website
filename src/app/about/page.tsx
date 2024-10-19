// src/app/about/page.tsx
import Image from "next/image";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src="/your-photo.jpg"
            alt="Your Name"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            My Journey
          </h2>
          <p className="text-gray-700 mb-4">
            Here you can write about your background, experience, and what
            drives you as a developer. Share your passion for coding and any
            significant milestones in your career.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            My Approach
          </h2>
          <p className="text-gray-700">
            Describe your development philosophy, work ethic, or any unique
            perspectives you bring to your projects. This is a great place to
            let your personality shine through.
          </p>
        </div>
      </div>
    </main>
  );
}
