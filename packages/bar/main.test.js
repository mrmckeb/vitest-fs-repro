import { writeFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import { writer } from "./main";

vi.mock("node:fs/promises", () => ({
  writeFile: vi.fn(),
}));

describe("writer", () => {
  it("should write to the filesystem", async () => {
    await writer("/not/a/real/path.txt", "bar");
    expect(vi.mocked(writeFile)).toHaveBeenCalledTimes(1);
  });
});
