class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size).fill(null); // Initialize with null elements
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < key.length; i++) {
      // Use entire key length
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    // Handle collisions with chaining
    if (!this.keyMap[index]) {
      this.keyMap[index] = []; // Create an empty array for key-value pairs
    }
    this.keyMap[index].push({ key, value }); // Store key-value pair in the array
    return true; // Indicate successful insertion
  }

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined; // Key not found

    // Search for the key-value pair within the chained array
    for (const item of this.keyMap[index]) {
      if (item.key === key) {
        return item.value;
      }
    }

    return undefined; // Key not found in the chained array
  }

  delete(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return false; // Key not found

    const chain = this.keyMap[index];
    for (let i = 0; i < chain.length; i++) {
      if (chain[i].key === key) {
        chain.splice(i, 1); // Remove the key-value pair from the chain
        return true;
      }
    }

    return false; // Key not found in the chained array
  }

  size() {
    let count = 0;
    for (const chain of this.keyMap) {
      if (chain) {
        count += chain.length;
      }
    }
    return count;
  }

  clear() {
    this.keyMap.fill(null);
  }
}

let ht = new HashTable();
console.log(ht.set("Hello World", "goodbye!!")); // Output: true (successful insertion)
console.log(ht.get("Hello World")); // Output: "goodbye!!"
