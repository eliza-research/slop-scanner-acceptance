import assert from "node:assert/strict";
import test from "node:test";
import { sum } from "./sum.mjs";

test("adds positive and negative integers", () => {
  assert.equal(sum(3, 4), 7);
  assert.equal(sum(-3, 4), 1);
});
