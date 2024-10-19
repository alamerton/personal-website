// src/app/page.tsx
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-indigo-600">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I&apos;m a passionate developer creating beautiful and functional web
          experiences.
        </p>
      </section>
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            My Skills
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Featured Project
          </h2>
          <p className="text-gray-700">
            Highlight key features and technologies used.
          </p>
        </div>
      </section>
    </main>
  );
}
