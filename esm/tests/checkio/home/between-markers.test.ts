import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { betweenMarkers } from "../../../src/checkio/home.ts";

Deno.test("Between markers", async (t) => {
  await t.step("find between markers", () => {
    assertEquals(betweenMarkers("What is >apple<", ">", "<"), "apple");
    assertEquals(
      betweenMarkers(
        "<head><title>My new site</title></head>",
        "<title>",
        "</title>",
      ),
      "My new site",
    );
  });

  await t.step("return same text when no markers", () => {
    assertEquals(betweenMarkers("What is >apple<", "", ""), "What is >apple<");
  });

  await t.step("return empty when end markers", () => {
    assertEquals(betweenMarkers("What is >apple<", "<", ">"), "");
  });

  await t.step("return from start to end markers when no start markers", () => {
    assertEquals(betweenMarkers("What is >apple<", "", "<"), "What is >apple");
  });

  await t.step(
    "return from start markers to the end when no end markers",
    () => {
      assertEquals(betweenMarkers("What is >apple<", ">", ""), "apple<");
    },
  );
});
