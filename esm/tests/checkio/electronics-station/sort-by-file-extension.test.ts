import { sortByExt } from "../../../src/checkio/electronics-station.ts";
import { assertEquals } from "https://deno.land/std/assert/mod.ts";

Deno.test("Extension sort", async (t) => {
  await t.step("can sort string by file extension", () => {
    assertEquals(sortByExt(["1.cad", "1.bat", "1.aa"]), [
      "1.aa",
      "1.bat",
      "1.cad",
    ]);
    assertEquals(sortByExt(["1.cad", "1.bat", "1.aa", ".bat"]), [
      ".bat",
      "1.aa",
      "1.bat",
      "1.cad",
    ]);
    assertEquals(sortByExt(["1.cad", "1.bat", "1.aa", ".aa.doc"]), [
      "1.aa",
      "1.bat",
      "1.cad",
      ".aa.doc",
    ]);
    assertEquals(sortByExt([".a", ".a", ".a"]), [".a", ".a", ".a"]);
  });

  await t.step("if extension is the same sort by name", () => {
    assertEquals(sortByExt(["b.a", "c.a", "a.a"]), ["a.a", "b.a", "c.a"]);
  });

  await t.step("sort file with no name first", () => {
    assertEquals(sortByExt([".a", "c.a", "a.a"]), [".a", "a.a", "c.a"]);
    assertEquals(sortByExt(["c.a", ".a", "a.a"]), [".a", "a.a", "c.a"]);
  });
});
