import { writeFile } from "node:fs/promises";

export async function writer(filename, contents) {
  await writeFile(filename, contents);
}
