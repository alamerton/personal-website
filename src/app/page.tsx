import alfie from "@/images/alfie.jpeg";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaComments, FaGithub } from "react-icons/fa";

const research = [
  {
    citation:
      "Lamerton, A., & Roger, F. (2026). Narrow secret loyalty dodges black-box audits. Preprint.",
    href: "https://arxiv.org/abs/2605.06846",
  },
  {
    citation:
      "Kwon, J., Lamerton, A., Draganov, A., Banerjee, D., Schoen, B., Pistillo, M., Kokotajlo, D., Evans, O., Roger, F., & Davidson, T. (2026). AIs with secret loyalties are a serious but addressable threat.",
    href: "https://www.formationresearch.com/secret-loyalties-whitepaper.pdf",
  },
  {
    citation:
      "Lamerton, A. (2026). A survey of AI-driven power concentration. Formation Research.",
    href: "https://www.formationresearch.com/power-concentration-survey.pdf",
  },
  {
    citation: "Lamerton, A. (2025). Lock-in [Sequence].",
    href: "https://www.lesswrong.com/s/yP8Zs4Tuog6tDES5b",
  },
  {
    citation:
      "Lamerton, A. (2024). In-context learning: an alignment survey.",
    href: "https://www.lesswrong.com/posts/KCbRx4DhR7puBvGkX/in-context-learning-an-alignment-survey",
  },
  {
    citation:
      "Lamerton, A. (2024). A review of in-context learning hypotheses for automated AI alignment research.",
    href: "https://www.lesswrong.com/posts/GPcwP8pgyPFPwvi2h/a-review-of-in-context-learning-hypotheses-for-automated-ai",
  },
];

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
        <h1
          className="text-6xl mb-4 text-indigo-700 font-garamond"
          style={{ fontVariantLigatures: "no-common-ligatures" }}
        >
          Hi! I&apos;m Alfie
        </h1>
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto mb-4 text-justify">
          I&apos;m an individual living in the UK, currently building{" "}
          <a className="text-indigo-600" href="http://formationresearch.com/">
            Formation Research
          </a>
          . I aim to be an impactful computer scientist in the future.
        </p>
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto text-justify">
          As a researcher, I am interested in AI-enabled totalitarianism,
          authoritarianism, coups, and power concentration, and
          governance-informed solutions for these problems leveraging technical
          methods of verification and cooperation.
        </p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
          Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a
            href="https://www.linkedin.com/in/alfie-lamerton/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl text-indigo-600 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaLinkedin className="text-2xl mr-3" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.lesswrong.com/users/alamerton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl text-green-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaComments className="text-2xl mr-3" />
            <span>LessWrong</span>
          </a>
          <a
            href="mailto:alfie.david.lamerton@gmail.com"
            className="flex items-center justify-center text-xl text-green-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaEnvelope className="text-2xl mr-3" />
            <span>Email Me</span>
          </a>
          {/* <a
            href="https://docs.google.com/document/d/19b-xjfgDEBVkTdM0qJMhHguW-ajqaYouYSt2mzo-vac/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl text-indigo-600 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaFileAlt className="text-2xl mr-3" />
            <span>CV</span>
          </a> */}
          <a
            href="https://github.com/alamerton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl text-indigo-600 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaGithub className="text-2xl mr-3" />
            <span>GitHub</span>
          </a>
          {/* <a
            href="https://www.strava.com/athletes/43741695"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl text-green-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaStrava className="text-2xl mr-3" />
            <span>Strava</span>
          </a> */}
          {/* <a
            href="https://www.goodreads.com/user/show/180101310-alfie-lamerton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl text-green-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaBook className="text-2xl mr-3" />
            <span>Goodreads</span>
          </a> */}
          {/* <a
            href="https://rateyourmusic.com/~alamerton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl text-indigo-600 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <FaMusic className="text-2xl mr-3" />
            <span>Rate Your Music</span>
          </a> */}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
          Research
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4">
          {research.map(({ citation, href }) => {
            const parts = citation.split("Lamerton, A.");
            const label = href.includes("arxiv.org")
              ? "arXiv"
              : href.includes("lesswrong.com")
                ? "LessWrong"
                : "Preprint";
            return (
              <li key={href} className="text-xl text-gray-700 text-justify">
                {parts.map((part, i) => (
                  <span key={i}>
                    {i > 0 && <strong>Lamerton, A.</strong>}
                    {part}
                  </span>
                ))}{" "}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
