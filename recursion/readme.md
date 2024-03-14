# Recursive Magic

 Recursion is a process, where a function gracefully calls itself.

## It's Everywhere

Recursion in various realms:

- **Object Traversal**
- **JSON.parse/JSON.stringify**
- **A Cleaner Alternative to Iteration**
- **document.getElementById and DOM Traversal Algorithms**

## How It Works

 Recursion by invoking the same function with a different input until you arrive at the base case. a condition where the recursive concludes.

### Two Essential Components of Recursive Spells

- **Base Case**: The moment when the recursion comes to an end.

- **Different Input**: variation in input that keeps the recursive alive.

### Helper Method Recursion

```javascript
function outer(input) {
  var outerScopeVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }

  helper(input);

  return outerScopeVariable;
}
```

### Pure Recursion Tips

- For arrays, use methods such as **slice**, **the spread operator**, and **concat** that make copies of arrays so we don't mutate them.

- Remember that strings are immutable so you willneed to use methods like **slice**, **substr** to make copies of strings.

- To make copies of objectsus **Object.assign**, or the **spread operator**
