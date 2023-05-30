import { writer } from "bar/writer";
import { writer as writerDist } from "bar/writer-dist";

export async function useWriter(filename, contents) {
  await writer(filename, contents);
}

export async function useWriterDist(filename, contents) {
  await writerDist(filename, contents);
}
