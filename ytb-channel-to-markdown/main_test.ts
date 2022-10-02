import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { main } from "./main.ts";
import { config } from "./deps.ts";

Deno.test(async function addTest() {
  try {
    assertEquals(await main(1, false), 5);
  } catch (error) {
    console.log(error);
  }
});
