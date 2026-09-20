import Image from "next/image";
import Link from "next/link";
import { getSkatingPhotoPaths } from "./skating/photos";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaComments,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

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
    citation: "Lamerton, A. (2024). In-context learning: an alignment survey.",
    href: "https://www.lesswrong.com/posts/KCbRx4DhR7puBvGkX/in-context-learning-an-alignment-survey",
  },
  {
    citation:
      "Lamerton, A. (2024). A review of in-context learning hypotheses for automated AI alignment research.",
    href: "https://www.lesswrong.com/posts/GPcwP8pgyPFPwvi2h/a-review-of-in-context-learning-hypotheses-for-automated-ai",
  },
];

const indigoLink = "link-item";
const greenLink = "link-item link-item--alt";

const links = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=zJlvbNcAAAAJ&hl=en&oi=ao",
    Icon: FaGraduationCap,
    colour: indigoLink,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alfie-lamerton/",
    Icon: FaLinkedinIn,
    colour: greenLink,
  },
  {
    label: "Email Me",
    href: "mailto:alfie.david.lamerton@gmail.com",
    Icon: FaEnvelope,
    colour: greenLink,
  },
  {
    label: "GitHub",
    href: "https://github.com/alamerton",
    Icon: FaGithub,
    colour: indigoLink,
  },
  {
    label: "LessWrong",
    href: "https://www.lesswrong.com/users/alamerton",
    Icon: FaComments,
    colour: indigoLink,
  },
  {
    label: "Substack",
    href: "https://substack.com/@alfielamerton",
    Icon: SiSubstack,
    colour: greenLink,
  },
  // Currently hidden (import FaStrava, FaBook, FaMusic from react-icons/fa to restore):
  // { label: "Strava", href: "https://www.strava.com/athletes/43741695", Icon: FaStrava, colour: greenLink },
  // { label: "Goodreads", href: "https://www.goodreads.com/user/show/180101310-alfie-lamerton", Icon: FaBook, colour: greenLink },
  // { label: "Rate Your Music", href: "https://rateyourmusic.com/~alamerton", Icon: FaMusic, colour: indigoLink },
];

export default function Home() {
  // Only link to the skating page once it has photos to show.
  const hasSkatingPhotos = getSkatingPhotoPaths().length > 0;

  return (
    <main className="page page--home">
      <section className="hero">
        <div className="hero-photo">
          <Image
            src="/alfie.jpeg"
            alt="Alfie Lamerton"
            fill
            style={{ objectFit: "cover" }}
            sizes="160px"
            priority
          />
        </div>
        <div>
          <h1 className="page-title">Hi! I&apos;m Alfie</h1>
          <p className="body-text">
            I&apos;m an individual living in the UK, currently building{" "}
            <a href="https://www.formationresearch.com/">Formation Research</a>.
            I aim to be an impactful computer scientist in the future.
          </p>
          <p className="body-text">
            As a researcher, I am interested in AI-enabled totalitarianism,
            authoritarianism, coups, and power concentration, and
            governance-informed solutions for these problems leveraging
            technical methods of verification and cooperation.
          </p>
        </div>
      </section>
      <section className="page-section">
        <h2 className="section-title">Links</h2>
        <div className="link-list">
          {links.map(({ label, href, Icon, colour }) => {
            const isWebLink = href.startsWith("http");
            return (
              <a
                key={href}
                href={href}
                target={isWebLink ? "_blank" : undefined}
                rel={isWebLink ? "noopener noreferrer" : undefined}
                className={colour}
              >
                <Icon className="link-icon" aria-hidden="true" />
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      </section>
      <section id="research" className="page-section">
        <h2 className="section-title">Research</h2>
        <ul className="research-list">
          {research.map(({ citation, href }) => {
            const parts = citation.split("Lamerton, A.");
            const label = href.includes("arxiv.org")
              ? "arXiv"
              : href.includes("lesswrong.com")
                ? "LessWrong"
                : "Preprint";
            return (
              <li key={href} className="research-item">
                {parts.map((part, i) => (
                  <span key={i}>
                    {i > 0 && <strong>Lamerton, A.</strong>}
                    {part}
                  </span>
                ))}{" "}
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section id="about" className="page-section">
        <h2 className="section-title">About</h2>
        <p className="body-text">
          I&apos;m an individual living in London, UK. I&apos;ve previously
          lived in Bristol and Cornwall, where I grew up.
        </p>
        <p className="body-text">
          I appreciate feedback, which{" "}
          <a href="https://www.admonymous.co/alfie-lamerton">
            you can give me anonymously here.
          </a>
        </p>
        <h3 className="subsection-title">Professionally</h3>
        <p className="body-text">
          I&apos;m generally excited about the future of technology and
          innovation and how it can transform the world. I try to be rationally
          optimistic about our technological trajectory, and take a fallibilist
          perspective as an epistemic foundation for this position. In short, I
          believe our knowledge will continue to grow with our technology, and
          this will help us solve problems that seem hard now. That is not to
          say that problems don&apos;t emerge, which is why I&apos;m focusing my
          career on problems I think are important now.
        </p>
        <p className="body-text">
          Specifically, I&apos;m enthusiastic about computer science and
          entrepreneurship. To that end, I&apos;m currently focusing my energy
          on building skills in entrepreneurship and technical AI safety and
          governance research.
        </p>
        <p className="body-text">
          I think AI is a key technology in the potential manifestation of a
          more extreme version of pre-existing social and political phenomena
          like totalitarianism, authoritarianism, coups, and power
          concentration. AI could make these possible situations much worse, so
          I am interested in governance-informed technical methods for designing
          and governing AI systems in a way that reduces these risks.
        </p>
        <p className="body-text">
          I aim to serve humanity by creating beautiful and useful things.
          Specifically, I plan to be a computer scientist working on impactful
          problems – starting with global catastrophic risks such as AI
          alignment – and an entrepreneur who makes impactful things based on my
          research – starting with founding Formation Research.
        </p>
        <h3 className="subsection-title">Not Professionally</h3>
        <p className="body-text">
          Beyond computer science, my interests include Vipassana meditation,
          long-distance running,{" "}
          {hasSkatingPhotos ? (
            <Link href="/skating">downhill skateboarding</Link>
          ) : (
            "downhill skateboarding"
          )}
          , and surfing.
        </p>
        <h3 className="subsection-title">My Personality</h3>
        <p className="body-text">
          These are my scores on the Big Five personality traits, where each
          number represents my percentile ranking compared to the general
          population according to the Big Five Aspects Scale.
        </p>
        <ul className="trait-list">
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
        <p className="body-text">
          Generated using{" "}
          <a href="https://www.understandmyself.com/">understandmyself.com</a>
        </p>
      </section>
    </main>
  );
}
