import fs from "fs";
import path from "path";

const PHOTO_DIRECTORY = "skating";
const PHOTO_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i;

// Every image dropped into public/skating appears here, ordered by file name.
export function getSkatingPhotoPaths() {
  const directory = path.join(process.cwd(), "public", PHOTO_DIRECTORY);
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((fileName) => PHOTO_EXTENSIONS.test(fileName))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((fileName) => `/${PHOTO_DIRECTORY}/${fileName}`);
}
