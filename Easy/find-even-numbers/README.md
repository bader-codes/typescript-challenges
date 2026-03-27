# Find Even Numbers

## 🧠 Problem

Given an array of numbers, return a new array containing only the even numbers.

---

## 📥 Input

* An array of numbers: `number[]`

## 📤 Output

* A new array with only even numbers

---

## 🧪 Example

```ts
Input: [1, 2, 3, 4, 5, 6]

Output: [2, 4, 6]
```

---

## 🔒 Constraints

* Do not use higher-order functions (like `filter`)
* Use a `for` loop

---

## 💡 Idea

Loop through the array and check if each number is even using:
`num % 2 === 0`

If true, add it to a new array.

---