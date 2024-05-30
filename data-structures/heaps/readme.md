# Heaps

similar to binary search trees, but with some different rules.
in a `maxBinaryHeaps`, parent nodes are always larger than child nodes. in a `minBinaryHeaps`, parent nodes are always smaller than child.
binary heaps are used to implement priority queues.
also used a bit, with graph traversal.

## Bubble Up & Sink Down

this are the inserting and removing methods in heaps.

- _For finding parent_ = `Math.floor((idx - 1) / 2)`
- _For finding child_ = `left = 2 * idx + 1` `right = 2 * idx + 2`
