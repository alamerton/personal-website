export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-6xl mb-8 text-center text-indigo-700 font-garamond">
        About Me
      </h1>
      <div className="max-w-2xl mx-auto">
          <p className="text-2xl text-gray-700 mb-4 text-justify">
            I&apos;m an individual living in London, UK. I&apos;ve previously
            lived in Bristol and Cornwall, where I grew up.
          </p>
          <p className="text-2xl text-gray-700 mb-4 text-justify">
            I appreciate feedback, which{" "}
            <a
              className="text-indigo-600"
              href="https://www.admonymous.co/alfie-lamerton"
            >
              you can give me anonymously here.
            </a>
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Professionally
          </h2>
          <p className="text-2xl text-gray-700 mb-4 text-justify">
            I&apos;m generally excited about the future of technology and
            innovation and how it can transform the world. I try to be
            rationally optimisitic about our technological trajectory, and take
            a fallibilist perspective as an epistemic foundation for this
            position. In short, I believe our knowledge will continue to grow
            with our technology, and this will help us solve problems that seem
            hard now. That is not to say that problems don&apos;t emerge, which
            is why I&apos;m focusing my career on problems I think are important
            now.
          </p>
          <p className="text-2xl text-gray-700 mb-4 text-justify">
            Specifically, I&apos;m enthusiastic about computer science and
            entrepreneurship. To that end, I&apos;m currently focusing my energy
            on building skills in entrepreneurship and technical AI safety and
            governance research.
          </p>
          <p className="text-2xl text-gray-700 mb-4 text-justify">
            I aim to serve humanity by creating beautiful and useful things.
            Specifically, I plan to be a computer scientist working on impactful
            problems – starting with global catastrophic risks such as AI
            alignment – and an entrepreneur who makes impactful things based on
            my research – starting with founding Formation Research.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Not Professionally
          </h2>
          <p className="text-2xl text-gray-700 mb-8 text-justify">
            Beyond computer science, my interests include Vipassana meditation,
            long-distance running, surfing, psychology, philosophy, and
            mathematics.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            My Personality
          </h2>
          <p className="text-2xl text-gray-700 mb-4 text-justify">
            These are my scores on the Big Five personality traits, where each
            number represents my percentile ranking compared to the general
            population according to the Big Five Aspects Scale.
          </p>
          <ul className="list-disc pl-5 text-2xl text-gray-700 space-y-1">
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
          <p className="text-2xl text-gray-700 mb-8 mt-4 text-justify">
            Generated using{" "}
            <a
              className="text-indigo-600"
              href="https://www.understandmyself.com/"
            >
              understandmyself.com
            </a>
          </p>
      </div>
    </main>
  );
}
