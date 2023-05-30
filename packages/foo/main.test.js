import { writeFile } from "node:fs/promises";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useWriter, useWriterDist } from "./main";

vi.mock("node:fs/promises", () => ({
  writeFile: vi.fn(),
}));

beforeEach(() => {
  vi.resetAllMocks();
});

describe("useWriter", () => {
  it("should write to the filesystem via `bar`", async () => {
    await useWriter("/not/a/real/path.txt", "foo");
    expect(vi.mocked(writeFile)).toHaveBeenCalledTimes(1);
  });
});

describe("useWriterDist", () => {
  it("should write to the filesystem via `bar`", async () => {
    await useWriterDist("/not/a/real/path.txt", "foo");
    expect(vi.mocked(writeFile)).toHaveBeenCalledTimes(1);
  });
});
