# Filter Strings from Mixed Array

## Problem
You are given an array containing **mixed types**: `string`, `number`, and `boolean`.

**Goal:** Write a TypeScript function that returns a **new array containing only the string elements**.

## Example

```ts
filterStrings(["hello", 123, true, "world"])
// Output: ["hello", "world"]

filterStrings([false, "TS", 42, "JS"])
// Output: ["TS", "JS"]