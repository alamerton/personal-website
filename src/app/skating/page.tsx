import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSkatingPhotoPaths } from "./photos";

export const metadata: Metadata = {
  title: "Downhill Skateboarding",
  description: "Pictures of Alfie Lamerton downhill skateboarding.",
};

export default function Skating() {
  const photoPaths = getSkatingPhotoPaths();
  // The page stays hidden until there are photos to show.
  if (photoPaths.length === 0) notFound();

  return (
    <main className="page page--gallery">
      {/* Kept for screen readers and search engines, not shown on the page. */}
      <h1 className="sr-only">Downhill Skateboarding</h1>
      <ul className="gallery">
        {photoPaths.map((photoPath, index) => (
          <li key={photoPath}>
            <a href={photoPath} className="gallery-photo">
              <Image
                src={photoPath}
                alt={`Alfie downhill skateboarding, photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover"
              />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
